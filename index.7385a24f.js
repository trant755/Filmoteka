function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i("kyEFX").register(JSON.parse('{"5ZPII":"index.7385a24f.js","ehxus":"arrowssprite.6a2c4930.svg","b9auz":"index.53ad0a9d.js"}'));var a,r=i("krGWQ"),o=i("4eHHv"),l=i("5eWcy"),c=i("2pdLV"),d=i("fb9GJ");const u={totalItems:2e4,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-next",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',currentPage:'<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}"><svg class="tui-ico-{{type}}" width="16" height="16"><use href="${`${e(a=new URL(i("kyEFX").resolve("ehxus"),import.meta.url).toString())}#icon-arrow`}-{{type}}"></use></svg></a>`,disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}" onclick="return false"><span class="tui-ico-{{type}}" onclick="return false">{{type}}</span></span>',moreButton:`<a href="#" class="tui-page-btn tui-{{type}}-is-ellip change-{{type}}"><svg class="tui-ico-ellip" width="14" height="14"><use href="${`${e(a)}#icon-dots`}"></use></svg></a>`}};i("ghT7p");const f=new(0,o.default),p=new(0,l.default);let g="";r.refs.searchInput.addEventListener("submit",(async function(e){if(e.preventDefault(),f.query=e.currentTarget.elements.searchQuery.value,""===f.query)return;f.resetMoviesPage(),r.refs.loader.classList.remove("is-hidden"),await m(),r.refs.SearchErrMessage.classList.contains("is-hidden")&&y.reset();r.refs.loader.classList.add("is-hidden")}));const y=new(e(d))(r.refs.paginationContainer,u);function h(){f.fetchTrending().then((({results:e,total_results:t})=>{y.setTotalItems(t),(0,c.onMarkupCards)(e,r.refs.trandingContainer),p.saveTrendingCurentPage(e),r.refs.loader.classList.add("is-hidden")}))}function v(){r.refs.trandingContainer.innerHTML=""}async function m(){const e=await f.fetchMovies();if(0===e.results.length)return r.refs.SearchErrMessage.classList.remove("is-hidden"),setTimeout((()=>r.refs.SearchErrMessage.classList.add("is-hidden")),4e3),void(f.query=g);r.refs.SearchErrMessage.classList.add("is-hidden"),g=f.query,y.setTotalItems(e.total_results),v(),f.resetMoviesPage(),(0,c.onMarkupCards)(e.results,r.refs.trandingContainer),p.saveTrendingCurentPage(e.results),function(e){1===e.total_pages?r.refs.paginationContainer.style.display="none":"none"===r.refs.paginationContainer.style.display&&r.refs.paginationContainer.removeAttribute("style")}(e)}r.refs.loader.classList.remove("is-hidden"),function(){p.getGeneresLS()||f.fetchGenres().then(p.saveGenersLS);h()}(),r.refs.paginationContainer.addEventListener("click",(function(e){if(e.target.classList.contains("tui-pagination"))return;v();const t=y.getCurrentPage();f.addMoviesPage(t),""===f.query?h():""!==f.query&&m()})),(r=i("krGWQ")).refs.toTopBtn.addEventListener("click",(function(){window.scrollTo(0,0)})),window.onscroll=function(){document.body.scrollTop>700||document.documentElement.scrollTop>700?(r.refs.toTopBtn.style.visibility="visible",r.refs.svgIcon.style.opacity=1,r.refs.toTopBtn.style.opacity=1):(r.refs.toTopBtn.style.visibility="hiden",r.refs.svgIcon.style.opacity=0,r.refs.toTopBtn.style.opacity=0)},i("5eWcy"),i("6HA5D"),i("1wewW");
//# sourceMappingURL=index.7385a24f.js.map
