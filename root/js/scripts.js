function main() {
    var CookieName = document.getElementById('Benutzername').value;
    var CookiePw = document.getElementById('password').value;

    browserDetect();
    move();

    setCookie('name', CookieName);
    setCookie('passwort' , CookiePw);
    console.log(getCookie('name'));

}

// Anfang Browser Detect
function browserDetect() {
    var browser;

    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
    {
        browser = "Der genutzte Browser ist: Opera";
        createDiv(browser);
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        browser = "Der genutzte Browser ist: Chrome";
        createDiv(browser);
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        browser = "Der genutzte Browser ist: Safari";
        createDiv(browser);
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 )
    {
        browser = "Der genutzte Browser ist: Firefox";
        createDiv(browser);
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
        browser = "Der genutzte Browser ist: Internet Explorer";
        createDiv(browser);
    }
    else
    {
        browser = "Der genutzte Browser ist: unbekannt";
        createDiv(browser);
    }
}

function createDiv(k) {
    var browser = k;
    var divTag = document.createElement("div");
    divTag.id = "browser";
    divTag.setAttribute("align","center");
    divTag.style.margin = "0px auto";
    divTag.className = "dynamicDiv";
    divTag.innerHTML = k;
    document.body.appendChild(divTag);
}

function visible() {
    document.getElementById("browser").style.visibility="visible";
}

function invisible() {
    document.getElementById("browser").style.visibility="hidden";
}
// Ende Browser Detect


// ===================


// Start Cookie
function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + (dateExpire*24*60*60*1000));
    var dateExpire = "expires="+date.toUTCString();

    document.cookie = name + '=' + value + ';' + dateExpire;
}
function getCookie(cookieObj) {
    var element = cookieObj + '=';
    var cookieArray = document.cookie.split(';');

    for(var i = 0; i < cookieArray.length; i++) {
        var cookieElement = cookieArray[i];

        while (cookieElement.charAt(0) === ' ') {
            cookieElement = cookieElement.substring(1);
        }
        console.log(cookieElement);
    }
}
// Ende Cookie

// ===================

// Zeichnen mit setInterval()
function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
// Ende Zeichnen

// ===================

// Setzt Formularfelder auf Beispielwerte
function example() {
    document.getElementById('Benutzername').value = 'Mustername';
    document.getElementById('password').value ='Musterpasswort';
    document.getElementById('Email').value = 'Mustermail@mail.com';
}
// Ende Beispiel

// =====================

// JQuery / AJAX
$(document).ready(function(event){
    $("#userinfo").submit(function(event){
        event.preventDefault();
        //Einzelne Schlüsselwerte, unnötig deswegen ausgeklammert
        //var name = new Object();
        //var pw = new Object();
        //var mail = new Object();
        $.ajax({
            type: 'POST',
            url: 'cgi/action.cgi',
            dataType: "text",
            data: $(this).serialize(),
            success: function (data) {
                $(".outputBox").html(data);
                //$('#name').val(data.Benutzername);
                //$('#pw').val(data.password);
                //$('#mail').val(data.Email);
            },
            fail: function () {
                $(".outputBox").html('Error loading information from server.');
            }
        })
        $('.outputBox').css('visibility','visible');
    });
});
