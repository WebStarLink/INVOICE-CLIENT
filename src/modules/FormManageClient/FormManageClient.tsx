import React from "react";
import { Form, Formik } from "formik";
import { IValues, IForm, IFormManageClient } from "./interface";
import { Button, TextField } from "@mui/material";
import classes from "./FormManageClient.module.scss";
import { buttonStyles, inputErrorStyles, inputLabelStyles, inputStyles } from "./styles";
import { validationSchema } from "./validationSchema";

const FormManageClient = ({ selectedClient, handleCancel }: IFormManageClient) => (
  <Formik
    initialValues={selectedClient}
    enableReinitialize
    onSubmit={(values: IValues) => {
      console.log(values);
      console.log("SUBM");
    }}
    validateOnBlur
    validationSchema={validationSchema}
  >
    {({ values, errors, touched, handleSubmit, handleChange, isSubmitting }: IForm) => (
      <>
        <Form className={classes.form}>
          <>
            <TextField
              fullWidth
              id="id"
              name="id"
              label="ID"
              placeholder="What is your ID"
              value={values.id}
              helperText={touched.id && errors.id}
              error={Boolean(touched.id) && Boolean(errors.id)}
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
          </>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              disabled={isSubmitting}
              onClick={handleCancel}
              sx={buttonStyles}
            >
              Cancel
            </Button>
            <Button
              className={classes.button}
              disabled={isSubmitting}
              onClick={handleSubmit}
              sx={buttonStyles}
            >
              Save
            </Button>
          </div>
        </Form>
      </>
    )}
  </Formik>
);
export default FormManageClient;
