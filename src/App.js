import "./App.css";
import Nav from "./components/nav";
import {BrowserRouter as Router, Switch,Route,Redirect,} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Admin from "./components/admin/admin";
import About from "./components/about";
import DonateNow from "./components/donatenow";
import Footer from "./components/footer";
import Needy from "./components/needy/needypeople";
import AddNeedyPerson from "./components/needy/addneedyperson";
import UpdateNeedyPerson from "./components/needy/updateneedyperson";
import Address from './components/needy/address';
import Employee from './components/employee/employee';
import AddEmployee from './components/employee/addemployee';
import UpdateEmployee from './components/employee/updateemployee';
import EmployeeAddress from './components/employee/employeeaddress';
import Donor from './components/donor/donor';
import DonorAddress from './components/donor/donoraddress';
import AddDonor from './components/donor/adddonor';
import UpdateDonor from './components/donor/updatedonor';
import RequestForHelp from './components/requestforhelp/requestforhelp';
import AddRequestForHelp from './components/requestforhelp/addrequestforhelp';
import UpdateRequestForHelp from './components/requestforhelp/updaterequestforhelp';
import Register from "./components/register";
import AddAdmin from "./components/admin/addadmin";
import Bank from "./components/donatengo/bank";
import InsertBank from "./components/donatengo/insertBank";
import AddDonationBox from "./components/donation/addDonationBox";
import Donation from "./components/donation/donation";
import DonationItem from "./components/donation/donationitem";
import AddDonation from "./components/donation/adddonation";
import UpdateDonationBox from "./components/donation/updateDonationBox";
import DonationDonor from "./components/donation/donationdonor";
import DonationBox from "./components/donation/donationBox";
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
        <Route path="/home" component={Home}/>
        <Route path="/donatenow" component={DonateNow}/>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin}/>
        <Route path="/about" component={About}/>
        <Route path="/footer" component={Footer}/>
        <Route path="/needypeople/add" component={AddNeedyPerson} />
        <Route path="/employee/update/:employeeId" component={UpdateEmployee}/>
        <Route path="/needypeople/address/:addressId" component={Address} />
        <Route path="/needypeople/update/:id" component={UpdateNeedyPerson} />
        <Route path="/needypeople" component={Needy} />
        <Route path="/employee/get" component={Employee} />
        <Route path="/employee/add" component={AddEmployee} />
        <Route path="/employee/get/address/:addressId" component={EmployeeAddress}/>
        <Route path="/donor/update/:donorId" component={UpdateDonor}/>
        <Route path="/donor/add" component={AddDonor} />
        <Route path="/donor/get/address/:addressId" component={DonorAddress}/> 
        <Route path="/donor" component={Donor} />
        <Route path="/request/update/:requestId" component={UpdateRequestForHelp}/>
        <Route path="/request/add" component={AddRequestForHelp}/>
        <Route path="/requestforhelp" component={RequestForHelp}/>
          <Route path="/admin/add" component={AddAdmin} />
          <Route path="/register" component={Register} />
          <Route path="/getBank" component={Bank} />
          <Route path="/insertBank" component={InsertBank} />
          <Route
            path="/donationBox/update/:registrationNumber"
            component={UpdateDonationBox}
          />
          <Route path="/donationBox/add" component={AddDonationBox} />
          <Route path="/donationBox" component={DonationBox} />
         
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
