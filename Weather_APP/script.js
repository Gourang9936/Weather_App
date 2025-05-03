let api = "1de1bdba2e830f819fadf1a0ee463736"; //api key

function getweather(city, api) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      console.log(response);
      
      return response.json();
    })

    .then((data) => {
      display(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getweather("Delhi", api);

//to display data

function display(weatherdata) {
    document.getElementById("city_out_id").innerText = weatherdata.name;
    w_array = ["Sunday", "Monday", "Tuesday", "Webnesday", "Thursday", "Friday", "Saturday"]
    let w = new Date()
    let w_name = w.getDay();
    console.log(w_name)
    for (i = 0; i <= 6; i++) {
        if (w_name == i) {
            document.getElementById("left1_id").innerHTML = w_array[i];
        }
    }

    date_1 = w.getFullYear()
    console.log(date_1)
    document.getElementById("left2_id").innerHTML = w;
  
    document.getElementById("right1_id").innerText=weatherdata.main.temp + " C";
    document.getElementById("right2_1_id").innerText = weatherdata.main.feels_like +" C";

    document.getElementById("hum_num_id").innerText = weatherdata.main.humidity;
    document.getElementById("Tempm_num_id").innerText = weatherdata.main.temp_max;
    document.getElementById("Tempn_num_id").innerText = weatherdata.main.temp_min;
    document.getElementById("pressure_num_id").innerText = weatherdata.main.pressure;
    document.getElementById("speed_num_id").innerText = weatherdata.wind.speed;
    document.getElementById("description_num_id").innerText = weatherdata.weather[0].description;
;

}

// to read data
function readData() {
  let data = document.getElementById("city_in_id").value;
  console.log(data)
  getweather(data, api);
}
