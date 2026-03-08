document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("orderForm").addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const phone=document.getElementById("phone").value;

const type=document.getElementById("type").value;

const qty=document.getElementById("qty").value;

const address=document.getElementById("address").value;

if(!name||!phone||!type){

alert("Please fill required fields");

return;

}

const message=`NEW BRICK ORDER

Name: ${name}

Phone: ${phone}

Brick Type: ${type}

Quantity: ${qty}

Address: ${address}

`;

window.open("https://wa.me/919509100200?text="+encodeURIComponent(message));

});