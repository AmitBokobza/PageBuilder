const content = document.getElementById("content");
const colorInput = document.getElementById("colorInput");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
const sizeContent = document.getElementById("sizeContent");
const colorContent = document.getElementById("colorContent");
const borderWidth = document.getElementById("borderWidth");
const borderColor = document.getElementById("borderColor");
const borderType = document.getElementById("borderType");
const paddingInput = document.getElementById("paddingDiv");
const marginInput = document.getElementById("marginDiv");
const radiusInput = document.getElementById("radiusDiv");
const elementInput = document.getElementById("elementSelector");
const shadowX = document.getElementById("shadowX");
const shadowY = document.getElementById("shadowY");
const shadowColor = document.getElementById("shadowColor");
const titleChange = document.getElementById("divInfo");
const userId = document.getElementById("divId");

function add(){
    if (document.getElementById(userId.value)){
        alert("ID already exists!");
        return;
    }
    const newDiv = document.createElement(elementInput.value);
    const divContent = document.getElementById("divContent").value;
    newDiv.style.background = colorInput.value;
    newDiv.style.width = widthInput.value + "px";
    newDiv.style.height = heightInput.value + "px"
    newDiv.style.fontSize = sizeContent.value + "px";
    newDiv.style.color = colorContent.value;
    newDiv.style.borderWidth = borderWidth.value + "px";
    newDiv.style.borderColor = borderColor.value;
    newDiv.style.borderStyle = borderType.value;
    newDiv.style.padding = paddingInput.value + "px";
    newDiv.style.margin = marginInput.value + "px";
    newDiv.style.borderRadius = radiusInput.value + "px";
    newDiv.style.boxShadow = `${shadowX.value}px ${shadowY.value}px 15px ${shadowColor.value}`;
    newDiv.title = titleChange.value;
    newDiv.id = userId.value;
    newDiv.innerText = divContent;
    content.appendChild(newDiv);

}
function remove(){
    content.innerHTML = "";
}

function saveData(){
        localStorage.setItem("userData", content.innerHTML);
        alert("Save Page Data!");
}

window.onload = function (){
    const savedData = localStorage.getItem("userData");
        content.innerHTML = savedData;
}