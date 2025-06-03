const express = require('express');
const { sql, connectToDb } = require('./db');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

connectToDb();

app.get('/v1/products', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM dbo.Product');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});


app.get('/v1/productspic', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM dbo.Product_Picture_Mapping');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});


app.get('/v1/pics', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM dbo.Picture');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.get('/v1/category', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM dbo.Category');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.get('/v1/categoryimg', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM dbo.Category_Picture_Mapping');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

module.exports = app;