function getToken() {
	return getUrlVars()['token'];
}

function handleSuccess() {
	console.log("Success!");
}

function handleFailure() {
	console.error("Error!");
}

function submit(wApi) {
	var confirmation = {
		rsvp: $("input[name='rsvp']").val(),
		adults: $("input[name='adults']").val(),
		kids: $("input[name='kids']").val()
	};
	wApi.rsvp(confirmation)
		.then(handleSuccess, handleFailure);
}

var wApi = weddingApi(getToken());

$(document).ready(function() {
	$("form").submit(function(e) {
		e.preventDefault();
		submit(wApi);
	});
});