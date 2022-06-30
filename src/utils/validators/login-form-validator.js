import * as Yup from 'yup'

export const USERNAME = 'username'

export const PASSWORD = 'password'

export default Yup.object({
  [USERNAME]: Yup.string().required(),
  [PASSWORD]: Yup.string()
    .required()
    .min(8)
})
