function getCookie(cookieKey){
    let cookies = document.cookie;
    let spCookies = cookies.split(';');
    let result = NaN;
    spCookies.forEach(element =>{
        let key = element.split('=')[0].trim();
        if (key == cookieKey){
            result =element.split('=')[1];

        } 
    })

    return  result || NaN

}