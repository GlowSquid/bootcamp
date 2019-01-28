class UI {
  constructor() {
    this.swear = document.querySelector('#swears');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.swearSubmit = document.querySelector('.swear-submit');
    this.forState = 'add';
  }

  showSwears(swears) {
    let output = '';

    swears.forEach(swear => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${swear.title}</h4>
          <p class="card-text">${swear.body}</p>
          <a href="#" class="edit card-link" data-id="${swear.id}">
            <i class="fa fa-pencil"></i>
          </a>

          <a href="#" class="delete card-link" data-id="${swear.id}">
            <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>
      `;
    });

    this.swear.innerHTML = output;
  }

  showAlert(msg, className) {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.swearsContainer');
    const swears = document.querySelector('#swears');

    container.insertBefore(div, swears);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  clearIdInput() {
    this.idInput.value = '';
  }

  changeFormState(type) {
    if (type === 'edit') {
      this.swearSubmit.textContent = 'Update Swear';
      this.swearSubmit.className = 'swear-submit btn btn-warning btn-block';

      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));

      const cardForm = document.querySelector('.card-form');
      const formEnd = document.querySelector('.form-end');
      cardForm.insertBefore(button, formEnd);
    } else {
      this.swearSubmit.textContent = 'Give me peace of mind!';
      this.swearSubmit.className = 'swear-submit btn btn-primary btn-block';

      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }
      this.clearIdInput();
      this.clearFields();
    }
  }
}

export const ui = new UI();
