"use strict";

console.log('js running ');

// REACT // REACTDOM
var template = React.createElement(
    "div",
    { className: "wrappr" },
    React.createElement(
        "h1",
        { id: "someID" },
        "Decision 8-Ball App w/React"
    ),
    React.createElement(
        "p",
        null,
        "for taking the challenges yeah seriously"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "list items"
        ),
        React.createElement(
            "li",
            null,
            "list items"
        )
    )
);

var newTemplate = React.createElement(
    "div",
    { className: "rootDiv" },
    React.createElement(
        "h2",
        null,
        "Step's Info:"
    ),
    React.createElement(
        "p",
        null,
        "age: 43"
    ),
    React.createElement(
        "p",
        null,
        "location: DNVR"
    )
);

var appRoot = document.getElementById('app');
var secondRoot = document.getElementById('otherRoot');

ReactDOM.render(template, appRoot);
// ReactDOM.render(newTemplate, secondRoot);
ReactDOM.render(newTemplate, secondRoot);
// ReactDOM.render(newTemplate, renderRoot);
