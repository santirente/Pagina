document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel',{
        fullWidth:true
    });
    var instance = M.Carousel.init(elems,{
        duration:100
    });
  });  
  function ShowCarousel(){
    let elem= querySelector("#Slider")
    let instance = M.Carousel.getInstance(elem);
    instance.open();
 }

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{});
  });
  function Showsidenav(){
      let elem=querySelector("#slide-out")
      let instance = M.Sidenav.getInstance(elem);
      instance.open()
  }