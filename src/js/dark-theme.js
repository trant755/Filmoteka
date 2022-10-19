import { refs } from './helpers/refs';

const THEME_KEY = 'siteCurrentTheme';
const SWITCHER_POSITION = 'switcherPosition';
console.log(refs.switcherMain);
// Theme switcher button script
initChangeOfThemeOnMain();
initChangeOfThemeOnLib();

function initChangeOfThemeOnMain() {
  if (!localStorage.getItem(THEME_KEY)) {
    saveSiteTheme(refs.body.classList.value, refs.roller.classList.value);
  }
  if (refs.switcherMain) {
    refs.switcherMain.addEventListener('click', onSwitcherClick);
    getSiteTheme();
  }
}

function initChangeOfThemeOnLib() {
  if (refs.switcher) {
    refs.switcher.addEventListener('click', onSwitcherClick);
    getSiteTheme();
  }
}

function onSwitcherClick() {
  // refs.roller.classList.toggle('switcher-roller--light');
  refs.roller.classList.toggle('switcher-roller--dark');
  // refs.body.classList.toggle('light-theme');
  refs.body.classList.toggle('dark-theme');
  let currentSiteTheme = refs.body.classList.value;
  let currentSwitcherPosition = refs.roller.classList.value;

  saveSiteTheme(currentSiteTheme, currentSwitcherPosition);
}

function saveSiteTheme(data, position) {
  localStorage.setItem(THEME_KEY, JSON.stringify(data));
  localStorage.setItem(SWITCHER_POSITION, JSON.stringify(position));
}

function getSiteTheme() {
  newCurrentSiteTheme = JSON.parse(localStorage.getItem(THEME_KEY));
  newCurrentSwitcherPosition = JSON.parse(
    localStorage.getItem(SWITCHER_POSITION)
  );
  refs.body.classList.value = newCurrentSiteTheme;
  refs.roller.classList.value = newCurrentSwitcherPosition;
}
