import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
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
             <div className="App" style={{height:"100%"}}>
                <Toolbar drawerToggler={this.drawerToggleHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backDrop}
                <main className='main_content'>
                    <Switch>
                        <Route path={'/form/'} component={Form}></Route>
                        <Route path={'/'} component={Home}></Route>
                    </Switch>
                </main>
            </div> 
        );
    }
}

export default App;
