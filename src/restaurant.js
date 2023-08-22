//login for showing images 

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append image element
    const image = document.createElement('img');
    image.src = 'https://cache.marriott.com/marriottassets/marriott/NYCXR/nycxr-astor-court-8400-hor-clsc.jpg'
    image.height = '300';
    pageContent.appendChild(image);

    //create and apppend headline element
    const headline = document.createElement('h1');
    headline.textContent = 'welcome to the restaurant'
    pageContent.appendChild(headline);

    //create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'good food'
    pageContent.appendChild(copy);

    content.appendChild(pageContent)

}   

export default createRestaurantHomePage;
