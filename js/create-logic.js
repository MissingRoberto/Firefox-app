$(document).ready(function(){
	$('#create_button').click( function(){

		var drug = {
				"name": $("#name").val() ,
			    "amount": $("#amount").val(),
			    "stock": $("#stock").val(), 
			    "date": $("#date").val(),
			    "times": $("#times").val(),
			    "start_time": $("#start_time").val()
			};

		var drugs=localStorage.getItem('drugs');

		if(drugs!=null){
			var drugsJson = eval(drugs);
		}else{
			var drugsJson = new Array();
		}

		drugsJson.push(drug);

		localStorage.setItem("drugs", JSON.stringify(drugsJson));

		
		$("form").submit();
	});



});