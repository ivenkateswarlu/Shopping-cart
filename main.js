let shop=document.getElementById("shop")

let shopItems=[
    {

        id:"hdbghebgj",
        name:"T-Shirt",
        price:10,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/image1.jpg"

    },
    {
        id:"jfejejf",
        name:"Blazer",
        price:25,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/Blazer.jpg"

    },
    {
        id:"dnfjnefhu",
        name:"Festival Blazer",
        price:30,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/Festival_Blazer.jpg"
        
    },
    {
        id:"knfjenf",
        name:"Formal Shirt",
        price:15,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/formal_shirt.jpg"
    },
    {
        id:"dkvnjnv",
        name:"Hooded Swatshirt",
        price:20,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/Hooded_Sweatshirt.jpg"
    },
    {
        id:"dsjknjnehugh",
        name:"Running Shoes",
        price:20,
        desc:"This is a premium quality T-shirt which doesn't have any artifical colors in it.",
        img:"images/Running_Shoes.jpg"

    },
];

let basket=[];

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
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    
        `

    })
    .join(""));


};

generateShop()


let increment = (id) => {
    let selectedItem=id;
    let search=basket.find((x) => x.id === selectedItem.id);
    if(search===undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        });

    }else{
        search.item+=1; 
    }
   
    //console.log(basket);

    update(selectedItem.id);

};

let decrement = (id) => {
    let selectedItem=id;
    let search=basket.find((x) => x.id ===selectedItem.id );
    if(search.item===0) return;
    else{
        search.item-=1;
    }
    //console.log(basket);

    update(selectedItem.id);

};

let update = (id) => {
    let search=basket.find((x) => x.id===id);

    //console.log(search.item);
    document.getElementById(id).innerHTML=search.item;
    calculation();

};

let calculation= () => {

};