import { Component } from "react";

class CounterClassComponent extends Component {

    state = {
        count: 0,
        name: "Abhi"
    }

    decrement() {
        // context -> CounterClassComponent
        
        // this.setState({
        //   ...this.state,
        //   count: -90,
        // });

        this.setState((oldState) => {
            return {
                ...oldState,
                count: oldState.count - 1
            }
        })
    }

    increment() {

        // this.setState({
        //   ...this.state,
        //   count: 100,
        // });

        this.setState((oldState) => {
            return {
                ...oldState,
                count: oldState.count + 1
            }
        })
    }

    render() {
        return (
            <>
                <h1>{"Counter COmponent class"}</h1>

                <div>
                    <div id="counter">{this.state.count}</div>
                    <div style={{ display: "flex", gap: "10px", margin: "20px" }}>
                        <button onClick={this.decrement.bind(this)}>-</button>
                        <button onClick={this.increment.bind(this)}>+</button>
                    </div>
                </div>

            </>
        );
    }
}

export default CounterClassComponent;