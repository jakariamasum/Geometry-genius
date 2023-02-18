
//get input value by id
function getInputValue(event) {
    const inputField = document.getElementById(event);
    const inputValueString = inputField.value;
    const inputValueNumber = parseFloat(inputValueString);
    inputField.value='';
    return inputValueNumber;
};

//Get the text value by id
function getTextElementById(event) {
    const elementValue = document.getElementById(event);
    const textValue = elementValue.innerText;
    return textValue;
};

//create a tr element and display the tr in table using js

function displayData(serialNumber, shapeName, area) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serialNumber+'.'+shapeName}</td>
    <td>${area.innerHTML =
        `${area}cm<sup>2</sup>`}
        </td>
    `;
    let button = document.createElement("button");
    let td = document.createElement("td");
    button.innerHTML = `
    <p class="convert" style="color:white;padding:10px 14px; background-color:blue; border-radius:12px ">Convert to m<sup>2</sup> </p>
    `
    td.append(button);
    tr.append(td);
    const tableBody = document.getElementById('t-body');
    tableBody.appendChild(tr);
};


// random color section 
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}
const allClass = document.getElementsByClassName('card');
for (const eachClass of allClass) {
    eachClass.addEventListener('mouseenter', function () {
    eachClass.style.backgroundColor = randomColor();
    })
}


//input validation
function checkInput(base,height){
  
     if(base<0 || height<0){
        alert('Invalid! Input should not be a negative number.');
        return false;
    }
    else if(isNaN(base)|| isNaN(height)){
        alert('Invalid! Input must be a number');
        return false;
    }
    else return true;
}




