
function f1() {
	let inp1 = document.getElementById('idinp').value;
	let sel1 = document.getElementById('select').value;
	let inp2 = document.getElementById('idinp2').value;
	console.log('done');

 	if (sel1 == '+' ) {
 		var result = Number(inp1) + Number(inp2);
 	}
 	else if (sel1 == '-') {
 		var result = Number(inp1) - Number(inp2);
 	}

 	else if (sel1 == '*') {
 		var result = Number(inp1) * Number(inp2);
 	}
 	else if (sel1 == '**') {
 		var result = Number(inp1) ** Number(inp2);
 	}

 	else if (sel1 == '%') {
 		var result = Number(inp1) % Number(inp2);
 	}

 	else{
 		var result = Number(inp1) / Number(inp2);
 	}



 	document.getElementById('idresult').value = result

}
