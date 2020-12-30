import React, { Component, createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F5F5F6",
    height: "100vh",
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FundamentalsWidget />
    </div>
  );
};

class FundamentalsWidget extends Component {
  constructor(props) {
    super(props);
    this._ref = createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "NASDAQ:AAPL",
      colorTheme: "light",
      isTransparent: true,
      largeChartUrl: "",
      displayMode: "compact",
      width: "100%",
      height: "100%",
      locale: "en",
    });

    this._ref.current.appendChild(script);
  }

  render() {
    return (
      <div className="tradingview-widget-container" ref={this._ref}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    );
  }
}
