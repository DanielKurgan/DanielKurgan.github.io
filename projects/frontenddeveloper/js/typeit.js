$('#welcome').typeIt({
     speed: 70,
     autoStart: false
})
.tiType('<span>Привет, меня зовут Даниил</span>')
.tiPause(650)
.tiBreak()
.tiType('Я ВЕБ-РАЗРАБОТЧИК ')
.tiBreak() .tiPause(450)
.tiType('<span id="span2">делаю крутые сайты для всех устройств </span>')
.tiPause(650)
.tiDelete(10)
.tiType('<span id="span2">типов устройств</span>')
.tiPause(450)
.tiType('<span id="span2"> :)</span>')
.tiSettings({speed: 700})
