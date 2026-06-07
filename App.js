import React from "react";
import ReactDOM from "react-dom/client";

// const heading =React.createElement("h1", {id : "heading"}, "Hello World from React!");
// root.render(heading);//This is converting the heading object into a real DOM element and rendering it on the page
// console.log(heading); //This will return an object

// const parent = React.createElement("div", {id : "parent"}, [
//     React.createElement("div", {id : "child1"}, [
//         React.createElement("h1", {} , "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag")
//     ]),
    
//     React.createElement("div", {id : "child2"}, [
//         React.createElement("h1", {} , "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag")
//     ])
// ]);


const jsxHeading = (<h1 id= "heading" className = "heading">Namaste React using JSX🚀</h1> )//This code is transpiled by babel before it reaches JS Engine
// JSX => Bable converts JSX toReact.createElement => Object => HTML element

const number = 1000;

const HeadingComponent = () => {
    return (<div className = "container">
                <h1 id= "heading" className = "heading">React Funtional Component</h1>
            </div>
    )
}

const HeadingComponent2 = () => (
    <div className = "container">
        {number}
        {2 + 3}
        {HeadingComponent()}
        {/* We can write JavaScript expressions inside these curly braces */}
        <HeadingComponent />
        <h1 id="heading">Namaste React using JSX🚀</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
