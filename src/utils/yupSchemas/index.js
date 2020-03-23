import * as Yup from 'yup'

const generic = 'Answer is required'

export const ContactSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
})

export const LocationSchema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip: Yup.string()
    .matches(/^\d{5}$/, 'Invalid ZIP')
    .required('ZIP is required'),
})

export const ModuleOneSchema = Yup.object().shape({
  m1_q1: Yup.string().required(generic),
  m1_q2: Yup.string().required(generic),
})

export const ModuleTwoSchema1 = Yup.object().shape({
  m2_q1: Yup.string().required(generic),
})

export const ModuleTwoSchema2 = Yup.object().shape({
  m2_q2: Yup.string().required(generic),
})

export const ModuleTwoSchema3 = Yup.object().shape({
  m2_q3: Yup.number().min(1, generic),
})
