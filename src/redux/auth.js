import { createSlice } from "@reduxjs/toolkit";

const initialUser = () => {
  const item = window.localStorage.getItem("userData");
  return item ? JSON.parse(item) : {};
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    userData: initialUser(),
    logged: false,
    loginError: false,
  },

  reducers: {
    setLoginError: (state, action) => {
      state.loginError = action.payload;
    },

    handleLoginSuccess: (state, action) => {
      state.logged = true;
      state.userData = action.payload;
      state.loginError = false;
    },
    handleLogout: (state) => {
      state.userData = {};
      state.logged = false;
      state.loginError = false;
      localStorage.clear();
    },
  },
});

export const { handleLoginSuccess, handleLogout, setLoginError } = authSlice.actions;

export const handleLogin = (credentials) => async (dispatch) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login');
    }

    const data = await response.json();

    if (data.user) {
      // Login bem-sucedido
      dispatch(handleLoginSuccess(data.user));
    } else {
      // Credenciais inválidas
      dispatch(setLoginError(true));
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error.message);
    dispatch(setLoginError(true));
  }
};

export default authSlice.reducer;
