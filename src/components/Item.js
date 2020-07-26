import React, { Component } from "react";
import styles from "./Item.module.css";
import { ItemMoreInfo } from "./ItemMoreInfo";

class Item extends Component {
  state = {
    showInfo: false,
  };

  handleShowMoreInfo = () => {
    this.setState((prevState) => ({
      showInfo: !prevState.showInfo,
    }));
  };

  render() {
    const { item } = this.props;
    return (
      <div className={styles.container} onClick={this.handleShowMoreInfo}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.name || item.title}</h5>
          </div>
          {this.state.showInfo && <ItemMoreInfo item={item} />}
        </div>
      </div>
    );
  }
}

export { Item };
