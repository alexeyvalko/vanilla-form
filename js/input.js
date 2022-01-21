export default class Input {
  constructor(label, type, state) {
    this.name = label;
    this.state = state;
    this.textField = document.createElement('div');
    this.inputWrapper = document.createElement('div');
    this.label = document.createElement('label');
    this.message = document.createElement('div');
    this.input = document.createElement('input');
    this.input.value = this.state[this.name];
    this.input.type = type;
    this.input.autocomplete = 'off';
    this.input.autocapitalize = 'off';
    this.input.classList.add('input');
    this.input.id = label;
    this.message.classList.add('message');
    this.message.innerText = '';
    this.label.textContent = label;
    this.label.classList.add('label');
    this.label.setAttribute('for', label);
    this.inputWrapper.classList.add('input-wrapper');
    this.textField.classList.add('text-field');

    this.inputWrapper.appendChild(this.input);
    this.textField.append(this.label, this.inputWrapper, this.message);
  }

  onFocus() {
    this.label.classList.add('label-focused');
    this.inputWrapper.classList.add('blue-wrapper');
  }

  onBlur() {
    if (this.input.value.length === 0) {
      this.label.classList.remove('label-focused');
    }
    this.inputWrapper.classList.remove('blue-wrapper');
  }

  onChange(value) {
    this.state[this.name] = value;
  }
}
