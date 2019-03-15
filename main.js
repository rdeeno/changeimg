class changeImg {
    constructor(selector) {
        this.cardEl = selector;
        this.resultImg = this.cardEl.querySelectorAll('.resultImg')
        console.log(this.resultImg);
    }
}


function Change(selector) {
    var items = document.querySelectorAll(selector);
    items.forEach(function (item) {
        new changeImg(item)
    })
}