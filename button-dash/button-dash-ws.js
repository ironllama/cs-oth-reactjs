function wsConnect() {
    let ws = null;
    if ("WebSocket" in window) {
        ws = new WebSocket("ws://localhost:8333/");
        ws.onopen = function () { console.log("WS Open"); };
        ws.onclose = function () { console.log("WS Closed"); };
    } else {
        alert("WebSockets NOT supported by your Browser!");
    }

    return ws;
}