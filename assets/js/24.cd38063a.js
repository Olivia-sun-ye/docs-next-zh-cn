(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{392:function(n,t,e){"use strict";var r=e(214),a=e(12),o=e(24),s=e(28),i=e(216),u=e(215);r("match",(function(n,t,e){return[function(t){var e=s(this),r=null==t?void 0:t[n];return void 0!==r?r.call(t,e):new RegExp(t)[n](String(e))},function(n){var r=e(t,this,n);if(r.done)return r.value;var s=a(this),l=String(n);if(!s.global)return u(s,l);var c=s.unicode;s.lastIndex=0;for(var v,d=[],h=0;null!==(v=u(s,l));){var g=String(v[0]);d[h]=g,""===g&&(s.lastIndex=i(l,o(s.lastIndex),c)),h++}return 0===h?null:d}]}))},402:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return a}));var r={language:"Language",github:"GitHub",lastCommit:"Last commit",last90Days:"Last 90 days",loadDetails:"Load Details",commits:"commits",loading:"Loading..."},a=[{lang:"en-us",owner:"vuejs",repo:"docs",branch:"master",url:"https://v3.vuejs.org/"},{lang:"id",owner:"vuejs-id",repo:"docs-next",branch:"indonesian"},{lang:"ja",owner:"vuejs-jp",repo:"ja.vuejs.org",branch:"lang-ja",url:"https://v3.ja.vuejs.org/"},{lang:"ko",owner:"vuejs-kr",repo:"docs-next",branch:"rootKoKr",url:"https://v3.ko.vuejs.org/"},{lang:"pt-br",owner:"vuejs-br",repo:"docs-next",branch:"master",url:"https://vuejsbr-docs-next.netlify.app/"},{lang:"ru",owner:"translation-gang",repo:"docs-next",branch:"master",url:"https://v3.ru.vuejs.org/"},{lang:"zh-cn",owner:"vuejs",repo:"docs-next-zh-cn",branch:"master",url:"https://v3.cn.vuejs.org/"}]},547:function(n,t,e){"use strict";e.r(t);e(59),e(392),e(123);var r=e(402),a={data:function(){return{isTranslation:!1}},mounted:function(){var n=function(n){return(String(n).match(/https?:\/\/[^/]+/)||[])[0]},t=n(document.referrer);t&&t!==location.origin&&r.b.some((function(e){var r=e.url;return n(r)===t}))&&(this.isTranslation=!0)}},o=e(58),s=Object(o.a)(a,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"theme-container"},[e("div",{staticClass:"theme-default-content"},[e("h1",[n._v("404")]),n._v(" "),n._m(0),n._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:n.isTranslation,expression:"isTranslation"}]},[n._v("\n      New pages are added to the documentation all the time. This page might not be included in all of the translations yet.\n    ")]),n._v(" "),e("RouterLink",{attrs:{to:"/"}},[n._v("\n      Take me home.\n    ")])],1)])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("blockquote",[t("p",[this._v("Whoops! This page doesn't exist.")])])}],!1,null,null,null);t.default=s.exports}}]);