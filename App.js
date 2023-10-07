import React from "react";
import Main from "./src/Components/Main";
import { NativeRouter, Route, Routes } from "react-router-native"; //para enrutar la app- npm i react-router-native
import RNEpicture from './src/Components/RNEpicture';
import WhatIsIt from './src/Components/What_is_it'; 


export default function App() {
  return (
    <NativeRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/where" element={<RNEpicture />} />
      <Route path="/what" element={<WhatIsIt />} />
    </Routes>
  </NativeRouter>
  );
}
