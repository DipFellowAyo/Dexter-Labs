import * as Yup from 'yup'

export const EMAIL = 'email'

export const MESSAGE = 'message'

export default Yup.object({
  [EMAIL]: Yup.string()
    .required()
    .email(),
  [MESSAGE]: Yup.string().required()
})
