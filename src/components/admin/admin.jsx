import React from 'react';
import { connect } from "react-redux";
class Admin extends React.Component {
    render() { 
        return <div>
            <h1>Admin</h1>
        </div>;
    }
}
 // funtion to get updates from store
const mapStateToProps = (state) => {
    return {
      login: state.login,
    };
  };
export default connect(mapStateToProps)(Admin);
