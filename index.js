import React from "react";
import ReactDOM from "react-dom/client";


// React Element at the end
const heading = (
    <h1 className="head">
        Namste react using jsx but new indexjs
    </h1>
)


// react component are two type 1. Class based 2. Functional

// React Fuctional Component


// const HeadingComponent = () => {
//     return <h1>Namste using Functional component </h1>
// }

const Title = () => (
    <h2 id="head1">
        Namste I m second functional component
    </h2>
)

//use without arrow function

// const Title = function () {

//     return (
//         <h2 id="head1">Namste I m second functional component</h2>

//     );
// }


// component Composition

// const number = 10000;
const HeadingComponent = () => (
    <div id="container">
        {/* use element  javascrpit  */}
        {/* {number+100} */}


        {heading}
        <Title/>
    <h1>Namste using Functional component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//element render
// root.render(heading);

root.render(<HeadingComponent/>)