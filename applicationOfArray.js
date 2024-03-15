
// creating array

var products = [{
    id:1,
    name:"Redmi note 12",
    category:"c1",
    price:10000
},
{
    id:2,
    name:"Redmi note 10",
    category:"c1",
    price: 9000
},
{
    id:3,
    name:"Redmi 12",
    category:"c1",
    price:8000
},
{
    id:4,
    name:"p4",
    category:"c2"
},
{
    id:5,
    name:"p5",
    category:"c2"
},
{
    id:6,
    name:"p6",
    category:"c2"
},
{
    id:7,
    name:"p7",
    category:"c3"
},
{
    id:8,
    name:"p8",
    category:"c3"
}
]

function getProductById(id)
{
    var product = products.find(p=>(p.id == id))
    return product;
}

function getProductByCategory(category)
{
    return products.filter(p=>p.category == category)
}

function searchProductByName(searchText)
{
    return products.find(p=> p.name == searchText)
}
function searchProduct(searchText)
{
    return products.filter(p=>{ return p.name.includes(searchText)})
}

function addNewFieldToAllProducts(fieldname,value)
{
    products.map(p=>{
        p[fieldname] = value;
    })
    return true;
}

console.log(addNewFieldToAllProducts("seller","Amazon"))
 
function addNewFieldToProducts(fieldname,value,searchText)
{
    products.map(p=>{
        if(p.name.includes(searchText)){
            p[fieldname] = value;
        }  
    })
    return true;
}

addNewFieldToProducts("brand","Redmi","Redmi")
console.log(products)