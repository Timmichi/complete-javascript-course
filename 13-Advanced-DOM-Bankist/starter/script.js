'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// This selects the entire document of any webpage
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');

// Returns a NodeList. NodeList is static and won't update if the DOM changes.
const allSections = document.querySelectorAll('.section');
document.getElementById('section--1');

// Returns an HTML collection. This will automatically update when DOM changes.
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Returns an HTML collection as well
document.getElementsByClassName('btn');

// Creating and inserting elements
// .insertAdjacentHTML
// Creates a dom element. Not in our dom yet. Just like using query selector to grab an existing dom element
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functinality and analytics, <button class="btn btn--close-cookie">Got it!</button>';
// adds as first child of the header element
header.prepend(message);
// adds as last child of the header element (if we already prepended it will move it to the last child)
header.append(message);
// header.append(message.cloneNode(true)); // This will make a copy so it appeaars twice instead of just getting moved

// remove/delete elements when we click a button
document.querySelector('.btn--close-cookie');
addEventListener('click', function () {
  message.remove();
});
