const input = document.querySelector('#input');
const search_btn = document.querySelector('#search');
let imgPP = document.querySelector('#pp');

async function users(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }   
        const userData = await response.json();
        document.querySelector('.container').style.display = 'block';
        imgPP.style.display = 'block'
        imgPP.src = userData.avatar_url;
        document.querySelector('#name').textContent = `${userData.name}`
        document.querySelector('#bio').textContent = `${userData.bio}`
        document.querySelector('#followersNo').textContent = `Followers: ${userData.followers}`
        document.querySelector('#followingNo').textContent = `Following: ${userData.following}`
        document.querySelector('#github_pp').textContent = `Visit  GitHub Profile`
        document.querySelector('#github_pp').href = `https://github.com/${username}`
        document.querySelector('#repo').textContent = `Number of Repositories: ${userData.public_repos}`
        document.querySelector('#date').textContent = `Created on: ${dateConvert(userData.created_at)}`
        return userData; 
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function dateConvert(date){
    const dateString = date;
    const dateObject = new Date(dateString);

// Extract day, month, and year
const day = dateObject.getUTCDate().toString().padStart(2, '0');
const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
const year = dateObject.getUTCFullYear();

// Format as dd/mm/yyyy
const formattedDate = `${day}/${month}/${year}`;
return formattedDate;

// console.log(formattedDate); // Output: 01/10/2020

}

search_btn.addEventListener('click', async () => {
    const username = input.value;
    const userData = await users(username);
    console.log(userData);
});

hiteshchoudhary