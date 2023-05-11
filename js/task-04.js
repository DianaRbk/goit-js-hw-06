const counterValue = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

let currentValue = 0;

const updateCounterValue = () => {
  counterValue.textContent = currentValue;
};

const increment = () => {
  currentValue += 1;
  updateCounterValue();
};

const decrement = () => {
  if (currentValue > 0) {
    currentValue -= 1;
    updateCounterValue();
  }
};

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);