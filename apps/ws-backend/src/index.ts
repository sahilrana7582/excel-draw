import { WebSocket } from "ws";


const wss = new WebSocket.Server({ port: 8080 });


wss.on('connection', function connection(ws){

    console.log("new connection")
    ws.on('message', function message(data){
        console.log('received: %s', data);
        ws.send('hello from server')
    })

})