const API_TOKEN = 'YmVmYjliYmQtN2U0MC00MzkyLTgwNjUtYTA1ZTRkMzAwZTc0'
const API_URL = 'https://api.m3o.com/v1/weather/Forecast'

function getFetch() {             
        fetch(API_URL +  `?days=${days}&location=${location}` , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`,
        }}).then(resp => resp.json())   
        .then((data) => {
            output.textContent = JSON.stringify(data, null, '\t')
        })        
        .catch((error) => {
            output.textContent = error
        })
    }

const inputDays = document.querySelector('.day')           
const inputCity = document.querySelector('.city')                  
const output = document.querySelector('.output')         


    // inputDays.addEventListener('change', () => {
    //     const resultDays = document.querySelector('.resultDays');
    //     resultDays.textContent= inputDays.value;
    // })

    //  inputCity.addEventListener('change', () => {
    //     const resultCity = document.querySelector('.resultCity')
    //     resultCity.textContent = inputCity.value
    //  })


// var btn = document.querySelector('.btn');
// btn.onclick = function () { 
//     console.log(true);
//     fetch(API_URL +  `?days=${days}&location=${location}` , {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${API_TOKEN}`,
//     }}).then(resp => resp.json())     
//      .then((data) => {
//         output.textContent = JSON.stringify(data, null, '\t')
//     })
//      .catch((error) => {
//         output.textContent = error
//     })}


// Example
// const API_TOKEN = 'YmVmYjliYmQtN2U0MC00MzkyLTgwNjUtYTA1ZTRkMzAwZTc0';
// const API_URL = 'https://api.m3o.com/v1/weather/Forecast';
// const API_Params = new URLSearchParams({
//     foo: 'value',
//     bar: 2,
// })


// async function getWeather(method, url){
//     const resp = await fetch (url, {
//         method: 'GET',
//         headers: {
//             "Content-Type": `application/json`,
//             "Authorization": `Bearer ${API_TOKEN}`,   
//         },
//     })

//     .then(respData=>resp.json())
//     console.log(respData);
// }

// getWeather(API_URL);




// fetch('https://example.com'? + new URLSearchParams({
//     foo: 'value',
//     bar: 2,
// }))


//https://api.example.com?query1=value1&query2=value2


