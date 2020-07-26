import React, { Component } from "react";
import { TabPage } from "../components/TabPage";
import { getData } from "../services/api";

class Films extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    const query = Object.keys(this.state)[0];

    getData(query).then((response) =>
      this.setState({
        [query]: response.data.results,
      })
    );
  }

  render() {
    return <TabPage data={this.state.films} />;
  }
}

export { Films };
