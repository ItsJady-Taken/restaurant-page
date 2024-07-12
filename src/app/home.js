const Australian_Burger = require('../images/australian-burger.jpg');
const Olive_Burger = require('../images/olive-burger.jpg');
const Juicy_Lucy_Burger = require('../images/juicy-lucy-burger.jpg');

const homePage = () => {
    const home_page = document.createElement('main');
    home_page.classList.add("home-page");

    home_page.innerHTML = `
        <div class="overlay"> </div>
       
        <div class="header">
            <h1>Welcom to Jeepee's Burger House</h1>
            <p>Crafting Juicy Perfection in Every Bite</p>
        </div>

        <div class="fetured-container">
            <h2><em>Our Specialty</em></h2>

            <div class="fetured-1">
                <div class="image-fetured">
                    <img alt="Australian Burger" src="${Australian_Burger}">
                </div>
                <div class="text-fetured">
                    <h3>Australian Burger</h3>
                    <p>An institution at many pubs, restaurants, and cafés in Australia, Australian burger with the lot first made its appearance in the 1940s, 
                    when beetroot started to be added to the burger alongside onions, tomatoes, lettuce, and meat.</p>
                    <p>Burgers with beetroot rose in popularity during the 1950s and the 1960s, but in the 1970s, 
                    with the opening of fast-food chain restaurants such as McDonald's and Hungry Jacks, its popularity began to wane. </p>
                    <p><em style="font-weight: lighter; font-size: 30px;">1.000.000.00$</em> (Not Include Fries)</p>
                    
                </div>
            </div>

            <div class="fetured-2">
                <div>
                    <h3>Olive Burger</h3>
                    <p>Olive burger is an American burger variety originating from Michigan. It's made with a combination of ground beef, oil, white buns, mayonnaise, 
                    and pitted green olives. In order to prepare it, the meat patties are fried, topped with a mixture of olives and mayonnaise, then placed in a burger bun with no other condiments.</p>
                    <p>Indulge in our Olive Burger, featuring a juicy beef patty topped with a savory blend of green and black olives, crisp lettuce, ripe tomatoes, and tangy feta cheese. Nestled in a toasted brioche bun, 
                    this burger offers a delightful mix of flavors that will tantalize your taste buds. Perfect for olive enthusiasts and burger lovers alike!</p>
                    <p><em style="font-weight: lighter; font-size: 30px;">10.000.00$</em></p>
                </div>
                <div class="image-fetured">
                    <img alt="Olive Burger" src="${Olive_Burger}">                
                </div>
            </div>

            <div class="fetured-3">
                <div class="image-fetured">
                    <img alt="Juicy Lucy Burger" src="${Juicy_Lucy_Burger}">
                </div> 
                <div>
                    <h3>Juicy Lucy</h3>
                    <p>Named one of Time magazine's 17 most influential burgers, Juicy Lucy—also purposely spelled without the "i"—is a twist on the classic cheeseburger in which the cheese is melted inside the patty. Hands down a Minneapolis favorite, 
                    the cheese-stuffed Lucy burger is an exquisite experience which actually requires some skill in order to know how to eat it without burning your mouth with a hot shot of the flowing molten American cheese locked between the two ground beef patties.</p>
                    <p><em style="font-weight: lighter; font-size: 30px;">Your Whole Wallet $</em> (Include driving licence, debit card, credid card, identification card, ...etc)</p>
                </div>
            </div>
       </div>

       <div class="footer">
            <p><span>Contacts:</span> <span>032-143-210</span> <span>123 Banana Street</span></p>
       </div>
        `;

    return home_page;
}

export {homePage};



