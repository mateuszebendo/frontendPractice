const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = () => {
    if(myCheckBox.checked){
        subResult.textContent = `Você esta inscrito!`;
    } else {
        subResult.textContent = `Você não esta inscrito!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `Você esta pagando com Visa.`;
    } else if(masterCardBtn.checked){
        paymentResult.textContent = `Você esta pagando com MasterCard`;
    } else if(payPalBtn.checked){
        paymentResult.textContent = `Você esta pagando com PayPal`;
    } else {
        paymentResult.textContent = `Selecione uma forma de pagamento!`
    }
    
}