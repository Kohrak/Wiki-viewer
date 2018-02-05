// api call https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=peanuts&format=json
// random post: https://en.wikipedia.org/wiki/Special:Random
// link to post by id https://en.wikipedia.org/?curid=

function wikiSearch(){
  var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=peanuts&format=json"
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = function handleResponse(){
    console.log(xhr.responseText)
  }
}
