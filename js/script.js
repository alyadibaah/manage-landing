const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    nav.classList.toggle('flex')
    btn.classList.toogle('open')
    nav.classList.toggle('hidden')
})