function checkValidationData(email, password) {
    const isValidEmail = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^-]+(?:\.[a-zA-Z0-9_!#$%&'*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!isValidEmail) return 'Email is Not Valid';
    if (!isPassword) return 'Password is Not Valid';
    return null;
}

export default checkValidationData;