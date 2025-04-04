const errors = {
    'TE1': () => 'Заголовок содержит неверный токен',
    'TE2': (id) => `Переданный в теле запроса id = ${id} не входит в диапазон от 1 до 15`,
    'TE3': () => 'Ошибка неизвестного толка, смотри значение поля catchedError'
}

const infoMessages = {
    'TI1': () => 'Содержание тела входящего запроса (см. поле req)',
    'TI2': () => 'Тестирование завершилось',
}

module.exports = {
    errors,
    infoMessages,
}