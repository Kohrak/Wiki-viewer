function addResultsSection(){
  var element = document.createElement("section");
  element.setAttribute("id", "resultsSection");
  document.getElementById("resultsBox").appendChild(element);
}

function addResult(title, snippet, link){
  var element = document.createElement("div");
  element.setAttribute("class", "wiki-result");
  element.innerHTML = "<a target=\'_blank\' href=\'" + link + "\'>" +
                        "<h3>" + title + "</h3>" +
                        "<p>" + snippet + "</p>" +
                      "</a>";
  document.getElementById("resultsSection").appendChild(element);
}

document.getElementById("inputTopic").addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      wikiSearch();
    }
  });

function cleanResults(){
  var element = document.getElementById('resultsSection')
  if (element != null)
  document.getElementById("resultsBox").removeChild(element);
}
