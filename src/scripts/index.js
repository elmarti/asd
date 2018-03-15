import { createClass } from 'asteroid';
import { AsteroidVideoChatMixin } from 'meteor-video-chat'; 

const Asteroid = createClass([AsteroidVideoChatMixin]);
window.asteroid = new Asteroid('wss://blazevideochat.herokuapp.com');
if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';
import '../styles/index.scss';
