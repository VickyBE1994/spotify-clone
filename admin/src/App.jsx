import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AddSong from "./pages/AddSong";
import AddAlbum from "./pages/AddAlbum";
import ListAlbum from "./pages/ListAlbum";
import ListSong from "./pages/ListSong";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export  const url = 'https://spotify-clone-42cz.onrender.com'

const App = () => {
 

  return (
  <div className="flex items-start min-h-screen">
    <ToastContainer /> 
    <Sidebar/>

    <div className="flex-1 h-screen overflow-y-scroll bg-[#f3fff7]">
    <Navbar/>
      <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
        
        <Routes>
          <Route path="/add-song" element={<AddSong />} />
          <Route path="/add-album" element={<AddAlbum />} />
          <Route path="/list-album" element={<ListAlbum />} />
          <Route path="/list-song" element={<ListSong />} />
        </Routes>
      </div>
    </div>
  </div>
  )
  
};


export default App;
