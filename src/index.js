import { TEAM_VALUES } from '../constant/constant.js';

const valueIcon = document.getElementById('value-icon-container');
const valueTitle = document.getElementById('value-title');
const valueText = document.getElementById('value-text');
const valueImg = document.querySelector('.value-image-container');

const btnValuePrev = document.querySelector('.value-prev');
const btnValueNext = document.querySelector('.value-next');

let valueIndex = 0;

const renderValue = (index) => {
  valueIcon.innerHTML = TEAM_VALUES[index].ICON_URL;
  valueTitle.innerText = TEAM_VALUES[index].VALUE_NAME;
  valueText.innerText = TEAM_VALUES[index].VALUE_TEXT;
  valueImg.style.backgroundImage = `url(${TEAM_VALUES[index].IMAGE_URL}`;
  valueImg.innerHTML = TEAM_VALUES[index].ATTRIBUTION_URL;
};

const pressButton = (e) => {
  console.log(e.target);
  const isNext = e.target.classList.contains('value-next');
  changeIndex(isNext);
  renderValue(valueIndex);
};

const changeIndex = (isNext) => {
  if (isNext) {
    valueIndex += 1;
    if (valueIndex > TEAM_VALUES.length - 1) {
      valueIndex = 0;
    }
  } else {
    valueIndex -= 1;
    if (valueIndex < 0) {
      valueIndex = TEAM_VALUES.length - 1;
    }
  }
};

btnValuePrev.addEventListener('click', pressButton);
btnValueNext.addEventListener('click', pressButton);