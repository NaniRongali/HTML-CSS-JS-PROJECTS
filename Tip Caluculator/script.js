const billInput=document.getElementById('billTotalInput')
const tipInput=document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfpeople = Number(numberOfPeopleDiv.innerText)
const calculateBill = () => {

  const bill = Number(billInput.value)
  const tipPercent=Number(tipInput.value)/100
  console.log(tipPercent)
  const tipAmount=bill+tipPercent
  const total=tipAmount+bill
  const perPersonTotal =   total/numberOfpeople
  console.log({perPersonTotal})
  perPersonTotalDiv.innerText = `${perPersonTotal.toFixed(2)}`

}

const increasePeople = () => {
    numberOfpeople += 1
    numberOfPeopleDiv.innerText=  numberOfpeople
  calculateBill()

}

const decreasePeople = () => {
if(numberOfpeople <= 1){
  return
}
  numberOfpeople -= 1
  numberOfPeopleDiv.innerText=  numberOfpeople
  calculateBill()

}