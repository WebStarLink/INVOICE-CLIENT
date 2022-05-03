import { createAsyncThunk, createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { IGlobalStore, IGlobalStoreSelector } from "./interfaces";
import { postRequests } from "services/api/postRequests";
import STATUSES from "constants/statuses";

const initialState: IGlobalStore = {
  owner: [],
  client: [],
  status: "",
  success: "",
  error: "",
};

export const authLogin = createAsyncThunk("auth/login", async (body: {}) => {
  const response = await postRequests.login(body);
  return response.data;
});

export const globalResponseSlice = createSlice({
  name: "GLOBAL",
  initialState,
  reducers: {
    setSuccessMessage(state, action) {
      state.success = action.payload;
    },
    setErrorMessage(state, action) {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.owner = action.payload;
      state.status = STATUSES.DONE;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });
  },
});

export const { setSuccessMessage, setErrorMessage } = globalResponseSlice.actions;

const globalSelector = (state: IGlobalStoreSelector) => state.globalStore;

export const globalResponseSelector = createDraftSafeSelector(
  globalSelector,
  (global) => global.owner
);
export const loadingStatusSelector = createDraftSafeSelector(
  globalSelector,
  (global) => global.status
);
export const errorMessageSelector = createDraftSafeSelector(
  globalSelector,
  (global) => global.error
);

export default globalResponseSlice.reducer;
