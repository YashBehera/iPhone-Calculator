let input = document.getElementById('input');
let button = document.querySelectorAll('button')
let a = '';
button.forEach(element => {
    element.addEventListener('click', (e) => {
        

        if (e.target.textContent === 'C') {
            a = '';
            input.innerText = a;
           
        }

        else if (e.target.textContent === '=') {
            input.innerText = eval(a);
        }

        else {
           
             a += (e.target.textContent);
            input.innerText =a;
        }
        

        
    }

    )
})