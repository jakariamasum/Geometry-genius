// serialNumber declare and initialize
let serialNumber=0;

// calculate area of triangle shape
document.getElementById('triangle').addEventListener('click',function(){
    const name=getTextElementById('triangle-name')
    const base=getInputValue('triangle-base');
    const height=getInputValue('triangle-height'); 
    if(checkInput(base,height))
    {
        serialNumber++;
        let area=(0.5*base*height);
        if(!Number.isInteger(area)) 
        {
            area=area.toFixed(2);
        }
    displayData(serialNumber,name,area)
    }
}); 

// calculate area of rectangle shape
document.getElementById('rectangle').addEventListener('click',function(){
    const name=getTextElementById('rectangle-name')
    const base=getInputValue('rectangle-width');
    const height=getInputValue('rectangle-length'); 
    if(checkInput(base,height))
    {
        serialNumber++;
        let area=(base*height);
        if(!Number.isInteger(area)) 
        {
            area=area.toFixed(2);
        }
    displayData(serialNumber,name,area)
    }
}); 

// calculate area of parallelogram shape
document.getElementById('Parallelogram').addEventListener('click',function(){
    const name=getTextElementById('Parallelogram-name')
    const base=getInputValue('Parallelogram-base');
    const height=getInputValue('Parallelogram-height'); 
    if(checkInput(base,height))
    {
        serialNumber++;
        let area=(base*height);
        if(!Number.isInteger(area)) 
        {
            area=area.toFixed(2);
        }
        
    displayData(serialNumber,name,area)
    }
});

// calculate area of rhombus shape
document.getElementById('rhombus').addEventListener('click',function(){
    const name=getTextElementById('rhombus-name')
    const firstDiagonal=getInputValue('rhombus-diagonal-1');
    const secondDiagonal=getInputValue('rhombus-diagonal-2'); 
    if(checkInput(firstDiagonal,secondDiagonal))
    {
        serialNumber++;
        let area=(0.5*firstDiagonal*secondDiagonal);
        if(!Number.isInteger(area)) 
        {
            area=area.toFixed(2);
        }
    displayData(serialNumber,name,area)
    }
});

// calculate area of pentagon shape
document.getElementById('pentagon').addEventListener('click',function(){
    const name=getTextElementById('pentagon-name')
    const base=getInputValue('pentagon-height');
    const height=getInputValue('pentagon-base'); 
    if(checkInput(base,height))
    {
        serialNumber++;
        let area=(0.5*base*height);
        if(!Number.isInteger(area)) 
        {
            area=area.toFixed(2);
        }
    displayData(serialNumber,name,area)
    }
});

// calculate area of ellipse shape
document.getElementById('ellipse').addEventListener('click',function(){
    const name=getTextElementById('ellipse-name')
    const base=getInputValue('ellipse-base');
    const height=getInputValue('ellipse-height'); 
    if(checkInput(base,height))
    {
        serialNumber++;
        let area=(3.14*base*height);
        if(!Number.isInteger(area)) 
        {
            area=area.toFixed(2);
        }
    displayData(serialNumber,name,area)
    }
});

//blog page
document.getElementById('blog').addEventListener('click',function(){
    window.location.href='blog.html';
})


