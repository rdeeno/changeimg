class changeImg {
    constructor(selector, options) {
        var defaults = {
            changeSpeed: 1000,
            container: '.resultImg'
        }
        this.params = Object.assign({}, defaults, options)
        this.cardEl = selector;
        this.interval;
        this.isLoaded = true;
        this.resultImg = this.cardEl.querySelector(this.params.container);
        this.allThumbsArr = [...this.cardEl.querySelectorAll('.thumb')];
        this.srcImagesArr = this.createSrcArr();
        this.defaultImg = document.querySelector('.img')
        this.mainImageSrc = this.resultImg.querySelector('img').src
        this.cardEl.addEventListener('mouseenter', this.changeImage.bind(this), true)
        this.cardEl.addEventListener('mouseleave', this.removeEvent.bind(this), true)
    }
    changeImage(e) {
        let target = e.target
        let current = 0
        if (!target.classList.contains('thumb')) {
            return
        }
        let index = this.allThumbsArr.indexOf(target)
        let srcArr = this.srcImagesArr[index]
        if (srcArr.length == 1) {
            srcArr[0]
            clearInterval(this.interval)
        }
        this.resultImg.querySelector('img').src = this.srcImagesArr[index][0]
        this.interval = setInterval(() => {
            if (this.isLoaded) {
                this.isLoaded = false;
                this.animate(srcArr[current])
                current++;
                if (current >= srcArr.length) {
                    current = 0;
                }

            }

        }, this.params.changeSpeed);
    }
    removeEvent(e) {
        let target = e.target
        if (!target.classList.contains('thumb')) {
            return
        }
        clearInterval(this.interval);
        // this.animate(this.defaultImg)
        this.defaultImg.style.opacity = 1;
    }
    animate(src) {
        var self = this;
        let imgTagCreate = document.createElement('img');
        imgTagCreate.setAttribute('src', src);
        this.defaultImg.style.opacity = 0;
        imgTagCreate.addEventListener('load', function () {
            self.resultImg.querySelector('img').classList.add('invisible')
            self.isLoaded = true;
            self.resultImg.querySelector('img').addEventListener('transitionend', function () {
                this.remove();
            })
            self.resultImg.prepend(imgTagCreate);
            self.resultImg.querySelector('img').classList.remove('invisible')
        })
    }
    createSrcArr() {
        var arrOfSrc = []
        this.allThumbsArr.forEach(elm => {
            let stringToArr = JSON.parse(elm.getAttribute('data-select'))
            arrOfSrc.push(stringToArr)
        })
        return arrOfSrc
    }
}
var items = document.querySelectorAll('.card');
items.forEach(function (item) {
    new changeImg(item, {
        changeSpeed: 1000,
        container: '.resultImg'
    })
})