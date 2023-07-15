import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import categoryApi from '../../api/categoryApi';
import HeadingTags from '../HeadingTags';
import Loading from '../Loading';
import Product from './product/Product';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
}));

function Products() {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [filters, setFilters] = useState({
    _limit: 12,
    _start: 0,
  });
  const [categoryTags, setCategoryTags] = useState({
    title: 'Furniture',
    limit: 12,
    start: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, category } = await categoryApi.get(filters);
        const featuresProducts = data[0].products;
        setProductList(featuresProducts);
        setCategoryTags(category);
      } catch (error) {
        console.log('fail to load data', error);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handleCategoryChange = (newTags) => {
    setFilters((prevTags) => ({
      ...prevTags,
      _title: newTags,
    }));
  };

  return (
    <main className={classes.root}>
      <HeadingTags
        categoryTags={categoryTags.title}
        onChange={handleCategoryChange}
      />
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={4}>
          {productList.map((product) => (
            <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </main>
  );
}

export default Products;
