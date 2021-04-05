import React from "react";
import { Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Homepage from "./pages/homepage/Homepage";
import Projects from "./pages/projects/Projects";

const App = () => {
  return (
   <div>
     <Header/>
     <Switch>
       <Route exact path="/" component={Homepage} />
       <Route path="/projects" component={Projects}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
     </Switch>
   </div>
  );
}

export default App;
