function getTweet() {
  $.getJSON("http://api.icndb.com/jokes/random", function (json) {
    var joke = json.value.joke;
    var tweetLink = '<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + joke + '"><i class="fa fa-twitter" aria-hidden="true"></i> Tweet</a>';
    $('#wrapper').show('slow');
     $('#quote').html(json.value.joke);
    $('#tweet').css('display', 'inline-block');
    $('#tweet').html(tweetLink);
  });
}
$( document ).ready(function() {
  getTweet();
});
$("#quote-button").on("click", function() {
  getTweet();
});
