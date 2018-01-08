var page = require('webpage').create();

// https://www.hoteis.com/
//	ho140893/?
//	q-check-in=2018-02-05&
//	q-check-out=2018-02-06&
//	q-room-0-adults=2&
//	q-room-0-children=2&
//	q-room-0-child-0-age=5&
//	q-room-0-child-1-age=7&
//	q-room-1-adults=2&
//	q-room-1-children=2&
//	q-room-1-child-0-age=9&
//	q-room-1-child-1-age=11


// var htApt = [[2,[]]];
// var htApt = [[2,[5,2,1]],[2,[]]];
var htApt = [[2,2,[5,7]],[3,3,[9,11,13]]];

//data de checkin - US format
var htCheckin = '2018-06-06';
//data de checkout - US format
var htCheckout = '2018-06-13';
//codigo do hotel na HOTEIS
var htHoteisCode = '126913';
//URL base para a pagina de detalhe do hotel
var htHoteisURLbase = 'https://www.hoteis.com/';

function urlHoteisMount(){
	//codigo do hotel
	htHoteisURLbase = htHoteisURLbase+'ho'+htHoteisCode+'/?';
		
	//checkin & checkout
	htHoteisURLbase = htHoteisURLbase+'q-check-in='+htCheckin+'&'+'q-check-out='+htCheckout+'&'
	
	// hóspedes
	for(quartos=0;quartos<htApt.length;quartos++){
		//adultos
		adtAttr = 'q-room-'+quartos+'-adults='
		htHoteisURLbase = htHoteisURLbase+adtAttr+htApt[quartos][0]+'&';
		
		//crianças
		chdAttr = 'q-room-'+quartos+'-children='
		htHoteisURLbase = htHoteisURLbase+chdAttr+htApt[quartos][1]+'&';
		
		//idades das crianças
		for(agesItr=0;agesItr<htApt[quartos][2].length;agesItr++){
			agesAttr = 'q-room-'+quartos+'-child-'+agesItr+'-age=';
			htHoteisURLbase = htHoteisURLbase+agesAttr+htApt[quartos][2][agesItr];
			if((agesItr <= (htApt[quartos][2].length-1)) && (quartos <= (htApt.length-1))) {
				htHoteisURLbase = htHoteisURLbase + '&';
			}
		}
	}
}

urlHoteisMount();
page.open(htHoteisURLbase, function(status) {
	console.log('Passo 1');
  	if (status !== 'success') {

    	console.log('Unable to access network');

  	} else {

  		var returnName = page.evaluate(function(){
  			return document.querySelector("h1").innerHTML;
  		});
		    
	    var returnPrice = page.evaluate(function() {
	    	var htPriceCurr = document.querySelector(".featured-price .pricing .price .current-price").innerHTML;
		  	return htPriceCurr
		});
	    console.log("");
	    console.log("---------------------------------");
	    console.log("");
		console.log(returnName);
		console.log(returnPrice);
		console.log("");
		console.log(htHoteisURLbase);
		console.log("");
	    console.log("---------------------------------");
	    console.log("");
	
	    phantom.exit();
  }
});
