var mystudents = [
	{userid:0, username:'student 1', role:'student', orgname:'Org 1', email:'student1@example.com'},
	{userid:1, username:'student 2', role:'student', orgname:'Org 1', email:''},
	{userid:2, username:'student 3', role:'student', orgname:'Org 1', email:'student3@example.com'}
];

$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var url = serviceURL + 'userSearch.php?role=student&userid=' + id;
	$.getJSON(url, displayStudentDetails);
});

function getStudentDetails(student)
{
	$('#headerText').text("Student ID: " + student.userid);
	$('#fullName').text(student.username);
	$('#studentTitle').text(student.role);
	$('#studentOrgName').text(student.orgname);

	var url = serviceURL + 'cardSearch.php';
	//alert(url);
	$.getJSON(url, displayCardDetails);
}

function displayStudentDetails(data)
{
	getStudentDetails(data.userdata[0]);
}

function getCardDetails(cards)
{
	var url = "";
	$.each(cards, function(index, card) {
		$('#actionList').append('<li><a href="cardform.html?cardid="'+card.cardid+'"><h3>'+card.cardtitle+'</h3></a></li>');
	});
	$('#actionList').listview('refresh');
}

function displayCardDetails(data)
{
	//alert($.dump(data));
	getCardDetails(data.carddata);
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
