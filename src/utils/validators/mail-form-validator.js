import * as Yup from 'yup'

export const FROM = 'From'

export const TO = 'To'

export const SUBJECT = 'Subject'

export const MESSAGE = 'Message'

export const IMAGE = 'image'

export const CC = 'CC'

export const BC = 'BC'

export const ATTACHMENT = 'attachment'

export default Yup.object({
  [FROM]: Yup.string()
    .required()
    .email(),
  [TO]: Yup.string()
    .required()
    .email(),
  [SUBJECT]: Yup.string().required(),
  [MESSAGE]: Yup.string().required(),
  [CC]: Yup.string().email(),
  [BC]: Yup.string().email()
})
