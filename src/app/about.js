
const aboutPage = ()=> {
    const about_page = document.createElement('div');
    about_page.classList.add('about-page');

    about_page.innerHTML = `
        <div class="overlay"> </div>

        <h2 class="header">About Jeepee <i class="fa-solid fa-id-card"></i></h2>

        <section class="info-header">
            <p>
             
            </p>
        </section>
        <div class="info-body">
            <ul>
                <h5 style="font-style: italic; font-weight: light;">Create your custom burger</h5>
                <li>
                    <p>At <strong>Jeepee's Burger House</strong>, we understand that everyone has their unique taste when it comes to the perfect burger.That's why we offer a custom-made burger experience, allowing you to build a burger just the way you like it.</p>
                </li>     
                <h5 style="font-style: italic; font-weight: light;">How to order</h5>
                <li>
                    <p>Creating your custom burger is easy! You can order in-person at our restaurant, or contact us for takeout or delivery. Make your selections, and we'll handle the rest.</p>
                </li> 
                <h5 style="font-style: italic; font-weight: light;">Join Us Today</h5>
                <li>
                    <p>Experience the joy of a burger made exactly the way you want it. Visit <strong>Jeepee' Burger House</strong> and create your custom burger masterpiece today!</p>
                </li>    
            </ul>
        </div>
        
    
        <div class="footer" style="position: relative; top: 20px;">
            <p><span>Contacts:</span> <span>032-143-210</span> <span>123 Banana Street</span></p>
       </div>
    `;

    return about_page;
}

export {aboutPage};