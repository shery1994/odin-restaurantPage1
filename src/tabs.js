
const createTabs = () => {
    
    const content = document.querySelector('#content');


    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

        


}

export default createTabs;