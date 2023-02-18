let serialNumber=0;
document.getElementById('triangle').addEventListener('click',function(){
    serialNumber++;
    const name=getTextElementById('triangle-name')
    const base=getInputValue('triangle-base');
    const height=getInputValue('triangle-height'); 
    const area=0.5*base*height; 
    displayData(serialNumber,name,area)
}); 
document.getElementById('rectangle').addEventListener('click',function(){
    serialNumber++;
    const name=getTextElementById('rectangle-name')
    const base=getInputValue('rectangle-width');
    const height=getInputValue('rectangle-length'); 
    const area=base*height; 
    displayData(serialNumber,name,area)
}); 


document.getElementById('Parallelogram').addEventListener('click',function(){
    serialNumber++;
    const name=getTextElementById('Parallelogram-name')
    const base=getInputValue('Parallelogram-base');
    const height=getInputValue('Parallelogram-height'); 
    const area=base*height; 
    displayData(serialNumber,name,area)
})

