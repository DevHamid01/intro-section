const features = document.querySelector('#features');
const dropdown = document.querySelector('.dropdown-content');


features.addEventListener('click', () => {
    console.log('clicked')
    dropdown.classList.toggle('dropdown-display')  
});