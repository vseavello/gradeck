var students = [
	{userid:0, username:'Student One',   role:'Student', orgname:'Org 1', email:'student1@example.com'},
	{userid:1, username:'Student Two',   role:'Student', orgname:'Org 1', email:''},
	{userid:2, username:'Student Trhee', role:'Student', orgname:'Org 1', email:'student3@example.com'}
];

$('#studentListPage').bind('pageinit', function(event) {
	$.getJSON(serviceURL + 'userSearch.php?role=student', displayStudent);
});

function getStudentList(studentlist)
{
	$('#studentList li').remove();
	$.each(studentlist, function(index, student) {
		$('#studentList').append('<li><a href="studentdetails.html?id='+student.userid+'">'+student.username+'</a></li>');
	});
	$('#studentList').listview('refresh');
}

function displayStudent(data)
{
	getStudentList(data.userdata);
}
