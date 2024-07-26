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
                        <li>GROUND BEEF</li>
                        <li>BACON</li>
                        <li>BEET</li>
                        <li>EGGS</li>
                        <li>PINEAPPLE</li>
                        <li>CHEDDAR</li>
                        <li>BURGER BUN</li>
                        <li>ONION</li>
                        <li>TOMATO</li>
                        <li>LETTUCE</li>
                        <li>KETCHUP</li>
                        <li>MAYONNAISE</li>
                        <li>HOT SAURCE OR SRIRACHA</li>
                    </ul> 
                     <p class="ing-price"><em style="font-weight: lighter; font-size: 30px;">1.000.000.00 $</em> (Not Include Fries)</p>
                </div>
                <div class="menu-img">
                    <img alt="Australian Buger" src="${Australian_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Onion Burger</h3>
            <div class="menu-1">
                <div class="ingredients">
                    <p class="ingredient-title">Main Ingredients:</p>
                    <ul>
                        <li>GROUND BEEF</li>
                        <li>BURGER BUN</li>
                        <li> ONION</li>
                        <li>PICKLED CUCUMBERS</li>
                        <li>CHEESE</li>
                        <li>MUSTARD</li>
                        <li>MAYONNAISE</li>                    
                    </ul> 
                     <p class="ing-price"><em style="font-weight: lighter; font-size: 30px;">0.99 $</em> (Include Fries And Drinks)</p>
                </div>
                <div class="menu-img">
                    <img alt="Onion Buger" src="${Onion_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Juicy Lucy Burger</h3>
            <div class="menu-1">
               <div class="ingredients">
                    <p class="ingredient-title">Main Ingredients:</p>
                    <ul>
                        <li>GROUND BEEF</li>
                        <li>CHEESE</li>
                        <li>SALT</li>
                        <li>GARLIC</li>
                        <li>WORCESTERSHIRE SAUCE</li>
                        <li>BLACK PEPPER</li>
                        <li>BURGER BUN</li>
                        <li>PRESERVED VEGETABLE</li>
                    </ul> 
                     <p class="ing-price"><em style="font-weight: lighter; font-size: 30px;">Your Whole Wallet $</em> (Include driving licence, debit card, credid card, identification card, ...etc)</p>
                </div>
                <div class="menu-img">
                    <img alt="Juicy Lucy Buger" src="${Juicy_Lucy_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Olive Burger</h3>
            <div class="menu-1">
                <div class="ingredients">
                    <p class="ingredient-title">Main Ingredients:</p>
                    <ul>
                        <li>GROUND BEEF</li>
                        <li>MAYONNAISE</li>
                        <li>BURGER BUN</li>
                        <li>OLIVES</li>
                        <li>CHEESE (Optional)</li> 
                    </ul> 
                     <p class="ing-price"><em style="font-weight: lighter; font-size: 30px;">10.000.00 $</em></p>
                </div>
                <div class="menu-img">
                    <img alt="Olive Buger" src="${Olive_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Bison Burger</h3>
            <div class="menu-1">
                <div class="ingredients">
                    <p class="ingredient-title">Main Ingredients:</p>
                    <ul>
                        <li>BISON</li>
                        <li>BURGER BUN</li>
                        <li>ONION</li>
                        <li>LETTUCE</li>
                        <li>TOMATO</li> 
                        <li>CHEDDAR</li>
                    </ul> 
                     <p class="ing-price"><em style="font-weight: lighter; font-size: 30px;">PayPal Only $</em></p>
                </div>
                <div class="menu-img">
                    <img alt="Bison Buger" src="${Bison_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Elk Burger</h3>
            <div class="menu-1">
               <div class="ingredients">
                    <p class="ingredient-title">Main Ingredients:</p>
                    <ul>
                        <li>ELK</li>
                        <li>BURGER BUN</li>
                        <li>LETTUCE</li>
                        <li>TOMATO</li>
                        <li>ONION</li> 
                    </ul> 
                     <p class="ing-price"><em style="font-weight: lighter; font-size: 30px;">Ask The Manager $</em></p>
                </div>
                <div class="menu-img">
                    <img alt="Elk Buger" src="${Elk_Burger}">
                </div>
            </div>
         </section>

        <div class="footer">
            <p><span>Sorry Too Lazy To Add Side Dish </span> <a href="https://www.youtube.com/watch?v=5l7IxILYVKU&ab_channel=HRSEdits">So Here A Link To A Funny Cat Video</a></p>
       </div>
    `;

    return menu_page;
} 

export{menuPage};