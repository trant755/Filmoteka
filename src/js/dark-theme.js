import { refs } from './refs';

// Theme switcher button script
refs.switcher.addEventListener('click', onSwitcherClick);

function onSwitcherClick() {
    refs.roller.classList.toggle('switcher-roller--light');
    refs.roller.classList.toggle('switcher-roller--dark');

    refs.body.classList.toggle('light-theme');
    refs.body.classList.toggle('dark-theme');
}


// function toggleSwitcherRoller() {
//     refs.roller.classList.toggle('switcher-roller--light');

// }

// function changeOnTheDarkTheme() {
//     refs.roller.classList.toggle('switcher-roller--dark');

// }
// initSwitcher();

// function initSwitcher() {
//     if(refs.switcherMain) {
//         refs.switcherMain.addEventListener('click', onSwitcherMainClick);
//     } else if(refs.switcher) {
//         refs.switcher.addEventListener('click', onSwitcherClick);
//     }
// }

// function onSwitcherMainClick() {
//     if(refs.switcherMain.classList.contains('default')) {
//         console.log('click');
//         toggleMainTheme();
//     } else {
//         toggleMainTheme();
//     }
// }

// function onSwitcherClick() {
//     if(refs.switcher.classList.contains('default')) {
//         console.log('click');
//         toggleLibTheme();
//     } else {
//         toggleLibTheme();
//     }
// }

// function toggleMainTheme() {
//     refs.switcherMain.classList.toggle('default');

//     refs.roller.classList.toggle('switcher--light');
//     refs.roller.classList.toggle('switcher--dark');

//     refs.sunSvg.classList.toggle('is-hidden');
//     refs.moonSvg.classList.toggle('is-hidden');
// }

// function toggleLibTheme() {
//     refs.switcher.classList.toggle('default');

//     refs.roller.classList.toggle('switcher--light');
//     refs.roller.classList.toggle('switcher--dark');

//     refs.sunSvg.classList.toggle('is-hidden');
//     refs.moonSvg.classList.toggle('is-hidden');
// }

