
const aboutPage = ()=> {
    const about_page = document.createElement('div');
    about_page.classList.add('about-page');

    about_page.innerHTML = `
         <div class="overlay"> </div>

         <h2 class="header">About Jeepee <i class="fa-solid fa-id-card"></i></h2>
    `;

    return about_page;
}

export {aboutPage};