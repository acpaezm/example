import React from 'react';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction


export default class MyAwesomeNerdpackNerdletNerdlet extends React.Component {
    state = {
        myinput: "Message to Update ",
    }
    render() {
        const style = {
            input: {
                border: '1px solid rgb(189, 189, 189)',
                borderRadius: '5px 5px 5px 5px',
                width: '45%',
                fontSize: '15px',
                height: '30px',
                padding: '3%',
            }

        };
        return (
            <React.Fragment>
                <div className="div">
                    <div className="headerdiv"></div>
                    <input style={style.input} type=" text" placeholder={this.state.myinput} ></input>
                    
                </div>
            </React.Fragment>
        );
    }
}
