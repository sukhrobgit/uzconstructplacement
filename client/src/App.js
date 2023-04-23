import NavbarGen from "./components/NavbarGen";
import Home from "./pages/Home";
import {Route,BrowserRouter as Router,  Routes, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import PublicLayout from "./layouts/PublicLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import UserProfile from "./pages/UserProfile";
import Admin from "./pages/admin/Admin";
import AdminLayout from "./layouts/AdminLayout";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminPortfolio from "./pages/admin/AdminPortfolio";
import './style/style.scss'
import UserLoginRoute from "./components/UserLoginRoute";
import AdminUsers from "./pages/admin/AdminUsers";
import UserAccount from "./pages/UserAccount";






function App() {


  return (
  <>
<Router>


  <Routes>
  <Route path="/" element={<PublicLayout />}>
      <Route index element={<Home />}/>
      <Route path="home" element={<Home />}/>
      <Route path="about-us" element={<AboutUs />}/>
      <Route path="contact-us" element={<ContactUs/>}/>
      <Route path="portfolio" element={<Portfolio />}/>
      <Route path="user-account" element={<UserAccount/>}></Route>
   
    </Route>

  </Routes>


  <Routes>
    <Route element={<UserLoginRoute/>}>
    <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<AdminProjects/>}/>
        <Route  path="projects"  element={<AdminProjects/>}/>
        <Route path="portfolio" element={<AdminPortfolio/>}/>
        <Route path="users" element={<AdminUsers/>}/>
    </Route>
    </Route>
  
  </Routes>
  </Router>
  </>
  );
}

export default App;
