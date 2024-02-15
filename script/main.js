const navbar = document.getElementById('navbar');
const menubar = document.getElementById('menubar');
// console.log(menubar)

menubar.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    menubar.classList.toggle('bx-x')
})

window.onscroll = () => {
    navbar.classList.add('hidden');
    menubar.classList.remove('bx-x')
}
