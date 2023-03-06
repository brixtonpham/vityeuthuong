$(function() {
    // BACKGROUND

    $('body').on('mousemove',function(e){
        let heart = $('<span>');
        let x = e.offsetX;
        let y = e.offsetY;
        heart.css({
            left: x+'px',
            top: y+'px'
        });
        let size = Math.random()*80;
        heart.css({
            width: 20 + size +'px',
            height: 20 + size +'px'
        });
        let transformValue = Math.random()*360;
        heart.css({
            transform: 'rotate('+ transformValue+'deg'
        });
        $('body').append(heart);
        setTimeout(function(){
            heart.remove();
        },1000)
    })

    // SPINNING GAME

   var $hat = $('.m-game__wrapper');
   var token = true;
  
   $('.m-game__start').on('click', function() {
     if (! token) return;
     token = false;
     
     var oldDeg = $hat.data('rotate') ? $hat.data('rotate') : 0;
     
     var deg = Math.floor(Math.random() * 360) + 3240 +1080+ oldDeg;
     
     $hat.data('rotate', deg);
     $hat.css('transform', `rotate(${deg}deg)`);

     setTimeout(function() {
       token = true;
       calcResult(deg);
     }, 7000);
   });
});
//alert For Spinning game
function calcResult(deg) {
  alert(`Chúc mừng bạn đã quay vào ô số ` + (Math.floor((deg%360)/45)+1));
}
