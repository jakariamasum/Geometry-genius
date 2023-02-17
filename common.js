
function getInputValue(event){
    const inputField=document.getElementById(event); 
    const inputValueString=inputField.value;
    const inputValueNumber=parseFloat(inputValueString);
    return inputValueNumber;
}; 

function getTextElementById(event){
    const elementValue=document.getElementById(event); 
    const textValue=elementValue.innerText;
    return textValue;
}; 

function displayData(serialNumber,shapeName,area){
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${serialNumber}</td>
    <td>${shapeName}</td>
    <td>${area.innerHTML=
        `${area}cm<sup>2</sup>`}
        </td>
    `;
    let button = document.createElement("button");
    let td = document.createElement("td");
    button.innerHTML = `
    <p id="convert" style="color:white;padding:10px 14px; background-color:blue; border-radius:12px ">Convert to m<sup>2</sup> </p>
    `
    td.append(button);
    tr.append(td);
    const tableBody=document.getElementById('t-body');
    tableBody.appendChild(tr);
};