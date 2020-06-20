// assign element by id
var p1 = document.getElementById("p1");

// change its HTML
p1.innerHTML = "not really";

// get array of all figcaptions
let arr1 = document.getElementsByTagName("figcaption")

// change them while iteratting
for (let cap of arr1){
  cap.innerHTML = "gatito"
}

// change images also
for (let im of document.getElementsByTagName("img")){
  im.setAttribute("src", "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png")
}

// change her name to pink
document.getElementById("h11").setAttribute("style", "color: pink")

// change bg to green
document.body.setAttribute("style", "background: green")

