const schema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().required('Email is required').email(),
    mobile: yup.string().required('Mobile Phone is required').matches(phoneRegExp, 'Phone number is not valid'),
    country: yup.string().required('Country is required'),
    password: yup.string().required('Password is required').matches(pawdRegExp, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match'),
    privacy: yup.bool().oneOf([true], 'Field must be checked'),
  });