Forms: Translating from nerd to designer
========================================

Inside `search.html` you will find an example of a search form.  The
form will allow you to search Youtube for certain titles, duration, HD
and CC availability, as well as uploaded date. The search form follows
these rules:

Action URL
----------

<https://gdata.youtube.com/feeds/api/videos>

Codes
-----

<table>
  <tr>
    <th>name</th>
    <th>description</th>
    <th>value(s)</th>
  </tr>
  <tr>
    <td><code>q</code></td>
    <td>text you are looking for</td>
    <td></td>
  </tr>
  <tr>
    <td><code>duration</code></td>
    <td>how long the video is</td>
    <td><code>short,medium,long</code></td>
  </tr>
  <tr>
    <td><code>hd</code></td>
    <td>high definition option</td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>v</code></td>
    <td>version option</td>
    <td><code>2</code></td>
  </tr>
  <tr>
    <td><code>time</code></td>
    <td>when video was posted</td>
    <td><code>today,this_week,this_month,all_time</code></td>
  </tr>
</table>
