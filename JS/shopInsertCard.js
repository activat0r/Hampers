
const cart = document.getElementById("cart")

const grid = document.getElementById("card-grid");

const storageCart = localStorage.getItem("cart");
const storageCartJson = JSON.parse(storageCart)


for(let i=0;i<6;i++){
    grid.innerHTML +=  `<div class=" col-sm-12 col-md-6 col-lg-4 justify-content-center"><div class='shop-cards'>
    <img src="./Images/chocolate_hamper.jpg" class="cart-img"  alt="hamper image">
    <div class="card-content">
    <h5 class='' id="card_title_`+i+`">Hamper `+(i+1)+`</h5>
    <p class="card-text">Description for the hamper</p>
    <span class="cart_counter_group" id="cart_counter_group_`+i+`"><button class="cart_counter_btn cart_counter_btn_left" id="cartCountUp`+i+`">+</button><span class="cart_counter" id="cart_counter_`+i+`">0</span><button id="cartCountDown`+i+`" class="cart_counter_btn_right cart_counter_btn">-</button></span>

    </div>
    </div>
    </div>`
    console.log("adding event")
    const currentId = "addCart_"+i
    const currentCart = "cart_counter_"+i
}



var cartJson =[]

const cart_btn = document.getElementById("cart_btn")
var goToCheckout = false
cart_btn.addEventListener("click",function(){
    for(let i=0;i<6;i++){
        if(parseInt(document.getElementById("cart_counter_"+i).innerText)>0){
            data={id: i+1, value : parseInt(document.getElementById("cart_counter_"+i).innerText)}
            cartJson.push(data)
            goToCheckout=true
        }
    }
    if(goToCheckout){
    localStorage.setItem("cart",JSON.stringify(cartJson))   
    window.open("./HTML/checkout.html","_parent")
    }
    else{
        alert("Please add something to cart first")
    }
})


for(let i =0; i<6; i++){
  
    document.getElementById("cartCountUp"+i).addEventListener("click",function(){
        const counter = document.getElementById("cart_counter_"+i)
        
        if(parseInt(counter.innerHTML)<5){
            counter.innerHTML =  parseInt(counter.innerHTML) + 1;
            cart.innerText = parseInt(cart.innerText) + 1;
        }
        else{
            alert("You can only add 5 items to the cart")
        }
        })
    document.getElementById("cartCountDown"+i).addEventListener("click",function(){
        const counter = document.getElementById("cart_counter_"+i)
        if(parseInt(counter.innerHTML)>0){
        counter.innerHTML =  parseInt(counter.innerHTML) - 1;
        cart.innerText = parseInt(cart.innerText) - 1;
        
        }
    })
}



var cartSum = 0
if(storageCartJson != null){

    for(let i =0;i<storageCartJson.length; i++){     
        document.getElementById("cart_counter_"+(parseInt(storageCartJson[i].id)-1)).innerText = parseInt(storageCartJson[i].value)
        cartSum += parseInt(storageCartJson[i].value)
    }
    cart.innerText= parseInt(cartSum)

}
