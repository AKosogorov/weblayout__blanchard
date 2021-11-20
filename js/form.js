window.addEventListener('DOMContentLoaded', function() {

  let selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length == 10;
        },
      },
    },
    messages: {
      name: {
        required: 'Как вас зовут?',
        minLength: 'Минимальная длина имени 2 символа',
        maxLength: 'Максимальная длина имени 20 символов',
      },
      tel: {
        required: 'Укажите ваш телефон',
        function: 'Номер должен состоять из 10 цифр'
      },
    },
    submitHandler: function(form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено')
          };
        };
      };

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      form.reset();
    },
  });

  let validateForms = function (selector, rules, successModal, yaGoal) {};

  validateForms('.contacts__form');
});
