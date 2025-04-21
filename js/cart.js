const cart = () => {
    const cartBtn = document.querySelector('.button-cart')
    const cartModal = document.querySelector('#modal-cart')

    const modalClose = cartModal.querySelector('.modal-close')

    cartBtn.addEventListener('click', function () {
        cartModal.classList.add('show')
    })

    modalClose.addEventListener('click', () =>
        cartModal.classList.remove('show')
    )
}

export default cart
