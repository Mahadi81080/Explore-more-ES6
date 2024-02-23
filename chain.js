// data access
const data = [{ id: 1, name: "abul", address: "kochu khet" }];
// console.log(data[0].address);


const products = {
    count: 5000,
    data:[
        {id:1, name:'lenovo laptop', price:65000},
        {id:2, name:'macbook', price:165000}
    ]
}
// second product price bar kro
console.log(products.data[1].price);


const user = {
    id:5001,
    name:'kudduc mia',
    address:{
        street:{
            first:'54/1 uttor side',
            second:'poribag ar goli',
            third:'no doria'
        },
        city:'Dhaka'
    }
}
// kuddduc ar address ar second item ta bar kro
console.log(user.address.street.second);