$(document).ready(function() {

  var quote = "";
  getQuoteFromService();

  function getQuoteFromService() {
    jQuery.ajax({
        type: "GET",
        url: "http://api.icndb.com/jokes/random",
        dataType: "json",
        crossDomain: true,
        success: function(json) {
          quote = json.value.joke;
          var html = "";
          html += "<p><em>";
          html += quote;
          html += "</em></p><p>- Anonymous</p>";
          $(".quote").html(html);
          var url = "";
          url += "https://twitter.com/intent/tweet?text=";
          url += encodeURI(quote);
          // Clean up old twitter widget.
          $(".twitter-share-button").remove();
          // Create new twitter anchor.
          var newLink = $("<a/>", {
            "html": "Tweet",
            "class": "twitter-share-button",
            "data-size": "large",
            "href": url
          });
          newLink.appendTo("#twitterDiv");
    //      $(".twitter-share-button").append("&nbsp;&nbsp;");
          twttr.widgets.load(
            document.getElementById("#twitterDiv")
          );
        }
    });
  }

  $("#getQuote").on("click", function() {
    getQuoteFromService();
  });

});
