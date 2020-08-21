import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      updated: false,
    };
  }

  updateLikes = () => {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false,
        };
      });
    }
  };

  render() {
    let { updated } = this.state;
    const renderAuthButton = () => {
      if (updated === false) {
        return <p></p>;
      } else {
        return (
          <p>
            {" "}
            <FontAwesomeIcon icon={faHeart} className="icono" />{" "}
            {this.state.likes}
          </p>
        );
      }
    };
    return (
      <div>
        {renderAuthButton()}
        <button
          type="button"
          className="btn btn-outline-danger mr-2"
          onClick={this.updateLikes}
        >
          <FontAwesomeIcon icon={faHeart} /> Like
        </button>
      </div>
    );
  }
}

export default Likes;
