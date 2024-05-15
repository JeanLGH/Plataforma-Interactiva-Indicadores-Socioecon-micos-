const express = require('express');
const cors = require('cors');
const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors());
const { client } = require('./db'); // Importa el cliente PostgreSQL


const port = 3001;

// Middleware para manejar errores
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
};

// Rutas
app.get('/afiliaciones', async (req, res, next) => {
  try {
    const result = await client.query('SELECT * FROM afiliaciones_salud2020_2022');
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/datos2022Poblacion', async (req, res, next) => {
  try {
    const result = await client.query(`
        SELECT "MunicipioAS", "Poblacion_DANE"
        FROM public.afiliaciones_salud2020_2022
        WHERE "Regimen" = 'Poblacion' AND "Año" = '1/12/2022'
      `);
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/total2022Poblacion', async (req, res, next) => {
  try {
    const result = await client.query(`
        SELECT SUM("Poblacion_DANE") AS total_poblacion
        FROM public.afiliaciones_salud2020_2022
        WHERE "Regimen" = 'Poblacion' AND "Año" = '1/12/2022'
      `);
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/piramidePoblacional', async (req, res, next) => {
  try {
    const result = await client.query(`
      SELECT grupo_edad, hombres_2022, mujeres_2022, municipio
	FROM public.piramide_poblacional
      `);
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/proyeccionHogares', async (req, res, next) => {
  try {
    const result = await client.query(`
    SELECT  "Nombre_Municipio", "Area", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035"
    FROM public.proyecciones_de_hogares_2018_2035
      `);
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
});


// Ruta de prueba
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

// Middleware de error
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});