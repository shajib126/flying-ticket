
let firstClassTotal = 0
let firstClass = undefined;
let firstClassValue = 0
function increase(){
    firstClass = document.getElementById('first-class')
     firstClassValue = firstClass.value = parseInt(firstClass.value) + 1
     firstClassTotal = firstClassValue * 150
    total()
   
}
function decreament(){
    // let firstClass = document.getElementById('first-class')
     firstClassValue = firstClass.value = parseInt(firstClass.value) - 1
     firstClassTotal = firstClassValue * 150
    total()
    
}
let economy = undefined
let economyValue = 0;
let economyTotal = 0;

function economyIncrease(){
     economy = document.getElementById('economy')
      economyValue = economy.value = parseInt(economy.value) + 1
     economyTotal = economyValue * 100
    total()
 }
 function economyDecreament(){
     
    economyValue = economy.value = parseInt(economy.value) - 1
    economyTotal = economyValue * 100
     total()
 }
document.getElementById('ecoIncrease').addEventListener('click',economyIncrease)
document.getElementById('ecoDecrease').addEventListener('click',economyDecreament)

document.getElementById('increase').addEventListener('click',increase)
document.getElementById('decrease').addEventListener('click',decreament)


function total(){
    let subTotal = firstClassTotal + economyTotal
    document.getElementById('subtotal').innerText = `$${subTotal}`
    let vat = (subTotal*10)/100
    document.getElementById('vat').innerText = `$${vat}` 
    let total = subTotal + vat
    document.getElementById('total').innerText = `$${total}`  
}

document.getElementById('submit').addEventListener('click',function(){
    let flyingFrom = document.getElementById('flying_from').value
    let flyingTo = document.getElementById('flying_to').value
    let departureDate = document.getElementById('departure').value
    let returnDate = document.getElementById('return').value
   
    alert(
        `
        Flying to : ${flyingFrom}
        Flying from : ${flyingTo}
        Departure Date : ${departureDate} 
        Return Date : ${returnDate}
        
        `
    )
})

