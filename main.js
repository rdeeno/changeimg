class changeImg {
    constructor(selector, options) {
        var defaults = {
            changeSpeed: 1000,
            container: '.resultImg'
        }

        var params = Object.assign({}, defaults, options)
        this.cardEl = selector;
        var interval;
        this.resultImg = this.cardEl.querySelector(params.container);
        this.allThumbsArr = [...this.cardEl.querySelectorAll('.thumb')];
        this.srcImagesArr = [];
        this.mainImage = this.resultImg.querySelector('img').src
        this.allThumbsArr.forEach(elm => {
            let stringToArr = JSON.parse(elm.getAttribute('data-select'))
            this.srcImagesArr.push(stringToArr)

        })
        this.cardEl.addEventListener('mouseenter', this.changeImage.bind(this, params), true)
        this.cardEl.addEventListener('mouseleave', this.removeEvent.bind(this), true)
    }

    changeImage(params, e) {
        let target = e.target
        let current = 0
        if (!target.classList.contains('thumb')) {
            return
        }
        let index = this.allThumbsArr.indexOf(target)
        let srcArr = this.srcImagesArr[index]
        this.interval = setInterval(() => {
            this.animate(srcArr[current])
            current++;
            if (current >= srcArr.length) {
                current = 0;
            }
        }, params.changeSpeed);

    }
    removeEvent() {
        clearInterval(this.interval);
        var img = this.cardEl.querySelector('.resultImg img');
        var defImg = img.setAttribute('src', this.mainImage)

    }
    animate(src) {
        let createImg = document.createElement('img');
        var img = this.cardEl.querySelector('.resultImg img');
        createImg.setAttribute('src', src)
        createImg.addEventListener('load', function () {
            img.classList.add('invisible')
            img.addEventListener('transitionend', function () {
                this.remove();
            })
        })
        this.resultImg.prepend(createImg);
    }
}
var items = document.querySelectorAll('.card');
items.forEach(function (item) {
    new changeImg(item, {
        changeSpeed: 2000,
        container: '.resultImg'
    })
})