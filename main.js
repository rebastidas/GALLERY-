var modal = document.getElementById('myModal')
const column = document.querySelector('.column')
const imgs = document.querySelectorAll('.column img')
var modalImg = document.getElementById('Img01')
current = 0;

column.addEventListener('click', imgClick)

column.addEventListener('mouseover', function(e) {
    
    var p = e.target.parentElement;
    var index = Array.prototype.indexOf.call(p.children, e.target);
    
    if (e.target !== column) {
      current = index;
    }
  }, false);


function fnImgIndex (e) {
    current = column.indexOf(e.target);
    console.log(current); 
}
//-----------------------------------------------------

function imgClick (e){
    modal.style.display = "block";
    modalImg.src = imgs[current].src;
    e.preventDefault();
}
//------------------------------------------------------

var span = document.getElementsByClassName('close')[0];

span.onclick = function (e){
    modal.style.display = 'none';
    e.preventDefault();
}

document.addEventListener('keydown',event =>{
    if(event.key==='Escape'||event.keyCode === 27){
        modal.style.display = 'none';
    }
})
//-----------------------------------------------------

document.addEventListener('keydown',event =>{
    if(event.key==='ArrowLeft'||event.keyCode === 37){

        if(current === 0){
            current = 5;
        }

        slidePrev();
    }
})
//-----------------------------------------------------

document.addEventListener('keydown',event =>{
    if(event.key==='ArrowRight'||event.keyCode === 39){
        slideNext();
    }
    if(current === 5){
        current = - 1;
    }
})
//---------------------------------------------------
const next = document.querySelector('.next')

next.addEventListener('click', function(e){
    if(current === 5){
        current = - 1;
    }
    slideNext();
})

function slideNext(){
    modalImg.src = imgs[current + 1].src;
    current++;
}
//-----------------------------------------------------
const prev = document.querySelector('.prev')

prev.addEventListener('click', function(e){
    if(current === 0){
        current = 6;
    }
    slidePrev();
})

function slidePrev(){
    modalImg.src = imgs[current - 1].src;
    current--;
}