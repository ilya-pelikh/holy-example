const errors = {
    'ME1': () => 'В теле запроса отсутствует код (req.body.code пуст)',
    'ME2': () => 'Решение не верно'
}

const infoMessages = {
    'MI1': () => 'Содержание тела входящего запроса (см. поле requestBody)',
    'MI2': () => 'Результат выполнения теста на коде, отправленном пользователем (см. поле result)'
}

module.exports = {
    errors,
    infoMessages,
}
