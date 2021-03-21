const table = document.getElementById("checkout_table")


const cartString = localStorage.getItem("cart")
const cartJson = JSON.parse(cartString)
for(let i=0;i<cartJson.hampers.length;i++){
    let tr = table.insertRow(i+1)
    let td = tr.insertCell(0);
    td.innerHTML =  ((cartJson.hampers[i].name).replace("_"," "))
    let td1 = tr.insertCell(1);
    td1.innerHTML =  (cartJson.hampers[i].value)
    let td2 = tr.insertCell(2);
    td2.innerHTML =  "&#8377"+" 200"
    let td3 = tr.insertCell(3);
    td3.innerHTML =  "&#8377"+ " " +(200*parseInt(cartJson.hampers[i].value))
}
let totalRow = table.insertRow(-1)
