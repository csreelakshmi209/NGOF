import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography,Grid } from '@mui/material';
import axios from "axios";
import { getAllItemsAction } from "../actions/itemactions";
const Items = () => {
    // dispatch getAllProductsAction to get all products from rest api at the time of page loading
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("useEffect");
        dispatch(getAllItemsAction());
      }, []);
      
    return ( 
        <div>
            <Typography>Items page</Typography>
        </div>
        
     );
}
 
export default Items;