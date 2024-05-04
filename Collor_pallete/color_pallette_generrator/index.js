const b1 = document.getElementById("b1")
const randomButton = document.getElementById("randomButon")

function buttonPressed(){
    const container = document.getElementById("container")
    console.log("I am the button")

    const column = document.createElement('div')
    column.className="column"
    container.appendChild(column)
}
b1.onclick=buttonPressed

function getRandomColor() {
    // Generate random values for red, green, and blue components
    console.log("Heloo colors")
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    // Create a CSS color string
    const color = `rgb(${red}, ${green}, ${blue})`;
  
    return color;
  }

  // randomButon.onclick = getRandomColor
  //  const arr = document.getElementsByClassName("column")
  //  console.log(arr)
  //  arr.forEach(function(element) {
  //   element.style.backgroundcolor=getRandomColor()  
  // });

  randomButton.onclick = function() {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
      column.style.backgroundColor = getRandomColor();
    });
  };
