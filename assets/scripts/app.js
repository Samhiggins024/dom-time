const helloBtn = document.querySelector("#hello-btn");
const helloBox = document.querySelector("#hello-box");
const userGreeting = document.querySelector("#user-greeting");

console.log('helloBox.value:', helloBox);


helloBtn.addEventListener("click", () => {
  console.log('helloBox.value:', helloBox.value);
  userGreeting.textContent = 'hi there, ' + helloBox.value;
    });
//document.getElementById("hello-btn").addEventListener("click", () => {