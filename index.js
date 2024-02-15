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
};

const pressValuePrev = () => {
  valueIndex -= 1;
  if (valueIndex < 0) {
    valueIndex = TEAM_VALUES.length - 1;
  }
  renderValue(valueIndex);
};

const pressValueNext = () => {
  valueIndex += 1;
  if (valueIndex > TEAM_VALUES.length - 1) {
    valueIndex = 0;
  }
  renderValue(valueIndex);
};

renderValue(valueIndex);
btnValuePrev.addEventListener('click', pressValuePrev);
btnValueNext.addEventListener('click', pressValueNext);