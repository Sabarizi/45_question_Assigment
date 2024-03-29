"use strict";
//function store car info (manfacture model name extra option)
function storeCarinfo(manfacturer, modelName, ...exrtaOption) {
    const carinfo = Object.assign({ manfacturer,
        modelName }, Object.assign({}, ...exrtaOption));
    return carinfo;
}
;
let car = storeCarinfo('Honda', 'civic', { color: 'black' }, { features: ['Navigation', 'Power Window'] });
console.log(car);
