import React, { Component, SyntheticEvent } from "react"
import soundsModel from "../../../Models/SoundsModels";


interface StartOrStopAllProps {
}

interface StartOrStopAllState {
    isClick: boolean,
    text: string,
    audioArr: any
}


class StartOrStopAll extends Component<StartOrStopAllProps, StartOrStopAllState>{

    public constructor(props: StartOrStopAllProps) {
        super(props);
        this.state = {isClick: false, text: "Play all", audioArr:[]};
    }

    private style = {
        backgroundColor: "black",
        color: "white"
    };

    public clickAllHandler = (args: SyntheticEvent) => {
        let isClick = !this.state.isClick;
        if(isClick){
            for(let i=0; i<this.state.audioArr.length; i++){
                this.state.audioArr[i].play();
            }
            let text="Stop All";
            this.setState({text})
            this.style = {backgroundColor: "transparent",color: "black"};

        }
        else{
            for(let i=0; i<this.state.audioArr.length; i++){
                this.state.audioArr[i].load();
            }
            let text="Play All";
            this.setState({text})
            this.style = {backgroundColor: "black",color: "white"};
        }
        this.setState({ isClick});
    }

    public render(): JSX.Element{
return(
    <div className="StartOrStopAll" onClick={this.clickAllHandler} style={this.style}>
    {this.state.text}
</div>
);
    }

    public componentDidMount() : void{
        let audioArr=[];
        for(let i=0; i<soundsModel.length; i++){
           audioArr[i]=new Audio(soundsModel[i]);
           audioArr[i].loop=true;
            this.setState({audioArr});
        }
        this.forceUpdate();
        
        }
}

export default StartOrStopAll;