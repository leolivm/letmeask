import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import AdminRoom from "./pages/AdminRoom";
import Rooms from "./pages/Rooms";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Rooms} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
