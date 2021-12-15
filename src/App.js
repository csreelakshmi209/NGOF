import "./App.css";
import Nav from "./components/nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Admin from "./components/admin/admin";
import Employee from "./components/employee/employee";
import AddEmployee from "./components/employee/addemployee";
import UpdateEmployee from "./components/employee/updateemployee";
import EmployeeAddress from "./components/employee/employeeaddress";
import Donor from "./components/donor/donor";
import AddDonor from "./components/donor/adddonor";
import Donation from "./components/donation/donation";
import DonationItem from "./components/donation/donationitem";
import AddDonation from "./components/donation/adddonation";
import DonorAddress from "./components/donor/donoraddress";
import UpdateDonor from "./components/donor/updatedonor";
import DonationDonor from "./components/donation/donationdonor";
import Counter from "./components/counter";
//import Items from "./components/items";
//import ItemDetails from "./components/itemdetails";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/register" component={Register} />
         
          <Route
            path="/donor/update/:donorId"
            component={UpdateDonor}
          />
          <Route
            path="/employee/get/address/:addressId"
            component={EmployeeAddress}
          />
          <Route path="/employee/add" component={AddEmployee} />
          <Route path="/donor/add" component={AddDonor} />
          <Route
            path="/donor/get/address/:addressId"
            component={DonorAddress}
          /> 
          <Route path="/employee/get" component={Employee} />
          <Route path="/donor" component={Donor} />
          
         
          
           <Route
            path="/employee/update/:employeeId"
            component={UpdateEmployee}
          />  
          <Route
            path="/donor/get/:donorId"
            component={DonationDonor}
          />
          <Route path="/donation/add" component={AddDonation} />
          <Route path="/donation/get" component={Donation} />
          <Route
            path="/items/donated/:itemId"
            component={DonationItem}
          />
          {/* <Route path="/items/get" component={Items} /> */}
        
          {/* <Route path="/item/details/:id" component={ItemDetails} /> */}
          <Redirect exact path="/" to="/home" />
          <Route path="/counter" component={Counter} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
