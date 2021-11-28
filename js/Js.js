
// start creating document elements
var container = document.getElementsByClassName('container')[0],

    head1 = document.createElement('h1'),

    clock = document.createElement('div'),

    timePragraph = document.createElement('p'),

    image = document.createElement('img');
// end creating document elements

// start appending  document elements child
container.appendChild(head1);

container.appendChild(timePragraph);

container.appendChild(image);

container.insertBefore(clock, image); // add clock div before image element
// end appending  document elements child

// start giving elements thier attributes
head1.textContent = "lolcat clock";

head1.id = "lol-cat";

timePragraph.append(document.createTextNode("i can haz time??")) ;

timePragraph.classList.add('text-format');

image.src = "images/first.gif";

image.setAttribute('alt', 'image');

image.id = "case-images";

image.style = "width: 300px; height: 250px";

clock.id = "clock";
// end giving elements thier attributes


// start the function of creating the clock
function showTime(){

    // start creating variable to call the current date
    var now = new Date(),

        hours = now.getHours(), // return the current hours

        minutes = now.getMinutes(), // return the current minutes

        seconds = now.getSeconds(), // return the current seconds

        time = 'Am';
    // end creating variable to call the current date

    // start the statements which will convert the clock from 24 system to AM and PM and show in hh:mm:ss AM format
    if(hours>12){
        hours = hours - 12;
        time = 'PM';
    }

    else if (hours < 10) {

        hours = '0' + hours;
    }
    
    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    // end the statements which will convert the clock from 24 system to AM and PM
    
    // the statement that will be shown in the web page
    document.getElementById('clock').textContent = hours + ":" +
             minutes + ":" + seconds + ' ' + time + '!';
             
};
// end the function of creating the clock


// start calling clock function onloading window
window.onload = function(){

    setInterval(showTime, 100);

    // setInterval(function, duration);
    
}
// end calling clock function onloading window


// start the function of creating times div and its elements (text and selector)
function times(){
    
    for (i=0; i<3; i++) {

        // start creating times div and its elements 
        var times = document.createElement('div'),

            spanPragraph = document.createElement('span'),

            selector = document.createElement('select'); 
        // end creating times div and its elements        

        // start appending  times div to container and times element to it
        container.appendChild(times);

        times.appendChild(spanPragraph);

        times.appendChild(selector);
        // end appending  times div to container and times element to it
        
        // start giving times elements thier attributes
        spanPragraph.classList.add('text-format', 'time-content');

        selector.classList.add('selector');
        // end giving elements thier attributes

        if(i==0){
            spanPragraph.textContent = "set wake up time";
        }
        else if(i==1){
            spanPragraph.textContent = "set dinner time";
        }

        else if(i==2){
            spanPragraph.textContent = "set lunch time";
        }

    }

};
// end the function of creating times div and its elements (text and selector)

times(); // calling the function


// start the function of creating select option elements and thier attributes 
function selector_content(){

    var selector = document.getElementsByClassName('selector'); // return "select" elements with selector className

    // start for loop to go on all selector in document 
    for(var j=0; j<selector.length; j++){ 

        // start for loop to create 24 option in each selector
        for(var i=1; i<=24; i++ ){ 

            var selectorOption = document.createElement('option');
    
            selector[j].appendChild(selectorOption);
    
            selectorOption.className = "selector-option";

            selectorOption.value = i ;

            // start if condition to determine the content written in option element
            if(i<11){
    
                selectorOption.textContent = i + "AM-" + (i+1) + "AM" ;

            }
    
            else if(i==11){
    
                selectorOption.textContent = i + "AM-" + (i+1) + "PM" ;

            }

            else if(i==12){
    
                selectorOption.textContent = i + "PM-" + (i-11) + "PM" ;

            }

            else if(i>12 && i<23){
    
                selectorOption.textContent = (i-12) + "PM-" + (i-11) + "PM" ;

            }

            else if(i==23){
    
                selectorOption.textContent = (i-12) + "PM-" + (i-11) + "AM" ;

            }
            
            else if(i==24){
    
                selectorOption.textContent = (i-12) + "AM-" + (i-23) + "AM" ;

                selectorOption.value = '00';
            }
            // start if condition to determine the content written in option element
    
        }
        // the end of second loop of creating option element
    }
    // the end of first loop of  selector

};
// end the function of creating select option and thier attributes and thier attributes

selector_content(); // call the function

// start creating the sumbit button and copy right pragraph
var btn = document.createElement('input'),

    copyRight = document.createElement('p');

// start appending btn and copyRight pragraph to container section
container.appendChild(btn);

container.appendChild(copyRight);
// end appending btn and copyRight pragraph to container section

// start setting btn and copyRight attributes
btn.type = "button";

btn.value = "party time!";

btn.id = "btn";

btn.classList.add('text-format');

copyRight.id = "copy-right";

copyRight.classList.add('text-format');

copyRight.textContent = "© shillcrush 2016";
// end setting btn and copyRight attributes

// end creating the sumbit button and copy right pragraph and thier attributes


// start the function of changing the image on click the btn
btn.onclick= function showImage(){

    var selector = document.getElementsByClassName('selector'),  // get select element

        image = document.getElementById('case-images'),  // get img tag
        
        now = new Date(),  // get currunt date

        hours = now.getHours(); // get the hours

    // change the color of btn on click it
    btn.style = "background-color: #d5461c";

    if(selector[0].value == hours){

        image.src = "images/morning.gif"; // show this image
    }

    else if(selector[1].value == hours){

        image.src = "images/dinner.gif"; // show this image
    }

    else if( selector[2].value  == hours){

        image.src = "images/lunch.gif"; // show this image
    }

    else if(selector[0].value  != hours && selector[0].value  != hours && selector[0].value  != hours){

        image.src = "images/first.gif"; // show this image

        alert("please select valid time");

    }
           
};
// end the function of changing the image on click the btn

// function call after go away from the btn
btn.onblur = function changeColor(){

    btn.style.backgroundColor ="black";

};

var comment = document.createComment("this page created by Eman Mohamed ELsayed in 21/5/2021 at 11:15:09 PM");
document.body.appendChild(comment);
