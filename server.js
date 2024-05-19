const fs = require('fs')
const http = require('http')
const timedate = new Date();
fs.appendFile('index.html', '<!DOCTYPE html> <p>Thank you for using our service</p> <br> <button style="color: white; background-color: red; border-style: solid; cursor: pointer;">OK</button>', function (err) {
if(err) {
    console.log('Error creating file')
}
else {
    console.log('File created!')
    http.createServer(function (req, res) {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            
        if (err) {
           console.log("Error to start server"); 
        }

        else {
            console.log("Someone has loaded up the site");
            fs.appendFile('loaded.txt', timedate + ' Someone has loaded up the website', function(err) {
            if (err) {
                console.log('Error logging the load up text')
            } 
            });
        }
        })
    }
).listen(8080);
}
})