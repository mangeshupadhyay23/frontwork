import React from 'react';
import './App.css';
import {Router,Route} from 'react-router';
import Toolbar from './components/Toolbar/toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from "./components/Backdrop/Backdrop";
import Home from "./containers/HomePage/HomePage";
import Form from "./components/Form/Form";


class App extends React.Component{
    state={
        sideDrawerOpen:false
    };

    drawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{sideDrawerOpen:!prevState.sideDrawerOpen};
        });
    };

  render(){
      
      let backDrop;
      if(this.state.sideDrawerOpen){
          backDrop=<BackDrop drawerToggler={this.drawerToggleHandler}/>
      }
      
        return (
            <Router>
                <div className="App" style={{height:"100%"}}>
                    <Toolbar drawerToggler={this.drawerToggleHandler}/>
                    <SideDrawer show={this.state.sideDrawerOpen}/>
                    {backDrop}
                    <Route path={"/"} component={Home}></Route>
                    <Route path={"/form"} component={Form}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
