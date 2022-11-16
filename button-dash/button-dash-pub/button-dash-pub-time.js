class TimeDash {
    constructor(parentElem) {
        const tempRoot = document.createElement("div");
        const htmlStr = `<div id="time_section">
                <div id="time_title" class="title">Pressed logs:</div>
                <div id="time"></div>
            </div>`;
        tempRoot.innerHTML = htmlStr;

        parentElem.appendChild(tempRoot.firstChild);

        document.body.addEventListener('dash-time', (e) => {
            this.hit(e.detail);
        })
    }

    hit = (inTime) => {
        if (inTime == null) time.innerHTML += new Date() + "</br>";
        else time.innerHTML += inTime + "</br>";
        time.scrollTop = time.scrollHeight;
    }
}