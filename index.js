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
    if(initial<= 0 || size<= 0 || current<0){
        userMessage("You have entered a negative value!", "black")

    }
      else if(initial>current){
        var loss = Math.abs(((initial-current) * size)).toFixed(2);
        var lossPercentage = Math.abs(((loss/initial) * 100)).toFixed(2);
        userMessage(` You made a loss of ₹ ${loss} and the percent is ${lossPercentage}%` , "red")
    } else if (current>initial){
        var profit = Math.abs(((current-initial) * size)).toFixed(2);
        var profitPercentage = Math.abs(((profit/initial) * 100)).toFixed(2);
        userMessage(`You made a profit of ₹ ${profit} and the percent is ${profitPercentage}%`, "green")
    } else if (current === initial){
        userMessage("You are neutral", "white")
    }
}

function userMessage(msg,color){
    document.body.style.backgroundColor = color;
    output.innerText = msg
}

