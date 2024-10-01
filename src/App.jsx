import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import HomeLayout from "./components/HomeLayout.jsx";
import Maps from "./components/Maps.jsx";
import { loader as mapsDataLoader } from "./components/Maps.jsx";
import DashboardContent from "./components/index.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout/>}>
      <Route index element={<DashboardContent/>}/>
      <Route path='/maps' loader={mapsDataLoader} element={<Maps/>}/>
      <Route path='/coordinates' element = {<h1>hello form coordinates section</h1>}/>
    </Route>
  )
);

export default router;