(this["webpackJsonpreactjs-base-typescript"]=this["webpackJsonpreactjs-base-typescript"]||[]).push([[14],{360:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i(9),c=i(0),s=(i(10),i(19)),r=i.p+"static/media/image-connection-people.87563db3.png",l=i.p+"static/media/bg-affiliate-marketing.c14f702d.png",o=i(17),d=i(23),j=i(45),b=i(4),f=i(14),m=i(403),g=(f.b.APPELATION_RECEIVED,i(458),i(1)),h=function(){var e,t=Object(s.b)(),i=null===(e=Object(s.c)((function(e){return e.profileReducer.getProfileResponse})))||void 0===e?void 0:e.data,h=Object(s.c)((function(e){var t;return null===(t=e.transactionReducer.getTransactionResponse)||void 0===t?void 0:t.data})),u=Object(c.useState)({page:j.a,pageSize:j.b,type:f.b.APPELATION_RECEIVED}),x=Object(n.a)(u,2),O=x[0],v=x[1],p=Object(c.useCallback)((function(){t(b.ib.request({params:O}))}),[t,O]);return Object(c.useEffect)((function(){p()}),[p]),Object(g.jsx)("div",{className:"AffiliateMarketing",children:Object(g.jsxs)("div",{className:"AffiliateMarketing-wrapper",children:[Object(g.jsxs)("div",{className:"AffiliateMarketing-banner flex flex-col items-center justify-center",children:[Object(g.jsx)("div",{className:"AffiliateMarketing-banner-bg",children:Object(g.jsx)("img",{src:l,alt:""})}),Object(g.jsx)("div",{className:"AffiliateMarketing-banner-image",children:Object(g.jsx)("img",{src:r,alt:""})}),Object(g.jsx)("div",{className:"AffiliateMarketing-banner-description",children:"Chia s\u1ebb m\xe3 gi\u1edbi thi\u1ec7u c\u1ee7a b\u1ea1n \u0111\u1ec3 nh\u1eadn coin"}),Object(g.jsxs)("div",{className:"AffiliateMarketing-banner-code flex items-center",children:[Object(g.jsx)("div",{className:"AffiliateMarketing-banner-code-value",children:null===i||void 0===i?void 0:i.referralId}),Object(g.jsxs)("div",{className:"AffiliateMarketing-banner-code-copy flex items-center",onClick:function(){return Object(d.a)((null===i||void 0===i?void 0:i.referralId)||"")},children:[Object(g.jsx)(o.c,{name:o.b.Copy,color:o.a.ORANGE_PEEL}),"Copy"]})]})]}),Object(g.jsxs)("div",{className:"AffiliateMarketing-tabs",children:[Object(g.jsx)("div",{className:"AffiliateMarketing-tabs-header",children:Object(g.jsx)("div",{className:"AffiliateMarketing-tabs-header-title",children:"L\u1ecbch s\u1eed nh\u1eadn coin"})}),Object(g.jsx)("div",{className:"AffiliateMarketing-tabs-body",children:O.type===f.b.APPELATION_RECEIVED&&Object(g.jsx)(m.a,{data:null===h||void 0===h?void 0:h.records,page:O.page,pageSize:O.pageSize,total:null===h||void 0===h?void 0:h.total,onPaginateChange:function(e,t){v(Object(a.a)(Object(a.a)({},O),{},{page:e,pageSize:t||O.pageSize}))}})})]})]})})};t.default=h},383:function(e,t,i){"use strict";i(0);var a=i(469),n=i(10),c=i.n(n),s=(i(384),i(17)),r=i(23),l=i(1),o=function(e){var t=e.page,i=e.pageSize,n=e.total,o=void 0===n?0:n,d=e.className,j=e.onChange;return Object(l.jsx)("div",{className:c()("Pagination",d),children:Object(l.jsx)(a.a,{current:t,pageSize:i,total:o,hideOnSinglePage:!0,showLessItems:!0,showTotal:function(){return"Trang ".concat(t," / ").concat(Object(r.d)(o,i))},showQuickJumper:!1,showSizeChanger:!1,itemRender:function(e,t,i){switch(t){case"prev":return Object(l.jsx)(s.c,{name:s.b.AngleLeft});case"next":return Object(l.jsx)(s.c,{name:s.b.AngleRight});default:return i}},onChange:j})})};t.a=o},384:function(e,t,i){},399:function(e,t,i){},403:function(e,t,i){"use strict";i(0);var a=i(376),n=i(377),c=i(23),s=i(383),r=i(150),l=(i(399),i(1)),o=function(e){var t=e.data,i=void 0===t?[]:t,o=e.page,d=e.pageSize,j=e.total,b=e.onPaginateChange,f=0===(null===i||void 0===i?void 0:i.length);return Object(l.jsxs)("div",{className:"HistoryCoin",children:[f?Object(l.jsx)(r.a,{title:"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u l\u1ecbch s\u1eed nh\u1eadn coin"}):Object(l.jsx)(a.a,{gutter:[20,20],children:i.map((function(e){return Object(l.jsx)(n.a,{span:24,md:{span:12},children:Object(l.jsxs)("div",{className:"HistoryCoin-item",children:[Object(l.jsxs)("div",{className:"HistoryCoin-item-row flex justify-between items-center",children:[Object(l.jsx)("div",{className:"HistoryCoin-item-row-text",children:"M\xe3 nh\u1eadn :"}),Object(l.jsx)("div",{className:"HistoryCoin-item-row-text",children:e.trans_code})]}),Object(l.jsxs)("div",{className:"HistoryCoin-item-row flex justify-between items-center",children:[Object(l.jsx)("div",{className:"HistoryCoin-item-row-text small",children:"S\u1ed1 Bcoin \u0111\xe3 nh\u1eadn:"}),Object(l.jsxs)("div",{className:"HistoryCoin-item-row-text hightlight",children:[Object(l.jsx)("strong",{children:e.bcoin_received})," Bcoin"]})]}),Object(l.jsx)("div",{className:"HistoryCoin-item-row flex justify-between items-center",children:Object(l.jsx)("div",{className:"HistoryCoin-item-row-text small",children:e.note})}),Object(l.jsx)("div",{className:"line"}),Object(l.jsxs)("div",{className:"HistoryCoin-item-row flex justify-between items-center",children:[Object(l.jsx)("div",{className:"HistoryCoin-item-row-text",children:e.method}),Object(l.jsx)("div",{className:"HistoryCoin-item-row-text gray",children:Object(c.b)(e.create_at)})]})]})},e._id)}))}),Object(l.jsx)("div",{className:"HistoryCoin-pagination flex justify-end",children:Object(l.jsx)(s.a,{page:o,pageSize:d,total:j,onChange:b})})]})};t.a=o},458:function(e,t,i){}}]);
//# sourceMappingURL=14.396f3be5.chunk.js.map