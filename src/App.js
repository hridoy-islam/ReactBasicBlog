import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
