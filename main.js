let shop=document.getElementById("shop")

let shopItems=[
    {

        id:"1",
        name:"T-Shirt",
        price:10,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/image1.jpg"

    },
    {
        id:"2",
        name:"Blazer",
        price:25,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/Blazer.jpg"

    },
    {
        id:"3",
        name:"Festival Blazer",
        price:30,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/Festival_Blazer.jpg"
        
    },
    {
        id:"4",
        name:"Formal Shirt",
        price:15,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/formal_shirt.jpg"
    },
    {
        id:"5",
        name:"Hooded Swatshirt",
        price:20,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/Hooded_Sweatshirt.jpg"
    },
    {
        id:"6",
        name:"Running Shoes",
        price:20,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/Running_Shoes.jpg"

    },
];
let generateShop = () => {
    return (shop.innerHTML=shopItems
        .map((x)=>{
            let{id,name,price,desc,img}=x
        return `
        <div id=product-id-${id} class="item">
        <img width="244" src=${img} alt="img1" >
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div id=${id}class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    
        `

    })
    .join(""));


};

generateShop()