export default function Validate(name, value) {
  const regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm
  if (value.length === 0) {
    return `Поле ${name} не может быть пустым`
  }
  if(value.split(' ').length > 1) {
    return `В поле ${name} нельзя ипользовать пробелы`
  }
  if(name === 'email') {
    const isValid = regexMail.test(value);
    return !isValid ? 'Ошибка в email' : '';
  }
   return '';
}