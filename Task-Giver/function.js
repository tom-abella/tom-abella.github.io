const activity = document.getElementById("activity")
const goBtn = document.getElementById("goBtn")

goBtn.addEventListener("click",function(){
    fetch("https://www.boredapi.com/api/activity")
    .then(request => request.json())
    .then(data => activity.textContent = data.activity)
})
