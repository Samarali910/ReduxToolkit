import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  id: "",
  name: "",           
  address: "",       
  city: "",           
  nationality: "",    
  phone: "",          
  email: "",         
};

// Create user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Export actions
export const { setUserData } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
