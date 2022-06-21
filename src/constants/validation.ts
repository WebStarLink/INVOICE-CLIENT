import * as Yup from "yup";

export const PROFILE_VALIDATION_SCHEMA = Yup.object().shape({
  legal: Yup.string().required("Required"),
  itn: Yup.string()
    .required("Required")
    .min(9, "Minimum 9 symbols")
    .max(9, "Maximum 9 symbols")
    .nullable(),
  address: Yup.string().required("Required"),
  iban: Yup.string()
    .required("Required")
    .min(28, "IBAN should be 28 symbols")
    .max(28, "IBAN should be 28 symbols"),
  bank: Yup.string().required("Required"),
  bic: Yup.string()
    .required("Required")
    .min(8, "BIC should be 8 symbols")
    .max(8, "BIC should be 8 symbols"),
  phone: Yup.string()
    .min(13, "Minimum 13 symbols")
    .max(13, "Maximum 13 symbols")
    .required("Required"),
});
export const CLIENT_VALIDATION_SCHEMA = Yup.object().shape({
  legal: Yup.string().required("Required"),
  itn: Yup.string()
    .required("Required")
    .min(9, "Minimum 9 symbols")
    .max(9, "Maximum 9 symbols")
    .nullable(),
  address: Yup.string().required("Required"),
  iban: Yup.string()
    .required("Required")
    .min(28, "IBAN should be 28 symbols")
    .max(28, "IBAN should be 28 symbols"),
  bank: Yup.string().required("Required"),
  bic: Yup.string()
    .required("Required")
    .min(8, "BIC should be 8 symbols")
    .max(8, "BIC should be 8 symbols"),
  noticea: Yup.string(),
  noticeb: Yup.string(),
  contract: Yup.string(),
  contractdate: Yup.date().required("Required"),
  phone: Yup.string()
    .min(13, "Minimum 13 symbols")
    .max(13, "Maximum 13 symbols")
    .required("Required"),
});

export const AUTH_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email("This is not correct email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(4, "Password should be minimum 4 symbols")
    .max(32, "Password should be maximum 32 symbols"),
});
