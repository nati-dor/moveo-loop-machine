import  React, { Component, RefObject, SyntheticEvent, useRef } from "react";
import  "./Pad.css"
import soundsModel from "../../Models/SoundsModels"

interface PadProps {
    color: string;
    numSounds: number;
    text: string;
}

interface PadState {
    isClick: boolean,
    audio: any
}

class Pad extends Component<PadProps, PadState>{

    public constructor(props: PadProps) {
        super(props);
        this.state = { isClick: true, audio:new Audio(soundsModel[this.props.numSounds])};
    }

    private style = {
        backgroundColor: this.props.color
    };

    public changeClickHandler = (args: SyntheticEvent) => {
            let isClick = !this.state.isClick;
            if(isClick){
                this.state.audio.play();
                this.state.audio.loop=true;
                this.style = {backgroundColor: "transparent"};
            }
            else{
                this.state.audio.load();
                this.style = {backgroundColor: this.props.color};
            }
            this.setState({ isClick });
        }

    public render(): JSX.Element {
        return (
            <div className="Pad" onClick={this.changeClickHandler} style={this.style}>
                {this.props.text}
            </div>
        );
    }

    public componentDidMount() : void{
    this.forceUpdate();
    let isClick = false;
    this.setState({ isClick });
    }
}
export default Pad;