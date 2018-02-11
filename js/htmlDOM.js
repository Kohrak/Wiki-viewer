function addResult(title, snippet, link){
  var element = document.createElement("div");
  element.setAttribute("class", "wiki-result");

  element.innerHTML = "<a target=\'_blank\' href=\'" + link + "\'>" +
                        "<h3>" + title + "</h3>" +
                        "<p>" + snippet + "</p>" +
                      "</a>";
  document.body.appendChild(element);
}
document.getElementById("inputTopic").addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      wikiSearch();
    }
  });
