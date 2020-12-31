import view from '../view/skills.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  return divElement;
};