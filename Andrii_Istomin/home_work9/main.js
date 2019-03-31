function makeRequest(url, method, params) {
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
    showPictureInformation(httpRequest);
  };
  httpRequest.open(method, url, true);
  httpRequest.send(params);
}

function showPictureInformation(httpRequest) {
  if (httpRequest.readyState == 4) {
    if (httpRequest.status == 200) {
      var responseData = JSON.parse(httpRequest.responseText);
      var slicedData = responseData.items.slice(0, 10);

      //   console.log(responseData.items[0]);
      //   console.log(slicedData);
      for (let i = 0; i < slicedData.length; i++) {
        const element = slicedData[i];
        let restInfo = document.getElementById("rest-info");
        let avatarImg = document.createElement("img");
        let searchButton = document.getElementById("search-button");
        let repoName = document.createElement("a");
        searchButton.addEventListener("click", handleSearchClick);
        avatarImg.setAttribute("src", element.owner.avatar_url);
        restInfo.appendChild(avatarImg);
        repoName.innerHTML = element.full_name;
        repoName.setAttribute("href", element.html_url);
        restInfo.appendChild(repoName);
      }
    } else if (httpRequest.status == 404) {
      console.log("For O For");
    } else {
      console.error("С запросом возникла проблема.");
    }
  }
}

makeRequest(
  "https://api.github.com/search/repositories?q=react+language:javascript&per_page=15",
  "GET"
);

handleSearchClick = () => {
  let searchInput = document.getElementById("search-input").value;
  makeRequest(
    "https://api.github.com/search/repositories?q=" +
      searchInput +
      "+language:javascript&per_page=15",
    "GET"
  );
};
