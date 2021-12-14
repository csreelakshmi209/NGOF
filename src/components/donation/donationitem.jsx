import React from 'react';
import { Link,NavLink } from "react-router-dom";
import axios from "axios";
class DonationItem extends React.Component {
  state = {
    donationItem: {

    },
  };
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`http://localhost:8080/items/donated/${this.props.match.params.itemId}`)
      .then((res) => {
        console.log(res);
        this.setState({ donationItem: res.data });
      })
      .catch((err) => console.log(err));
  }
    render() { 
        const {donationItem} =this.state;
        return (
        <div>
            <table className="table">
          <thead>
            <tr>
              <th>itemId</th>
              <th>itemType</th>
              <th>item_description</th>
             
              
            </tr>
          </thead>
          <tbody>
            
              <tr key={donationItem.itemId}>
                <td>{donationItem.itemId}</td>
                <td>{donationItem.itemType}</td>
                <td>{donationItem.itemDescription}</td>
               
                <td>
                
                </td>
              </tr>
            
          </tbody>
        </table>
        </div>
        );
    }
}
 
export default DonationItem;