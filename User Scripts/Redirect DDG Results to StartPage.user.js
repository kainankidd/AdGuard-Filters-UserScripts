// ==UserScript==
// @name	Redirect DuckDuckGo Results to StartPage
// @description	Redirects DDG Search Results to StartPage, Tested on macOS Safari
// @author Kainan Kidd

// @include      https://duckduckgo.com/?q=*

// @version 0.0.1.20140524095724
// ==/UserScript==
(function(){
  var debug = 0;
  var new_location = location.href.replace("duckduckgo.com/", "startpage.com/do/search/");
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