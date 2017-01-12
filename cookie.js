/**
 * Set the cookie
 * 
 * @param {string} cname - Name of the cookie
 * @param {string} cvalue - Value to save into the cookie
 * @param {exdays} exdays - Days for the cookie
 */
function setCookie(cname, cvalue, exdays) 
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Get the value of the cookie
 * 
 * @param {string} cname - Name of the cookie
 * @returns {string} Value of the cookie or an empty string
 */
function getCookie(cname) 
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * Check for the cookie or the get parameter
 * If the the parameter exist, the cookie is saved (overwritten). 
 * 
 * @param {string} cname - Name of the cookie
 * @returns {string} Value of the cookie if exists
 */
function checkCookie(cname) 
{
    var value = getParameterByName(cname);

    if( value != '' && value != null ){
    	setCookie(cname, value, 365);
    }else{
        value = getCookie(cname);
    }

    if( value != '' && value != null ){
        return value;
    }

    return false;
}

/**
 * Get URL Parameter
 * 
 * @param {string} name - Name of the parameter
 * @returns {string | null} Value of the parameter if exists
 */
function getParameterByName(name) 
{
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/**
 * Place the value of the cookie on the given place id
 * 
 * @param {string} place - id of the place where to set the value
 * @param {string} value - value to be placed
 */
function placeOnField(place, value)
{
    var element = document.getElementById(place);
    if( element ){
        element.value = value;
    }
}

/**
 * Wrapper for checkCookie and placeOnField
 * 
 * @param {string} cname - Name of the cookie or parameter
 * @param {string} place - Name of the place to put the value
 */
function writeCookieOnPlace(cname, place)
{
    var value = checkCookie(cname);
    var element = document.getElementById(cname);
    
    if( value && element ){
        placeOnField(place, value);
    }
}
