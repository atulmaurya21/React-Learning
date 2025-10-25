import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      // count: 0,
      // count2: 2,
      userinfo: {
        login: "Dummy Name",
        type: "Default",
      },
    };

    // console.log(" Child Constructor Called ");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/atulmaurya21");
    const json = await data.json();
    console.log(json);

    this.setState({
      userinfo: json,
    });
  }

  componentDidUpdate() {
    console.log("update the finsh");
  }

  componentWillUnmount() {
    console.log("unmount is done");
    
  }
  render() {
    // const { count } = this.state;
    const { login, type, avatar_url } = this.state.userinfo;

    // console.log(" Child Render Called ");
    return (
      <div className="user-card">
        {/* <div className="user-count">
          <button className="dec-btn"
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            -
          </button>
          <h1>Count:{count}</h1>
          <button className="inc-btn"
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            +
          </button>
        </div> */}
        <img src={avatar_url} alt="github image" />
        <h2>Name:{login}</h2>
        <h3>Location:{type}</h3>
        <h4>Contact:atulmaurya2003</h4>
      </div>
    );
  }
}

export default UserClass;
