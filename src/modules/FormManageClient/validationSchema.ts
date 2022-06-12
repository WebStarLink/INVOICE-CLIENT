import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  id: Yup.string().required("Required"),
});
