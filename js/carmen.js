function validacion(formulario) {

	valor1 = document.getElementById("date").value;
	if (valor1 == null || valor1.length == 0 || /^\s+$/.test(valor1)) {		  
  	  alert('POR FAVOR. DIGITA FECHA DE REGISTRO');
	  date.focus();
	  verificar=false;
	  return false;		 
	}
	else 
	
	valor2 = document.getElementById("hora").value;
	if (valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {		  
  	  alert('POR FAVOR. DIGITA FECHA ');
	  hora.focus();
	  verificar=false;
	  return false;		 
	}
	
	else

	lista = document.getElementById("producto"); 
	if (lista.selectedIndex == null || lista.selectedIndex == 0) { 
    alert("POR FAVOR. ELIGE UN PRODUCTO DE LA LISTA")
     producto.focus();
		verificar=false;
    return false
    }		

	else

	valor3 = document.getElementById("codigo").value;
	if (valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3)) {
	  alert('POR FAVOR. DIGITA EL CODIGO DE REGISTRO');
	   codigo.focus();
		verificar=false;
	   return false;		  
	}
	else

	medio = document.getElementsByName("medio");
			 
					var seleccionado = false;
			for(var i=0; i<medio.length; i++) {    
			  if(medio[i].checked) {
			    seleccionado = true;
			    break;
			  }
			}
			 
			if(!seleccionado) {
				alert('POR FAVOR. DIGITA TU MEDIO DE PAGO');
			 	verificar=false;
			  	return false;
			}
	else

	lista = document.getElementById("pais"); 
	if (lista.selectedIndex == null || lista.selectedIndex == 0) { 
    alert("POR FAVOR. ELIGE El PAIS")
     pais.focus();
		verificar=false;
    return false
    }

    else

	valor4 = document.getElementById("peso").value;
	if (valor4 == null || valor4.length == 0 || /^\s+$/.test(valor4)) {
	  alert('POR FAVOR. DIGITA EL PESO ');
	   peso.focus();
		verificar=false;
	   return false;		  
	}
	else

	valor5= document.getElementById("telefono").value;
	if (valor5 == null || valor5.length == 0 || /^\s+$/.test(valor5)) {
	  alert('POR FAVOR. DIGITA TU TELEFONO');
	   telefono.focus();
		verificar=false;
	   return false;		  
	}
	else

	valor6= document.getElementById("email").value;
	if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor6)) ) {
	  alert('POR FAVOR. DIGITA TU EMAIL');
	  email.focus();
		verificar=false;
	  return false;	
	}
	else

    if(!terminos.checked){
	alert("POR FAVOR, ACEPTA TERMINOS Y CONDICIONES");
	terminos.focus();
	verificar=false;
	return false;
	}

  
 

	

		var n=0;

	    var table = document.getElementById("Tabla");

	    var row = table.insertRow(1);
	    var cell1 = row.insertCell(0);
	    var cell2 = row.insertCell(1);
	    var cell3 = row.insertCell(2);
	    var cell4 = row.insertCell(3);
	    var cell5 = row.insertCell(4);
	    var cell6 = row.insertCell(5);
	    var cell7 = row.insertCell(6);
	    var cell8 = row.insertCell(7);
	    var cell9 = row.insertCell(8);
	    var cell10 = row.insertCell(9);
	    var cell11 = row.insertCell(10);
	    
	    
	    cell1.innerHTML = n+1;


	    var valor2 = document.getElementById("date").value;
	    cell1.innerHTML = valor2;
	    var valor3 = document.getElementById("hora").value;		    
	    cell2.innerHTML = valor3;
	    var valor4 = document.getElementById("producto").value; 
	    cell3.innerHTML = valor4;
	    var valor5 = document.getElementById("color").value; 
	    cell4.innerHTML = valor5;
	    var valor6 = document.getElementById("codigo").value; 
	    cell5.innerHTML = valor6;
	    var valor7 = document.getElementById("medio").value; 
	    cell6.innerHTML = valor7;
	    var valor8 = document.getElementById("pais").value; 
	    cell7.innerHTML = valor8;
	    var valor9 = document.getElementById("rango").value; 
	    cell8.innerHTML = valor9;
	    var valor10 = document.getElementById("peso").value; 
	    cell9.innerHTML = valor10;
	    var valor11 = document.getElementById("telefono").value; 
	    cell10.innerHTML = valor11;
	     var valor12 = document.getElementById("email").value; 
	    cell11.innerHTML = valor12;
	    document.getElementById("formulario").reset();
	    return true;

}
function myDeleteFunction() {
    document.getElementById("Tabla").deleteRow(1);
}

function doSearch ()
		{
			var tableReg = document.getElementById('Tabla');
			var searchText = document.getElementById('searchTerm').value.toLowerCase();
			var cellsOfRow="";
			var found=false;
			var compareWith="";
 
			
			for (var i = 1; i < tableReg.rows.length; i++)
			{
				cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
				found = false;
				
				for (var j = 0; j < cellsOfRow.length && !found; j++)
				{
					compareWith = cellsOfRow[j].innerHTML.toLowerCase();
					
					if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
					{
						found = true;
					}
				}
				if(found)
				{
					tableReg.rows[i].style.display = '';
				} else {
					
					tableReg.rows[i].style.display = 'none';
				}
			}
		}

