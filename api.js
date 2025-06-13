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


app.get('/v1/genealogy', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM dbo.Genealogy_Mst');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});



app.get('/v1/incentive', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM dbo.Incentive_Trn');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});





app.get('/v1/genealogy', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM dbo.Genealogy_Mst');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});


app.get('/v1/offerachiever', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM dbo.AchieversListAward_Dtls');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});


app.get('/v1/customer/:memid', async (req, res) => {
  try {
    const memid = req.params.memid;
    const result = await sql.query`SELECT * FROM dbo.Customer WHERE Id = ${memid}`;
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.get('/v1/customeraddress_map/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await sql.query`SELECT * FROM dbo.CustomerAddresses WHERE Customer_Id = ${id}`;
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.get('/v1/customeraddress/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await sql.query`SELECT * FROM dbo.Address WHERE Id = ${id}`;
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});


app.get('/v1/customerpassword/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await sql.query`SELECT * FROM dbo.CustomerPassword WHERE CustomerId = ${id}`;
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});



app.get('/v1/userroles/', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await sql.query`SELECT * FROM dbo.CustomerRole`;
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});



app.get('/v1/scrap/', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await sql.query`SELECT TOP (40) * FROM dbo.CustomerSubscription`;
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});



module.exports = app;