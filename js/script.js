'use strict';
const footerNav = document.querySelector('.footer__nav')
const footerContacts = document.querySelector('.footer__contacts')
const btnContactsFooter = document.getElementById('footerBtnContacts');
const btnNavFooter = document.getElementById('footerBtnNav');

footerNav.classList.remove('footer__nav--nojs')
footerContacts.classList.remove('footer__contacts--nojs')

btnNavFooter.addEventListener('click', ()=> {
    footerContacts.classList.remove('footer__contacts--opened')
    footerContacts.classList.add('footer__contacts--closed')

  if (footerNav.classList.contains('footer__nav--closed')) {
    footerNav.classList.add('footer__nav--opened')
    footerNav.classList.remove('footer__nav--closed')
  } else if (footerContacts.classList.contains('footer__contacts--opened')) {
    footerContacts.classList.remove('footer__contacts--opened')
    footerContacts.classList.add('footer__contacts--closed')
    } else {
        footerNav.classList.remove('footer__nav--opened')
        footerNav.classList.add('footer__nav--closed')
    }
})

btnContactsFooter.addEventListener('click', ()=> {
    footerNav.classList.remove('footer__nav--opened')
    footerNav.classList.add('footer__nav--closed')
  if (footerContacts.classList.contains('footer__contacts--closed')) {
    footerContacts.classList.add('footer__contacts--opened')
    footerContacts.classList.remove('footer__contacts--closed')
  } else if (footerNav.classList.contains('footer__nav--opened')) {
    footerNav.classList.remove('footer__nav--opened')
    footerNav.classList.add('footer__nav--closed')
    } else {
        footerContacts.classList.remove('footer__contacts--opened')
        footerContacts.classList.add('footer__contacts--closed')
  }
})

// Form Popup
const btnPopup = document.getElementById('callUs');
const overflow = document.getElementById('overflow');
const popupName = document.getElementById('popname');
const popupform = document.querySelector('.mainformPopup');
const popupformbtn = document.querySelector('.btnPop');
const body = document.querySelector('.page__body');
const formPopup = document.querySelector('.main-formPopup');
const formPopupName = document.getElementById('popname');
const formPopupPhone = document.getElementById('popphone');

btnPopup.addEventListener('click', ()=> {
    overflow.classList.add('overflow')
    popupform.classList.add('mainformPopup-js')
    body.style.overflowY = 'hidden'
    popupform.style.overflowY = 'scroll'
    formPopup.classList.add('scroll-form')
    popupName.focus()
})

overflow.addEventListener('click', ()=> {
    popupform.classList.remove('mainformPopup-js');
    overflow.classList.remove('overflow')
    body.style.overflowY = 'scroll'
    popupform.style.overflowY = 'hidden';
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        popupform.classList.remove('mainformPopup-js')
        overflow.classList.remove('overflow')
        body.style.overflowY = 'scroll'
        popupform.style.overflowY = 'hidden';
    }
})

popupformbtn.addEventListener('click', ()=> {
    popupform.classList.remove('mainformPopup-js')
    overflow.classList.remove('overflow')
    body.style.overflowY = 'scroll'
    popupform.style.overflowY = 'hidden';
})

// if(navMain.classList.contains(mainNavOpened)) {

formPopupName .removeAttribute('required')
formPopupPhone.removeAttribute('required')

popupform.addEventListener('submit', function (evt) {


  if (isValidName(formPopupName )) {
    formPopupName .classList.add('error')
    evt.preventDefault();
  } else {
    formPopupName.classList.remove('error')
    formPopupName.classList.add('success')
    localStorage.setItem('username', formPopupName.value);
  }

  if (isValidPhone(formPopupPhone)) {
    formPopupPhone.classList.add('error')
    evt.preventDefault();
  } else {
    formPopupPhone.classList.remove('error')
    formPopupPhone.classList.add('success')
    localStorage.setItem('phone', formPopupPhone.value);
  }

  if(formPopupPhone.classList.contains('success') && formPopupName.classList.contains('success')) {
    alert('Форма успешно отправлена')
  }
});

function isValidPhone(input) {
  return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
    input.value
  );
}

function isValidName(input) {
  return !/^\D{1,3}[А-Яа-яA-Za-z0-9_-]{3,30}$/.test(input.value);
}

formPopupPhone.oninput = function () {
  var rep = /[a-zA-ZА-Яа-я]/g;
  this.value = this.value.replace(rep, "")
};


// anchors

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
