const grid = document.getElementById("card-grid");

for(let i=0;i<6;i++){
    grid.innerHTML +=  `<div class=" col-sm-12 col-md-4 justify-content-center"><div class='card  shop-cards'>
    <img src="/../Images/chocolate_hamper.jpg" class="card-img-top"  alt="hamper image">
    <div class="card-body">
    <h5 class='card-title' id="card_title_`+i+`">Hamper `+i+`</h5>
    <p class="card-text">Description for the hamper</p>
    <span class="cart_counter_group" id="cart_counter_group_`+i+`"><button class="cart_counter_btn cart_counter_btn_left" id="cartCountUp`+i+`">+</button><span class="cart_counter" id="cart_counter_`+i+`">0</span><button id="cartCountDown`+i+`" class="cart_counter_btn_right cart_counter_btn">-</button></span>
    </div></div>
    </div>`
    console.log("adding event")
    const currentId = "addCart_"+i
    const currentCart = "cart_counter_"+i
}

const cart = document.getElementById("cart")
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