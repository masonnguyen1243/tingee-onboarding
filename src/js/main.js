(function () {
  "use strict";

  // Render Lucide icons
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // ── Mobile sidebar toggle ──────────────────────────────────────
  var toggleBtn = document.getElementById("menu-toggle");
  var closeBtn  = document.getElementById("sidebar-close");
  var sidebar   = document.getElementById("sidebar");
  var backdrop  = document.getElementById("sidebar-backdrop");

  function openSidebar() {
    sidebar.classList.add("sidebar-open");
    backdrop.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    toggleBtn.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    sidebar.classList.remove("sidebar-open");
    backdrop.classList.add("hidden");
    document.body.style.overflow = "";
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openSidebar);
  if (closeBtn)  closeBtn.addEventListener("click", closeSidebar);
  if (backdrop)  backdrop.addEventListener("click", closeSidebar);

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) closeSidebar();
  });

  // ── Sidebar rendering ──────────────────────────────────────────

  // Returns { sectionId, anchorId } for a given hash, or null if not found.
  // Handles both section IDs and sub-heading IDs (maps heading → parent section).
  function findAnchorInfo(hash) {
    if (!hash || !window.DOCS) return null;
    for (var i = 0; i < DOCS.partners.length; i++) {
      var sections = DOCS.partners[i].sections;
      for (var j = 0; j < sections.length; j++) {
        var sec = sections[j];
        if (sec.id === hash) return { sectionId: sec.id, anchorId: hash };
        if (sec.headings) {
          for (var k = 0; k < sec.headings.length; k++) {
            if (sec.headings[k].id === hash) return { sectionId: sec.id, anchorId: hash };
          }
        }
      }
    }
    return null;
  }

  // Update which sidebar link looks active; called by renderSidebar and scroll spy
  function setActiveSidebarItem(id) {
    var nav = document.getElementById("sidebar-nav");
    if (!nav) return;
    nav.querySelectorAll("a[data-section]").forEach(function (link) {
      if (link.dataset.section === id) {
        link.className =
          "flex items-center gap-2 px-3 py-1.5 rounded-md font-medium bg-red-50 text-primary transition-colors duration-150";
      } else {
        link.className =
          "flex items-center gap-2 px-3 py-1.5 rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-150";
      }
    });
  }

  function renderSidebar() {
    var nav = document.getElementById("sidebar-nav");
    if (!nav || !window.DOCS) return;

    var hash     = window.location.hash.slice(1);
    var info     = findAnchorInfo(hash);
    var activeId = (info && info.sectionId) || DOCS.partners[0].sections[0].id;

    nav.innerHTML = "";

    DOCS.partners.forEach(function (partner, idx) {
      // Separator between partner groups
      if (idx > 0) {
        var hr = document.createElement("hr");
        hr.className = "my-3 border-slate-100";
        nav.appendChild(hr);
      }

      var group = document.createElement("div");
      group.className = idx === 0 ? "my-4" : "mb-4";

      // Partner label header (Bảo Kim / OnePay / Payoo; Tingee has label: null)
      if (partner.label) {
        var header = document.createElement("div");
        header.className = "flex items-center gap-2 px-2 py-1 mb-0.5";

        var img = document.createElement("img");
        img.src = partner.logo.src;
        img.alt = "";
        img.setAttribute("aria-hidden", "true");
        img.className = "h-4 w-auto max-w-[4rem] object-contain";
        header.appendChild(img);

        var labelEl = document.createElement("span");
        labelEl.className =
          "text-[11px] font-bold uppercase tracking-widest text-slate-400";
        labelEl.textContent = partner.label;
        header.appendChild(labelEl);

        group.appendChild(header);
      }

      var ul = document.createElement("ul");
      ul.className = "space-y-0.5";

      partner.sections.forEach(function (section) {
        var li = document.createElement("li");
        var a  = document.createElement("a");
        a.href = "#" + section.id;
        a.dataset.section = section.id;
        a.textContent = section.navTitle;
        a.className =
          section.id === activeId
            ? "flex items-center gap-2 px-3 py-1.5 rounded-md font-medium bg-red-50 text-primary transition-colors duration-150"
            : "flex items-center gap-2 px-3 py-1.5 rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-150";

        a.addEventListener("click", function () {
          setActiveSidebarItem(section.id);
          setActiveTocItem(section.id);
          if (window.innerWidth < 1024) closeSidebar();
        });

        li.appendChild(a);
        ul.appendChild(li);
      });

      group.appendChild(ul);
      nav.appendChild(group);
    });
  }

  // Expose for scroll spy (Phase 4)
  window.setActiveSidebarItem = setActiveSidebarItem;

  // Keep active items in sync when navigating with browser back/forward
  window.addEventListener("hashchange", function () {
    var hash = window.location.hash.slice(1);
    var info = findAnchorInfo(hash);
    if (info) {
      setActiveSidebarItem(info.sectionId);
      setActiveTocItem(info.anchorId);
    }
  });

  // ── TOC rendering ─────────────────────────────────────────────

  var TOC_SECTION_ACTIVE =
    "block py-1.5 pl-4 -ml-px border-l-2 border-primary text-primary font-medium" +
    " leading-snug transition-colors duration-150 text-[12px]";
  var TOC_SECTION_INACTIVE =
    "block py-1.5 pl-4 -ml-px border-l-2 border-transparent text-slate-500" +
    " hover:text-slate-800 hover:border-slate-300 leading-snug transition-colors duration-150 text-[12px]";
  var TOC_HEADING_ACTIVE =
    "block py-1 pl-7 -ml-px border-l-2 border-primary text-primary font-medium" +
    " leading-snug transition-colors duration-150 text-[12px]";
  var TOC_HEADING_INACTIVE =
    "block py-1 pl-7 -ml-px border-l-2 border-transparent text-slate-400" +
    " hover:text-slate-700 hover:border-slate-300 leading-snug transition-colors duration-150 text-[12px]";

  function setActiveTocItem(id) {
    var list = document.getElementById("toc-list");
    if (!list) return;
    list.querySelectorAll("a[data-toc]").forEach(function (a) {
      var isSub = a.dataset.tocType === "heading";
      if (a.dataset.toc === id) {
        a.className = isSub ? TOC_HEADING_ACTIVE : TOC_SECTION_ACTIVE;
      } else {
        a.className = isSub ? TOC_HEADING_INACTIVE : TOC_SECTION_INACTIVE;
      }
    });
  }

  function renderTOC() {
    var list = document.getElementById("toc-list");
    if (!list || !window.DOCS) return;

    var hash     = window.location.hash.slice(1);
    var tocInfo  = findAnchorInfo(hash);
    var activeId = (tocInfo && tocInfo.anchorId) || DOCS.partners[0].sections[0].id;

    list.innerHTML = "";

    DOCS.partners.forEach(function (partner) {
      if (partner.label) {
        var divLi   = document.createElement("li");
        divLi.className = "pt-3 pb-1 pl-4";
        var divSpan = document.createElement("span");
        divSpan.className =
          "text-[10px] font-bold uppercase tracking-widest text-slate-400";
        divSpan.textContent = partner.label;
        divLi.appendChild(divSpan);
        list.appendChild(divLi);
      }

      partner.sections.forEach(function (section) {
        var li = document.createElement("li");
        var a  = document.createElement("a");
        a.href            = "#" + section.id;
        a.dataset.toc     = section.id;
        a.dataset.tocType = "section";
        a.textContent     = section.pageTitle;
        a.className       = section.id === activeId ? TOC_SECTION_ACTIVE : TOC_SECTION_INACTIVE;
        a.addEventListener("click", function () {
          setActiveTocItem(section.id);
          setActiveSidebarItem(section.id);
        });
        li.appendChild(a);
        list.appendChild(li);

        if (section.headings && section.headings.length > 0) {
          section.headings.forEach(function (heading) {
            var hli = document.createElement("li");
            var ha  = document.createElement("a");
            ha.href            = "#" + heading.id;
            ha.dataset.toc     = heading.id;
            ha.dataset.tocType = "heading";
            ha.textContent     = heading.title;
            ha.className       = heading.id === activeId ? TOC_HEADING_ACTIVE : TOC_HEADING_INACTIVE;
            ha.addEventListener("click", function () {
              setActiveTocItem(heading.id);
              setActiveSidebarItem(section.id);
            });
            hli.appendChild(ha);
            list.appendChild(hli);
          });
        }
      });
    });
  }

  // Expose for scroll spy (next task)
  window.setActiveTocItem = setActiveTocItem;

  // ── Content rendering ──────────────────────────────────────────

  var PROSE_CLS =
    "prose prose-slate max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold" +
    " prose-headings:text-slate-900 prose-a:text-primary prose-a:no-underline" +
    " hover:prose-a:underline prose-code:before:content-none prose-code:after:content-none" +
    " prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:text-[0.85em]" +
    " prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:font-medium";

  function renderContent() {
    var container = document.getElementById("sections-container");
    if (!container || !window.DOCS) return;

    container.innerHTML = "";

    DOCS.partners.forEach(function (partner) {
      if (partner.label) {
        var divider = document.createElement("div");
        divider.className =
          "flex items-center gap-3 mt-14 mb-8 py-4 border-t-2 border-slate-200";
        var dImg = document.createElement("img");
        dImg.src = partner.logo.src;
        dImg.alt = "";
        dImg.setAttribute("aria-hidden", "true");
        dImg.className = "h-5 w-auto max-w-[5rem] object-contain";
        var dLabel = document.createElement("span");
        dLabel.className = "text-sm font-bold text-slate-600 tracking-wide";
        dLabel.textContent = partner.name;
        divider.appendChild(dImg);
        divider.appendChild(dLabel);
        container.appendChild(divider);
      }

      partner.sections.forEach(function (section) {
        var tpl = document.getElementById("tpl-" + section.id);

        if (tpl) {
          container.appendChild(tpl.content.cloneNode(true));
        } else {
          var wrapper = document.createElement("div");
          wrapper.className = "mb-10 pb-10 border-b border-slate-100";
          wrapper.innerHTML =
            '<article class="' + PROSE_CLS + '">' +
            '<h2 id="' + section.id + '">' + section.pageTitle + "</h2>" +
            '<div class="not-prose flex items-center gap-2 px-4 py-3 rounded-lg' +
            ' bg-slate-50 border border-dashed border-slate-200 text-slate-400 text-sm my-4">' +
            "<span class=\"italic\">" + (section.content || "[NỘI DUNG CHỜ CẬP NHẬT]") + "</span>" +
            "</div>" +
            "</article>";
          container.appendChild(wrapper);
        }
      });
    });

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  // ── Scroll helpers ────────────────────────────────────────────

  // Scrolls to the element matching `id` with room for the sticky header.
  // Called after render because content is JS-rendered (browser's native
  // hash-scroll fires before elements exist in the DOM).
  function scrollToHash() {
    var hash = window.location.hash.slice(1);
    if (!hash) return;
    var el = document.getElementById(hash);
    if (!el) return;
    var OFFSET = 80; // header (64px) + 16px breathing room
    var top = el.getBoundingClientRect().top + window.pageYOffset - OFFSET;
    window.scrollTo({ top: top, behavior: "instant" });
  }

  // ── Scroll spy ───────────────────────────────────────────────

  function initScrollSpy() {
    if (!window.DOCS) return;

    // Build ordered list of all anchor IDs from the data model
    var allAnchors = [];
    DOCS.partners.forEach(function (partner) {
      partner.sections.forEach(function (section) {
        allAnchors.push({ id: section.id, sectionId: section.id });
        if (section.headings) {
          section.headings.forEach(function (h) {
            allAnchors.push({ id: h.id, sectionId: section.id });
          });
        }
      });
    });

    var sectionFor = {};
    allAnchors.forEach(function (a) { sectionFor[a.id] = a.sectionId; });

    // Distance from viewport top considered "passed" (sticky header 64px + buffer)
    var OFFSET = 100;
    var ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var activeId = null;
        var bestTop  = -Infinity;

        allAnchors.forEach(function (a) {
          var el = document.getElementById(a.id);
          if (!el) return;
          var top = el.getBoundingClientRect().top;
          // The heading that most recently crossed the offset line
          if (top <= OFFSET && top > bestTop) {
            bestTop  = top;
            activeId = a.id;
          }
        });

        if (activeId) {
          setActiveTocItem(activeId);
          setActiveSidebarItem(sectionFor[activeId]);
        }

        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ── Init ──────────────────────────────────────────────────────
  renderSidebar();
  renderContent();
  renderTOC();
  scrollToHash();
  initScrollSpy();
})();
