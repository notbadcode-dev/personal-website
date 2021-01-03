import { router } from './router/index.routes';
import * as jQuery from 'jquery';

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
  };
  
  window.addEventListener("load", init);