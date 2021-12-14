import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

// props 를 원하는 Component 에 도달할 때 까지 계속 전달하여 사용하는 기존방식.
// interface IRouterProps {
//     toggleDark: () => void;
//     isDark: boolean;
// }

// function Router({toggleDark,isDark} : IRouterProps) {
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/reactchallenge/:coinId">
                    {/*<Coin isDark={isDark} toggleDark={toggleDark}/>*/}
                    <Coin />
                </Route>
                <Route path="/reactchallenge">
                    {/*<Coins toggleDark={toggleDark} isDark={isDark}/>*/}
                    <Coins/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;