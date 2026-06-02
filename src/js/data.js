// js/data.js
// Content data model for Tingee Onboarding Docs
// ID convention: '{partnerSlug}-{sectionSlug}' — shared by sidebar, content, and TOC

function makeId(partnerSlug, sectionSlug) {
  return partnerSlug + '-' + sectionSlug;
}

var DOCS = {
  partners: [
    {
      id: 'tingee',
      name: 'Tingee',
      logo: {
        src: 'https://developers.tingee.vn/img/logo_heno.png',
        alt: 'Logo Tingee',
      },
      label: null,
      sections: [
        {
          id: makeId('tingee', 'tong-quan'),
          partner: 'tingee',
          navTitle: 'Tổng quan',
          pageTitle: 'Tổng quan về Tingee',
          // content already exists in index.html; will be extracted to data in Phase 4
          content: null,
          headings: [
            { id: makeId('tingee', 'la-gi'),     title: 'Tingee là gì?',           partner: 'tingee' },
            { id: makeId('tingee', 'tinh-nang'), title: 'Các tính năng chính',     partner: 'tingee' },
          ],
        },
        {
          id: makeId('tingee', 'onboarding'),
          partner: 'tingee',
          navTitle: 'Hướng dẫn onboarding',
          pageTitle: 'Các bước onboarding',
          content: null,
          headings: [
            { id: makeId('tingee', 'vi-du-api'), title: 'Ví dụ khởi tạo thanh toán', partner: 'tingee' },
          ],
        },
        {
          id: makeId('tingee', 'tai-khoan'),
          partner: 'tingee',
          navTitle: 'Cấu hình tài khoản',
          pageTitle: 'Cấu hình tài khoản',
          content: null,
          headings: [],
        },
      ],
    },

    {
      id: 'baokim',
      name: 'Bảo Kim',
      logo: {
        src: 'https://baokim.vn/new_base/images/logo_slogan.png',
        alt: 'Logo Bảo Kim',
      },
      label: 'Bảo Kim',
      sections: [
        {
          id: makeId('baokim', 'tong-quan'),
          partner: 'baokim',
          navTitle: 'Tổng quan',
          pageTitle: 'Tổng quan về Bảo Kim',
          content: '[NỘI DUNG CHỜ CẬP NHẬT]',
          headings: [],
        },
        {
          id: makeId('baokim', 'tich-hop'),
          partner: 'baokim',
          navTitle: 'Tích hợp thanh toán',
          pageTitle: 'Tích hợp thanh toán Bảo Kim',
          content: '[NỘI DUNG CHỜ CẬP NHẬT]',
          headings: [],
        },
        {
          id: makeId('baokim', 'callback'),
          partner: 'baokim',
          navTitle: 'Xử lý callback',
          pageTitle: 'Xử lý callback Bảo Kim',
          content: '[NỘI DUNG CHỜ CẬP NHẬT]',
          headings: [],
        },
      ],
    },

    {
      id: 'onepay',
      name: 'OnePay',
      logo: {
        src: 'https://www.onepay.vn/wp-content/uploads/2022/01/Logo_OnePay.svg',
        alt: 'Logo OnePay',
      },
      label: 'OnePay',
      sections: [
        {
          id: makeId('onepay', 'tong-quan'),
          partner: 'onepay',
          navTitle: 'Tổng quan',
          pageTitle: 'Tổng quan về OnePay',
          content: '[NỘI DUNG CHỜ CẬP NHẬT]',
          headings: [],
        },
        {
          id: makeId('onepay', 'tich-hop'),
          partner: 'onepay',
          navTitle: 'Tích hợp',
          pageTitle: 'Tích hợp OnePay',
          content: '[NỘI DUNG CHỜ CẬP NHẬT]',
          headings: [],
        },
        {
          id: makeId('onepay', 'kiem-thu'),
          partner: 'onepay',
          navTitle: 'Kiểm thử',
          pageTitle: 'Kiểm thử OnePay',
          content: '[NỘI DUNG CHỜ CẬP NHẬT]',
          headings: [],
        },
      ],
    },

    {
      id: 'payoo',
      name: 'Payoo',
      logo: {
        src: 'https://inkythuatso.com/uploads/thumbnails/800/2021/12/payoo-logo-inkythuatso-02-15-52-28.jpg',
        alt: 'Logo Payoo',
      },
      label: 'Payoo',
      sections: [
        {
          id: makeId('payoo', 'tong-quan'),
          partner: 'payoo',
          navTitle: 'Tổng quan',
          pageTitle: 'Tổng quan về Payoo',
          content: '[NỘI DUNG CHỜ CẬP NHẬT]',
          headings: [],
        },
        {
          id: makeId('payoo', 'tich-hop'),
          partner: 'payoo',
          navTitle: 'Tích hợp',
          pageTitle: 'Tích hợp Payoo',
          content: '[NỘI DUNG CHỜ CẬP NHẬT]',
          headings: [],
        },
        {
          id: makeId('payoo', 'kiem-thu'),
          partner: 'payoo',
          navTitle: 'Kiểm thử',
          pageTitle: 'Kiểm thử Payoo',
          content: '[NỘI DUNG CHỜ CẬP NHẬT]',
          headings: [],
        },
      ],
    },
  ],
};
