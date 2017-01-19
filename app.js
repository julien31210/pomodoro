var sec = 00;
var min = 25;
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


			$("#sec").html(sec);
			$("#min").html(min);
		}, 1000)
	}
});