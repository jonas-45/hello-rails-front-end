import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRandomGreeting = createAsyncThunk('greeting', async () => {
  try{
    const response = await fetch('http://localhost:3000/api/random_greeting');

    if(!response.ok){
      throw new Error('Could not get greeting');
    }

    const data = await response.json();
    return data.greeting;
  }catch(error){
    throw new Error('Request failed');
  }
})

const initialState = {
  message: ""
}

const GreetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder){
    builder.addCase(getRandomGreeting.fulfilled, (state,action) => {
      return {
        ...state,
        message: action.payload
      }
    })
  }

})

export default GreetingsSlice.reducer;