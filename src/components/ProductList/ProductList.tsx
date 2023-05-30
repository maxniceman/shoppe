import Grid from "@mui/material/Unstable_Grid2";
import ProductItem from "../ProductItem/ProductItem";

interface IProducts {
  products: IProduct[];
}

interface IProduct {
  id: number;
  name: string;
  price: string | number;
  img: string;
}

const ProductList = ({ products }: IProducts) => {
  return (
    <div>
      <Grid container spacing={7}>
        {products.map((p: IProduct) => (
          <Grid key={p.id} xs={4}>
            <ProductItem name={p.name} price={p.price} img={p.img} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
