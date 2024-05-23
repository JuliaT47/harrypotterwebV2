import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import StudentsPage from "./StudentsPage";
import StaffPage from "./StaffPage";
import CharactersPage from "./CharactersPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/students" component={StudentsPage} />
        <Route path="/staff" component={StaffPage} />
        <Route path="/characters" component={CharactersPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
