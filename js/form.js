import Validate from './validator.js';
import Button from './button.js';
import Input from './input.js';
import request from './request.js';
import { success } from './utils.js';

 class Form {
  constructor(rootElement) {
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.body = rootElement;
    this.name = new Input('name', 'text', this.state);
    this.email = new Input('email', 'email', this.state);
    this.password = new Input('password', 'password', this.state);
    this.button = new Button().button;
    this.form = document.createElement('form');
    this.form.autocomplete = 'off';
    this.title = document.createElement('h2');
    this.title.textContent = 'Sign in';
    this.form.classList.add('form');
  }

  enableSubmit() {
    const isValid =
      this.name.message.textContent.length === 0 &&
      this.email.message.textContent.length === 0 &&
      this.password.message.textContent.length === 0;
    return !isValid;
  }

  handleBlur(element) {
    element.onBlur();
    element.message.textContent = Validate(
      element.input.id,
      this.state[element.input.id]
    );
    this.button.disabled = this.enableSubmit();
  }

  addListeners() {
    this.name.input.onfocus = () => {
      this.name.onFocus();
    };
    this.email.input.onfocus = () => {
      this.email.onFocus();
    };
    this.password.input.onfocus = () => {
      this.password.onFocus();
    };

    this.name.input.onblur = () => {
      this.handleBlur(this.name);
    };
    this.email.input.onblur = () => {
      this.handleBlur(this.email);
    };
    this.password.input.onblur = () => {
      this.handleBlur(this.password);
    };

    this.name.input.oninput = (e) => {
      this.name.onChange(e.target.value);
    };
    this.email.input.oninput = (e) => {
      this.email.onChange(e.target.value);
    };
    this.password.input.oninput = (e) => {
      this.password.onChange(e.target.value);
    };

    this.form.onsubmit = (e) => {
      this.submit(e);
    };
  }

  submit(e) {
    e.preventDefault();
    request(this.state);
    this.form.remove();
    this.body.insertAdjacentHTML('beforeend', success());
    setTimeout(() => {
      this.body.innerHTML = '';
      this.reset();
      this.render();
    }, 4000);
  }

  reset() {
    this.name.input.value = '';
    this.email.input.value = '';
    this.password.input.value = '';
    this.name.onBlur();
    this.email.onBlur();
    this.password.onBlur();
  }

  render() {
    this.addListeners();
    this.form.append(
      this.title,
      this.name.textField,
      this.email.textField,
      this.password.textField,
      this.button
    );
    this.body.append(this.form);
  }
}


export default Form;