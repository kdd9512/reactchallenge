import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/reactchallenge/:coinId">
                    <Coin/>
                </Route>
                <Route path="/reactchallenge">
                    <Coins/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;