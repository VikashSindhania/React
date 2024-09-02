import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    //items: ["Burger", "Pizza"],
    clearItems: [],
  },
  reducers: {
    // In Reducer we define all the actions                   Secret behind the action: {payload: "pizza"}  When we are creating Slice there will be a multiple reducer.like shown below
    addItem: (state, action) => {
      // Here add item is a Action, Reducer function --> () = {}, (state, action) => {state.items.push(action.payload);},
      state.items.push(action.payload); // action.payload is having that result when the user adds a cart in the components. Note -- Here we are modifying the state here.Mutuating the state, Modifying the state

      //Vanilla(olser) Redux = DON'T MUTUATE STATE
      // const newState = [...state];
      //newState.items.push(action.payload);
      //return newState;  Earlier returning was Mandatory in old vanilla redux case..

      //Redux Toolkit
      //We have To mutuate ths state
      // state.items.push(action.payload) -- We are mutatinng the state here in a new redux/toolkit
    },
    // Lets Write another reducer

    removeItem: (state, action) => {
      state.items.pop();
    },

    //Another reducer
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //state = [];or state = ["Akshay"]  Like this it will not react and for this the solution was given by Immer Library. Here you are not mutating the state or modifying the state.Like this You are just adding the Reference to it
      //RTK - either Mutuate the existing state or return a new state
      state.items.length = 0; // return [{items: []}] this will also work like this new [] will be replaced inside originalState = []
    },
  },
});

//The above code are the slice...

export const { addItem, removeItem, clearCart } = cartSlice.actions; // these are the actions

export default cartSlice.reducer; // these are the reducers   // A reducer can be combination of small Reducer

//Redux Toolkit uses Immer Library behind the scenes
