const grid = document.getElementById("card-grid");

for(let i=0;i<6;i++){
    grid.innerHTML +=  `<div class=" col-sm-12 col-md-4 justify-content-center"><div class='card  shop-cards' style="width: 15rem">
    <img src="./../Images/chocolate_hamper.jpg" class="card-img-top"  alt="hamper image">
    <div class="card-body">
    <h5 class='card-title' id="card_title_`+i+`">Hamper `+i+`</h5>
    <p class="card-text">Description for the hamper</p>
    <button class="btn btn-primary" id="addCart_`+i+`">Add to cart</button>
    <span class="cart_counter_group" id="cart_counter_group_`+i+`"><button class="cart_counter_btn cart_counter_btn_left">+</button><span class="cart_counter" id="cart_counter_`+i+`">0</span><button class="cart_counter_btn_right cart_counter_btn">-</button></span>
    </div></div>
    </div>`
    console.log("adding event")
    const currentId = "addCart_"+i
    const currentCart = "cart_counter_"+i
}

for(let i =0; i<6; i++){
    document.getElementById("addCart_"+i).addEventListener("click",function(){
        console.log("click")
        const counter = document.getElementById("cart_counter_"+i)
        counter.innerHTML =  parseInt(counter.innerHTML) + 1
    })
}