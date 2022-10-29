import React from "react";

const Hoc = (WrappedComponent) => {
  class Hoc extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todo: [],
      };
    }

    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({ todo: data });
        });
    }

    render() {
      return (
        this.state.todo.length > 0 && (
          <WrappedComponent datas={this.state.todo} />
        )
      );
    }
  }
  return Hoc;
};

export default Hoc;
