import React, { Component } from "react";

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickQr = this.handleClickQr.bind(this);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    document.body.addEventListener("click", (e) => {
      this.setState({
        active: false,
      });
    });
  }

  componentWillUnmount() {
    document.body.removeEventListener("click");
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }

  handleClickQr(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className="qr-wrapper">
        <button className="qr" onClick={this.handleClick}>
          二维码
        </button>
        <div
          className="code"
          style={{ display: this.state.active ? "block" : "none" }}
          onClick={this.handleClickQr}
        >
          <img src="https://s3v2-qos.storage.wanyol.com/drp-commodity-test/img/1618392490949src=http___wx4.sinaimg.cn_orj360_002dFDkyly1gnspesagymj60u01szb2902.jpg&refer=http___wx4.sinaimg.jfif" alt="qr" />
        </div>
      </div>
    );
  }
}

export default QrCode