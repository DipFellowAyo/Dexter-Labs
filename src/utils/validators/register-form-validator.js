import * as Yup from 'yup'

export const USERNAME = 'username'

export const PASSWORD = 'password'

export const PASSWORD_COMFIRMATION = 'password_confirmation'

export const ROLE = 'role'

export const STAFF_EMAIL = 'staff_email'

export const roles = ['Role', 'Super Admin', 'Admin', 'Normal User']

export default Yup.object({
  [USERNAME]: Yup.string().required(),
  [PASSWORD]: Yup.string()
    .required()
    .min(8),
  [PASSWORD_COMFIRMATION]: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'passwords must match'),
  [ROLE]: Yup.string()
    .required('Please select a role')
    .oneOf(roles),
  [STAFF_EMAIL]: Yup.string()
    .required()
    .email()
})
