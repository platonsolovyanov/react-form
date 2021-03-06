/** @format */

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from "./component/Header";
import { Step1 } from "./Step1";

const Step2 = () => <>Step2</>
const Step3 = () => <>Step3</>
const Result = () => <>Result</>



function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/step1' component={Step1} />
          <Route exact path='/step2' component={Step2} />
          <Route exact path='/step3' component={Step3} />
          <Route exact path='/result' component={Result} />
        </Switch>
      </Router >
    </>
  );
}

export default App;
