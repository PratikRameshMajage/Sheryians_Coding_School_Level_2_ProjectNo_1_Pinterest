arr = [
    {
        name: "Rose", img: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sweet", img: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Bottle", img: "https://images.unsplash.com/photo-1566557087503-b839ce6e5aa0?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Car", img: "https://plus.unsplash.com/premium_photo-1677993185885-985af6b425c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Bike", img: "https://images.unsplash.com/photo-1531502774286-5e4e8e94879f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
]
// Show Data Images
function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.img}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })
    document.querySelector(".container").innerHTML = clutter;
}
function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput")
    // Handling Overlay div
    input.addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })
    input.addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })


    input.addEventListener("input", function(){
        const filterarray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filterarray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
        document.querySelector(".searchdata").style.display = "block"
        document.querySelector(".searchdata").innerHTML = clutter
    })
}



handleSearchFunctionality()
showTheCards();