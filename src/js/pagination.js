import MovieApiService from './fetchModule';
import Pagination from 'tui-pagination';
import onMarkupCards from './onMarkupCards';
import generateTrendingFilms from './generateTrandingCard';
import 'tui-pagination/dist/tui-pagination.css';

const paginationContainer = document.querySelector('.tui-pagination');

const movieApiService = new MovieApiService();

const options = {
    totalItems: 100,
    itemsPerPage: 40,
    visiblePages: 10,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      // 
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
};
  
const pagination = new Pagination(paginationContainer, options);

async function initialPage() {
    const { data } = await movieApiService.fetchTrending();
    
    pagination.setTotalItems(data.totalHits);
    
    generateTrendingFilms;
}

