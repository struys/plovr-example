plovr-example
=============

####1. Serve index.html, run a simple webserver
    python -m SimpleHTTPServer 3456

####2. Serve the js files in index.html
    java -jar plovr.jar serve config.js

####3. Make a production build
    java -jar plovr.jar build config.js

You'll find a build directory containing the compiled package
