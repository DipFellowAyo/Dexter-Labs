import * as Yup from 'yup'

export const USERNAME = 'username'

export const PASSWORD = 'password'

export const PASSWORD_CONFIRMATION = 'password_confirmation'

export default Yup.object({
  [USERNAME]: Yup.string().required(),
  [PASSWORD]: Yup.string()
    .required()
    .min(8),
  [PASSWORD_CONFIRMATION]: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'passwords must match')
})
