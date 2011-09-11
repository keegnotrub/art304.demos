Forms: Translating from nerd to designer
========================================

Inside `search.html` you will find an example of a search form.  The
form will allow you to search Youtube for certain titles, duration, HD
and CC availability, as well as uploaded date. The search form follows
these rules:

Action URL
----------

<http://www.youtube.com/results>

Codes
-----

<table>
  <tr>
    <th>name</th>
    <th>description</th>
    <th>value(s)</th>
  </tr>
  <tr>
    <td><code>search_query</code></td>
    <td>text you are looking for</td>
    <td></td>
  </tr>
  <tr>
    <td><code>search_duration</code></td>
    <td>how long the video is</td>
    <td><code>short,long</code></td>
  </tr>
  <tr>
    <td><code>high_definition</code></td>
    <td>high definition option</td>
    <td><code>1</code></td>
  </tr>
  <tr>
    <td><code>closed_captions</code></td>
    <td>closed caption option</td>
    <td><code>1</code></td>
  </tr>
  <tr>
    <td><code>uploaded</code></td>
    <td>when video was posted</td>
    <td><code>d,w,m</code></td>
  </tr>
</table>
