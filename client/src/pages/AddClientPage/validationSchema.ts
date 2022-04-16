import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  unp: Yup.string().required("Required").min(9, "Minimum 9 symbols").max(9, "Maximum 9 symbols"),
  phone: Yup.string()
    .min(13, "Minimum 13 symbols")
    .max(13, "Maximum 13 symbols")
    .required("Required"),
});
