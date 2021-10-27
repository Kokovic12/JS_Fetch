const API_TOKEN = 'YmVmYjliYmQtN2U0MC00MzkyLTgwNjUtYTA1ZTRkMzAwZTc0'
const API_URL = 'https://api.m3o.com/v1/weather/Forecast'

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

const inputDays = document.querySelector('.days')           
const inputCity = document.querySelector('.city')                
const button_click = document.querySelector('.click_button')                  
const output = document.querySelector('.output')         

      inputDays.addEventListener('change', () => {
        const resultDays = document.querySelector('.resultDays');
        resultDays.textContent= inputDays.value;
      })

     inputCity.addEventListener('change', () => {
        const resultCity = document.querySelector('.resultCity')
        resultCity.textContent = inputCity.value
     })

    //  button_click.addEventListener('click', () => {






//   Бредовый БРЕД
    //  function render(data){
    //      renderCity(data);
    //      renderDays(data);

    //  }

    //  function renderCity(data){
    //      let cityName=document.querySelector('.current_city');
    //      cityName.innerHTML=data.city.name;
    //  }

    //  function renderDays(data){
    //     let cityDays=document.querySelector('.current_days');
    //     cityDays.innerHTML=data.days.name;
    // }



// Example 1
// const API_TOKEN = 'YmVmYjliYmQtN2U0MC00MzkyLTgwNjUtYTA1ZTRkMzAwZTc0';
// const API_URL = 'https://api.m3o.com/v1/weather/Forecast';
// const API_Params = new URLSearchParams({
//     foo: 'value',
//     bar: 2,
// })


// fetch(API_URL + API_Params,  {
//         method:"GET",
//         headers:{
//             "Content-Type": `application/json`,
//             "Authorization": `Bearer ${API_TOKEN}`,
//         }
//      })
//      .then(resp=>resp.json())
//      .then((data)=>{console.log(data)})
//      .catch((error)=>{console.log(error)})



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


