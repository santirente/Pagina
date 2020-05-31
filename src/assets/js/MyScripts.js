document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel',{
        fullWidth:true
    });
    var instance = M.Carousel.init(elems,{
        duration:100,
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

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });
  function ShowPalallax(){
      let elm=querySelector("#parallax")
      let instance = M.Parallax.getInstance(elem);
      instance.open()
  }
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.slider');
    let instances = M.Slider.init(elems,{
      indicators:false,
      height: 500,
      duration: 500,
      interval: 3000
    });
  });
  function ShosSlider(){
    let elm=querySelector("#slides")
    let instance = M.Slider.getInstance(elem);
    instance.open()
  }
  