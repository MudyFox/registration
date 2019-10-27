$(function () {
    initSwiperSlide();
    initForm();

})


function initSwiperSlide() {

    let swiper = new Swiper('.swiper-container', {

        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: false

    });
}

function initForm() {
    let fields = [
        {
            name: "firstName",
            isValidated: false,
            regEx: /^[а-я]{2,50}$/i,
            id: "#first-name-input"
        },
        {
            name: "secondName",
            isValidated: false,
            regEx: /^[а-я]{2,50}$/i,
            id: "#last-name-input"
        },
        {
            name: "email",
            isValidated: false,
            regEx: /^([a-z0-9]{2,12}_)?[a-z0-9]{6,12}@[a-z]{4,6}(.ua)?(.com)?(.ru)?$/i,
            id: "#email-input"
        },
        {
            name: "userId",
            isValidated: false,
            regEx: /^[a-z_]{5,30}$/i,
            id: "#id-input"
        },
        {
            name: "phone",
            isValidated: false,
            regEx: /^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/,
            id: "#phone-input"
        },
        {
            name: "code",
            isValidated: false,
            regEx: /^[a-z0-9]{10}$/i,
            id: "#reference-code-input"
        }
    ];
    initFormValidation();
    initResetButton();

    function initFormValidation() {

        for (let i = 0; i < fields.length; i++) {
            $(fields[i].id).on('blur', function () {
                check(fields[i]);
                checkAll();
            })
        }

        function checkAll() {
            let isValidatedAll = true;
            for (let i = 0; i < fields.length; i++) {
                if (fields[i].isValidated == false) {
                    isValidatedAll = false;
                }

            }
            if (isValidatedAll) {
                $(".swiper-nav").removeClass("disable");
            } else {
                $(".swiper-nav").addClass("disable");
            }
            return isValidatedAll;
        }

        function check(field) {
            let fieldValue = $(field.id).val();

            if (fieldValue.match(field.regEx) != null) {
                $(field.id).removeClass("input-error").addClass("input-select");
                field.isValidated = true;
            } else {
                $(field.id).addClass("input-error");
                field.isValidated = false;
            }

        }

    }

    function initResetButton() {
        $("#button-reset").on('click', function () {
            for (let i = 0; i < fields.length; i++) {
                fields[i].isValidated = false;
                $(fields[i].id).removeClass("input-error").removeClass("input-select");
            }

        })
        $(".swiper-nav").addClass("disable");
    }

}
