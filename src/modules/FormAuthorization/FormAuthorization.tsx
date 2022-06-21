import React from "react";
import { Form, Formik } from "formik";
import { IValues, IForm } from "./interface";
import { Button, TextField } from "@mui/material";
import classes from "./FormAuthorization.module.scss";
import { buttonStyles, inputErrorStyles, inputLabelStyles, inputStyles } from "./styles";
import { AUTH_VALIDATION_SCHEMA } from "constants/validation";
import { initialValues } from "./initialValues";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, errorMessageSelector, setErrorMessage } from "store/global";

const FormAuthorization = () => {
  const dispatch = useDispatch();
  const errorMessages = useSelector(errorMessageSelector);
  const clearErrors = () => {
    if (errorMessages) {
      dispatch(setErrorMessage(""));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values: IValues) => await dispatch(authLogin(values))}
      validateOnBlur
      validationSchema={AUTH_VALIDATION_SCHEMA}
    >
      {({ values, errors, touched, handleSubmit, handleChange, isSubmitting }: IForm) => (
        <Form className={classes.form}>
          <>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="E-Mail"
              placeholder="Enter your email"
              value={values.email}
              helperText={
                (touched.email && errors.email) ||
                (errorMessages?.includes("email") && errorMessages)
              }
              error={
                (Boolean(touched.email) && Boolean(errors.email)) ||
                Boolean(errorMessages?.includes("email"))
              }
              onChange={handleChange}
              onInput={clearErrors}
              disabled={isSubmitting}
              InputProps={{
                sx: inputStyles,
              }}
              InputLabelProps={{
                sx: inputLabelStyles,
              }}
              FormHelperTextProps={{
                sx: inputErrorStyles,
              }}
              sx={{
                marginBottom: "1rem",
              }}
            />
            <TextField
              fullWidth
              id="password"
              type={"password"}
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={values.password}
              helperText={
                (touched.password && errors.password) ||
                (errorMessages?.includes("password") && errorMessages)
              }
              error={
                (Boolean(touched.password) && Boolean(errors.password)) ||
                Boolean(errorMessages?.includes("password"))
              }
              onChange={handleChange}
              onInput={clearErrors}
              disabled={isSubmitting}
              InputProps={{
                sx: inputStyles,
              }}
              InputLabelProps={{
                sx: inputLabelStyles,
              }}
              FormHelperTextProps={{
                sx: inputErrorStyles,
              }}
              sx={{
                marginBottom: "1rem",
              }}
            />
          </>
          <Button
            className={classes.button}
            fullWidth
            disabled={isSubmitting}
            onClick={handleSubmit}
            sx={buttonStyles}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormAuthorization;
