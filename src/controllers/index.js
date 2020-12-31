import Home from './home.controller';
import Skills from './skills.controller';
import Projects from './projects.controller';
import NotFound from './404.controller';

const pages = {
  home: Home,
  skills: Skills,
  projects: Projects,
  notFound: NotFound,
};

export { pages };