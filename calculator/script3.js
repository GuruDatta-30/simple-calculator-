let buttons=document.querySelectorAll(".btns");
let display=document.querySelector("#output");
let ac=document.querySelector(".AC");
let expression = " ";
for(let btn of buttons){
    btn.addEventListener("click",() => {
        expression += btn.innerText;
        display.innerText = expression ;
    });
}
ac.addEventListener("click",()=>{
    expression = "";
    display.innerText=expression;
});

let eq=document.querySelector(".equals");
eq.addEventListener("click",()=>{
    try{
    let result=eval(expression);
    if(!isFinite(result)){
        display.innerText="ZERO DIVISION ERROR";
        expression ="";
        return;
    }
    display.innerText =result;
    expression= String(result);
    }
    catch{
        display.innerText="INVALID INPUT";
        expression="";
    }
});

let refresh=document.querySelector("#refresh");
refresh.addEventListener("click",()=>{
    window.close();
    alert("CLOSING THE BROWSER");
});