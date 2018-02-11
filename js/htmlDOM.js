function addResult(title, snippet, link){
  var element = document.createElement("div");
  element.setAttribute("class", "wiki-result");
  element.setAttribute("onclick", "window.location.href=\'" + link + "\'");
  element.innerHTML = "<h3>" + title + "</h3>" + "<p>" + snippet + "</p>";
  document.body.appendChild(element);
}