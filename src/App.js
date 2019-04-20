import React, { Component } from 'react';
import TextBox from "./components/TextBox"
import Table from "./components/Table"
import ExampleImage from "./sunset.jpg"
import "./grid.css"
import "./App.css"

class App extends Component {
  render() {
    return (
      <React.Fragment>

      

      <h1 className="headline">This is an example</h1>

      {/*  datetime is for the searchengines */}
      <div className="time-wrapper">
         <time datetime="2019-4-20">
            April 20, 2019
         </time>
      </div>
  

      <div className="container">

          <div className="row">
              <div className="ten columns offset-by-one">
              
                  <h2 className="section-headline">This is the section headline</h2>

                  <TextBox content={[
                      <React.Fragment>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                          magna aliquyam erat, sed diam voluptua. 
                          At vero eos et accusam et
                       
                          This is some HTML:
                          
                          <br/>
                           <i>italic text</i>
                          <br/>
                        
                          some HTML code without beeing rendered:
                          <br/>
                          &lt;i&gt;italic text&lt;/i&gt; 
                           <br/>
                          Thats cool.
                      </React.Fragment>
                  ]}/>

            
                  <img className="image" alt="a nice picure"  src={ExampleImage}></img>

                  <div className="notebox">And here we got a little note </div>

                  <h2 className="section-headline">Tables are so cool:</h2>

                  <Table titles={["eins", "zwei", "drei"]}/>

         
              </div>
          </div>

      </div>

  </React.Fragment>

    )
  }
}

export default App;
