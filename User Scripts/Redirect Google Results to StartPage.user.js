// ==UserScript==
// @name	Redirect Google Results to StartPage
// @description	Redirects Google Search Results to StartPage, Tested on macOS Safari
// @author Kainan Kidd

// @include      https://*.google.com/search?*
// @include      https://*.google.co.uk/search?*

// @version 0.0.1.20140524095724
// ==/UserScript==
(function(){
  var debug = 0;
  var new_location = location.href.replace("google.co.uk/search", "startpage.com/do/search/");
var new_location = location.href.replace("google.com/search", "startpage.com/do/search/");
  if ( debug > 0 ) {
    alert(  "Hash:     "+location.hash+
          "\nHost:     "+location.host+
          "\nHostname: "+location.hostname+
          "\nHREF:     "+location.href+
          "\nPathname: "+location.pathname+
          "\nPort:     "+location.port+
          "\nProtocol: "+location.protocol+
          "\n"+
          "\nNew Location: "+new_location);
  };
  location.href = new_location;
})();