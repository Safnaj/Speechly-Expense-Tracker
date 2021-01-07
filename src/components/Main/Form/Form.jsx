import React, { useState, useContext } from "react";
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from "./styles";
import { incomeCategories, expenseCategories } from "../../../constants/categories";
import formatDate from "../../../utils/formatDate";

const initialState = {
  amount: '',
  category: '',
  type: 'income',
  date: formatDate(new Date()),
}

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }

    addTransaction(transaction);
    setFormData(initialState);
  }

  //console.log(formData);

  //Cateogry Selection based on the selected category
  const selectedCategory = formData.type === 'income' ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle1' gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value='income'>Income</MenuItem>
            <MenuItem value='expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategory.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type='number' label='Amount' fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
      </Grid>
      <Grid item xs={6}>
        <TextField type='date' label='date' fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
      </Grid>
      <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTransaction}>
        Create
      </Button>
    </Grid>
  );
};

export default Form;
