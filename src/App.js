
import './App.css';

import React,{useEffect,useState} from "react";
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar' 

const App = () =>  {
  const pageSize = 50;
  // state = { //cretaa a obj state in which progress is 0
  //   progress :0
  // }
  const [progress,setProgress] = useState(0)
  // create a method of setprogress with parameter of progress
  // setProgress = (progress) =>{
  //   setState({progress:progress})

  // }
  
    return (
      <div>
        <BrowserRouter>
            <NavBar/>
            <LoadingBar
            height = {3}
             color='#0D6EFD'
             progress={progress}
            // onLoaderFinished={() => setProgress(0)}
            />
            <Routes>
                    <Route exact path="/"    element={<News setProgress={setProgress} key="General" pageSize={pageSize} country='in' category='General'/> } /> 
                    <Route exact path="/General" element={ <News setProgress={setProgress} key="General" pageSize={pageSize} country='in' category='General'/>}/>
                    <Route exact path="/Entertainment" element={<News setProgress={setProgress} key="Entertainment" pageSize={pageSize} country='in' category='Entertainment'/>}/> 
                    <Route exact path="/Health" element={ <News setProgress={setProgress} key="Health" pageSize={pageSize} country='in' category='Health'/>}/>
                    <Route exact path="/Science" element={ <News setProgress={setProgress} key="Science" pageSize={pageSize} country='in' category='Science'/>}/> 
                    <Route exact path="/Sports" element={ <News setProgress={setProgress} key="Sports" pageSize={pageSize} country='in' category='Sports'/>}/>
                    <Route exact path="/Technology" element={<News setProgress={setProgress} key="Technology" pageSize={pageSize} country='in' category='Technology'/>}/>
            </Routes>
        </BrowserRouter>
       
      </div>
    )
  
}

export default App;