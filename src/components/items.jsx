import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography,Grid } from '@mui/material';
import axios from "axios";
import { getAllItemsAction } from "../actions/itemactions";
import ItemCard from "./itemcard";
import { Link } from "react-router-dom";

const Items = () => {
    // dispatch getAllProductsAction to get all products from rest api at the time of page loading
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("useEffect");
        dispatch(getAllItemsAction());
      }, []);

      // Get products from store
    const items = useSelector((state) => state.fakeStore.products);
     console.log(items);
    return ( 
        <div>
            <Typography>Items page</Typography>
            {/* <SearchProduct /> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          {/* <SideBar /> */}
        </Grid>
        <Grid item xs={12} sm={10}>
          <Grid container spacing={2}>
            {/* {items.map((p) => ( */}
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                component={Link}
                 to={`/item/details/`}
              >   
              {/* ${p.id} */}
                <ItemCard  />
                {/* product={p} */}
              </Grid>
            )
             {/* )}  */}
          </Grid>
        </Grid>
      </Grid>
         </div>     
     );
};
 
export default Items;