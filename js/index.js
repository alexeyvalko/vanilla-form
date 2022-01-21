import Form from './form.js'

window.onload = () => {
  const body = document.querySelector('#app');
  if (!body) throw new Error('Error body not found');
  const form = new Form(body);
  form.render();
};
