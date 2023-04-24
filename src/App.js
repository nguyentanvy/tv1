import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { publicRoutes } from './routes';
import {defaultLayout} from '~/components/Layout'
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <Routes>
       {
       publicRoutes.map((route,index) =>{
       
        const Page = route.component;
        let Layout = defaultLayout;
        if(route.layout){
          Layout = route.layout;
        }
        else if(route.layout === null){
          Layout= Fragment;
        }

        return <Route key = {index} path={route.path} element={<Layout><Page/></Layout>} />
       })}
      </Routes>
    </Router>
  );
}

export default App;
