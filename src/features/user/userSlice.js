import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const themes ={
  winter:'winter',
  dracula:'dracula'
}

const getThemeFromLocalStorage = ()=>{
  const theme = localStorage.getItem('theme') || themes.winter;
  document.documentElement.setAttribute('data-theme',theme);
  return theme
}

const initialState  ={
  user:{username:"Abdalla"},
  theme:getThemeFromLocalStorage(),
}
const userSlice = createSlice({
  name:'user',
  initialState:initialState,
  reducers:{
    loginUser:(state,action)=>{
      console.log(action);
    },
    logoutUser:(state)=>{
      state.user = null
      localStorage.removeItem('user');
      toast.success('Logout successful')
    },
    toggleTheme:(state)=>{
      const {dracula, winter}  = themes;
      state.theme = state.theme ==winter?dracula:winter;
      document.documentElement.setAttribute('data-theme',state.theme);
      localStorage.setItem('theme',state.theme);
    }
  }
})

export const {loginUser,logoutUser,toggleTheme} = userSlice.actions
export default userSlice.reducer;