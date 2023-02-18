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
});

document.getElementById('rhombus').addEventListener('click',function(){
    serialNumber++;
    const name=getTextElementById('rhombus-name')
    const base=getInputValue('rhombus-diagonal-1');
    const height=getInputValue('rhombus-diagonal-2'); 
    const area=0.5*base*height; 
    displayData(serialNumber,name,area)
});


document.getElementById('pentagon').addEventListener('click',function(){
    serialNumber++;
    const name=getTextElementById('pentagon-name')
    const base=getInputValue('pentagon-height');
    const height=getInputValue('pentagon-base'); 
    const area=0.5*base*height; 
    displayData(serialNumber,name,area)
});
document.getElementById('ellipse').addEventListener('click',function(){
    serialNumber++;
    const name=getTextElementById('ellipse-name')
    const base=getInputValue('ellipse-base');
    const height=getInputValue('ellipse-height'); 
    const area=3.14*base*height; 
    displayData(serialNumber,name,area)
});



