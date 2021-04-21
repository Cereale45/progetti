
var turno = 0;


function premuto(id){
	
	if(turno%2==0){
		turno++;
		document.getElementById("turno").innerHTML = "turno: " + turno;
		document.getElementById(id).value = "O";
		 
	}else{
		turno++;
		document.getElementById("turno").innerHTML = "turno: " + turno;
		document.getElementById(id).value = "X";
	}
	var resetBtn = document.getElementById(id);
	resetBtn.disabled = true;
	if((getCella("a")=="X" && getCella("b")=="X" && getCella("c")=="X")||(getCella("d")=="X" && getCella("e")=="X" && getCella("f")=="X")||(getCella("g")=="X" && getCella("h")=="X" && getCella("i")=="X")){
		alert("il giocatore 2 ha vinto");
		location.reload();
	}else if((getCella("a")=='X' && getCella("e")=='X' && getCella("i")=='X')||(getCella("c")=='X' && getCella("e")=='X' && getCella("g")=='X')){
		alert("il giocatore 2 ha vinto");
		location.reload();
	}else if((getCella("a")=='X' && getCella("d")=='X' && getCella("g")=='X')||(getCella("b")=='X' && getCella("e")=='X' && getCella("h")=='X')||(getCella("c")=='X' && getCella("f")=='X' && getCella("i")=='X')){
		alert("il giocatore 2 ha vinto");
		location.reload();
	}else if((getCella("a")=='O' && getCella("b")=='O' && getCella("c")=='O')||(getCella("d")=='O' && getCella("e")=='O' && getCella("f")=='O')||(getCella("g")=='O' && getCella("h")=='O' && getCella("i")=='O')){
		alert("il giocatore 1 ha vinto");
		location.reload();
	}else if((getCella("a")=='O' && getCella("e")=='O' && getCella("i")=='O')||(getCella("c")=='O' && getCella("e")=='O' && getCella("g")=='O')){
		alert("il giocatore 1 ha vinto");
		location.reload();
	}else if((getCella("a")=='O' && getCella("d")=='O' && getCella("g")=='O')||(getCella("b")=='O' && getCella("e")=='O' && getCella("h")=='O')||(getCella("c")=='O' && getCella("f")=='O' && getCella("i")=='O')){
		alert("il giocatore O ha vinto");
		location.reload();
	}else if(turno == 9){
		location.reload();
	}

}
function getCella(cella){
	if(cella == "a"){
		return document.getElementById("0").value;
	}else if(cella == "b"){
		return document.getElementById("1").value;
	}else if(cella == "c"){
		return document.getElementById("2").value;
	}else if(cella == "d"){
		return document.getElementById("3").value;
	}else if(cella == "e"){
		return document.getElementById("4").value;
	}else if(cella == "f"){
		return document.getElementById("5").value;
	}else if(cella == "g"){
		return document.getElementById("6").value;
	}else if(cella == "h"){
		return document.getElementById("7").value;
	}else if(cella == "i"){
		return document.getElementById("8").value;
	}
	
}
