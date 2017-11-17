$('#cardFormPage').live('pageshow', function(event) {
	var id = getUrlVars()["cardid"];
	alert(serviceURL + "cardSearch?cardid=" + id);
	$.getJSON(serviceURL + "cardSearch?cardid=" + id, displayCardDetails);
});

function displayCardDetails(data)
{
	alert($.dump(data));
}
