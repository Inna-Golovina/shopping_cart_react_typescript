import { useState } from "react";
import { useQuery } from "react-query";

import { Drawer } from "@mui/material";
import { LinearProgress } from "@mui/material";
import { Grid } from "@mui/material";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Badge } from "@mui/material";
import { Wrapper } from "./App_styles";
import { log } from "console";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  console.log(data);
  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;
