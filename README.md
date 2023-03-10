# Node Tester
This application is designed to be used as a tool to test 
server end points.  To use simply deploy on your server and 
pass a `PORT` environment variable, the tool will then respond
to request on that port.

- `GET` requests to `/` will send back an HTML page and GIF
- `GET` request to `/ping` will send back text with href info

This application is containerized and can be deployed using 
Docker or kubernetes.

#### Dev Testing
To dev test this application you can use the following command
`PORT=<desired port> npm start`