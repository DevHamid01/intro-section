const features = document.querySelector('#features');
const dropdown = document.querySelector('.dropdown-content');
const company = document.querySelector('#company')
const dropdownConst = document.querySelector('.company')
const featuresArrowDown = features.querySelector('img')



features.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-display')
    featuresArrowDown.classList.toggle('rotate-img')
    
});
company.addEventListener('click', () => {
    dropdownConst.classList.toggle('dropdown-display')  
});