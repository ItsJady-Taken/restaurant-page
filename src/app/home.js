

const homePage = () => {
    const home_page = document.createElement('main');
    home_page.classList.add("home-page");

    home_page.innerHTML = `
        <div class="overlay"> </div>
       
        <div class="header">
            <h1>Welcom to Jeepee's Burger House</h1>
            <p>Home to all types of burger you can imagine</p>
        </div>
       
        `;

    return home_page;
}

export {homePage};



