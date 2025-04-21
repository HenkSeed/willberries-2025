const search = () => {
    const searchBlock = document.querySelector('.search-block')

    const button = searchBlock.querySelector('button')
    const input = searchBlock.querySelector('input')

    button.addEventListener('click', () => {
        console.log(input.value)
    })

    // input.addEventListener('input', (event) => {
    //     console.log(event.target.value)
    // })
}

export default search
