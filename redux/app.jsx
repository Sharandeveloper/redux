import react from 
'react';
import home from './home'
import 'bootstrap/dist/css/bootstrap.min.css'
import create from './create'
import {broswerrouter, routes, route} from 'react-router-dom'
 import update from './update'







function app () {
    return (
        <browserrouter>
      <routes>
        <routes path = "/" element={<home/>} ></routes>
      </routes>
      <routes path="/edit/ :id" element = {<update/>}></routes>

      <routes path="/create" element = {<home/>}></routes>
        </browserrouter>
    )
}
export default app;
