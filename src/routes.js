import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import Erro from "./pages/Erro";
import Header from "./components/header";
import Produto from "./pages/produto";
const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
        <Route path="/produto/:id" component={Produto} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
