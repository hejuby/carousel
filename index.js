import { TEAM_VALUES } from './constant/constant.js';

const valueIcon = document.getElementById('value-icon-container');
const valueTitle = document.getElementById('value-title');
const valueText = document.getElementById('value-text');

const btnValuePrev = document.querySelector('.value-prev');
const btnValueNext = document.querySelector('.value-next');

let valueIndex = 0;

const renderValue = (index) => {
  valueIcon.innerHTML = TEAM_VALUES[index].ICON_URL;
  valueTitle.innerText = TEAM_VALUES[index].VALUE_NAME;
  valueText.innerText = TEAM_VALUES[index].VALUE_TEXT;
  if (index === 0) {
    btnValuePrev.classList.add('hidden');
  }
  if (index === TEAM_VALUES.length-1) {
    btnValueNext.classList.add('hidden');
  }
  if (index > 0 && index < TEAM_VALUES.length-1) {
    btnValuePrev.classList.remove('hidden');
    btnValueNext.classList.remove('hidden');
  }
};

const pressValuePrev = () => {
  console.log('prev pressed');
  valueIndex -= 1;
  renderValue(valueIndex);
};

const pressValueNext = () => {
  console.log('next pressed');
  valueIndex += 1;
  renderValue(valueIndex);
};

renderValue(valueIndex);
btnValuePrev.addEventListener('click', pressValuePrev);
btnValueNext.addEventListener('click', pressValueNext);