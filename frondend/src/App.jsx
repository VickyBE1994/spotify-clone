import { useContext } from "react";
import Display from "./Components/Display";
import Player from "./Components/Player";
import Sidebar from "./Components/Sidebar";
import { PlayerContext } from "./Components/context/PlayerContext";

export default function App() {

  const {audioRef,track,songsData}=useContext(PlayerContext)

  return (
    <div className="h-screen bg-black">
      {
        songsData.length !==0
        ? <>
           <div className="h-[90%] flex">
        <Sidebar />
        <Display/>    
      </div>
      <Player/>
        </> : null
      }
      <audio ref={audioRef} src={track ? track.file : " "} preload="auto"></audio>
    </div>
  );
}
