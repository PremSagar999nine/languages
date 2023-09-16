<center><h1>React.js Doc</h1></center>
<hr>
<li>download the node js from browser </li>
<li>To crate a New React Project run the following</li>

>npx create-react-app my-react-app //my-react-app is just name of the folder

<li>And procide with the process </li>
<li>go into the file and type the following</li>

> cd my-react-app
>  npm start

<li>
  npm start
  
  >  Starts the development server.

  npm run build
   
  > Bundles the app into static files for production.

  npm test
    
  > Starts the test runner.

  npm run eject
    
  >Removes this tool and copies build dependencies, configuration files
</li>
class

>import React, {Component} from "react";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
    }
    // called automatically by React
    componentDidMount() {
        console.log("Component rendered (first time)")
    }
    handleClick(event) {
        this.setState({counter: this.state.counter + 1});
    }
    render() {
        // React returns "JSX" (outside of the scope of this course)
        return <button onClick={this.handleClick.bind(this)}>Add 1</button>;
    }
}

web components:
Web Components is a feature available in all browsers that allow you to define reusable components. We'll have an optional chapter on Web Components at the end of this course.

Here's an example of a Web Component:

>class AppDashboard extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        // assuming there's a <template id="dashboard-template">...</template> in the HTML
        const template = document.querySelector("#dashboard-template");
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['mode', 'size'];
    }

    connectedCallback() {
        console.log("AppDashboard rendered (the first time)");
    }
}

window.customElements.define("app-dashboard", AppDashboard);