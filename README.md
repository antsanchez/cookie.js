# cookie.js
Simple JavaScript code to set a cookie and write the value somewhere

## Use
Link the script cookie.js.<br>
Call the function writeCookieOnPlace(<i>name_of_the_cookie_or_parameter</i>, <i>name_of_the_input_place_id</i>) to:<br>
<ol>
  <li>Check for the given paramenter or cookie. If the parameter exists, the cookie is saved (overwritten if exists).</li>
  <li>The value of the cookie is saved to the input with the selected id</li>
</ol>

##Example

<code>writeCookieOnPlace('affiliate', 'affiliateName')</code>

<ol>
<li>The code above will look for the parameter "affiliate" on the URL, like: http://yourweb.com/?affiliate=12345</li>
<li>If if exists, will save the value to a cookie with the name "affiliate". If a cookie already exists with that name, it will be overwritten.</li>
<li>If the parameter or the cookie exists, the value will be written on the value of the input field with the id 'AffiliateName'</li>
</ol>
