fetch('http://localhost:3000/payments')
.then(response => response.json())
.then(data => {
  // console.log(data)
  const board = document.getElementById('bigger'); // select the board div element
  const table = board.querySelector('table'); // select the table element inside the board div
  data.forEach(values => {
    const newRow = table.insertRow(-1); // adds a new row to the table
    // console.log(values.product_name)
    newRow.innerHTML = `
      <td class="people"> ${values.customer_id}</td>
       
         <td> <h5>${values.product_name}</h5> </td>
         <td > <p>${values.price}</p></td>
       
      </td>
      <td class="status">
        <h5>${values.status}</h5>
      </td>
      <td class="active">
        <p>${values.date}</p>
      </td>
      <td class="role">${values.image}</td>`;
      
      document.querySelectorAll('td.status').forEach(td => {
if (td.innerText === 'failed') {
  td.innerHTML = `<span style="background-color: red">${td.innerText}</span>`;
  td.style.borderRadius= "8px"
} else if (td.innerText === "success") {
  td.innerHTML = `<span style="background-color: green">${td.innerText}</span>`;
  td.style.borderRadius= "8px"
} else {
  td.innerHTML = `<span style="background-color: #f9e148">${td.innerText}</span>`;
  td.style.borderRadius= "8px"
}
});  


  });
});


