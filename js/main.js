'use strict';

const signal = 'pink';

// if(signal=== 'red'){
//     console.log('stop');
// }else if(signal=== 'yallow'){
//     console.log('causion');
// }else if(signal=== 'blue'){
//     console.log('go');
// }

switch(signal){
    case 'red':
    console.log('stop');
    break;

    case 'yellow':
    console.log('causion');
    break;

    case 'blue':
    case'green':
    console.log('go');
    break;
    default:
    console.log('wrong signal');
    break;
}


