import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';

export const ContactForm = ({ handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number };

    handleAddContact(newContact);

    setName('');
    setNumber('');
  };

  const handleChangeInput = e => {
    const { value, name } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <Paper elevation={3} component={'form'} onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            label="Name"
            value={name}
            onChange={handleChangeInput}
            type="text"
            name="name"
            required
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="Number"
            value={number}
            onChange={handleChangeInput}
            type="tel"
            name="number"
            required
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Add contact
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
