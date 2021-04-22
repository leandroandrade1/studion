$('.slider') .slick({
  infinite: true,
  autoplay: true,
  speed: 50,
  fade: true,
  cssEase: 'linear',
  dots: false,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev slider__prev-arrow ">Previous</button>;',
  nextArrow: '<button type="button" class="slick-next slider__next-arrow ">Previous</button>;'

  

  
});

$('.footer__form-button').on('click',() =>{
  const email = $('#.email').val();
  Email.send({
    Host : "smtp.gmail.com",
    Username : "username",
    Password : "passord",
    To : 'them@website.com',
    From : email,
    Subject : "assunto do email",
    Body : "texto do email"
}).then(
  message => alert(message)
);


});
		