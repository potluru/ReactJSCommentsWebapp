import React, { Component } from "react";

class Comment extends Component {
  constructor(props, context) {
    super(props, context);
    this.curTime = new Date().toLocaleString();
  }

  render() {
    const commentStyle = {
      backgroundColor: this.props.bgcolor,
      width: "100%",
      height: "30%",
      fontSize: 20,
      color: "#696969"
    };

    const commentTimeStyle = {
      fontSize: 15,
      color: "gray"
    };

    return (
      <div style={commentStyle}>
        <hr />
        <div>{this.props.content}</div>
        <br />

        <div style={commentTimeStyle}>
          <i>{this.props.name}</i> commented at: {this.curTime}
        </div>
      </div>
    );
  }
}

class CommentsHolder extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      comments: ""
    };

    this.allComments = [];
    this.postComment = this.postComment.bind(this);
  }

  postComment() {
    this.setState({
      comments: this.refs._comment.value
    });

    this.allComments.push(
      <Comment
        content={this.refs._comment.value}
        name={this.refs._name.value}
        key={this.state.comments}
      />
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("Component just updated!");
    this.refs._comment.value = "";
    this.refs._name.value = "";
  }

  render() {
    const squareStyle = {
      backgroundColor: this.props.bgcolor,
      width: "100%",
      height: "30%"
    };

    return (
      <div style={squareStyle}>
        <br />
        <strong>Comments:</strong>
        <input ref="_comment" />
        &nbsp; <strong>Name:</strong>
        <input ref="_name" />
        &nbsp;<button type="button" onClick={this.postComment}>
          Post Comment
        </button>
        <br />
        <div>{this.allComments}</div>
      </div>
    );
  }
}

export default CommentsHolder;
