let serialNumber=0;
document.getElementById('triangle').addEventListener('click',function(){
    const name=getTextElementById('triangle-name')
    const base=getInputValue('triangle-base');
    const height=getInputValue('triangle-height'); 
    const area=0.5*base*height; 
    displayData(serialNumber,name,area)
}); 

