import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { IValues, IForm } from "./interface";
import { Button, TextField } from "@mui/material";
import classes from "./FormAddClient.module.scss";
import { buttonStyles, inputErrorStyles, inputLabelStyles, inputStyles } from "./styles";
import { validationSchema } from "./validationSchema";
import { initialValues } from "./initialValues";
import lottie from "lottie-web";
import LottieSaveAnimation from "assets/lottie/saved-animation.json";
import { useNavigate } from "react-router-dom";

const FormAddClient = () => {
  const element = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [saveClient, setSaveClient] = useState(false);

  useEffect(() => {
    if (element.current) {
      const saveClientAnimation = lottie.loadAnimation({
        container: element.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: LottieSaveAnimation,
      });
      saveClientAnimation.addEventListener("complete", () => {
        navigate("/");
      });
    }
  }, [saveClient, navigate]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: IValues) => {
        setSaveClient(true);
        console.log(values);
      }}
      validateOnBlur
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldValue,
        isSubmitting,
      }: IForm) => (
        <>
          <Form className={classes.form}>
            <>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Legal Name"
                placeholder="What is your name"
                value={values.name}
                helperText={touched.name && errors.name}
                error={Boolean(touched.name) && Boolean(errors.name)}
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
                id="unp"
                name="unp"
                label="UNP"
                placeholder="What is your UNP"
                value={values.unp}
                helperText={touched.unp && errors.unp}
                error={Boolean(touched.unp) && Boolean(errors.unp)}
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
                }}
              />
              <TextField
                fullWidth
                type={"tel"}
                inputMode="tel"
                id="phone"
                name="phone"
                label="Phone"
                placeholder="Phone number e.g +375..."
                value={values.phone}
                helperText={touched.phone && errors.phone}
                error={Boolean(touched.phone) && Boolean(errors.phone)}
                onChange={handleChange}
                onFocus={() => (values.phone.length < 1 ? setFieldValue("phone", "+375") : null)}
                disabled={isSubmitting}
                inputProps={{ maxLength: 13 }}
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
              disabled={isSubmitting}
              onClick={handleSubmit}
              sx={buttonStyles}
            >
              Save
            </Button>
            {isSubmitting && <div className={classes.animation} ref={element} />}
          </Form>
        </>
      )}
    </Formik>
  );
};

export default FormAddClient;
