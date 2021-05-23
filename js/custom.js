(function() {

  const config = {
    type: 'carousel',
    // carousel makes sure it wont swivel back to the first one!!
    autoplay: 40000,
    focusAt: 'center',
    keyboard: true,
    swipeThreshold: 50
  }

  new Glide('.glide', config).mount();

}());
