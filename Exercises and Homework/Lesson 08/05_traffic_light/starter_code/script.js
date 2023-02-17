// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

//stopButton turns stopLight red

document.getElementById('stopButton').addEventListener('click',function(){
        document.getElementById('slowLight').style.backgroundColor =  '#000000';
        document.getElementById('goLight').style.backgroundColor = '#000000';
        document.getElementById('stopLight').style.backgroundColor = 'red';

})

//slowButton turns slowLight yellow

document.getElementById('slowButton').addEventListener('click',function(){

    document.getElementById('goLight').style.backgroundColor = '#000000';
    document.getElementById('stopLight').style.backgroundColor = '#000000';
    document.getElementById('slowLight').style.backgroundColor = '#FFFF00';
    
})

//goButton turns goLight green

document.getElementById('goButton').addEventListener('click',function(){
    document.getElementById('slowLight').style.backgroundColor =  '#000000';
    document.getElementById('stopLight').style.backgroundColor = '#000000';
    document.getElementById('goLight').style.backgroundColor = '#00FF00';

    
})