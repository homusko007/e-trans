const init = () => {
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.7718, 37.6316], // координаты
      zoom: 16,
      controls: ["smallMapDefaultSet"], // убрали линейку
    },
    {}
  );
  const myPlacemark = new ymaps.Placemark(
    [55.7724, 37.6252],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/mark.svg",
      iconImageSize: [70, 70], // размер маркера
      iconImageOffset: [-35, -70], // переместили
    }
  );
  myMap.geoObjects.add(myPlacemark);
};
ymaps.ready(init);
// Leflet maps
/*const map = L.map('map').setView([55.7726, 37.63], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([55.7724, 37.6252])
  .addTo(map)
  .bindPopup('E-trans')
  .openPopup();
  */


  const disabledScroll = () => {
    document.body.style.cssText = `
    overflow: hidden;
    position: fixed;
    top: -${window.scrollY}
    `;
  };

  const enabledScroll = () => {
    document.body.style.cssText = '';
  };

  const createElem = (tag, attr) => {
    const elem = document.createElement(tag);
    return Object.assign(elem, {...attr}); // т.к. каждый эл. на стр. это {}
  };

const createModal = (title, description) => {
const overlayElem = createElem('div', {className: 'modal'});
const modalElem = createElem('div', {className: 'modal__blok'});
const modalContainerElem = createElem('div', {className: 'modal__container'});

const titleElem = createElem('h2', {
    className: 'modal__title',
    textContent: `Заказать ${title}`,
});

const descriptionElem = createElem('p', {
    className: 'modal__description',
    textContent: description,
});

const form = createElem('form', {
    className: 'modal__form',
    method: 'post',
    action: 'https://jsonplaceholder.typicode.com/posts',
    id: 'order',
});

const nameLabelElem = createElem('label', {className: 'modal__label'});
const nameSpanElem = createElem('span', {
    className: 'modal__text',
    textContent: 'Имя',
});
const nameInputElem = createElem('input', {
    className: 'modal__input',
    placeholder: 'Введите ваше имя',
    name: 'name',
    required: true,
});

const phoneLabelElem = createElem('label', {className: 'modal__label'});
const phoneSpanElem = createElem('span', {
    className: 'modal__text',
    textContent: 'Телефон',
});
const phoneInputElem = createElem('input', {
    className: 'modal__input',
    placeholder: 'Введите ваш телефон ',
    name: 'phone',
    required: true,
});

const hideInput = createElem('intut', {
    type: 'hidden',
    name: 'product',
    value: 'title',
});

const btnSubmit = createElem('button', {
    className: 'modal__btn',
    textContent: 'Заказать',
    type: 'submit',
});
btnSubmit.setAttribute('form', 'order'); // т.к. кнопка не внутри формы
// мы ее привязываем к форме с пом. атрибута form, order -это id у формы

const closeModalBtn = createElem('button', {
    className: 'modal__close',
    innerHTML: `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_642_180)">
        <path d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z" fill="#18171A"/>
        </g>
        <defs>
        <clipPath id="clip0_642_180">
        <rect width="30" height="30" fill="white"/>
        </clipPath>
        </defs>
    </svg>
`,
});

overlayElem.addEventListener('click', e => {
    const target = e.target;
    if(target === overlayElem || target.closest('.modal__close')) {
        overlayElem.remove();
        enabledScroll();
    }
});

nameLabelElem.append(nameSpanElem, nameInputElem);
phoneLabelElem.append(phoneSpanElem, phoneInputElem);
form.append(nameLabelElem, phoneLabelElem, hideInput);
modalContainerElem.append(titleElem, descriptionElem, form, btnSubmit, closeModalBtn);
modalElem.append(modalContainerElem);
overlayElem.append(modalElem);
disabledScroll();
document.body.append(overlayElem);
};


  const productTitle = document.querySelectorAll('.product__title');
  const productDescription = document.querySelectorAll('.product__description');
  const productBtn = document.querySelectorAll('.product__btn');

  for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener('click', () => {
        const title = productTitle[i].textContent;
        const description = productDescription[i].textContent;
        createModal(title, description);
    })
  };
