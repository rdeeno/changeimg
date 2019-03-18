class changeImg {
    constructor(selector) {
        let that = this
        this.cardEl = selector;
        var interval;
        this.resultImg = this.cardEl.querySelector('.resultImg');
        this.allThumbsArr = [...this.cardEl.querySelectorAll('.thumb')];
        this.srcImagesArr = [];
        this.mainImage = this.resultImg.querySelector('img')
        this.allThumbsArr.forEach(elm => {
            let stringToArr = JSON.parse(elm.getAttribute('data-select'))
            this.srcImagesArr.push(stringToArr)

        })
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
        this.interval = setInterval(() => {
            this.animate(srcArr[current])
            current++;
            if (current >= srcArr.length) {
                current = 0;
            }
        }, 1000);

    }
    removeEvent() {
        clearInterval(this.interval);
    }
    animate(src) {
        let createImg = document.createElement('img');
        var img = document.querySelector('.resultImg img');
        createImg.setAttribute('src', src)
        this.resultImg.prepend(createImg);
        img.classList.add('invisible')
        img.addEventListener('transitionend', function () {
            this.remove();
        })
    }
}




function Change(selector) {
    var items = document.querySelectorAll(selector);
    items.forEach(function (item) {
        new changeImg(item)
    })
}