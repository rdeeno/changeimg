# changeimg


js

 var change = new Change('.card')
 
html

.card>.thumbs>.thumb(data-select='[ "img1.jpg ", "img1.jpg ","img1.jpg " , ...etc]')*2>img+.resultImg>img


  <div class="card">
      <div class="thumbs">
          <div class="thumb" data-select='[ "img1.jpg ", "img1.jpg ","img1.jpg " , ...etc]' alt ="">
              <img src="img.jpg" alt="">
          </div>
          <div class="thumb" data-select='[ "img1.jpg ", "img1.jpg ","img1.jpg " , ...etc]' alt ="">
              <img src="img.jpg" alt="">
          </div>
      </div>
      <div class="resultImg">
          <img src="img.jpg" alt="" class='img' >
      </div>
  </div>
