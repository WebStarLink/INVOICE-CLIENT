import { getRequests } from "services/api/getRequests";
import { IAuth, IProfile } from "interfaces";
import { createAsyncThunk, createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { IGlobalStore, IGlobalStoreSelector } from "./interfaces";
import { postRequests } from "services/api/postRequests";
import STATUSES from "constants/statuses";
import { checkAuth } from "services/api/configureApi";
import { putRequests } from "services/api/putRequests";

const initialState: IGlobalStore = {
  user: null,
  client: [],
  status: "",
  success: "",
  error: "",
};

export const authLogin = createAsyncThunk("auth/login", async (body: IAuth) => {
  const response = await postRequests.login(body);
  return response.data;
});
export const authCheck = createAsyncThunk("auth/refresh", async () => {
  const response = await checkAuth.refreshToken();
  return response.data;
});
export const authRegistration = createAsyncThunk("auth/registration", async (body: IAuth) => {
  const response = await postRequests.registration(body);
  return response.data;
});
export const authLogout = createAsyncThunk("auth/logout", async () => {
  const response = await postRequests.logout();
  return response.data;
});
export const getClients = createAsyncThunk("clients/getClients", async () => {
  const response = await getRequests.getUsers();
  return response.data;
});
export const updateProfile = createAsyncThunk("profile/updateProfile", async (body: IProfile) => {
  const response = await putRequests.profile(body);
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
      console.log("AUTH LOGIN", action.payload);

      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.accessToken);
      state.status = STATUSES.DONE;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });
    builder.addCase(authCheck.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(authCheck.fulfilled, (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.accessToken);
      state.status = STATUSES.DONE;
    });
    builder.addCase(authCheck.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });
    builder.addCase(authLogout.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(authLogout.fulfilled, (state) => {
      state.user = null;
      localStorage.removeItem("token");
      state.status = STATUSES.DONE;
    });
    builder.addCase(authLogout.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });
    builder.addCase(authRegistration.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(authRegistration.fulfilled, (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.accessToken);
      state.status = STATUSES.DONE;
    });
    builder.addCase(authRegistration.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });
    builder.addCase(getClients.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(getClients.fulfilled, (state, action) => {
      state.client.push(action.payload);
      state.status = STATUSES.DONE;
    });
    builder.addCase(getClients.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });
    builder.addCase(updateProfile.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = STATUSES.DONE;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });
  },
});

export const { setSuccessMessage, setErrorMessage } = globalResponseSlice.actions;

const globalSelector = (state: IGlobalStoreSelector) => state.globalStore;

export const userResponseSelector = createDraftSafeSelector(
  globalSelector,
  (global) => global.user
);
export const clientResponseSelector = createDraftSafeSelector(
  globalSelector,
  (global) => global.client
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
