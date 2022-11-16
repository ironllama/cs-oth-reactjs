import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8333 });

let running_num = 0;
let last_msg_date = '';

wss.on('connection', function connection(ws) {
  console.log("NEW CLIENT");
  ws.send(JSON.stringify([running_num, last_msg_date]));

  ws.on('message', function message(data, isBinary) {
    running_num += 1;
    last_msg_date = (new Date()).toString();
    const newMessage = JSON.stringify([running_num, last_msg_date]);

    console.log("GOT:", data.toString(), "SENDING:", newMessage);
    wss.clients.forEach(function each(client) {
      // if (client !== ws && client.readyState === WebSocket.OPEN) {  // Doesn't send message back to sender.
      if (client.readyState === WebSocket.OPEN) {
        // client.send(newMessage, { binary: isBinary });
        client.send(newMessage);
      }
    });
  });
});

console.log("SERVER UP");