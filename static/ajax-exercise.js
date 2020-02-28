"use strict";


// PART 1: SHOW A FORTUNE


function showFortune(evt) {
    // TODO: get the fortune and show it in the #fortune-text div

 $.get('/fortune', (res) => {$('#fortune-text').html(res);});
}
  //   $('#fortune-text').append("<li>showFortune function works with onclick</li>");
  // }
// Calls the function above

// will generate a evt object and pass it to showFortune as the first agument by default
$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    // prevents the browser from loading another page
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    // TODO: request weather with that URL and show the forecast in #weather-info
    // show weather from .py needs an argument, wich is supplied by formData.
    $.get(url, formData, (res) => {
      console.log(Data);
      $('#weather-info').text(res.forecast);
    });

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();


    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!

    let url = '/order-melons.json';
    let data = ;
    let resulthandler = alert();

    $.post(url, data, resulthandler)
}

$("#order-form").on('submit', orderMelons);


