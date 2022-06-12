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
  top: "-7px",
  "&.Mui-focused": {
    color: COLORS.PRIMARY,
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
