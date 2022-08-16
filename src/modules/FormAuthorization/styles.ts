import COLORS from "constants/colors";

export const inputStyles = {
  input: {
    padding: "9px 14px",
  },
  "&.MuiOutlinedInput-root": {
    "&.Mui-focused": {
      fieldset: {
        borderColor: COLORS.PRIMARY,
      },
    },
    "&.Mui-error": {
      fieldset: {
        borderColor: COLORS.WARNING,
      },
    },
  },
};

export const inputLabelStyles = {
  top: "-8px",
  "&.Mui-focused": {
    color: COLORS.PRIMARY,
    transform: "translate(14px, -2px) scale(0.75)",
  },
  "&.MuiInputLabel-shrink": {
    transform: "translate(14px, 0px) scale(0.75)",
  },
  "&.Mui-error": {
    color: COLORS.WARNING,
  },
};
export const inputErrorStyles = {
  textAlign: "center",
  color: COLORS.WARNING,
};

export const buttonStyles = {
  color: COLORS.WHITE,
  background: COLORS.PRIMARY,
  "&:hover": {
    color: COLORS.PRIMARY,
  },
};

export const loaderStyles = {
  display: "flex",
  justifyContent: "center",
  color: "#000",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "2",
};
