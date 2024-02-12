import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import store from "./context/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
    <Counter />
    </Provider>
  );
};

export default App;
