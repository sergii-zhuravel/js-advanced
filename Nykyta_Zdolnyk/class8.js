document.cookie = 'name = Nick';
document.cookie = 'value = 10';

function getCookie(name) {
    // var matches = document.cookie.match(new RegExp(
    //   "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    // ));
    // return matches ? decodeURIComponent(matches[1]) : undefined;
    var cookieObj = {}; 
    
    var cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
        console.log(i);
        if (cookie[i].split('=')[0].trim() === name) {
            return decodeURIComponent(cookie[i].split('=')[1].trim());
        }
        // cookieObj[cookie[i].split('=')[0].trim()] = ;
        // console.log(i);
    } 
    // return cookieObj[name];
  }
  console.log(getCookie('val'));