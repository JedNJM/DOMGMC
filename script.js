// Like Buttons
var hr1 = document.getElementById("heart1");
var hr2 = document.getElementById("heart2");
var hr3 = document.getElementById("heart3");

const hrbtn1 = document.querySelector("#heart1");
hrbtn1.addEventListener("click", function () {
  if (hr1.style.color === "red") {
    hr1.style.color = "black";
  } else {
    hr1.style.color = "red";
  }
});
const hrbtn2 = document.querySelector("#heart2");
hrbtn2.addEventListener("click", function () {
  if (hr2.style.color === "red") {
    hr2.style.color = "black";
  } else {
    hr2.style.color = "red";
  }
});
const hrbtn3 = document.querySelector("#heart3");
hrbtn3.addEventListener("click", function () {
  if (hr3.style.color === "red") {
    hr3.style.color = "black";
  } else {
    hr3.style.color = "red";
  }
});

// ####################################################################################
// Delete The Product

const ITEM1 = document.querySelector("#ITEM1");
const DL1BTN = document.querySelector("#DL1");
DL1BTN.addEventListener("click", function () {
  ITEM1.remove();
});
const ITEM2 = document.querySelector("#ITEM2");
const DL2BTN = document.querySelector("#DL2");
DL2BTN.addEventListener("click", function () {
  ITEM2.remove();
});
const ITEM3 = document.querySelector("#ITEM3");
const DL3BTN = document.querySelector("#DL3");
DL3BTN.addEventListener("click", function () {
  ITEM3.remove();
});

// ####################################################################################
FullPrice = document.getElementById('finalPrice');
// + and -

const val1 = document.querySelector("#val1");
const dec1 = document.querySelector("#dec1");
const inc1 = document.querySelector("#inc1");
const price1 = document.querySelector("#price1");

inc1.addEventListener("click", function () {

    price = parseFloat(price1.textContent); 
 
   console.log(price);
   val1.value = parseInt(val1.value) + 1;
   price1.textContent = (price + 1379.00);
   FullPrice.value = parseFloat(FullPrice.value) + 1379.00
 });
 
 dec1.addEventListener("click", function () {
   if (parseInt(val1.value) > 0) 
   {  const price = parseFloat(price1.textContent);
     val1.value = parseInt(val1.value) - 1;
     price1.textContent = (price - 1379.00);
     FullPrice.value = parseFloat(FullPrice.value) - 1379.00
    }
   else {
     console.log("cannot go to below 0");
   }
 });
 

//  #####


const val2 = document.querySelector("#val2");
const dec2 = document.querySelector("#dec2");
const inc2 = document.querySelector("#inc2");
const price2 = document.querySelector("#price2");

inc2.addEventListener("click", function () {

    price = parseFloat(price2.textContent); 
 
   console.log(price);
   val2.value = parseInt(val2.value) + 1;
   price2.textContent = (price + 176.00);
   FullPrice.value = parseFloat(FullPrice.value) + 176.00
 });
 
 dec2.addEventListener("click", function () {
   if (parseInt(val2.value) > 0) 
   {  const price = parseFloat(price2.textContent);
     val2.value = parseInt(val2.value) - 1;
     price2.textContent = (price - 176.00);
     FullPrice.value = parseFloat(FullPrice.value) - 176.00
    }
    
   else {
     console.log("cannot go to below 0");
   }
 });
 


//  #####


 const val3 = document.querySelector("#val3");
 const dec3 = document.querySelector("#dec3");
 const inc3 = document.querySelector("#inc3");
 const price3 = document.querySelector("#price3");
 
 inc3.addEventListener("click", function () {
 
     price = parseFloat(price3.textContent); 
  
    console.log(price);
    val3.value = parseInt(val3.value) + 1;
    price3.textContent = (price + 500.00);
    FullPrice.value = parseFloat(FullPrice.value) + 500.00
  });
  
  dec3.addEventListener("click", function () {
    if (parseInt(val3.value) > 0) 
    {  const price = parseFloat(price3.textContent);
      val3.value = parseInt(val3.value) - 1;
      price3.textContent = (price - 500.00);
      FullPrice.value = parseFloat(FullPrice.value) - 500.00
    }
      
    else {
      console.log("cannot go to below 0");
    }
  });
  
 


// TOTAL PRICE


console.log(FullPrice.value)

