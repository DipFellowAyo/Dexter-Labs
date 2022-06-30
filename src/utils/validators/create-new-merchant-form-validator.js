import * as Yup from 'yup'

import countries from '../countries.json'

export const MERCHANT_NAME = 'merchant_name'

export const MERCHANT_PHONE_NUMBER = 'merchant_phone_number'

export const SECTOR = 'sector'

export const MERCHANT_CITY = 'merchant_city'

export const COUNTRY = 'country'

export const MERCHANT_ID = 'merchant_id'

export const MERCHANT_EMAIL = 'merchant_email'

export const MERCHANT_URL = 'merchant_url'

export const CITY_CODE = 'city_code'

export const CURRENCY = 'currency'

export const STATE = 'state'

export const sectors = ['Education', 'Finance', 'Agric']

export const countriesList = countries.map(country => country.name)

export default Yup.object({
  [MERCHANT_NAME]: Yup.string()
    .required()
    .min(1),
  [MERCHANT_PHONE_NUMBER]: Yup.number().required(),
  [SECTOR]: Yup.string()
    .required('Please select a sector')
    .oneOf(sectors),
  [MERCHANT_CITY]: Yup.string().required('Please select a city'),
  [COUNTRY]: Yup.string()
    .required()
    .oneOf(countriesList),
  [MERCHANT_ID]: Yup.string().required(),
  [MERCHANT_EMAIL]: Yup.string()
    .required()
    .email(),
  [MERCHANT_URL]: Yup.string().required(),
  [CITY_CODE]: Yup.string().required(),
  [CURRENCY]: Yup.string().required(),
  [STATE]: Yup.string().required()
})
