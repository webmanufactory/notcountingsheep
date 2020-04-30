const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const button4 = document.querySelector(".button-4");
const button5 = document.querySelector(".button-5");
const button6 = document.querySelector(".button-6");
const deliveryBtn = document.querySelector(".button-delivery");
const policyBtn = document.querySelector(".href-policy");
const modal1 = document.querySelector(".modal-1");
const modal2 = document.querySelector(".modal-2");
const modal3 = document.querySelector(".modal-3");
const modal4 = document.querySelector(".modal-4");
const modal5 = document.querySelector(".modal-5");
const modal6 = document.querySelector(".modal-6");
const deliveryModl = document.querySelector(".modal-delivery");
const policyModl = document.querySelector(".modal-policy");
const close1 = document.querySelector(".close-1");
const close2 = document.querySelector(".close-2");
const close3 = document.querySelector(".close-3");
const close4 = document.querySelector(".close-4");
const close5 = document.querySelector(".close-5");
const close6 = document.querySelector(".close-6");
const deliveryCls = document.querySelector(".close-delivery");
const policyCls = document.querySelector(".close-policy");

button1.addEventListener("click", function (event) {
    modal1.classList.add("is-open");
});

close1.addEventListener("click", function (event) {
    modal1.classList.remove("is-open");
});
button2.addEventListener("click", function (event) {
    modal2.classList.add("is-open");
});

close2.addEventListener("click", function (event) {
    modal2.classList.remove("is-open");
});
button3.addEventListener("click", function (event) {
    modal3.classList.add("is-open");
});

close3.addEventListener("click", function (event) {
    modal3.classList.remove("is-open");
});
button4.addEventListener("click", function (event) {
    modal4.classList.add("is-open");
});

close4.addEventListener("click", function (event) {
    modal4.classList.remove("is-open");
});
button5.addEventListener("click", function (event) {
    modal5.classList.add("is-open");
});

close5.addEventListener("click", function (event) {
    modal5.classList.remove("is-open");
});
button6.addEventListener("click", function (event) {
    modal6.classList.add("is-open");
});

close6.addEventListener("click", function (event) {
    modal6.classList.remove("is-open");
});
deliveryBtn.addEventListener("click", function (event) {
    deliveryModl.classList.add("is-open");
});

deliveryCls.addEventListener("click", function (event) {
    deliveryModl.classList.remove("is-open");
});
policyBtn.addEventListener("click", function (event) {
    policyModl.classList.add("is-open");
});

policyCls.addEventListener("click", function (event) {
    policyModl.classList.remove("is-open");
});

new WOW().init();