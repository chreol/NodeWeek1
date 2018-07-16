console.log('salut node en action!');

let http = require('http')
let port = 8080

let server = http.createServer()
    server.on('request',(req, res) => {
        console.log('New request')

        let state = 10;
        switch(req, url){
            // const stateUrl = 'http://localhost:8080/state';
            case '/state':
            state;
            res.write(`State: ${state}`);
          break;
            case '/ADD':
            // const addUrl = 'http://localhost:8080/add';
            state++;
            res.write(`New Add State+1: ${ADD}`);
          break;
            case '/Subtract':
            // const subtractUrl = 'http://localhost:8080/subtract';
            state--;
            res.write(`New Subtract State-1: ${Subtract}`);
          break;
            case '/Reset':
            // const resetUrl = 'http://localhost:8080/reset';
            state = 10;
            res.write(`Reset State: ${Reset}`);
          break;
            default:
            // const badUrl = 'http://localhost:8080/bad';
            res.writeHead(404, {"content-type":"text/html"});
            res.write(`error code 404, page down may check and try again!!`);
          break;
        }
        res.end();
    })
    
    
    server.listen(port, console.log(`Server is using the port : ${port}`));
