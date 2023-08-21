import { FixedSizeGrid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useEffect, useState } from "react";

import GridMaterial from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import { Product, ViewType } from "../types";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../../components/Spinner/Spinner";
import ErrorPanel from "../../components/ErrorPanel/ErrorPanel";
import ProductItem from "./ProductItem/ProductItem";
import { BACKEND_BASE_URL, PRODUCTS_PATH } from "../../constants";
import { getScreenWidth, getDeviceViewSize, toMatrix } from "../../helpers";

import styles from "./ShopPage.module.scss";

const ShopPage = () => {
  const limit = 6;
  const responsiveHeightRatio = 1.05;
  let ignore = false;

  const [products, setProducts] = useState<Product[][]>([]);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [page, setPage] = useState(1);
  const [columnCount, setColumnCount] = useState(3);
  const [columnWidth, setColumnWidth] = useState(394);
  const [rowHeight, setRowHeight] = useState(420);

  const { isLoading, response, error, fetchData } = useFetch(
    `${BACKEND_BASE_URL}${PRODUCTS_PATH}`
  );

  useEffect(() => {
    if (response !== null && response?.length) {
      const productsMatrix = toMatrix(response, columnCount);
      setProducts([...products, ...productsMatrix]);
      setHasMoreProducts(true);
    } else {
      setHasMoreProducts(false);
    }
  }, [response]);

  useEffect(() => {
    const screenWidth: number = getScreenWidth();
    const deviseSize = getDeviceViewSize(screenWidth);
    switch (deviseSize) {
      case ViewType.Mobile: {
        setColumnCount(1);
        setColumnWidth(screenWidth);
        setRowHeight(Math.floor(screenWidth * responsiveHeightRatio));
        break;
      }
      case ViewType.Tablet: {
        setColumnCount(2);
        setColumnWidth(Math.floor(screenWidth / 2));
        setRowHeight(Math.floor((screenWidth / 2) * responsiveHeightRatio));
        break;
      }
      case ViewType.Screen: {
        setColumnCount(3);
        setColumnWidth(Math.floor(screenWidth / 3));
        setRowHeight(Math.floor((screenWidth / 3) * responsiveHeightRatio));
        break;
      }
    }
    if (!ignore) fetchData({ page, limit });

    return () => {
      ignore = true;
    };
  }, [page]);

  const onLoadMore = () => {
    setPage((page) => page + 1);
  };

  const Grid = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: {};
  }) => {
    const product = products[rowIndex][columnIndex];

    return (
      <div style={style}>
        {product ? <ProductItem key={product.id} {...product} /> : null}
      </div>
    );
  };

  if (error) return <ErrorPanel error={error["message"]} />;

  return (
    <div className={styles.autosizer}>
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <FixedSizeGrid
            columnCount={columnCount}
            rowCount={products.length}
            columnWidth={columnWidth}
            rowHeight={rowHeight}
            height={height}
            width={width}
          >
            {Grid}
          </FixedSizeGrid>
        )}
      </AutoSizer>
      {isLoading && <Spinner />}
      <GridMaterial container className={styles.loadMore}>
        <GridMaterial
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="outlined"
            disabled={isLoading || !hasMoreProducts}
            onClick={onLoadMore}
          >
            Load more
          </Button>
        </GridMaterial>
      </GridMaterial>
    </div>
  );
};

export default ShopPage;
