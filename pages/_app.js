import React, { Component } from "react";
import "../styles/globals.css";;

class App extends Component {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
          <Component {...pageProps} />
      </>
    );
  }
}
export default App;