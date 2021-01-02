import view from '../view/skills.html';

import typescriptSvg from '../assets/img/ts.svg';
import expressjsPng from '../assets/img/expressjs.png';
import mongoSvg from '../assets/img/mongo.svg';
import mysqlSvg from '../assets/img/mysql.svg';
import vscodeSvg from '../assets/img/vscode.svg';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  const currentSkillsListElement = divElement.querySelector('#currentSkillsList');
  
  const skillsList = [{
    title: 'HTML5',
    data: 'html',
    icon: 'fab fa-html5',
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'JavaScript',
    data: 'js',
    icon: 'fab fa-js-square',
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'TypeScript',
    data: 'ts',
    icon: 'fab fa-angular',
    svg: typescriptSvg,
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'CSS3',
    data: 'css',
    icon: 'fab fa-css3-alt',
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'Angular',
    data: 'angular',
    icon: 'fab fa-angular',
    info: {
      icon: 'fas fa-heart',
      description: ''
    }
  }, {
    title: 'VueJS',
    data: 'vue',
    icon: 'fab fa-vuejs', 
    info:{
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'Boostrap',
    data: 'bootstrap',
    icon: 'fab fa-bootstrap',
    info:{
      icon: 'fas fa-info-circle',
      description: ''
    },
  }, {
    title: 'Mongo DB',
    data: 'mongo',
    icon: 'fas fa-database',
    svg: mongoSvg,
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'Node JS',
    data: 'mongo',
    icon: 'fab fa-node-js',
    info: {
      icon: 'fas fa-info-circle', 
      description: ''
    }
  }, {
    title: 'Expess.js',
    data: 'express',
    icon: 'fab fa-node-js',
    svg: expressjsPng,
    info: {
      icon: 'fas fa-info-circle', 
      description: ''
    }
  }, {
    title: 'MySQL',
    data: 'mysql',
    icon: 'fas fa-database',
    svg: mysqlSvg,
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'Java',
    data: 'java',
    icon: 'fab fa-java',
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'php',
    data: 'php', 
    icon: 'fab fa-php',
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'Git',
    data: 'git', 
    icon: 'fab fa-git-alt',
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'VS Code',
    data: 'vscode', 
    icon: 'fas fa-code',
    svg: vscodeSvg,
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }, {
    title: 'Scrum',
    data: 'scrum', 
    icon: 'fas fa-project-diagram',
    info: {
      icon: 'fas fa-info-circle',
      description: ''
    }
  }]

  for (let index = 0; index < skillsList.length; index++) {
    const skillDivElement = document.createElement('div');
    const spanTitle = document.createElement('span');
    // const info = document.createElement('i');
  
    spanTitle.setAttribute('class', 'title');

    let icon = document.createElement('i');
    icon.setAttribute('class', `${ skillsList[index].icon } icon`);

    if (skillsList[index].icon === null) {
      icon = document.createElement('img');
      icon.setAttribute('class', 'icon svg');
      icon.setAttribute('src', skillsList[index].svg)
    }
  
    // info.setAttribute('class', `${ skillsList[index].info.icon }  info-icon`);

    skillDivElement.setAttribute('class', 'skill-item');
    skillDivElement.setAttribute('data-background', skillsList[index].data );

    skillDivElement.appendChild(icon);
    skillDivElement.appendChild(spanTitle)
    // skillDivElement.appendChild(info)

    currentSkillsListElement.appendChild(skillDivElement);
    // skillsInProgessListElement.appendChild(skillDivElement)

    spanTitle.innerHTML = spanTitle.innerHTML + skillsList[index].title;
    
  }

  return divElement;
};