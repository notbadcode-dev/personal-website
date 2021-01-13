import { router } from './router/index.routes';
import 'jquery/src/jquery'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';

import './sass/main.scss'

const init = async () => {
    router(window.location.hash);

    window.addEventListener("hashchange", () => {
      router(window.location.hash);
    });

    const clickeable = document.getElementsByClassName('clickeable');

    console.log(clickeable);
    for (var i = 0; i < clickeable.length; i++) {
      clickeable[i].onclick = function() {
        console.log(document.getElementsByClassName('navbar-toggler')[0]);
        const button = document.getElementsByClassName('navbar-toggler')[0];
        button.classList.add('collapsing');
        button.classList.remove('collapsing');
        button.classList.add('collapsed');

        const navbar = document.getElementsByClassName('collapse')[0];
        navbar.classList.remove('show');
      };
    }
  };
  
  window.addEventListener("load", init);