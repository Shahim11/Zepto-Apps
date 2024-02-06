// Define UI element
let profileButton = document.getElementById('user-menu-button');
let profileMenu = document.getElementById('profile-menu');


// Define event listeners
profileButton.addEventListener('click', profileMenuDropdown);


// Define functions
function profileMenuDropdown() {
    profileMenu.classList.toggle('hidden');
  };

  

