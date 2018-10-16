const year = new Date().getFullYear();
const copyright = document.querySelector("#copyright");
copyright.innerHTML = "Patryk Pawlak &copy; " + year;

const websiteHeading = document.querySelector("#websiteHeading");
const websiteTxt = document.querySelector("#websiteTxt");
const contentWrapper = document.querySelector("#contentWrapper");
const html = document.querySelector("#html");

const langPL = document.querySelector("#langPL");
const langEN = document.querySelector("#langEN");

const headingPL = "w budowie";
const headingEN = "under construction";

const txtPL = "Witaj na moim portfolio. Obecnie pracuję nad tą stroną internetową.<br>Poniżej możesz sprawdzić moje media społecznościowe.<br>~ Patryk Pawlak";
const txtEN = "Welcome on my portfolio website. I am currently working on this site.<br>Below you can check my social media.<br>~ Patryk Pawlak";

function changeText(element, txt) {
    element.innerHTML = txt;
};

function changeLang(lang) {
    switch (lang) {
        case 'PL':
        contentWrapper.classList.add('opacity');

        setTimeout(function() {
            html.setAttribute('lang', 'pl-PL');
            changeText(websiteHeading, headingPL);
            changeText(websiteTxt, txtPL);
            langEN.disabled = false;
            langPL.disabled = true;
        }, 1000);

        setTimeout(function() {
            contentWrapper.classList.remove('opacity');
        }, 1000);
        break;

        default:
        contentWrapper.classList.add('opacity');

        setTimeout(function() {
            html.setAttribute('lang', 'en-EN');
            changeText(websiteHeading, headingEN);
            changeText(websiteTxt, txtEN);
            langPL.disabled = false;
            langEN.disabled = true;
        }, 1000);

        setTimeout(function() {
            contentWrapper.classList.remove('opacity');
        }, 1000);
    }
};