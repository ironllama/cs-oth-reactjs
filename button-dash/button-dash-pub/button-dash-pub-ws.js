function wsConnect() {
    let ws = null;
    if ("WebSocket" in window) {
        ws = new WebSocket("ws://localhost:8333/");
        ws.onopen = function () { console.log("WS Open"); };
        ws.onclose = function () { console.log("WS Closed"); };
    } else {
        alert("WebSockets NOT supported by your Browser!");
    }

    document.body.addEventListener('bigredclick', function () {
        ws.send("HIT");
    })

    ws.onmessage = function (inMessage) {
        const data = JSON.parse(inMessage.data);

        document.body.dispatchEvent(new CustomEvent('dash-num', { detail: data[0] }));
        document.body.dispatchEvent(new CustomEvent('dash-time', { detail: data[1] }));
    }

    return ws;
}