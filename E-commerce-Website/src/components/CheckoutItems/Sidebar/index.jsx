import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import Item from './Item';
import useStyles from './styles';

const TAX_RATE = 0.03;

function ccyFormat(num) {
  return `${parseInt(num).toFixed(2)}`;
}

const Sidebar = ({ productItems, total }) => {
  const classes = useStyles();

  const invoiceTaxes = TAX_RATE * total;
  const invoiceTotal = invoiceTaxes + total;
  return (
    <div className={classes.root}>
      <TableContainer>
        <Table aria-label="spanning table">
          <TableHead></TableHead>
          <TableBody>
            {productItems.map((item, index) => (
              <Item key={index} item={item} />
            ))}
            <TableRow className={clsx(classes.subtotal, classes.row)}>
              <TableCell colSpan={2} className={classes.title}>
                Subtotal
              </TableCell>
              <TableCell align="right">${ccyFormat(total)}</TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell colSpan={2} className={classes.title}>
                Shipping
              </TableCell>
              <TableCell align="right" className={classes.shipping}>
                Free Shipping
              </TableCell>
            </TableRow>
            <TableRow className={classes.tax}>
              <TableCell colSpan={2} className={classes.title}>
                Taxes (estimated)
              </TableCell>
              <TableCell align="right">${ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell colSpan={2} className={classes.total}>
                Total
              </TableCell>
              <TableCell align="right" className={classes.payment}>
                <span className={classes.currency}>USD</span>$
                {ccyFormat(invoiceTotal)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Sidebar;
