var sec = 00;
var min = 01;
var min2 = 5;
var sec2 = 00
var inter;

$("#start").click(function(){
console.log(inter+"1er");
	if (inter!="1") {
		inter = setInterval(function(){
			if (sec===00) {
				sec=60
				min--
			}

			sec--
			$("#sec").html(sec);
			console.log(sec);

			if (min, sec ===00) {
				min2=5;
				sec2=60;
			}

			$("#sec").html(sec);
			$("#min").html(min);


		}, 1000)
	}

});