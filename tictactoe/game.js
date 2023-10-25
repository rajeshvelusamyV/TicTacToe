let count=0;
const x=[];
const o=[];
let c1=0;
let clickingcount=0;
function winning(arr){
let pattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
for(let i=0;i<=arr.length-3;i++){
    const subarray=arr.slice(i,i+3);
    for(const patternSubarray of pattern){
        const matchesPattern =subarray.every((value,index)=> value=== patternSubarray[index]);
        if(matchesPattern){
            if(c1===0){
            alert("x is winner");
            return;
        }
        else{
            alert("o is winner");
            return;
        }
        }
    }
}
//return false;
}
const divs=document.querySelectorAll('.option');
function changeName(button){
    button.classList.add('text');
    const buttonIndex=Array.from(button.parentNode.children).indexOf(button);
    if(button.innerText!='x' && button.innerText!='o'){
        count++;
        if(count%2!=0){
            button.innerText='x';
             x.push(buttonIndex);
             c1=0;
             clickingcount++;
    }
    else{
        button.innerText='o';
            o.push(buttonIndex);
            c1=1;
            clickingcount++;
    }
}
if(x.length>3){
   const s1=x;
    for(let i=0;i<x.length;i++){
        const s=[];
        for(let j=0;j<x.length;j++){
            if(i!=j){
                s.push(s1[j]);
            }
        }
        s.sort();
        winning(s);
    }
} 
else{
    x.sort();
    winning(x);
}
if(o.length>3){
    const s1=o;
    for(let i=0;i<o.length;i++){
        const s=[];
        for(let j=0;j<o.length;j++){
            if(i!=j){
                s.push(s1[j]);
            }
        }
        s.sort();
        winning(s);
    }
}
else{
    o.sort();
    winning(o);
}
if(clickingcount==9){
    alert("It is draw");
}
}


