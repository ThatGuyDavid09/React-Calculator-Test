import React from "react";
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

class Calculator extends React.Component {
    constructor() {
        super();

        this.state = {
          question: "",
          answer: ""  
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

        const value = event.target.value;

        switch (value) {
            case "=": {
                if (this.state.question !== "") {
                    var answer = "";
                    try {
                        answer = eval(this.state.question);
                    } catch (err) {
                        this.setState({answer: "Math Error"});
                    }

                    if (answer === undefined) {
                        this.setState({answer: "Math Error"});
                    } else {
                        this.setState({answer: answer, question: ""});
                    }
                }
                break;
            }

            case "C": {
                this.setState({question: "", answer: ""});
                break;
            }

            case "D": {
                var str = this.state.question;
                str = str.substr(0, str.length - 1);
                this.setState({question: str});
                break;
            }

            default: {
                this.setState((prev) => {
                    return {question: prev.question + value};
                });
                break;
            }
        }
    }

    render() {
        return (
            <div className="frame">
                <CalculatorTitle title="Test React Calculator"></CalculatorTitle>
                <div className="mainCalc">
                    <OutputScreen question={this.state.question} answer={this.state.answer} />
                    <div className="button-container">
                        <Button label={"C"} onClick={this.handleClick} />
                        <Button label={"D"} onClick={this.handleClick} />
                        <Button label={"."} onClick={this.handleClick} />
                        <Button label={"/"} onClick={this.handleClick} />

                        <Button label={"7"} onClick={this.handleClick} />
                        <Button label={"8"} onClick={this.handleClick} />
                        <Button label={"9"} onClick={this.handleClick} />
                        <Button label={"*"} onClick={this.handleClick} />

                        <Button label={"4"} onClick={this.handleClick} />
                        <Button label={"5"} onClick={this.handleClick} />
                        <Button label={"6"} onClick={this.handleClick} />
                        <Button label={"-"} onClick={this.handleClick} />

                        <Button label={"1"} onClick={this.handleClick} />
                        <Button label={"2"} onClick={this.handleClick} />
                        <Button label={"3"} onClick={this.handleClick} />
                        <Button label={"+"} onClick={this.handleClick} />

                        <Button label={"0"} onClick={this.handleClick} className="zero" />
                        <Button label={"="} onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;