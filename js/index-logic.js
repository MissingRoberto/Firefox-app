$(document).ready(function(){
	//$('#medicament_alert').hide();

$('#ok_button').click( function(){
		alert("ok");
			});
$('#problem_button').click( function(){
		var sms = navigation.mozSms;
		sms.send("+34656422095", "Hello world!");
			});
$('#call_button').click( function(){
		var call = new MozActivity({
                name: "dial",
                data: {
                    number: "+46777888999"

                }
            });
			});
$('#settings_button').click( function(){
		alert("settings");
			});

$('#list_button').click( function(){
		window.location.href = 'list.html';
			});

});