let pswd = document.querySelector('#password'); 
const numCheck = document.querySelector('#numbers');
const charCheck = document.querySelector('#characters'); 
const generateBtn = document.querySelector('#generate'); 
const resetBtn = document.querySelector('#reset')

const pswdGenerator = (length,numCheck,charCheck) => {
    let pss = ""; 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numCheck) str+="0123456789"
    if(charCheck) str+="@#$%^&*()-_=+\\|<.>/"

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * str.length); 
        pss += str.charAt(index);
    }

    return pss;
};

generateBtn.addEventListener('click', () => {
    const length = parseInt(document.querySelector('#length').value); 
    if (length < 8 || length > 20) {
        alert("Please enter a length between 8 and 20.");
        return;
    }
    const numCheckBox = numCheck.checked;
    const charCheckBox = charCheck.checked;
    const passwords = pswdGenerator(length,numCheckBox,charCheckBox); 
    pswd.value = passwords;

    console.log(passwords);
});

resetBtn.addEventListener('click' , ()=>{
    pswd.value = "";
    document.querySelector('#length').value = ""
    document.querySelector('#copy').innerHTML = '<i class="fa-regular fa-copy"></i>'
    document.querySelector('#copyMsg').style.display = 'none'; 
})

document.querySelector('#copy').addEventListener('click',()=>{
    navigator.clipboard.writeText(pswd.value)
        .then(() => {
            console.log('Copied!!');   
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });

        document.querySelector('#copy').innerHTML = '<i class="fa-solid fa-check" id ="done"></i>'
        document.querySelector('#copyMsg').style.display = 'inline'
})