$('#menu-btn').click(function(){
    $('#menu').toggleClass()
})

//--------------------------- logout---------------------------------------//


fetch('http://localhost:3000/users')
.then(response => response.json())
.then(data => {
// console.log(data)
const board = document.querySelector('.board'); // select the board div element
const table = board.querySelector('table'); // select the table element inside the board div
data.forEach(values => {
  const newRow = table.insertRow(-1); // add a new row to the table
  newRow.innerHTML = `
    <td class="people">
      <img src="${values.image}" alt="">
      <div class="people-de">
        <h5>${values.name}</h5>
        <p>${values.email}</p>
      </div>
    </td>
    <td class="people-des">
      <h5>${values.role}</h5>
     
    </td>
    <td class="active">
      <p>${values.status}</p>
    </td>
    <td class="role">${values.role}</td>
    <td class="edit">
         <a href="#" onclick="showDropdown(this)">Edit</a>
          <div class="dropdown"></div>
         </td>
  `;
});
});

function showDropdown(element) {
// Get the dropdown element
const dropdown = element.nextElementSibling;

// Create the dropdown options
const options = document.createElement("div");
options.classList.add("options");
options.innerHTML = `
<div class="option"><button>Remove User</button></div>
<div class="option"><button>Make admin<button/></div>
`;

// Append the options to the dropdown
dropdown.appendChild(options);

// Add an event listener to hide the dropdown when the cursor leaves
dropdown.addEventListener("mouseleave", hideDropdown);
}

function hideDropdown(event) {
// Get the dropdown element
const dropdown = event.target;

// Remove the options from the dropdown
const options = dropdown.querySelector(".options");
dropdown.removeChild(options);
}