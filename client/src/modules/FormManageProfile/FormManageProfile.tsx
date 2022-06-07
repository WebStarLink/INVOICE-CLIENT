import React from "react";
import { Form, Formik } from "formik";
import { IForm } from "./interface";
import { Button, TextField } from "@mui/material";
import classes from "./FormManageProfile.module.scss";
import { buttonStyles, inputErrorStyles, inputLabelStyles, inputStyles } from "./styles";
import { PROFILE_VALIDATION_SCHEMA } from "constants/validation";
import { initialValues } from "./initialValues";
import { IProfile } from "interfaces";
import { putRequests } from "services/api/putRequests";
import { useSelector } from "react-redux";
import { userResponseSelector } from "store/global";

const FormAddClient = () => {
  const user = useSelector(userResponseSelector);

  return (
    <Formik
      initialValues={user ? user.profile : initialValues}
      onSubmit={(values: IProfile) => {
        putRequests.profile(values);
      }}
      validateOnBlur
      validationSchema={PROFILE_VALIDATION_SCHEMA}
    >
      {({ values, errors, touched, handleSubmit, handleChange, isSubmitting }: IForm) => (
        <>
          <Form className={classes.form}>
            <>
              <TextField
                fullWidth
                id="legal"
                name="legal"
                label="Legal Name"
                placeholder="Legal name of organization"
                value={values.legal}
                helperText={touched.legal && errors.legal}
                error={Boolean(touched.legal) && Boolean(errors.legal)}
                onChange={handleChange}
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
                id="itn"
                name="itn"
                label="TAX"
                inputMode="numeric"
                placeholder="Organization TAX number"
                value={values.itn}
                helperText={touched.itn && errors.itn}
                error={Boolean(touched.itn) && Boolean(errors.itn)}
                onChange={handleChange}
                disabled={isSubmitting}
                inputProps={{ maxLength: 9 }}
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
                  //   width: "calc(50% - 5px)",
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
              Save
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default FormAddClient;
