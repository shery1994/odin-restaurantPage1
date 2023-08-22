const createMenuPage = () => {

    const content = document.querySelector('#content');
    const pageContent = doucment.createElement('div');
    pageContent.classlist.add('page-content');


    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'pizza';


    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'pasta';

    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Burger';

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);


}

export default createMenuPage;