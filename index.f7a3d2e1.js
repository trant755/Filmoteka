!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r("iE7OH").register(JSON.parse('{"EVgbq":"index.f7a3d2e1.js","cHgtv":"arrowssprite.6a2c4930.svg","2hvCh":"index.05636a55.js"}'));var a,i=r("bpxeT"),o=r("2TvXO"),c=r("4Nugj"),u=r("aCkdX"),l=r("8OZy9"),d=r("hq2Yf"),p=r("1VFfL"),f=r("hKHmD");a=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("cHgtv");var g,h="".concat(e(a),"#icon-arrow"),y="".concat(e(a),"#icon-dots"),v={totalItems:2e4,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-next",template:(g={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>'},e(f)(g,"currentPage",'<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>'),e(f)(g,"moveButton",'<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}">'+'<svg class="tui-ico-{{type}}" width="16" height="16"><use href="'.concat(h,'-{{type}}"></use></svg>')+"</a>"),e(f)(g,"disabledMoveButton",'<span class="tui-page-btn tui-is-disabled tui-{{type}}" onclick="return false"><span class="tui-ico-{{type}}" onclick="return false">{{type}}</span></span>'),e(f)(g,"moreButton",'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip change-{{type}}">'+'<svg class="tui-ico-ellip" width="14" height="14"><use href="'.concat(y,'"></use></svg>')+"</a>"),g)},b=new(0,u.default),m=new(0,l.default),w="";c.refs.searchInput.addEventListener("submit",(function(e){return T.apply(this,arguments)}));var C=new(e(p))(c.refs.paginationContainer,v);function L(){b.fetchTrending().then((function(e){var t=e.results,s=e.total_results;C.setTotalItems(s),(0,d.onMarkupCards)(t,c.refs.trandingContainer),m.saveTrendingCurentPage(t),c.refs.loader.classList.add("is-hidden")}))}function E(){c.refs.trandingContainer.innerHTML=""}function T(){return(T=e(i)(e(o).mark((function t(s){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),b.query=s.currentTarget.elements.searchQuery.value,""!==b.query){e.next=4;break}return e.abrupt("return");case 4:return b.resetMoviesPage(),c.refs.loader.classList.remove("is-hidden"),e.next=8,x();case 8:c.refs.SearchErrMessage.classList.contains("is-hidden")&&C.reset(),c.refs.loader.classList.add("is-hidden");case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function x(){return M.apply(this,arguments)}function M(){return(M=e(i)(e(o).mark((function t(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.fetchMovies();case 2:if(0!==(s=e.sent).results.length){e.next=10;break}return c.refs.SearchErrMessage.classList.remove("is-hidden"),setTimeout((function(){return c.refs.SearchErrMessage.classList.add("is-hidden")}),4e3),b.query=w,e.abrupt("return");case 10:c.refs.SearchErrMessage.classList.add("is-hidden");case 11:w=b.query,C.setTotalItems(s.total_results),E(),b.resetMoviesPage(),(0,d.onMarkupCards)(s.results,c.refs.trandingContainer),m.saveTrendingCurentPage(s.results),q(s);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function q(e){1===e.total_pages?c.refs.paginationContainer.style.display="none":"none"===c.refs.paginationContainer.style.display&&c.refs.paginationContainer.removeAttribute("style")}c.refs.loader.classList.remove("is-hidden"),function(){m.getGeneresLS()||b.fetchGenres().then(m.saveGenersLS);L()}(),c.refs.paginationContainer.addEventListener("click",(function(e){if(e.target.classList.contains("tui-pagination"))return;E();var t=C.getCurrentPage();b.addMoviesPage(t),""===b.query?L():""!==b.query&&x()}));var H=document.querySelector(".button-to-top"),S=document.querySelector(".to-top-icon");H.addEventListener("click",(function(){window.scrollTo(0,0)})),window.onscroll=function(){document.body.scrollTop>700||document.documentElement.scrollTop>700?(H.style.visibility="visible",S.style.opacity=1,H.style.opacity=1):(H.style.visibility="hiden",S.style.opacity=0,H.style.opacity=0)},r("8OZy9"),r("4F07H"),r("5h39L")}();
//# sourceMappingURL=index.f7a3d2e1.js.map
