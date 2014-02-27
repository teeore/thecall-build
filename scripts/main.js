feedUrl = "http://www.sonypictures.com/previews/movies/dearjohn.xml";
clipName = 1477;
isSingleVideo=false;
parentSwf ="flashcontent";

//externalPlay(clipName)
$(function () {
	$('.playVideo').bind('click',function(){
	//externalPlay($(this).attr('href'));
	console.log($(this).attr('href'));
	openOverlay($(this).attr('href'));
	return false;
	});
});
