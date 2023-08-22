let buttonsPlus = Array.from(document.getElementsByClassName("fa-plus-circle"))
// console.log(buttonsPlus)

for(let btnplus of buttonsPlus){
    btnplus.addEventListener("click" , function(){
        btnplus.nextElementSibling.innerHTML++;
        sum()
    })
}
//
let buttonsMinus = Array.from(document.getElementsByClassName("fa-minus-circle"))
console.log(buttonsMinus)
for(let btnminus of buttonsMinus){
    btnminus.addEventListener("click" , function(){
        if(btnminus.previousElementSibling.innerHTML > 0){
            btnminus.previousElementSibling.innerHTML--
            sum()
        }
    })
}

function sum(){
    let qty = document.querySelectorAll(".qty");
    // console.log(qty)
    let price = document.querySelectorAll(".price");
    // console.log(price)
    let sum = 0 ;
    for(let i = 0 ; i < qty.length ; i++){
        sum += qty[i].innerHTML * price[i].innerHTML ;

    }
    // console.log(sum)
    document.getElementById("totalPrice").innerHTML = "Shooping Bag Total : $ " +sum;

}

//
let buttonsDelete = document.getElementsByClassName("fa-trash");
console.log(buttonsDelete)

for(let btndelete of buttonsDelete){
    btndelete.addEventListener("click" , function(){
        btndelete.parentNode.remove();
        sum();
    })
}

let hearts = document.querySelectorAll(".fa-heart")

for(let heart of hearts){
    heart.addEventListener("click",function(){
        heart.classList.toggle("red")
    })
}

let orderButton = document.getElementsByClassName("btnOrder");

for(let order of orderButton){
    order.addEventListener("click",function(){
        alert("Thank you for purchasing with us")
    })
}