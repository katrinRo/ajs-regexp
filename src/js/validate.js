const allowedСhar = /[A-Za-z-_0-9]+/;
const forbiddenСhar = /^(?=.)[^0-9_-](?!\d{4,}).+(?=.)[^0-9_-]$/;
const rowChar = /[\d]{4,}/;

export default class Validator {
  static validateUsername(name) {
    if (allowedСhar.test(name) && (forbiddenСhar.test(name)) && !rowChar.test(name)) {
      return true;
    }
    throw new Error('Недопустимое имя');
  }
}
