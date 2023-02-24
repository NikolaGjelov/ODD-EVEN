let inNumber = document.querySelector(".input")
let btn = document.querySelector(".btn")
let result = ""
btn.addEventListener("click", function () {
if (inNumber.value % 2 == 0) {
  result="EVEN NUMBER!"}
else
  {
  result="ODD NUMBER!"
  }
document.querySelector(".par").innerHTML=result
})
