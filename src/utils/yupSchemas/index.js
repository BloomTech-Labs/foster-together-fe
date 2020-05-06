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

export const AppSchema = Yup.object().shape({
  app_q1_a: Yup.object({
    option_1: Yup.boolean(),
    option_2: Yup.boolean(),
    option_3: Yup.boolean(),
    option_4: Yup.boolean(),
  }).test('app_q1_a_test', null, item => {
    if (item.option_1 || item.option_2 || item.option_3 || item.option_4) {
      return true
    }
    return new Yup.ValidationError(
      'Please choose at least one option',
      null,
      'app_q1_a'
    )
  }),
  app_q2: Yup.object({
    option_1: Yup.boolean(),
    option_2: Yup.boolean(),
    option_3: Yup.boolean(),
    option_4: Yup.boolean(),
    option_5: Yup.boolean(),
  }).test('app_q2_test', null, item => {
    if (
      item.option_1 ||
      item.option_2 ||
      item.option_3 ||
      item.option_4 ||
      item.option_5
    ) {
      return true
    }
    return new Yup.ValidationError(
      'Please choose at least one option',
      null,
      'app_q2'
    )
  }),
  app_q3: Yup.boolean().required(),
  app_q4: Yup.number().min(1, generic),
  app_q5: Yup.string().required(generic),
})

// Training Module Schemas 

// Module One Schema
export const ModuleOneSchema = Yup.object().shape({
  m1_q1: Yup.string().required(generic),
})

// Module Two Schemas
export const ModuleTwoSchema1 = Yup.object().shape({
  m2_q1: Yup.string().required(generic),
})

export const ModuleTwoSchema2 = Yup.object().shape({
  m2_q2: Yup.string().required(generic),
})

export const ModuleTwoSchema3 = Yup.object().shape({
  m2_q3: Yup.number().min(1, generic),
})

// Module Three Schemas
export const ModuleThreeSchema1 = Yup.object().shape({
  m3_q1: Yup.string().required(generic),
})

export const ModuleThreeSchema2 = Yup.object().shape({
  m3_q2: Yup.string().required(generic),
})

export const ModuleThreeSchema3 = Yup.object().shape({
  m3_q3: Yup.string().required(generic),
})

export const ModuleThreeSchema4 = Yup.object().shape({
  m3_q4: Yup.string().required(generic),
  m3_q5: Yup.string().required(generic),
})

// Module Four Schemas
export const ModuleFourSchema1 = Yup.object().shape({
  m4_q1: Yup.string().required(generic),
})

export const ModuleFourSchema2 = Yup.object().shape({
  m4_q2: Yup.string().required(generic),
})

export const ModuleFourSchema3 = Yup.object().shape({
  m2_q3: Yup.number().min(1, generic),
})

export const ModuleFourSchema4 = Yup.object().shape({
  m2_q3: Yup.number().min(1, generic),
})

// Module Five Schema
export const ModuleFiveSchema1 = Yup.object().shape({
  m2_q3: Yup.number().min(1, generic),
})