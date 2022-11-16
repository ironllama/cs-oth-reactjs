class BigRedButton {
    constructor(parentElem, newText, inHitCallback = null) {
        this.hitCallback = inHitCallback;

        const newTextElem = document.createTextNode(newText);
        const newElem = document.createElement('button');
        newElem.appendChild(newTextElem);

        newElem.addEventListener("click", this.hit);

        parentElem.appendChild(newElem);
    }

    hit = () => {
        if (this.hitCallback) this.hitCallback();
    }
}