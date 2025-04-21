const getData = async () => {
    // Функция получает данные из базы данных или файла
    /**
     * Для загрузки данных из локального файла will.json -
     * это имя файла и имя базы данных внутри него одновременно
     *
     * Для загрузки данных с сервера Firebase will.json -
     * это имя базы данных (имя файла мы просто не знаем, но предположим, что это will.json)
     */

    // Получаем данные из файла:
    const address = '/db/will.json'

    // Получаем данные из базы данных с удалённого сервера:
    // const address =
    //     'https://willberries-5308e-default-rtdb.firebaseio.com/will.json'

    const response = await fetch(address)
    let data = await response.json()

    data = address.includes('https://') ? data : data.will
    return data
}

export default getData
