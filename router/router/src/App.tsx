import {BrowserRouter, Route, Routes} from "react-router"
import './App.css'
import {Home} from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { profile } from "./pages/profile"
import { TopNavs } from "./components/topNavs"


export const routeMaps = {
  home : "/",
  about : "/about",
  contact : "/contact",
  profile : "/profile/:id"
}as const;


export const App = () =>{
  return <BrowserRouter>
  <TopNavs />
  <Routes>
      {/* <Route path="/" Component={Home} />
      <Route path="/about" Component={About}/> */}

    <Route path={routeMaps.home} Component={Home} />
    <Route path={routeMaps.about} Component={About} />
    <Route path={routeMaps.contact} Component={Contact} />
    <Route path={routeMaps.profile} Component={profile} />

  </Routes>
  </BrowserRouter>
}