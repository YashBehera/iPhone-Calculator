let input = document.getElementById('input');
let button = document.querySelectorAll('button')
let a ='';
button.forEach(element =>{
    element.addEventListener('click',(e)=>{
        console.log(e.target.textContent);

        if(e.target.textContent==='C'){
            input.innerText="";
            a='';
        }
        
        else if(e.target.textContent==='+/-'){
            input.innerText=-input.innerText;
        }


        else if(e.target.textContent!=='='){

            if(e.target.textContent==="+"||
                e.target.textContent==="-" ||
                e.target.textContent==="/" ||
                e.target.textContent==="*" ||
                e.target.textContent==="%"){
                     a = a + e.target.textContent;
                    console.log(a);
                    input.innerText="";
                }

            else{
              input.innerText+=(e.target.textContent);
              a = a+=(e.target.textContent);
            }
        }

        else if(e.target.textContent==='='){
            input.innerText=eval(a);
        }

    })
})