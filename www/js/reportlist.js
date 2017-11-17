$('#reportListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'userSearch.php?userid='+id, function (data) {
		var reports = data.userdata;
		$.each(reports, function(index, student) {
			$('#reportList').append('<li><a href="studentdetails.html?id=' + student.userid + '">' +
					'<h4>' + student.username + '</h4>' +
					'<p>' + student.role + '</p>' +
					'<span class="ui-li-count">' + student.orgname + '</span></a></li>');
		});
		$('#reportList').listview('refresh');
	});
});
