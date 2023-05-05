
const form = document.getElementById('add_product_form');
const name=document.getElementById("name")
const description=document.getElementById("description")
const price=document.getElementById("price")
const image=document.getElementById("image")

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  const product = {
  name: name.value,
  description: description.value ,
  price: price.value,
  image: image.value
};

fetch('http://localhost:3000/products?sort=desc', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(product)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('Product added:', data);
  // do something with the product data
})
.catch(error => {
  console.error('Error adding product:', error);
});
})


// appending data from api

const cardsContainer = document.getElementById("card-container");

// const container = document.querySelector('.container');

fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then((products) => {
    products.forEach(product => {
      // console.log(product)
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
       <div class="divImage"> <img src="${product.image}" alt="${product.name}"></div>
        <div>
          <div> <h2>${product.name}</h2></div>
          <div class="matter"> <p>${product.description}</p></div>
          <div class="rate"><p>Price: $${product.price}</p></div>
          <div class="btn"> <button class="option" onClick="deleteData(${product.id})">Delete</button></div>
        </div>
      `;
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));


  // delete card functionality
  
  function deleteData(id) {
  fetch(`http://localhost:3000/products/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Data deleted successfully');
  })
  .catch(error => {
    console.error('There was a problem deleting the data:', error);
  });
}