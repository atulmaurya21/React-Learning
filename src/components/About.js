import User from "./User";
import { Component } from "react";
import UserClass from "./UserClass";


class About extends Component {
  constructor(props) {
    super(props);
    // console.log(" Parent constructor  Called ");
  }

  componentDidMount() {
    // console.log(" Parent did Mount ");
  }
  render() {
    // console.log(" Parent Render Called ");

    return (
      <div>
        <h1>About</h1>
        <h2>This is about page</h2>
        <UserClass Fullname={"Atul  using props by Class based component "} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is about page</h2>
//       {/* <User Fullname={"Atul  using props by functional component "} /> */}
//       <UserClass Fullname={"Atul  using props by Class based component "} />
//     </div>
//   );
// };


export default About;