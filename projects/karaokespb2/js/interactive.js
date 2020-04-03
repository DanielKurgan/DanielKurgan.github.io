$(document).ready(function(){
	new WOW().init();

	$('.mask-phone').mask('9 (999) 999-99-99');

	$(".popup-reservation__close, .popup-reservation__background").click(function(){
		$(".reservation__form-block").slideUp();
		$(".popup-reservation__background").fadeOut();
		$(".popup-reservation").fadeOut();
	})
	$(".booking__button").click(function(){
		$(".reservation__form-block").slideDown();
		$(".popup-reservation__background").fadeIn();
		$(".popup-reservation").fadeIn();
	});

	    $(".reservation__form").validate({
  // правила для полей с именем и паролем
       rules:{ 
 
            login:{
                required: true, // поле для имени обязательное для заполнения
                minlength: 4, // в поле для имени должно быть не меньше 4 символов
                maxlength: 16, // в поле для имени должно быть не больше 16 символов
            },
 
            password:{
                required: true, // поле для пароля обязательное для заполнения
                minlength: 6, // в поле для пароля должно быть не меньше 6 символов
                maxlength: 16, // в поле для пароля должно быть не больше 16 символов
            },
       },
  // сообщение для поля с именем и пароля, если что-то было не по правилам
       messages:{
 
            login:{
                required: " Это поле обязательно для заполнения", // сообщение для имени, если поле не заполнено
                minlength: " Имя должно иметь минимум 4 символа", // сообщение для имени, если в поле меньше 4 символов
                maxlength: " Максимальное число символов для имени - 16", // сообщение для имени, если в поле больше 16 символов
            },
 
            password:{
                required: " Это поле обязательно для заполнения", // сообщение для пароля, если поле не заполнено
                minlength: " Пароль должен иметь минимум 6 символов", // сообщение для пароля, если в поле меньше 6 символов
                maxlength: " Максимальное число символов - 16", // сообщение для пароля, если в поле больше 16 символов
            },
 
       }
 
    });
});