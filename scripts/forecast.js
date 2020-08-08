const key = 'lYVAtahMGpGP64zscoGkywwsdvrhuBgP'

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

const object = {
    name: 'awdawd'
}


const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);  
    const data = await response.json();
    //console.log(data[0]);
    return data[0];
};


// getCity('tokyo')
//     .then(data => {

//        return getWeather(data.Key);
//     }).then(data => {

//         console.log('getWeather Data: ', data);
//     })
//     .catch(err => console.log(err));

