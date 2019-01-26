// import { sounds, makeSound } from './module2.js';
// import * as mod from './moduleTest';

// console.log(mod.sounds.one);
// console.log(mod.makeSound());

import { http } from './http';
import { ui } from './ui';

// Get swears on DOM load
document.addEventListener('DOMContentLoaded', getSwears);

// Listen for add
document.querySelector('.swear-submit').addEventListener('click', submitSwear);

// Listen for delete
document.querySelector('#swears').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#swears').addEventListener('click', enableEdit);

// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getSwears() {
  http
    .get('http://localhost:3000/swears')
    .then(data => ui.showSwears(data))
    .catch(err => console.log(err));
}

function submitSwear() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  const data = {
    title,
    body
  };

  if (title === '' || body === '') {
    ui.showAlert('Please start swearing!', 'alert alert-danger');
  } else {
    if (id === '') {
      http
        .post('http://localhost:3000/swears', data)
        .then(data => {
          ui.showAlert('New Swear added', 'alert alert-success');
          ui.clearFields();
          getSwears();
        })
        .catch(err => console.log(err));
    } else {
      http
        .put(`http://localhost:3000/swears/${id}`, data)
        .then(data => {
          ui.showAlert('Swear Updated', 'alert alert-success');
          ui.changeFormState('add');
          getSwears();
        })
        .catch(err => console.log(err));
    }
  }
}

// Delete
function deletePost(e) {
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are you sure')) {
      http
        .delete(`http://localhost:3000/swears/${id}`)
        .then(data => {
          ui.showAlert('Swear removed', 'alert alert-success');
          getSwears();
        })
        .catch(err => console.log(err));
    }
  }
  e.preventDefault();
}

// enable edit state
function enableEdit(e) {
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    };

    // fill form with current post
    ui.fillForm(data);
  }
  e.preventDefault();
}

// Cancel Edit State
function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }

  e.preventDefault();
}

// const getData = async url => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');
