const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu visibility
    console.log(`sai`);
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    menuOpenButton.click(); // Call the click method correctly
});

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// order working
const Coffee_button = document.getElementById("Coffee_butt");
const BlackCoffee_button = document.getElementById("BlackCoffee_butt");
const GreenTea_button = document.getElementById("GreenTea_butt");
const Cappucino_button = document.getElementById("Cappucino_butt");
const TransResult = document.getElementById("Text_Result");
const OrderLIST = document.getElementById("LIST");
let CountArray = [0, 0, 0, 0];
let CostArray = [0, 0, 0, 0];

const Cof_rup = 20;
const BlackCof_rup = 70;
const GreenTea_rup = 50;
const Cappucino_rup = 100;
let Total_Price;
let OriginalMenu = ["Coffee", "BlackCoffee", "GreenTea", "Capuccino"];

Coffee_button.onclick = function() {
    CountArray[0]++;
    CostArray[0] = CountArray[0] * Cof_rup;
    console.log(CostArray);
    Total_Price = CostArray.reduce(Sum);
    console.log(`Total price=${Total_Price}`);
    console.log(`Ordered Item:${OriginalMenu[0]}:${CountArray[0]}`);
    TransResult.textContent = `Total Price: $${Total_Price}`;
    OrderLIST.innerHTML = OriginalMenu.map((item, index) => `<li>${item}: ${CountArray[index]}</li>`).join('');
};

BlackCoffee_button.onclick = function() {
    CountArray[1]++;
    CostArray[1] = CountArray[1] * BlackCof_rup;
    console.log(CostArray);
    Total_Price = CostArray.reduce(Sum);
    console.log(`Total price=${Total_Price}`);
    TransResult.textContent = `Total Price: $${Total_Price}`;
    OrderLIST.innerHTML = OriginalMenu.map((item, index) => `<li>${item}: ${CountArray[index]}</li>`).join('');
};

GreenTea_button.onclick = function() {
    CountArray[2]++;
    CostArray[2] = CountArray[2] * GreenTea_rup;
    console.log(CostArray);
    Total_Price = CostArray.reduce(Sum);
    console.log(`Total price=${Total_Price}`);
    TransResult.textContent = `Total Price: $${Total_Price}`;
    OrderLIST.innerHTML = OriginalMenu.map((item, index) => `<li>${item}: ${CountArray[index]}</li>`).join('');
};

Cappucino_button.onclick = function() {
    CountArray[3]++;
    CostArray[3] = CountArray[3] * Cappucino_rup;
    console.log(CostArray);
    Total_Price = CostArray.reduce(Sum);
    console.log(`Total price=${Total_Price}`);
    TransResult.textContent = `Total Price: $${Total_Price}`;
    OrderLIST.innerHTML = OriginalMenu.map((item, index) => `<li>${item}: ${CountArray[index]}</li>`).join('');
};

// finding sum of total price of orders
function Sum(Previous, next) {
    return Previous + next;
}