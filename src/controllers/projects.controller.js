import view from '../view/projects.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    return divElement;
  };