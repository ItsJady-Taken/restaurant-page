const Australian_Burger = require('../images/australian-burger.jpg');
const Olive_Burger = require('../images/olive-burger.jpg');
const Juicy_Lucy_Burger = require('../images/juicy-lucy-burger.jpg');
const Onion_Burger = require('../images/onion-burger.jpg');
const Elk_Burger = require('../images/elk-burger.jpg');
const Bison_Burger = require('../images/bison-burger.jpg');

const menuPage = ()=> {
    const menu_page = document.createElement('div');
    menu_page.classList.add('menu-page');

    menu_page.innerHTML = `
         <div class="overlay"> </div>

         <h2 class="header">Menu <i class="fa-solid fa-utensils"></i></h2>

         <section class="section">
            <h3>Australian Burger</h3>
            <div class="menu-1">
                <div class="ingredients">
                    <p class="ingredient-title">Main Ingredients:</p>
                    <ul>
                        <li>Ground Beef</li>
                        <li>Bacon</li>
                        <li>Beet</li>
                        <li>Eggs</li>
                        <li>Pineapple</li>
                        <li>Cheddar</li>
                        <li>Burger Bun</li>
                        <li>Onion</li>
                        <li>Tomato</li>
                        <li>Lettuce</li>
                        <li>Ketchup</li>
                        <li>Mayonnaise</li>
                        <li>Hot Sauce or Sriracha</li>
                    </ul> 
                     <p class="ing-price"><em style="font-weight: lighter; font-size: 30px;">1.000.000.00$</em> (Not Include Fries)</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Australian_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Onion Burger</h3>
            <div class="menu-1">
                <div class="ingredients">
                    <p class="ingredient-title">Main Ingredients:</p>
                    <ul>
                        <li>Ground Beef</li>
                        <li>Bacon</li>
                        <li>Beet</li>
                        <li>Eggs</li>
                        <li>Pineapple</li>
                        <li>Cheddar</li>
                        <li>Burger Bun</li>
                        <li>Onion</li>
                        <li>Tomato</li>
                        <li>Lettuce</li>
                        <li>Ketchup</li>
                        <li>Mayonnaise</li>
                        <li>Hot Sauce or Sriracha</li>
                    </ul> 
                     <p class="ing-price"><em style="font-weight: lighter; font-size: 30px;">1.000.000.00$</em> (Not Include Fries)</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Onion_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Juicy Lucy Burger</h3>
            <div class="menu-1">
               <div class="ingredients">
                    <p class="ingredient-title">Main Ingredients:</p>
                    <ul>
                        <li>Ground Beef</li>
                        <li>Bacon</li>
                        <li>Beet</li>
                        <li>Eggs</li>
                        <li>Pineapple</li>
                        <li>Cheddar</li>
                        <li>Burger Bun</li>
                        <li>Onion</li>
                        <li>Tomato</li>
                        <li>Lettuce</li>
                        <li>Ketchup</li>
                        <li>Mayonnaise</li>
                        <li>Hot Sauce or Sriracha</li>
                    </ul> 
                     <p class="ing-price"><em style="font-weight: lighter; font-size: 30px;">1.000.000.00$</em> (Not Include Fries)</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Juicy_Lucy_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Olive Burger</h3>
            <div class="menu-1">
                <div class="ingredients">
                    <p class="ingredient-title">Main Ingredients:</p>
                    <ul>
                        <li>Ground Beef</li>
                        <li>Bacon</li>
                        <li>Beet</li>
                        <li>Eggs</li>
                        <li>Pineapple</li>
                        <li>Cheddar</li>
                        <li>Burger Bun</li>
                        <li>Onion</li>
                        <li>Tomato</li>
                        <li>Lettuce</li>
                        <li>Ketchup</li>
                        <li>Mayonnaise</li>
                        <li>Hot Sauce or Sriracha</li>
                    </ul> 
                     <p class="ing-price"><em style="font-weight: lighter; font-size: 30px;">1.000.000.00$</em> (Not Include Fries)</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Olive_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Bison Burger</h3>
            <div class="menu-1">
                <div>
                    <p>An institution at many pubs, restaurants, and cafés in Australia, Australian burger with the lot first made its appearance in the 1940s, 
                    when beetroot started to be added to the burger alongside onions, tomatoes, lettuce, and meat.</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Bison_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Elk Burger</h3>
            <div class="menu-1">
                <div>
                    <p>An institution at many pubs, restaurants, and cafés in Australia, Australian burger with the lot first made its appearance in the 1940s, 
                    when beetroot started to be added to the burger alongside onions, tomatoes, lettuce, and meat.</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Elk_Burger}">
                </div>
            </div>
         </section>
    `;

    return menu_page;
} 

export{menuPage};