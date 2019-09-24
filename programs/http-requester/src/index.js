import _ from 'lodash';
import './css/common.css';
import img from './img/img.png';

function component() {
    let element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('red');
    
    var image = new Image();
    image.src = img;

    element.appendChild(image);

    return element;
}

document.body.appendChild(component());