# What is Emmet ? 
Emmet is a set of plug-ins for text editors that
allow for high-speed coding and editing in HTML,XML
etc
ex- 
nav>ul>li
<nav>
    <ul>
        <li></li>
    </ul>
</nav>

div+p+bq
<div></div>
<p></p>
<blockquote></blockquote>

https://docs.emmet.io/cheat-sheet/

# Diff between Library and Framework ?
-Libraries provide developers with predefined functions
and classes to make their work easier and boost the
development process

Framwork, on the other hand, is like the foundation
upon which developers build applicatoins for specific
platforms

-By using a libarary, you can control the flow of the 
application and call the library.

but  when you use a framwork, the control is inverted
i.e. the framework controls the flow and calls your code


-Libraries are a collection of helper modules,objects,
classes, functions,message template, pre-written code
etc.

Frameworks consist of a lot of APIs,compilrers,toolsets,
support programs, libraries etc

https://www.interviewbit.com/blog/framework-vs-library/


# What is CDN ? Why do we use it ?
Content delivery network refers to a geographically
distributed group of servers which work together to
provide fast delivery of internet content.

Imporves website load time by distributing content
closer to website visitors by using nearyby CND server

Through caching and other optimizations CDN reducing
bandwidth consts

At its core, a CDN is a network of servers linked 
together with the goal of delivering content as 
quickly, cheaply, reliably, and securely as possible. 
In order to improve speed and connectivity, a CDN 
will place servers at the exchange points between
 different networks.

https://www.cloudflare.com/en-gb/learning/cdn/what-is-a-cdn/

# Why is React known as React ?

React was developed for applications (Facebook) 
that have constantly changing data. Since React 
is a front-end framework or the “View” in MVC,
 this means that as the user clicks around and 
changes the app’s data, the view should “react” or 
change with those user events. User events being 
mouse clicks, typing, submitting a form.

What is crossorigin in script tag?
corssorigin is an attribute valid on <audio>,img
link,script and video elements, provides support
for CORS, defining how the element handles 
cross-origin request, thereby enabling the configuration
of the CORS request for the element's fetched dta



Cross-origin Resource  Sharing is an HTTP-header 
based mechanism that allows a server to indicate any
origins(domain,scheme, or port) other than its own 
from which a browser should permit loading resources.

CORS also relies on a mechanism by which browersrs
make a "preflight" request to the server hosting the
cross-origin resource, in order to check that the
server will permit the actual request.

In that preflight, the browser sends headers that
indicate the HTTP method and headers that will be
used in the actual request.

For security resons,browsers restrict cross-origin
HTTP requests initiated from scripts

For ex, XMLHttpRequest and the FectchAPI follows
the same-origin policy.

This means that a web application using those APIs can
only request resources from the same origin the 
application was loaded from, unless the response from
other origins includes the right CORS headers.


# What is diff bwt React  and ReactDOM
React library is responsible for creating views
and ReactDOM library is responsible to actually
render UI in the browser.

React is a js library for building User Interfaces
and ReactDOM is the JS library that allows React
to interact with the DOM


# What is diff btw react.development.js and react.
production.js files via CDN ?

React includes many helpful warnings.These warnings
are very useful in develpoment. However,they make
React larger and slower so you should make sure
to use the production version when you deploy the
app.




# What is async and defer?
async and defer are boolean attributes which are
used with script tags to load the external scripts
efficiently into ourweb page

when you load a web page then two major things
happens in the browser

1.html parsing
2.loading of the script, it has two parts
(fetching the scipt from the n/w)and
(executing the script line by line)


Normal script tag-
html parsing
loading sciprt , exe script
html parsing

script with async attribute - 
html parsing along with loading the scipt
exe script
html parsing

script with defer tag -
html parsing along with loading script
html parsing
script exe

If we have multiple dependent scipts then we should
use defer because async attribute does not gaurantee
the order of execution of the script


















