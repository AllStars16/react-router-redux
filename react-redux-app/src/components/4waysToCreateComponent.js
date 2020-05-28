import React from 'react';
// 4 ways to create React components

// 1. createClass component - DEPRECATED!!!
/* var HelloWorldCCC = React.createClass({
    render: function() {
        return (
            <h1>Hello World (CCC)</h1>
        );
    }
}); */

// 2. class component
class HelloWorldCC extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello World (CC)</h1>
        );
    }
}

// 3. function component

function HelloWorldFC(props) {
    return (
        <h1>Hello World (FC)</h1>
    );
}

// 4. const comopnent
const HelloWorldConst = (props) => <h1>HelloWorld (const)</h1>

export {HelloWorldCC,HelloWorldFC,HelloWorldConst};