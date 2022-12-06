import './style.css';
import { Layer } from './components/Layer/index.js';
import { Drink } from './components/Drink/index.js';

export const Menu = (props = {}) => {

    const { drinks } = props;

    const element = document.createElement('section');

    element.classList.add('menu');
    element.id = 'menu';
    
    element.innerHTML = `
        <div class="container">
            <h2>Naše nabídka</h2>
            <p class="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
            </p>
            <div class="drinks-list">
        

            <div class="order-detail">
            <a href="/objednavka">Detail objednávky</a>
            </div>
        </div>
   `



    if (drinks === undefined) {
        fetch('https://apps.kodim.cz/daweb/cafelora/api/me/drinks', {
            method: 'GET',
            headers: {
                'Authorization': 'Email marketamajerova.6@gmail.com',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                element.replaceWith(Menu({ drinks: data.results }));
            });
    } else {
        element.querySelector('.drinks-list').append(
          ...drinks.map((drink) => Drink(drink))
        );
    }

    console.log(drinks);


//    element.querySelector('.drinks-list').append(Drink({
//         id: 'romano',
//         name: 'Romano',
//         ordered: false,
//         image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
//         layers: [{
//             color: '#feeeca',
//             label: 'mléčná pěna',
//           },
//           {
//             color: '#b0dee1"',
//             label: 'voda',
//         }]
//     }))

   return element;

}




{/* <div class="drink">
<div class="drink__product">
<div class="drink__cup">
    <img src="https://apps.kodim.cz/daweb/cafelora/assets/cups/doppio.png">
</div>
<div class="drink__info">
    <h3>Doppio</h3>
    <div class="layer">
    <div class="layer__color" style="background-color: #613916"></div>
    <div class="layer__label">espresso</div>
    </div>
</div>
</div>
<div class="drink__controls">
<button class="order-btn">
    Objednat
</button>
</div>
</div> */}