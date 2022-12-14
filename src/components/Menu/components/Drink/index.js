import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {

    const { id, name, ordered, image, layers } = props;

    const element = document.createElement('div');

    element.classList.add('drink');

    element.innerHTML = `<div class="drink__product">
        <div class="drink__cup">
            <img src=${image}>
        </div>
        <div class="drink__info">
            <h3>${name}</h3>
            <div class="layers"><div>
        </div>
        </div>
       
        <div class="drink__controls">
        <button class="order-btn">
            Objednat
        </button>
        </div>`
    
       
    element.querySelector('.layers').append(...layers.map((item) => Layer(item)));

    if (ordered === true ){
        const button = element.querySelector('.order-btn');
        button.innerText = 'Zrušit'
        button.classList.add('order-btn--ordered');
    }

    const orderButton = element.querySelector('.order-btn');
    orderButton.addEventListener('click', () => {
        fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Email marketamajerova.6@gmail.com',
            },
            body: JSON.stringify({ordered: !ordered})
        })
            .then((response) => response.json())
            .then((data) => {
                element.replaceWith(Drink(data.results));
            });
    })

    // element.querySelector('.drink__info').append(Layer({
    //     color: '#feeeca',
    //     label: 'mléčná pěna',
    //     }),
    //     Layer({
    //         color: '#b0dee1"',
    //         label: 'voda',
    //     }),
    //     Layer({
    //         color: '#613916',
    //         label: 'espresso',
    // }))
   // ${layers.map((item) => Layer(item)).join('')}

    return element;
}