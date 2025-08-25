const features = document.querySelector('#features');
const dropdown = document.querySelector('.dropdown-content');
const company = document.querySelector('#company')
const dropdownConst = document.querySelector('.company')


features.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-display')  
});
company.addEventListener('click', () => {
    dropdownConst.classList.toggle('dropdown-display')  
    console.log('cliched')
});