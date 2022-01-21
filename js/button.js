
class Button {
  constructor() {
    this.button = document.createElement('button');
    this.button.classList.add('button');
    this.button.type = 'submit';
    this.button.textContent = 'Sign In';
  }
}

export default Button;