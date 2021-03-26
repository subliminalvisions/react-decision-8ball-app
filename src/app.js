console.log('js running ');

// REACT // REACTDOM
var template = (
    <div className="wrappr">
        <h1 id="someID">Decision 8-Ball App w/React</h1>
        <p>for taking the challenges yeah seriously</p>
        <ol>
            <li>list items</li>
            <li>list items</li>
        </ol>
    </div>
);

var newTemplate = (
    <div className="rootDiv">
        <h2>Step's Info:</h2>
        <p>age: 43</p>
        <p>location: DNVR</p>
    </div>
);

var appRoot = document.getElementById('app');
var secondRoot = document.getElementById('otherRoot');

ReactDOM.render(template, appRoot);
// ReactDOM.render(newTemplate, secondRoot);
ReactDOM.render(newTemplate, secondRoot);
// ReactDOM.render(newTemplate, renderRoot);

