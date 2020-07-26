import React, { Component } from "react";
import { SearchInput } from "./SearchInput";
import { ItemsList } from "./ItemsList";

class TabPage extends Component {
  state = {
    filter: "",
  };

  handleChangeInput = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <SearchInput
          value={this.state.filter}
          onChange={this.handleChangeInput}
        />
        <ItemsList data={this.props.data} filter={this.state.filter} />
      </div>
    );
  }
}

export { TabPage };
