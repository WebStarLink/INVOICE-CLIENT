import { createAsyncThunk, createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { IGlobalStore, IGlobalStoreSelector } from "./interfaces";
import { getRequests } from "services/api/getRequests";
import STATUSES from "constants/statuses";

const initialState: IGlobalStore = {
  owner: [],
  client: [],
  status: "",
  success: "",
  error: "",
};

export const getFakeData = createAsyncThunk("owner/getFakeData", async () => {
  try {
    const response = await getRequests.getTestData();
    return response.data;
  } catch (error) {
    console.log(error);
  }
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
      state.status = "DONE";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getFakeData.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(getFakeData.fulfilled, (state, action) => {
      state.owner = action.payload;
      state.status = STATUSES.DONE;
    });
    builder.addCase(getFakeData.rejected, (state, action) => {
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
