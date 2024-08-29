document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector('form');
    const input = document.querySelector('#iteminput');
    const listAdd = document.querySelector('#listAdd');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const inputText = input.value.trim();
        if(inputText){
            const itemList = document.createElement('li');
            const remove_btn = document.createElement('button');
            itemList.textContent = inputText;
            remove_btn.textContent = 'X';
            listAdd.appendChild(itemList);
            listAdd.appendChild(remove_btn);
            input.value = '';

            remove_btn.style.backgroundColor = 'beige';
            remove_btn.style.padding = '10px';
            remove_btn.style.margin = '10px'
            remove_btn.style.borderRadius = '100px';
            remove_btn.style.fontWeight = 'bold';
            remove_btn.addEventListener('mouseover' , ()=>{
                remove_btn.style.backgroundColor = 'red'
                remove_btn.innerHTML = 'Remove Task';
            })
            remove_btn.addEventListener('mouseout' , ()=>{
                remove_btn.style.backgroundColor = 'beige';
                remove_btn.innerHTML = 'X';
            })
            

            // remove_btn.style.fontFamily = Outfit, sans-serif;

            remove_btn.addEventListener('click' , (ee)=>{
                itemList.remove();
                remove_btn.remove();
            })
        }
    })
})