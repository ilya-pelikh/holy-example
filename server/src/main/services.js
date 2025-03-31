const axios = require('axios');

const ACCEPT_TOKEN = 'secret_token';

/**
 * Отправляет код на проверку
 * @param {string} code - Код для проверки
 * @param {string} id - Идентификатор задачи
 * @returns {Promise<{ result: boolean, expected: string, received: string, wrongTestNumber: number, testsCount: number }>} - Результат проверки
 */
const submitCode = async (code, id) => {
  try {
      const { data: { result } } = await axios.post('http://localhost:3002/',
          { code: code, id: id },
          { headers: { 'Accept-Token': ACCEPT_TOKEN } });
      return result;
  } catch (error) {
      console.error('[submitCode] Ошибка при отправке кода:', error);
      throw {
        errorCode: "ME1",
        errorMessage: error.response.data.error,
        details: error.response.data.details
      }
  }
}

/**
 * Получает список заданий
 * @returns {Promise<{ suites: string[] }>} - Список заданий
 */
const getSuites = async () => {
    const { data: { suites } } = await axios.get('http://localhost:3002/tasks/suite',
        { headers: { 'Accept-Token': ACCEPT_TOKEN } });
    return suites;
}

module.exports = {
    submitCode,
    getSuites,
}


