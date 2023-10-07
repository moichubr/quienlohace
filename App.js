import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native"; //para enrutar la app- npm i react-router-native
import Main from "./src/screens/Main";
import RNEpicture from './src/screens/RNEpicture';
import WhatIsIt from './src/screens/What_is_it'; 


export default function App() {
  return (
    <NativeRouter>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/where" element={<RNEpicture />} />
      <Route path="/what" element={<WhatIsIt />} />
    </Routes>
  </NativeRouter>
  );
}
