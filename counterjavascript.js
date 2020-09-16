
let count = 0;


function increment(){
    count++;
    
  document.getElementById("number").innerHTML = count ;
  
}

function decrement(){
    count--;
    document.getElementById("number").innerHTML = count;
    
}

function begin(){
    count = 0;
    document.getElementById("number").innerHTML = count;
    return no ;
}
