$(function(){


	

	var currentTemperature;

	var celsiusTemperature;

	var fahrenheitTemperature;




	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=3d2363042523c46eb86f30163a636f2c", function(result){
	  currentTemperature = result.main.temp;
	  displayTemp();
	});


	


	function displayTemp(){
	  
	  celsiusTemperature = (currentTemperature - 273.15).toFixed(2);
	  fahrenheitTemperature = (currentTemperature * (9/5) - 459.67).toFixed(2);

	  $('#cel').text( celsiusTemperature+"°C" );

	  $('#fah').text( fahrenheitTemperature+"°F" );


	  if(celsiusTemperature >= 22){
	  	$('html').css("background", "url(images/beach01.jpg) no-repeat center center fixed");
	  }else{
	  	$('html').css("background", "url(images/mountains01.jpg) no-repeat center center fixed");
	  }
	  
	  $('html').css("background-size", "cover");

	}







});/*--END DOC READY--*/