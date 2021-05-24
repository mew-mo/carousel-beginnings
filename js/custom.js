(function() {

  const config = {
    type: 'carousel',
    // carousel makes sure it wont swivel back to the first one!!
    autoplay: 4000,
    focusAt: 'center',
    keyboard: true,
    swipeThreshold: 50
  }

  new Glide('.glide', config).mount();

  $('.rippling').ripples({
  	resolution: 512,
  	dropRadius: 20,
  	perturbance: 0.04,
  });

}());
