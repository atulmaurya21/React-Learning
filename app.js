// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World In React !"
// );
// console.log(heading);

/*
 Creating a nested loop 

 <div id= "parent">
   <div id ="child">
     <h1> I am largest Heading tag </h1>
     // add a sbilings 
     <h2> I am your silbings can you understand what i m saying </h2>
   </div>
 </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child 1" }, [
    React.createElement("h1", {}, "I am a largest heading Tag"),
    React.createElement("h2", {}, "I am your sbilings"),
  ]),
  React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "I am a largest of child2 heading Tag"),
    React.createElement("h2", {}, "I am your child2 sbilings"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

root.render(parent);
