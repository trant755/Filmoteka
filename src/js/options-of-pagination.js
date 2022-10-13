import sprite from '../images/icons/arrowssprite.svg';

const arrowIcon = `${sprite}#icon-arrow`;
const dotsIcon = `${sprite}#icon-dots`;

export const options = {
    totalItems: 20000,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    usageStatistics: false,
    // firstItemClassName: 'tui-first-child',
    // lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',
      currentPage: '<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}">' +
        `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowIcon}-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip change-{{type}}">' +
        `<svg class="tui-ico-ellip" width="14" height="14"><use href="${dotsIcon}"></use></svg>` +
        '</a>',
    }
  };