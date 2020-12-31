import { pages } from '../controllers/index';

const router = async (route) => {
  let content = document.getElementById('root');
  content.innerHTML = '';

  switch (route) {
    case '': 
    case '/': 
    case '#/':
    case '#/home': {
      return content.appendChild(pages.home());
    }
    case '#/skills': {
      return content.appendChild(pages.skills());
    }
    case '#/projects': {
      return content.appendChild(pages.projects());
    }
    default: {
      return content.appendChild(pages.notFound());
    }
  }

};

export { router };