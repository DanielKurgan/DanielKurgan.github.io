$(function(){
	// Инициализируем плагин
	$('.contacts .title-block').appear();
	// Когда класс class появляется в области видимости экрана срабатывает нужный нам код.
	$('.contacts .title-block').on('appear', function(event, $all_appeared_elements) {
		$(".typed-contacts").typed({
			strings: ["Контакты"],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 30,
			// time before typing starts
			startDelay: 100,
			// backspacing speed
			backSpeed: 20,
			// time before backspacing
			backDelay: 500,
			// loop
			loop: false,
			// false = infinite
			loopCount: 5,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
	});


	$('.projects .title-block').appear();
	// Когда класс class появляется в области видимости экрана срабатывает нужный нам код.
	$('.projects .title-block').on('appear', function(event, $all_appeared_elements) {
		$(".typed-projects").typed({
			strings: ["Проекты"],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 50,
			// time before typing starts
			startDelay: 100,
			// backspacing speed
			backSpeed: 50,
			// time before backspacing
			backDelay: 2000,
			// loop
			loop: false,
			// false = infinite
			loopCount: 3,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
	});


$('.skill-block .title-block').appear();
	// Когда класс class появляется в области видимости экрана срабатывает нужный нам код.
	$('.skill-block .title-block').on('appear', function(event, $all_appeared_elements) {
		$(".typed-skillblock").typed({
			strings: ["Навыки"],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 30,
			// time before typing starts
			startDelay: 100,
			// backspacing speed
			backSpeed: 20,
			// time before backspacing
			backDelay: 500,
			// loop
			loop: false,
			// false = infinite
			loopCount: 5,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
	});


$('.comments .title-block').appear();
	// Когда класс class появляется в области видимости экрана срабатывает нужный нам код.
	$('.comments .title-block').on('appear', function(event, $all_appeared_elements) {
		$(".typed-comments").typed({
			strings: ["Отзывы"],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 30,
			// time before typing starts
			startDelay: 100,
			// backspacing speed
			backSpeed: 20,
			// time before backspacing
			backDelay: 500,
			// loop
			loop: false,
			// false = infinite
			loopCount: 5,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
	});
});
