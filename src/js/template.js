import items from '../templates/gallery-items.hbs';
import dish from '../menu.json';
import '../styles.scss';

const menuRef = document.querySelector('.js-menu');

const markup = items(dish);
menuRef.insertAdjacentHTML('beforeend', markup);
