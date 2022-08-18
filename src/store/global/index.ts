import { getRequests } from "services/api/getRequests";
import { IAuth, IClient, IProfile } from "interfaces";
import { createAsyncThunk, createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { IGlobalStore, IGlobalStoreSelector } from "./interfaces";
import { postRequests } from "services/api/postRequests";
import STATUSES from "constants/statuses";
import { checkAuth } from "services/api/configureApi";
import { putRequests } from "services/api/putRequests";
import { deleteRequests } from "services/api/deleteRequests";

const initialState: IGlobalStore = {
  user: null,
  clients: null,
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

export const updateProfile = createAsyncThunk("profile/updateProfile", async (body: IProfile) => {
  const response = await putRequests.profile(body);
  return response.data;
});

export const getClients = createAsyncThunk("clients/getClients", async () => {
  const response = await getRequests.getClients();
  return response.data;
});

export const createClient = createAsyncThunk("clients/createClient", async (body: IClient) => {
  const response = await postRequests.client(body);
  return response.data;
});
export const removeClient = createAsyncThunk("clients/removeClient", async (id: string) => {
  const response = await deleteRequests.remove(id);
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

    builder.addCase(authLogin.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.accessToken);
      state.status = STATUSES.DONE;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });

    builder.addCase(authLogout.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(authLogout.fulfilled, (state) => {
      state.user = null;
      state.clients = null;
      localStorage.removeItem("token");
      state.status = STATUSES.DONE;
    });
    builder.addCase(authLogout.rejected, (state, action) => {
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
    builder.addCase(getClients.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(getClients.fulfilled, (state, action) => {
      state.clients = action.payload;
      state.status = STATUSES.DONE;
    });
    builder.addCase(getClients.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });

    builder.addCase(createClient.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(createClient.fulfilled, (state, action) => {
      state.clients?.push({ ...action.payload, owner: state.user?.id });
      state.status = STATUSES.DONE;
    });
    builder.addCase(createClient.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });

    builder.addCase(removeClient.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(removeClient.fulfilled, (state, action) => {
      const index = state.clients?.findIndex((client) => client._id === action.meta.arg);
      if (index) {
        state.clients?.splice(index, 1);
      }
      state.status = STATUSES.DONE;
    });
    builder.addCase(removeClient.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
      state.error = action.error.message;
    });
  },
});

const globalSelector = (state: IGlobalStoreSelector) => state.globalStore;

export const { setSuccessMessage, setErrorMessage } = globalResponseSlice.actions;

export const userResponseSelector = createDraftSafeSelector(
  globalSelector,
  (global) => global.user
);
export const clientsResponseSelector = createDraftSafeSelector(
  globalSelector,
  (global) => global.clients
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
