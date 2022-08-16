import React from "react";
import { Form, Formik } from "formik";
import { IValues, IForm } from "./interface";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import classes from "./FormAuthorization.module.scss";
import {
  buttonStyles,
  inputErrorStyles,
  inputLabelStyles,
  inputStyles,
  loaderStyles,
} from "./styles";
import { AUTH_VALIDATION_SCHEMA } from "constants/validation";
import { initialValues } from "./initialValues";
import { useDispatch, useSelector } from "react-redux";
import {
  authLogin,
  errorMessageSelector,
  loadingStatusSelector,
  setErrorMessage,
} from "store/global";
import { useNavigate } from "react-router-dom";
import STATUSES from "constants/statuses";
import COLORS from "constants/colors";
import classNames from "classnames";

const FormAuthorization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessages = useSelector(errorMessageSelector);
  const loading = useSelector(loadingStatusSelector);

  const clearErrors = () => {
    if (errorMessages) {
      dispatch(setErrorMessage(""));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values: IValues) => {
        await dispatch(authLogin(values));
        if (STATUSES.DONE) {
          navigate("/profile");
        }
      }}
      validateOnBlur
      validationSchema={AUTH_VALIDATION_SCHEMA}
    >
      {({ values, errors, touched, handleSubmit, handleChange, isSubmitting }: IForm) => (
        <Form
          className={classNames(classes.form, {
            [classes.loading]: loading === STATUSES.LOADING,
          })}
        >
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
              disabled={isSubmitting || loading === STATUSES.LOADING}
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
              disabled={isSubmitting || loading === STATUSES.LOADING}
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
            disabled={isSubmitting || loading === STATUSES.LOADING}
            onClick={handleSubmit}
            sx={buttonStyles}
          >
            Login
          </Button>
          {loading === STATUSES.LOADING && (
            <Box sx={loaderStyles}>
              <CircularProgress sx={{ color: COLORS.PRIMARY }} />
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormAuthorization;
