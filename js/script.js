var myWords;
var myTextColor;
var myFontSize;
var myBkgdColor;

$('document').ready(function(){

	$('#submit').click(function(){
		// BONUS INSTRUCTIONS- Add a validator to make sure user has entered text in the text input
		if($('#words').val() == "") {
			alert("Please enter some text for Poster");
		}

		myWords = $('#words').val();
		myTextColor = $('#text_color').val();
		myBkgdColor =$('#bkgdColor').val();
		myFontSize = $('#font_size').val();
		createPoster();

		// need this to prevent default behavior of input element.
		return false;
	});

	function createPoster(){
		$('#poster_text').html(myWords);
		$('#poster_text').css('font-size', myFontSize + "px");
		$('#poster').css('background-color',myBkgdColor);
		$('#poster_text').css('color',myTextColor);
		
	}

	$('#bkgdColor').val('#FFFFFF');
});



