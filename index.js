var intialPrice = document.querySelector("#intial-price")
var quantity = document.querySelector("#quant")
var currentPrice = document.querySelector("#cur-price")
var output = document.querySelector(".output")
var checkButton = document.querySelector(".check")

checkButton.addEventListener("click", function submitHandler(){
    var init = Number(intialPrice.value)
    var quant = Number(quantity.value)
    var current = Number(currentPrice.value)


    profitOrLoss(init,quant,current)
})

function profitOrLoss(initial,size,current){
      if(initial>current){
        var loss = (initial-current) * size;
        var lossPercentage = (loss/initial) * 100;
        userMessage(` You made a loss of ₹ ${loss} and the percent is ${lossPercentage}%` , "red")
    } else if (current>initial){
        var profit = (current-initial) * size;
        var profitPercentage = (profit/initial) * 100;
        userMessage(`You made a profit of ₹ ${profit} and the percent is ${profitPercentage}%`, "green")
    } else if (current === initial){
        userMessage("You are neutral", "white")
    }
}

function userMessage(msg,color){
    document.body.style.backgroundColor = color;
    output.innerText = msg
}

