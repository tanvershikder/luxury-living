import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import DashbordMain from './pages/Dashbord/DashbordMain';
import Book from './Components/Dashbord/Book';
import BookinList from './Components/Dashbord/BookinList';
import Review from './Components/Dashbord/Review';
import MakeAdmin from './Components/Dashbord/MakeAdmin';
import ManageService from './Components/Dashbord/ManageService';
import AddService from './Components/Dashbord/AddService';
import OrderList from './Components/Dashbord/OrderList';
import RequireAuth from './pages/login/RequireAuth';
import Notfound from './pages/Notfound/Notfound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashbord' element={
          <RequireAuth>
            <DashbordMain></DashbordMain>
          </RequireAuth>
        }>
          <Route index element={<BookinList></BookinList>}></Route>
          <Route path='bookinglist' element={<BookinList></BookinList>}></Route>
          <Route path='booking' element={<Book></Book>}></Route>
          <Route path='booking/:id' element={<Book></Book>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageservice' element={<ManageService></ManageService>}></Route>
          <Route path='addservice' element={<AddService></AddService>}></Route>
          <Route path='orderlist' element={<OrderList></OrderList>}></Route>


        </Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
