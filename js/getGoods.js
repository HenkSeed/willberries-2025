import getData from '/js/getData.js'

const getGoods = () => {
    const navLinks = document.querySelectorAll('.navigation-link')

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData().then((dataBase) => {
                localStorage.setItem('goods', JSON.stringify(dataBase))
            })
        })
    })

    const goods = JSON.parse(localStorage.getItem('goods'))

    console.log('goods: ', goods)

    localStorage.removeItem('goods')
}

export default getGoods
