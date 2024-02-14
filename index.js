import { TEAM_VALUES } from './constant/constant.js';

const valueContainer = document.querySelector('.value-container');
const valueIcon = valueContainer.querySelector('.value-icon');
const valueTitle = valueContainer.querySelector('.value-title');
const valueText = valueContainer.querySelector('.value-text');

const renderValue = (index) => {
  if (valueIcon.classList.length === 3) {
    valueIcon.classList.pop();
  }
  valueIcon.classList.add(TEAM_VALUES[index].ICON_URL);
  valueTitle.innerText = TEAM_VALUES[index].VALUE_NAME;
  valueText.innerText = TEAM_VALUES[index].VALUE_TEXT;
};

renderValue(0);