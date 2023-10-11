import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: null,
  loading: false,
  error: false
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: () => {
      return initialState;
    },
    subscription: (state, action) => {
      if (state.data.subscribedUsers.includes(action.payload)) {
        state.data.subscribedUsers.splice(
          state.data.subscribedUsers.findIndex(
            (channelId) => channelId === action.payload
          ),
          1
        );
      } else {
        state.data.subscribedUsers.push(action.payload);
      }
    },
  }
});

export const { loginStart, loginSuccess, loginFailure, logout, subscription } = userSlice.actions;
export default userSlice.reducer;