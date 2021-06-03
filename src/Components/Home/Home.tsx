import React from "react";
import "./Home.css";
import Pad from "../Pad/Pad";
import StartOrStopAllProps from "./StartOrStopAll/StartOrStopAll";
import StartOrStopAll from "./StartOrStopAll/StartOrStopAll";


function Home(): JSX.Element {
    return (
        <div className="totalContainer">
            <div className="containerRow">
            <div><Pad color="rgba(0, 139, 139, 0.5)" numSounds={0} text="Heavy Funk Groove"></Pad></div>
            <div><Pad color="rgba(0, 0, 139, 0.5)" numSounds={1} text="Electric Guitar"></Pad></div>
            <div><Pad color="rgba(135, 206, 250, 0.5)" numSounds={2} text="Future FunkBeats"></Pad></div>
            </div>
            <div className="containerRow">
            <div><Pad color="rgba(165, 42, 42, 0.5)" numSounds={3} text="Groove"></Pad></div>
            <div><Pad color="rgba(128, 0, 128, 0.5)" numSounds={4} text="Groove Tanggu"></Pad></div>
            <div><Pad color="rgba(0, 128, 0, 0.5)" numSounds={5} text="Maze Politics"></Pad></div>
            </div>
            <div className="containerRow">
            <div><Pad color="rgba(255, 255, 0, 0.5" numSounds={6} text="Organ Synth"></Pad></div>
            <div><Pad color="rgba(255, 166, 0, 0.5)" numSounds={7} text="Stompy Slosh"></Pad></div>
            <div><Pad color="rgba(220, 20, 60, 0.5)" numSounds={8} text="Stutter BreaBeats"></Pad></div>
            </div>

            <div className="StartOrStopAll">
                <div><StartOrStopAll></StartOrStopAll></div>
            </div>
        </div>
    );
}

export default Home;