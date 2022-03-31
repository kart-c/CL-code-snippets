const rangeInput = document.querySelector('.range-input');
const rangeValue = document.querySelector('.range-value');

const sliderChangeHandler = (e) => {
	rangeValue.innerText = e.target.value;
};

rangeInput.addEventListener('input', sliderChangeHandler);
