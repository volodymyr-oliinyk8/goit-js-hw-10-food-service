import itemMenuTpl from '../templates/item-menu.hbs';
import menu from '../templates/menu.json';



const menuContainer = document.querySelector('.js-menu');

const itemMenuMarkup = itemMenuTpl(menu);


menuContainer.insertAdjacentHTML('beforeend', itemMenuMarkup);