'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden'); //no . when remove class
  overlay.classList.remove('hidden');
  // modal.style.display = 'block';
};
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal); //no need {} for only one line in for loop

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Keypress event (global event)
document.addEventListener('keydown', e => {
  //   console.log('A key was pressed');
  console.log(e.key);
  if (
    e.key === 'Escape' &&
    // console.log('Esc was pressed');
    !modal.classList.contains('hidden')
  ) {
    //if modal doesnot contain hidden, then close modal
    closeModal();
  }
});
