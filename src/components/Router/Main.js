import React from "react";
import { Switch, Route } from "react-router-dom";
import NewsPage from "../Views/News/NewsPage"
import Pieces from "../Views/Heroes/Pieces"


const Main = () => (

    <Switch>
      <Route exact path="/news" component={NewsPage} />
      <Route exact path="/heroes" component={Pieces} />
    </Switch>

);
export default Main;