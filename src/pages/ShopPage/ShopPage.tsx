import { useEffect, useState } from "react";
import ProductList from "./ProductList/ProductList";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import { Product } from "../types";
import Spinner from "../../components/Spinner/Spinner";
import { useFetch } from "../../hooks/useFetch";
import { BACKEND_BASE_URL, PRODUCTS_PATH } from "../../constants";
import ErrorPanel from "../../components/ErrorPanel/ErrorPanel";

const limit = 10;

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [page, setPage] = useState(1);

  const { isLoading, response, error, fetchData } = useFetch(
    `${BACKEND_BASE_URL}${PRODUCTS_PATH}`
  );

  let ignore = false;
  useEffect(() => {
    if (response !== null && response?.length) {
      setProducts([...products, ...response]);
      setHasMoreProducts(true);
    } else {
      setHasMoreProducts(false);
    }
  }, [response]);

  useEffect(() => {
    if (!ignore) fetchData({ page, limit });
    return () => {
      ignore = true;
    };
  }, [page]);

  const onLoadMore = () => {
    setPage((page) => page + 1);
  };

  if (error) return <ErrorPanel error={error["message"]} />;

  return (
    <>
      <ProductList products={products} />
      {isLoading && <Spinner />}
      {hasMoreProducts && (
        <Grid container>
          <Grid
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="outlined"
              disabled={isLoading}
              onClick={onLoadMore}
            >
              Load more
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ShopPage;
