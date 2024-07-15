const Australian_Burger = require('../images/australian-burger.jpg')

const menuPage = ()=> {
    const menu_page = document.createElement('div');
    menu_page.classList.add('menu-page');

    menu_page.innerHTML = `
         <div class="overlay"> </div>

         <h2 class="header">Menu <i class="fa-solid fa-utensils"></i></h2>

         <section class="section">
            <h3>Wet Burger</h3>
            <div class="menu-1">
                <div>
                    <p>An institution at many pubs, restaurants, and cafés in Australia, Australian burger with the lot first made its appearance in the 1940s, 
                    when beetroot started to be added to the burger alongside onions, tomatoes, lettuce, and meat.</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Australian_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Wet Burger</h3>
            <div class="menu-1">
                <div>
                    <p>An institution at many pubs, restaurants, and cafés in Australia, Australian burger with the lot first made its appearance in the 1940s, 
                    when beetroot started to be added to the burger alongside onions, tomatoes, lettuce, and meat.</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Australian_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Wet Burger</h3>
            <div class="menu-1">
                <div>
                    <p>An institution at many pubs, restaurants, and cafés in Australia, Australian burger with the lot first made its appearance in the 1940s, 
                    when beetroot started to be added to the burger alongside onions, tomatoes, lettuce, and meat.</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Australian_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Wet Burger</h3>
            <div class="menu-1">
                <div>
                    <p>An institution at many pubs, restaurants, and cafés in Australia, Australian burger with the lot first made its appearance in the 1940s, 
                    when beetroot started to be added to the burger alongside onions, tomatoes, lettuce, and meat.</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Australian_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Wet Burger</h3>
            <div class="menu-1">
                <div>
                    <p>An institution at many pubs, restaurants, and cafés in Australia, Australian burger with the lot first made its appearance in the 1940s, 
                    when beetroot started to be added to the burger alongside onions, tomatoes, lettuce, and meat.</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Australian_Burger}">
                </div>
            </div>
         </section>

          <section class="section">
            <h3>Wet Burger</h3>
            <div class="menu-1">
                <div>
                    <p>An institution at many pubs, restaurants, and cafés in Australia, Australian burger with the lot first made its appearance in the 1940s, 
                    when beetroot started to be added to the burger alongside onions, tomatoes, lettuce, and meat.</p>
                </div>
                <div class="menu-img">
                    <img alt="Wet Buger" src="${Australian_Burger}">
                </div>
            </div>
         </section>
    `;

    return menu_page;
} 

export{menuPage};