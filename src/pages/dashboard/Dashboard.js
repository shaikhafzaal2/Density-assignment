import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import { ReactComponent as EtherLogo } from "../../images/etheriunLogo.svg";
// styles
import useStyles from "./styles";

var data = {
  "id": "e2a85d9f-07a5-4f94-8d5f-789dc3deb097",
  "method": "order.place",
  "params": {
    "symbol": "BTCUSDT",
    "side": "BUY",
    "type": "LIMIT",
    "price": "0.1",
    "quantity": "10",
    "timeInForce": "GTC",
    "timestamp": 1655716096498,

  }
}

export default function Dashboard(props) {
  const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket("wss://ws-api.binance.com:9443/ws-api/v3");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");

        const wsCurrent = ws.current;

       
    }, []);

    useEffect(() => {
    

        ws.current.onmessage = e => {            
            const message = JSON.parse(e.data);
            console.log("e", message);
        };
    }, []);


  
  var theme = useTheme();
  var classes = useStyles();


  return (
    <>
     <Card raised="true" className={classes.topbarcard} sx={{ display: 'flex', justifyContent: "space-between" }}>
      <CardActions sx={{ display: 'flex', justifyContent: "space-between" }}  >
        <EtherLogo style={{ height: 35}} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ETHUDST
        </Typography>
        <Typography  style={{paddingLeft: 30}} variant="h5" component="div" color="green">
        $40,988
        </Typography>
        <Typography style={{paddingLeft: 20}} color="text.secondary">
          adjective
        </Typography>
        <Typography style={{paddingLeft: 20}} variant="body2">
         
        </Typography>
        <Typography  color="text.secondary" style={{paddingLeft: 80}}>
          adjective
        </Typography>
        <Typography  color="text.secondary" style={{paddingLeft: 80}}>
          adjective
        </Typography>
        <Typography  color="text.secondary" style={{paddingLeft: 80}}>
          adjective
        </Typography>
        <Typography  color="text.secondary" style={{paddingLeft: 80}}>
          adjective
        </Typography>
        <Typography variant="body2" style={{paddingLeft: 80}} >
          Mark
          <br />
          {'40,564'}
        </Typography>
        <Typography  variant="h10"  style={{paddingLeft: 80}}>
        Mark
          <br />
          {'40,564'}
        </Typography>
        <Typography variant="body2" style={{paddingLeft: 80}}>
        Mark
          <br />
          {'40,564'}
        </Typography>
      </CardActions>
    
    </Card>
   <iframe src={"https://s.tradingview.com/widgetembed/?frameElementId=tradingview_c79eb&symbol=BYBIT%3AETHUSDT.P&interval=1D&range=YTD&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=&utm_medium=widget_new&utm_campaign=chart&utm_term=BYBIT%3AETHUSDT.P#%7B%22page-uri%22%3A%22__NHTTP__%22%7D"} height= "81.5%" width="100%"/> 
    
     
    </>
  );
}
