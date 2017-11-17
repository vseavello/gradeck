var cards = [
	{cardid:0, cardname:'Card 1', cardtitle:'Card One',   carddescription:'First Card'},
	{cardid:1, cardname:'Card 2', cardtitle:'Card Two',   carddescription:'Second Card'},
	{cardid:2, cardname:'Card 3', cardtitle:'Card Three', carddescription:'Third Card'}
];

$('#cardListPage').bind('pageinit', function(event) {
	getCardList();
});

function getCardList() {
	$('#cardList li').remove();
	$.each(cards, function(index, card) {
		$('#cardList').append('<li><a href="studentlist.html?cardid='+card.cardid+'">'+card.cardname+'</a></li>');
	});
	$('#cardList').listview('refresh');
}

/*
function displayCards()
{
	$.getJSON(serviceURL + 'cardSearch.php', function(data)
		{
		$('#cardList li').remove();
		cards = data.carddata;
		$.each(cards, function(index, card) {
			$('#cardList').append('<li><a href="studentlist.html?cardid='+card.cardid+'">' +
					'<h4>' + card.cardtitle + '</h4>' +
					'<p>' + card.cardname + '</p>' +
					'<p>' + card.carddescription + '</p></a></li>');
		});
		$('#cardList').listview('refresh');
	});
}
*/
