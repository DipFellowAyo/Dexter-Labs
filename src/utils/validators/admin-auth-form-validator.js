import * as Yup from 'yup'

export const PASSWORD = 'password'

export default Yup.object({
  [PASSWORD]: Yup.string()
    .required()
    .min(8)
})
