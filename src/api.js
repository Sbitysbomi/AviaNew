const BASE_URL = 'https://api.npoint.io/';
const COMPANIES_API_KEY = process.env.REACT_APP_COMPANIES_KEY;
const TICKETS_API_KEY = process.env.REACT_APP_TICKET_KEY;

// эта функция позволяет тебе не переписывать запрос в API
// этот вариант заточен только для GET запросов (других не увидел у тебя)
// если вдруг тебе нужен POST то помимо url в аргументах передаешь дополнительные параметры
// такие как method и options
// options будут отвечать за body запроса или доп заголовки в headers

const request = async (url) => {
    const request = await fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    });
    if (!request.ok) {
        throw new Error(request.message);
    } else {
        return request.json();
    }
};


// обрати внимание, что здесь я не оборачиваю функцию в try catch
// оборачивать стоит в финальном вызове, потому что, будет ошибка внутри этой функции,
// и ты не сможешь отловить ее в функции, где будет вызов

const getApiCompanies = async () => {
    return await request(`${BASE_URL}${COMPANIES_API_KEY}`);
};

// пример вызова из App.js

// const getCompaniesList = async () => {
//     try {
//         const companies = await getApiCompanies()
//         if (!companies) {
//             // если требует логика, выводишь тут ошибку, типа компании не найдены
//         } else {
//             setCompaniesList(companies)
//         }
//     }
//     catch (e) {
//         // в этом блоке отлавливается ошибку, которую ты не прописал в блоке try.
//         // как правило здесь ошибка, возникающая на сервере
//         console.log(e)
//     } finally {
//         // в этом блоке описана логика, которая будет выполнена в любом случае в завершении функции
//     }
// }

const getApiTickets = async () => {
    return await request(`${BASE_URL}${TICKETS_API_KEY}`);
};

export { getApiCompanies, getApiTickets };