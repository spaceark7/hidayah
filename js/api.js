console.log('executed toogle');
const imgBx = document.querySelectorAll('.imageBox');
console.log('ibx: ', imgBx)
imgBx.forEach(popup => popup.addEventListener('click', () => {
    console.log('popup:', popup)
    popup.classList.toggle('active')
}))

function PopUp() {
    console.log('executed toogle');
    const imgBx = document.querySelectorAll('.imageBox');
    console.log('ibx: ', imgBx)
    imgBx.forEach(popup => popup.addEventListener('click', () => {
        console.log('popup:', popup)
        popup.classList.toggle('active')
    }))
}

function Pop() {
    console.log('clicked', this)
    PopUp()
}
