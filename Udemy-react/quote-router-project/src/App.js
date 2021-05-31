import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId" exact>
          <QuoteDetail />
        </Route>
        <Route path="/quotes/add">
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
