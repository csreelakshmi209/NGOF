import React from 'react';
import { Link,NavLink } from "react-router-dom";
import axios from "axios";
class DonationItem extends React.Component {
  state = {
    item: {

    },
  };
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`http://localhost:8080/items/donated/id/${this.props.match.params.itemId}`)
      .then((res) => {
        console.log(res);
        this.setState({ item: res.data });
      })
      .catch((err) => console.log(err));
  }
    render() { 
        const {item} =this.state;
        return (
        <div>
            <table className="table">
          <thead>
            <tr>
              <th>itemId</th>
              <th>donationType</th>
              <th>item_description</th>
            </tr>
          </thead>
          <tbody>
            
              <tr key={item.itemId}>
                <td>{item.itemId}</td>
                <td>{item.donationType}</td>
                <td>{item.itemDescription}</td>
              </tr>
            
          </tbody>
        </table>
        </div>
        );
    }
}
 
export default DonationItem;