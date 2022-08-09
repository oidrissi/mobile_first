const text = document.querySelector('.toChange');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Branding';
    }, 0);

    setTimeout(() => {
        text.textContent = 'Design';
    }, 2000);

    setTimeout(() => {
        text.textContent = 'WebDev';
    }, 4000);
}


textLoad();
setInterval(textLoad, 6000);

// This is the function that is called when the page is scrolled. //
function scroll() {
}
