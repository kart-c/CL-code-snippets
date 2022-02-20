const simpleModal = document.querySelector('.modal');
const modalExampleBtn = document.querySelector('.modal-example > button');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalCloseBtn = document.querySelector('.modal-header > i');

const simpleModalHandler = () => {
	modalBackdrop.classList.remove('modal-hide');
	simpleModal.classList.remove('modal-hide');
};

const closeModal = () => {
	simpleModal.classList.add('modal-hide');
	modalBackdrop.classList.add('modal-hide');
};

modalExampleBtn.addEventListener('click', simpleModalHandler);

modalBackdrop.addEventListener('click', closeModal);

modalCloseBtn.addEventListener('click', closeModal);
