import React from "react";
import ReactDOM  from "react-dom/client";

const Title = () => <h1 id="header">Namaste React using JSX!</h1>

// React Functional Component
const HeadingComponent = () => (
     <div id="container">
        <Title />
        <h1 className="header">Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);