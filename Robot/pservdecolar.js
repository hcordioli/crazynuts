var webserver = require('webserver');
var server = webserver.create();
var page = require('webpage').create();
console.log ('Starting Decolar.com server and listening requests on port 1350 ...');
var service = server.listen(1350, function(request, response) {
	console.log ('Request received at ' + new Date() + request);
	jsonEntry=JSON.stringify(parseGET(request.url), undefined, 4);
	obj = JSON.parse(jsonEntry);
	htCheckin = obj.checkin;
	htCheckout = obj.checkout;
	htDecolarCode = obj.hotelId;
	htRoom1 = obj.room1;
	htRoom2 = obj.room2;
	htRoom3 = obj.room3;
	htRoom4 = obj.room4;
	htDecolarURLbase = 'https://www.decolar.com/search/hotel/details/';
	htDecolarResponse = 'teste';
	console.log ('1->',htCheckin,htCheckout,htDecolarCode,htRoom1,htRoom2,htRoom3,htRoom4);
	urlDecolarMount(htCheckin,htCheckout,htDecolarCode,htRoom1,htRoom2,htRoom3,htRoom4);
	console.log ('9->... voltou',htDecolarURLbase);
	page.open(htDecolarURLbase, function(status) {
		console.log('Passo 1');
		if (status !== 'success') {
			console.log('Unable to access network');
		} else {
			var returnName = page.evaluate(function(){
				return document.querySelector("#hf-robot-title").innerHTML;
			});
			var returnPrice = page.evaluate(function() {
				var htPriceCurr = document.querySelector(".hf-price-box-fare p.hf-fare .currency").innerHTML;
				var htPrice = document.querySelector(".hf-price-box-fare p.hf-fare .hf-price").innerHTML;
				var htPriceCents = document.querySelector(".hf-price-box-fare p.hf-fare .hf-price-cents").innerHTML;
				return htPriceCurr+" "+htPrice+","+htPriceCents
			});
			console.log("");
			console.log("---------------------------------");
			console.log("");
			console.log(returnName);
			console.log(returnPrice);
			console.log("");
			console.log(htDecolarURLbase);
			console.log("");
			console.log("---------------------------------");
			console.log("");
			htDecolarResponse = '{"name" : "'+returnName+'","price" : "'+returnPrice+'","url" : "'+htDecolarURLbase+'"}';
			console.log (htDecolarResponse);
		}
		console.log ('9->... voltou',htDecolarResponse);
		response.write(htDecolarResponse);
		response.statusCode = 200;
		response.close();
//		phantom.exit();
	})
});

function parseGET(url){
  // adapted from http://stackoverflow.com/a/8486188
  var query = url.substr(url.indexOf("?")+1);
  var result = {};
  query.split("&").forEach(function(part) {
    var e = part.indexOf("=")
    var key = part.substr(0, e);
    var value = part.substr(e+1);
    result[key] = decodeURIComponent(value);
  });
  return result;
}

function urlDecolarMount(ihtCheckin,ihtCheckout,ihtDecolarCode,ihtRoom1,ihtRoom2,ihtRoom3,ihtRoom4){
	//codigo do hotel
	htDecolarURLbase = htDecolarURLbase+htDecolarCode+"/";
		
	//checkin & checkout
	htDecolarURLbase = htDecolarURLbase+htCheckin+"/"+htCheckout+"/"
	
	// quarto 1
	var room1Array = ihtRoom1.split(',');
	console.log ('q1->',room1Array[0], room1Array[1], room1Array[2]);
	console.log ('q1->', parseInt(room1Array[0]));
	if (parseInt(room1Array[0]) > 0) {
		// adultos
		htDecolarURLbase = htDecolarURLbase+room1Array[0];
		console.log ('q1->', parseInt(room1Array[1]));
		if (parseInt(room1Array[1]) > 0){
			htDecolarURLbase = htDecolarURLbase+'-';
			var begin1 = htRoom1.indexOf('\[');
			var end1 = htRoom1.indexOf('\]');
			var ages1temp = htRoom1.slice (begin1+1,end1);
			var ages1Array = ages1temp.split(',');
			console.log ('q1. ages-> ',ages1Array,ages1Array.length);
			for(agesItr=0;agesItr<ages1Array.length;agesItr++){
				htDecolarURLbase = htDecolarURLbase+ages1Array[agesItr];
				if (agesItr<ages1Array.length-1) {
					htDecolarURLbase = htDecolarURLbase+'-';
				}
			}
		}
		console.log ('4->',htDecolarURLbase);
	}

	// quarto 2	
	if (ihtRoom2 !==undefined) {
		htDecolarURLbase = htDecolarURLbase+'!';
		var room2Array = ihtRoom2.split(',');
		console.log ('q2->',room2Array[0], room2Array[1], room2Array[2]);
		console.log ('q2->', parseInt(room2Array[0]));
		if (parseInt(room2Array[0]) > 0) {
			// adultos
			htDecolarURLbase = htDecolarURLbase+room2Array[0];
			console.log ('q2->', parseInt(room2Array[1]));
			if (parseInt(room2Array[1]) > 0){
				htDecolarURLbase = htDecolarURLbase+'-';
				var begin2 = htRoom2.indexOf('\[');
				var end2 = htRoom2.indexOf('\]');
				var ages2temp = htRoom2.slice (begin2+1,end2);
				var ages2Array = ages2temp.split(',');
				console.log ('q2. ages-> ',ages2Array,ages2Array.length);
				for(agesItr=0;agesItr<ages2Array.length;agesItr++){
					htDecolarURLbase = htDecolarURLbase+ages2Array[agesItr];
					if (agesItr<ages2Array.length-1) {
						htDecolarURLbase = htDecolarURLbase+'-';
					}
				}
			}
		}
	} else {
		console.log ('quarto 2 vazio');
	}
	// quarto 3
	if (ihtRoom3!==undefined){
		htDecolarURLbase = htDecolarURLbase+'!';
		var room3Array = ihtRoom3.split(',');
		console.log ('q3->',room3Array[0], room3Array[1], room3Array[2]);
		console.log ('q3->', parseInt(room3Array[0]));
		if (parseInt(room3Array[0]) > 0) {
			// adultos
			htDecolarURLbase = htDecolarURLbase+room3Array[0];
			console.log ('q3->', parseInt(room3Array[1]));
			if (parseInt(room3Array[1]) > 0){
				htDecolarURLbase = htDecolarURLbase+'-';
				var begin3 = htRoom3.indexOf('\[');
				var end3 = htRoom3.indexOf('\]');
				var ages3temp = htRoom3.slice (begin3+1,end3);
				var ages3Array = ages3temp.split(',');
				console.log ('q3. ages-> ',ages3Array,ages3Array.length);
				for(agesItr=0;agesItr<ages3Array.length;agesItr++){
					htDecolarURLbase = htDecolarURLbase+ages3Array[agesItr];
					if (agesItr<ages3Array.length-1) {
						htDecolarURLbase = htDecolarURLbase+'-';
					}
				}
			}
		}
	} else {
		console.log ('quarto 3 vazio');
	}
	
	// quarto 4
	if (ihtRoom4!==undefined){
		htDecolarURLbase = htDecolarURLbase+'!';
		var room4Array = ihtRoom4.split(',');
		console.log ('q4->',room4Array[0], room4Array[1], room4Array[2]);
		console.log ('q4->', parseInt(room4Array[0]));
		if (parseInt(room4Array[0]) > 0) {
			// adultos
			htDecolarURLbase = htDecolarURLbase+room4Array[0];
			console.log ('q4->', parseInt(room4Array[1]));
			if (parseInt(room4Array[1]) > 0){
				htDecolarURLbase = htDecolarURLbase+'-';
				var begin4 = htRoom4.indexOf('\[');
				var end4 = htRoom4.indexOf('\]');
				var ages4temp = htRoom4.slice (begin4+1,end3);
				var ages4Array = ages4temp.split(',');
				console.log ('q4. ages-> ',ages4Array,ages4Array.length);
				for(agesItr=0;agesItr<ages4Array.length;agesItr++){
					htDecolarURLbase = htDecolarURLbase+ages4Array[agesItr];
					if (agesItr<ages4Array.length-1) {
						htDecolarURLbase = htDecolarURLbase+'-';
					}
				}
			}
		}
	} else {
		console.log ('quarto 4 vazio');
	}
}
