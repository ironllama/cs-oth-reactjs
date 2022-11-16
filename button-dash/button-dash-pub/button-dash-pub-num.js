class NumDash {
    constructor(parentElem, inNum = 0) {
        this.num = inNum;

        const tempRoot = document.createElement("div");
        const htmlStr = `<div class="num_section">
                <div class="num_title" class="title">Num times pressed:</div>
                <div class="num">0</div>
            </div>`;
        tempRoot.innerHTML = htmlStr;
        this.numElem = tempRoot.querySelector(".num");

        parentElem.appendChild(tempRoot.firstChild);

        document.body.addEventListener('dash-num', (e) => {
            this.hit(e.detail);
        })
    }

    hit = (inNum) => {
        if (inNum == null) this.num += 1;  // This should catch undefined AND nulls.
        else this.num = inNum;
        this.numElem.innerHTML = this.num;
    }
}