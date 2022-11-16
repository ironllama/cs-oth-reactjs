class BigRedButton {
    constructor(parentElem, newText, inHitCallback = null) {
        this.hitCallback = inHitCallback;
        this.allListeners = [];

        const newTextElem = document.createTextNode(newText);
        const newElem = document.createElement('button');
        newElem.appendChild(newTextElem);

        newElem.addEventListener("click", this.hit);

        parentElem.appendChild(newElem);
    }

    hit = () => {
        if (this.hitCallback) this.hitCallback();

        this.dispatch();
    }


    // addListener = (newFunc) => {
    //     if (typeof newFunc === 'function' && !this.allListeners.includes(newFunc)) this.allListeners.push(newFunc);
    // }

    // removeListener = (newFunc) => {
    //     const idx = this.allListeners.indexOf(newFunc);
    //     if (idx > -1) this.allListeners.splice(idx, 1);
    // }

    // dispatch = () => {
    //     this.allListeners.forEach(thisF => { if (typeof thisF === 'function') thisF(); });
    // }

    dispatch() {
        document.body.dispatchEvent(new CustomEvent('bigredclick'));
    }
}