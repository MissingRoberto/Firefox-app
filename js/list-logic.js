
var drugs1= new Array();
function addDrugItem(drug){
    $("#list").append('<li><a href="#"><p><strong>'+drug.name+'</strong></p><p>Restante: '+drug.stock+'</p></a></li>');
}

function addDrugItems(drugsJson){
    for( var i in drugsJson){
        addDrugItem(drugsJson[i]);
    }
}


function addDrug(name, amount, stock,date, times, start_time){
        var drug = {"name":name,"amount": amount,"stock":stock, "date": date,"times": times, "start_time": start_time};
        drugs1.push(drug);
}

$(document).ready(function(){
	$("#edit_mode").hide();

	$('#settings_button').click( function(){
		alert("settings");
			});

	$('#delete_button').click( function(){
		$("#edit_mode").show();
		$("footer").hide();
			});

	$('#delete_selected_button').click( function(){
		$("#edit_mode").show();
		$("footer").hide();

			});

$('#delete_all_button').click( function(){
		$("#edit_mode").hide();
		$("footer").show();
		localStorage.clear();
		$("#content").empty();

		$("#content").append('<ul id="list"></ul><h1>Lista vacia</h1> <p>Pulse en el botón de añadir para crear nuevos elementos</p>');
			});

	$('#done_delete_button').click( function(){
		$("#edit_mode").hide();
		$("footer").show();

			});
 	// 	addDrug("a","b","c","d","e","f");
  //  		addDrug("b","b","c","d","e","f");
		// localStorage.setItem("drugs", JSON.stringify(drugs1));
	var drugs = localStorage.getItem("drugs");

	
	if(drugs!=null){	
		var drugsJson = eval(drugs);
	
		addDrugItems(drugsJson);

	}else{
	    // DO SOMETHING
	     $("#content").append('<h1>Lista vacia</h1> <p>Pulse en el botón de añadir para crear nuevos elementos</p>');
	    
	}

});
