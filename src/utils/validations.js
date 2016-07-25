export default {
  strongPassword(values, value) {
    if (typeof value !== 'undefined' && !value.match(new RegExp('^[A-Za-z0-9]{6,}$'))) {
      return false;
    }
    return true;
  },
  isGoogleEmail(values, value) {
    if (typeof value !== 'undefined' && value.indexOf('gmail.com') === -1) {
      return false;
    }
    return true;
  },
  isPhoneNumber(values, value) {
    if (typeof value !== 'undefined' && value.length !== 11) {
      return false;
    }
    return true;
  },
  containsPlusPrefix(values, value) {
    if (typeof value !== 'undefined' && value[0] === '+') {
      return false;
    }
    return true;
  }
}