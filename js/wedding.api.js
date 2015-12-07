/* global $ */

var API_URL = "http://api.davidgabi.xyz"; 

function weddingApi(token) {
	return {
		rsvp: function(confirmation) {
			var data = JSON.stringify({
				token: token,
				confirmation: confirmation
			});
			return $.ajax({
				url: API_URL,
				method: 'POST',
				data: data,
				contentType: "application/json"
			});
		}
	};
}