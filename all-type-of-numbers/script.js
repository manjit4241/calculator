const list = document.querySelector('#list_id');
        const uprinput = document.querySelector('#uprRange');
        const lwrinput = document.querySelector('#lwrRange');

        let uprrange = 0;
        let lwrrange = 0;

        const evenbtn = document.querySelector('#even');
        const oddbtn = document.querySelector('#odd');
        const primebtn = document.querySelector('#prime');
        const pallindromebtn = document.querySelector('#pallindrome');
        const armstrongbtn = document.querySelector('#armstrong');

        const submitbtn = document.querySelector('#submit');
        const resetbtn = document.querySelector('#reset');

        submitbtn.addEventListener('click', (e) => {
            e.preventDefault();
        uprrange = parseInt(uprinput.value.trim());
        lwrrange = parseInt(lwrinput.value.trim());
        if (isNaN(uprrange) || uprrange <= 0 || isNaN(lwrrange) || lwrrange <= 0 ) {
            alert('Please enter a valid positive number.');
        }
        });
        resetbtn.addEventListener('click',()=>{
            uprinput.value = '';
            lwrinput.value = '';
            list.textContent = '';
        })

        function even(l,u) {
            list.innerHTML = '';
            for (let i = l; i <= u; i++) {
                if (i % 2 === 0) {
                    const listItem = document.createElement('li');
                    listItem.textContent = i;
                    list.appendChild(listItem);
                }
            }
        }

        function odd(l,u) {
            list.innerHTML = '';
            for (let i = l; i <= u; i++) {
                if (i % 2 != 0) {
                    const listItem = document.createElement('li');
                    listItem.textContent = i;
                    list.appendChild(listItem);
                }
            }
        }

        function prime(l,u) {
            list.innerHTML = '';
            
            for (let i = l; i <= u; i++) {
                let c=0;
                
                for(let j=1;j<=i;j++){
                    if(i%j===0){
                        c = c+1;
                    }
                }
                if(c === 2){
                    const listItem = document.createElement('li');
                    listItem.textContent = i;
                    list.appendChild(listItem);     
                }
            }
        }

        function pallindrome(l,u) {
            list.innerHTML = '';

            for (let i = l; i <= u; i++) {
                let rev = 0;
                let n = i;

                while(n!=0){
                    let d = n%10;
                    rev = rev*10 + d;
                    n = Math.floor(n / 10);
                }

                if (rev === i) {
                    const listItem = document.createElement('li');
                    listItem.textContent = i;
                    list.appendChild(listItem);
                }
            }
        }

        function armstrong(l,u) {
            list.innerHTML = '';
            for (let i = l; i <= u; i++) {
                let arm = 0;
                let n = i;
                while(n!=0){
                    let d = n%10;
                    arm = arm + (d*d*d);
                    n = Math.floor(n/10);
                }

                if (arm === i) {
                    const listItem = document.createElement('li');
                    listItem.textContent = i;
                    list.appendChild(listItem);
                }
            }
        }

        evenbtn.addEventListener('click', () => {
            even(lwrrange ,uprrange);
            evenbtn.style.backgroundColor = 'red';
            setInterval(function(){
                evenbtn.style.backgroundColor = 'green';
            },2000)
        });
        oddbtn.addEventListener('click', () => {
            odd(lwrrange ,uprrange);
            oddbtn.style.backgroundColor = 'red';
            setInterval(function(){
                oddbtn.style.backgroundColor = 'green';
            },2000)
        });
        primebtn.addEventListener('click', () => {
            prime(lwrrange ,uprrange);
            primebtn.style.backgroundColor = 'red';
            setInterval(function(){
                primebtn.style.backgroundColor = 'green';
            },2000)
        });
        pallindromebtn.addEventListener('click', () => {
            pallindrome(lwrrange ,uprrange);
            pallindromebtn.style.backgroundColor = 'red';
            setInterval(function(){
                pallindromebtn.style.backgroundColor = 'green';
            },2000)
        });
        armstrongbtn.addEventListener('click', () => { 
            armstrong(lwrrange ,uprrange);
            armstrongbtn.style.backgroundColor = 'red';
            setInterval(function(){
                armstrongbtn.style.backgroundColor = 'green';
            },2000)
        });