!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o("iE7OH").register(JSON.parse('{"EVgbq":"index.5f1662e0.js","cHgtv":"arrowssprite.6a2c4930.svg","2hvCh":"index.0856428e.js"}'));var i={};function a(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}};var s={},c=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",g={};function y(){}function v(){}function m(){}var w={};c(w,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(j([])));L&&L!==r&&n.call(L,i)&&(w=L);var E=m.prototype=y.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return v.prototype=m,c(E,"constructor",m),c(m,"constructor",v),v.displayName=c(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(_.prototype),c(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(E),c(E,s,"Generator"),c(E,i,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(s);try{regeneratorRuntime=c}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var u,l=o("4Nugj"),f=o("8MBJY"),h=o("a2hTj"),p="https://api.themoviedb.org/3",d="api_key=8a38092ae2d24fc685ebce0502669b7c",g=function(){"use strict";function e(){t(f)(this,e),this.needToFind="",this.page=1}return t(h)(e,[{key:"fetchGenres",value:function(){return fetch("".concat(p,"/genre/movie/list?").concat(d,"&language=en-US")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){}))}},{key:"fetchTrending",value:function(){return fetch("".concat(p,"/trending/movie/day?").concat(d,"&page=").concat(this.page)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){}))}},{key:"fetchMovies",value:function(){return fetch("".concat(p,"/search/movie?").concat(d,"&query=").concat(this.needToFind,"&page=").concat(this.page)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){console.log("Error on try...catch",t)}))}},{key:"addMoviesPage",value:function(t){this.page=t}},{key:"resetMoviesPage",value:function(){this.page=1}},{key:"query",get:function(){return this.needToFind},set:function(t){this.needToFind=t}}]),e}(),y=o("8OZy9"),v=o("hq2Yf"),m=o("1VFfL"),w=o("hKHmD");u=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("cHgtv");var b,L="".concat(t(u),"#icon-arrow"),E="".concat(t(u),"#icon-dots"),x={totalItems:2e4,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-next",template:(b={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>'},t(w)(b,"currentPage",'<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>'),t(w)(b,"moveButton",'<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}">'+'<svg class="tui-ico-{{type}}" width="16" height="16"><use href="'.concat(L,'-{{type}}"></use></svg>')+"</a>"),t(w)(b,"disabledMoveButton",'<span class="tui-page-btn tui-is-disabled tui-{{type}}" onclick="return false"><span class="tui-ico-{{type}}" onclick="return false">{{type}}</span></span>'),t(w)(b,"moreButton",'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip change-{{type}}">'+'<svg class="tui-ico-ellip" width="14" height="14"><use href="'.concat(E,'"></use></svg>')+"</a>"),b)},_=new g,k=new(0,y.default),T="";l.refs.searchInput.addEventListener("submit",(function(t){return S.apply(this,arguments)}));var P=new(t(m))(l.refs.paginationContainer,x);function O(){_.fetchTrending().then((function(t){var e=t.results,r=t.total_results;P.setTotalItems(r),(0,v.onMarkupCards)(e,l.refs.trandingContainer),k.saveTrendingCurentPage(e),l.refs.loader.classList.add("is-hidden")}))}function j(){l.refs.trandingContainer.innerHTML=""}function S(){return(S=t(i)(t(s).mark((function e(r){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),_.query=r.currentTarget.elements.searchQuery.value,""!==_.query){t.next=4;break}return t.abrupt("return");case 4:return _.resetMoviesPage(),l.refs.loader.classList.remove("is-hidden"),t.next=8,C();case 8:l.refs.SearchErrMessage.classList.contains("is-hidden")&&P.reset(),l.refs.loader.classList.add("is-hidden");case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function C(){return M.apply(this,arguments)}function M(){return(M=t(i)(t(s).mark((function e(){var r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.fetchMovies();case 2:if(0!==(r=t.sent).results.length){t.next=9;break}return l.refs.SearchErrMessage.classList.remove("is-hidden"),_.query=T,t.abrupt("return");case 9:l.refs.SearchErrMessage.classList.add("is-hidden");case 10:T=_.query,P.setTotalItems(r.total_results),j(),_.resetMoviesPage(),(0,v.onMarkupCards)(r.results,l.refs.trandingContainer),k.saveTrendingCurentPage(r.results),q(r);case 17:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function q(t){1===t.total_pages?l.refs.paginationContainer.style.display="none":"none"===l.refs.paginationContainer.style.display&&l.refs.paginationContainer.removeAttribute("style")}l.refs.loader.classList.remove("is-hidden"),function(){k.getGeneresLS()||_.fetchGenres().then(k.saveGenersLS);O()}(),l.refs.paginationContainer.addEventListener("click",(function(t){if(t.target.classList.contains("tui-pagination"))return;j();var e=P.getCurrentPage();_.addMoviesPage(e),""===_.query?O():""!==_.query&&C()}));var F=document.querySelector(".button-to-top"),N=document.querySelector(".to-top-icon");F.addEventListener("click",(function(){window.scrollTo(0,0)})),window.onscroll=function(){document.body.scrollTop>700||document.documentElement.scrollTop>700?(F.style.visibility="visible",N.style.opacity=1,F.style.opacity=1):(F.style.visibility="hiden",N.style.opacity=0,F.style.opacity=0)},o("8OZy9"),o("5h39L")}();
//# sourceMappingURL=index.5f1662e0.js.map
