const apiKey = '<5e385d3aaf8368294232a1d646df1f43>&units=imperial'
const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${apiKey}`
const generateBtn = document.getElementById('generate');
const userZip = document.getElementById('zip');


generateBtn.addEventListener('click', addEntry)

function addEntry(baseURL, userZip, apiKey) {
  console.log('ive been clicked!');


}


const retrieveWeather = async (url = baseURL+ apiKey) => {
  const request = await fetch(baseURL+ apiKey);
  try {
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);

  }
};



const postData = async ( url = baseURL+apiKey, data = {})=>{
  console.log(data);
    const response = await fetch(baseURL + apiKey, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },     
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

// postData('/', {temperature: , date: , userResponse:});