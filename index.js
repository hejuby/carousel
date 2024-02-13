import { TEAM_VALUES } from './constant/constant.js';

const valueContainer = document.querySelector('.value-container');
const valueIcon = valueContainer.querySelector('img');
const valueTitle = valueContainer.querySelector('h2');
const valueText = valueContainer.querySelector('p');

const renderValue = (index) => {
  valueIcon.src = TEAM_VALUES[index].ICON_URL;
  valueTitle.innerText = TEAM_VALUES[index].VALUE_NAME;
  valueText.innerText = TEAM_VALUES[index].VALUE_TEXT;
};

renderValue(0);