var sec = 05;
var min = 00;
//var sec2 = 00
//var min2 = 5;
var inter;
var pauseDone = false;

$("#start").click(function(){
console.log(inter+"1er");
for (i=0;i<4;i++){
	if (inter!="1") {
		inter = setInterval(function(){
			if (sec===00 + pauseDone) {
				sec=60
				min--
				pauseDone = false;
			}

			sec--
			$("#sec").html(sec);
			console.log(sec);

			if (min + sec ===00 && !pauseDone){
			alert("pause")
				min=00;
				sec=10;
				pauseDone = true;
			};

			$("#sec").html(sec);
			$("#min").html(min);

		}, 1000)
	}
}

});

