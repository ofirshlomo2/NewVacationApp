import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./components/pages/login/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from "./components/pages/register/index"
import HomePageUsers from "./components/pages/HomePage/homeForUsers";
import HomePageAdmin from "./components/pages/HomePage/homeForAdmin";
import AddVacation from "./components/ui-containers/addVacation";
import EditVacation from "./components/ui-containers/editVacation";
import ButtonAppBar from "./components/ui-containers/nav-bar";
import WelcomePage from "./components/pages/welcomePage";
import VacationsReports from "./components/pages/reportsPage";
import AdminMenu from "./components/ui-containers/menuForAdmin";

function App() {
  return (
    <div>
    <Router>
      <div>
        <Switch>
          <Route key="login" path="/login">
            <LoginPage />
          </Route>
          <Route key="register" path="/register">
            <RegisterPage />
          </Route>
          <Route key="forUser" path="/home/forUser">
            <ButtonAppBar />
            <HomePageUsers />
          </Route>
          <Route key="forAdmin" path="/home/forAdmin">
            <ButtonAppBar />
            <AdminMenu/>
            <HomePageAdmin />
          </Route>
          <Route key="addVacation" path="/addVacation">
            <ButtonAppBar />
            <AdminMenu/>
            <AddVacation />
          </Route>
          <Route key="editVacation" path="/editVacation">
            <ButtonAppBar />
            <AdminMenu/>
            <EditVacation />
          </Route>
          <Route key="vacationsReports" path="/vacationsReports">
            <ButtonAppBar />
            <AdminMenu/>
            <VacationsReports/>
          </Route>
          <Route key="welcome" path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </div>
    </Router >

    </div>
  );
}

export default App;
