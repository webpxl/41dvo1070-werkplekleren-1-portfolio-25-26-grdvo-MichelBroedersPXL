const projectenContainer = document.querySelector('#projecten-container');

projectenContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    projectenContainer.scrollLeft += e.deltaY;
});
