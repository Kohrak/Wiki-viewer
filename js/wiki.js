// api call https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=peanuts&format=json
// random post: https://en.wikipedia.org/wiki/Special:Random
// link to post by id https://en.wikipedia.org/?curid=

function wikiSearch(topic){
  var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + topic + "&format=json&callback=callback";
  jsonpRequest(url);
}

function handleJSONP(data){
  //console.log(data.query.search)
  console.log(data.query.search.length + " Results");
  for (var i = 0; i < data.query.search.length; i++){
    var pointer = data.query.search[i];
    addResult(pointer.title, pointer.snippet, generateWikiLink(pointer.pageid));
  }
}

function generateWikiLink(id){
  var url = "https://en.wikipedia.org/?curid=" + id;
  return url
}
