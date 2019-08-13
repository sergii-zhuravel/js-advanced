var lang;
var url;
var count = 0;

search_btn.onclick = function()
{
    lang = document.getElementById("search_field").value;
    url = `https://api.github.com/search/repositories?q=${lang}+language:javascript&per_page=100`;

    var requestOptions = {
        url: url,
        method: "GET"
    };

    if(repos.lastElementChild != null){
        repos.innerHTML = "";
    }

    makeRequest(requestOptions, updateRepos);
}

function updateRepos(reposArray) 
{
  var repos = reposArray.items;
  var NUMBER_OF_REPOS = 10;
  for (var i = 0; i < NUMBER_OF_REPOS; i++) {
    count++;
    displayRepos(repos[i]);
  }
}

function displayRepos(reposObject) 
{
  var repos = document.getElementById("repos");
  var repoElement = document.createElement("div");
  var avatar = reposObject.owner.avatar_url;
  var repo_url = reposObject.html_url;
  repoElement.innerHTML =
    '<div style = "margin-right: 10px">' +
    `<img src="${avatar}" style="width: 50px; height: 50px">` +
    `<a href="${repo_url}" style = "font-weight: bold">${reposObject.full_name}</a>` +
    `<p style="display: inline-block;">${reposObject.description}</p>` +
    '</div>';
  repos.appendChild(repoElement);
}

function makeRequest(requestOptions, successHandler) 
{
  var httpRequest = false;

  if (window.XMLHttpRequest) {
    // Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // IE
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }

  if (!httpRequest) {
    alert("Не вышло :( Невозможно создать экземпляр класса XMLHTTP ");
    return false;
  }
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4) {
      if (httpRequest.status == 200) {
        var responseData = JSON.parse(httpRequest.responseText);
        successHandler(responseData);
      } else {
        console.error("С запросом возникла проблема.");
      }
    }
  };
  httpRequest.open(requestOptions.method, requestOptions.url, true);
  httpRequest.send(requestOptions.params || null);
}