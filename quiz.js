const gabarito1 = 18;
const gabarito2 = 132;
const gabarito3 = 9;



function Gabarito(){

	let resposta1 = document.querySelector("input[name=resposta1]:checked")
	let resposta2 = document.querySelector("input[name=resposta2]:checked")
	let resposta3 = document.querySelector("input[name=resposta3]:checked")

	if (resposta1.value == gabarito1){
		 document.getElementById("id18").setAttribute("style","color: #00FF00;");
		}

	else {
		document.getElementById("id"+resposta1.value).setAttribute("style","color: red;")
	}

	if (resposta2.value == gabarito2){
		 document.getElementById("id132").setAttribute("style","color: #00FF00;");
		}

	else {
		document.getElementById("id"+resposta2.value).setAttribute("style","color: red;")
	}

	if (resposta3.value == gabarito3){
		 document.getElementById("id9").setAttribute("style","color: #00FF00;");
		}

	else {
		document.getElementById("id"+resposta3.value).setAttribute("style","color: red;")
	}

}

