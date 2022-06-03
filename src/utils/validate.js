export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) {
    return 'Email không được để trống';
  }
  if (!re.test(email)) {
    return 'Email không đúng định dạng';
  }

  return '';
};

export default {
  emailValidator,
};
