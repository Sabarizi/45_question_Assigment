//function store car info (manfacture model name extra option)

function storeCarinfo(manfacturer:string, modelName :string, ...exrtaOption: { [key : string]: any} [] )
:Object
{
   
    const carinfo = {
        manfacturer,
        modelName,
        ...Object.assign({}, ...exrtaOption)

    }
    return carinfo
};
let car =storeCarinfo('Honda','civic' ,{color:'black'} , {features :['Navigation' , 'Power Window']})
console.log(car);
