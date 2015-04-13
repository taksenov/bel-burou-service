/**
 * Created by admin on 12.03.2015.
 */

(function() {

    var app = {

        // -- инициализация при загрузке js
        initialize : function () {
            var _this = this;

            _this.setUpListeners();

        },
         // -- инициализация при загрузке js

        // -- обработчик событий над DOM элементами на странице
        setUpListeners: function () {

            // -- слайдер к блоку с контактами
            $('.scroll-services__link').on('click', app.scrollToServices);
            // -- слайдер к блоку с контактами

            // -- слайдер к блоку с контактами
            $('.scroll-cooperartion__link').on('click', app.scrollToCooperation);
            // -- слайдер к блоку с контактами

            // -- слайдер к блоку с инфой о компании
            $('.scroll-about_company__link').on('click', app.scrollToSlider);
            // -- слайдер к блоку с инфой о компании

            // -- открыть модалку с контактами
            $('.scroll-contacts__link').on('click', app.showContactsModal);
            // -- открыть модалку с контактами

            // -- открыть модалку с заказом обратного звонка
            $('.call-back-order').on('click', app.showCallBackModal);
            // -- открыть модалку с заказом обратного звонка

            // -- нажата кнопка заказа услуги
            $('.do-order-btn').on('click', app.sendOrderData);
            // -- нажата кнопка заказа услуги

        },
        // -- обработчик событий над DOM элементами на странице

        // -- функции вызываемые из setUpListeners ===============

        // -- отправка данных из модальной формы
        sendOrderData: function (e) {
            e.preventDefault();

            var form = $(this).parents('.modal-content').find('.send-order-data-form'),
                str = '';

            str = form.serializeArray();

            // крутая штука с тостера которая делает нормальные ключ=значение
            var result = [];
            for (var i = 0; i < str.length; i++) {
                  var obj = {};
                  obj[str[i].name] = str[i].value;
                  result.push(obj);
            }
            // крутая штука с тостера которая делает нормальные ключ=значение

            str = JSON.stringify(result);

            console.log(str);

            // отдаем ajax на сервер согласно вот этому рецепту https://toster.ru/q/93571


        },
        // -- отправка данных из модальной формы

        // -- открыть модалку с заказом обратного звонка
        showCallBackModal: function (e) {
            e.preventDefault();

            $('#modalCallBack').modal(
                'show'
            )
        },
        // -- открыть модалку с заказом обратного звонка

        // -- открыть модалку с контактами
        showContactsModal: function (e) {
            e.preventDefault();

            $('#modalContacts').modal(
                'show'
            )
        },
        // -- открыть модалку с контактами


        // -- функция скролла к слайдеру о компании
        scrollToSlider: function (e) {
            e.preventDefault();

            var offset = $('.slider-block').offset().top;

            $('html, body').animate({scrollTop: (offset -0)},800);

        },
        // -- функция скролла к слайдеру о компании

        // -- функция скролла к сотрудничеству
        scrollToCooperation: function (e) {
            e.preventDefault();

            var offset = $('.cooperation-block').offset().top;

            $('html, body').animate({scrollTop: (offset -0)},800);

        },
        // -- функция скролла к сотрудничеству

        // -- функция скролла к услугам
        scrollToServices: function (e) {
            e.preventDefault();

            var offset = $('.service-block').offset().top;

            $('html, body').animate({scrollTop: (offset -0)},800);

        },
        // -- функция скролла к услугам

        // -- пустая функция чтоб не было ошибки с запятой у сетаплистенеров
        someFunction: function () {}
        // -- пустая функция чтоб не было ошибки с запятой у сетаплистенеров

        // -- функции вызываемые из setUpListeners ===============

    }

    app.initialize();

}());






























