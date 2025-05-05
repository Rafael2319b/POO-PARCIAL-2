const express = require('express');
const Cliente = require('./models/cliente');
require('dotenv').config();
require('./services/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/clientes', async (req, res) => {
  try {
    const { nombre, plan } = req.body;
    let credito_envios = 0;
    if (plan === '30 envíos') credito_envios = 30;
    else if (plan === '40 envíos') credito_envios = 40;
    else if (plan === '60 envíos') credito_envios = 60;
    else return res.status(400).json({ error: 'Plan no válido' });

    const cliente = new Cliente({ nombre, plan, credito_envios });
    await cliente.save();
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear cliente' });
  }
});

app.get('/clientes/:id/envios-disponibles', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json({ credito_envios: cliente.credito_envios });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los envíos disponibles' });
  }
});

 app.post('/clientes/:id/envios', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });

    let costoBase = 0;
    if (cliente.plan === '30 envíos') costoBase = 135 / 30;
    else if (cliente.plan === '40 envíos') costoBase = 160 / 40;
    else if (cliente.plan === '60 envíos') costoBase = 180 / 60;

    const { nombre, direccion, telefono, referencia, observacion, descripcion, peso, bultos, fecha_entrega } = req.body;
    const multiplicador = Math.ceil(peso / 3);
    const costo = costoBase * multiplicador;

    if (cliente.credito_envios <= 0) {
      return res.status(400).json({ error: 'No tiene crédito disponible' });
    }

    cliente.envios.push({
      nombre, direccion, telefono, referencia, observacion, descripcion, peso, bultos, fecha_entrega, costo
    });

    cliente.credito_envios -= 1;
    await cliente.save();

    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar el envío' });
  }
});

app.get('/clientes/:id/envios', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(cliente.envios);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los envíos' });
  }
});

app.delete('/clientes/:clienteId/envios/:envioId', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.clienteId);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });

    const envioIndex = cliente.envios.findIndex(envio => envio._id.toString() === req.params.envioId);
    if (envioIndex === -1) return res.status(404).json({ error: 'Envío no encontrado' });

    cliente.envios.splice(envioIndex, 1);
    cliente.credito_envios += 1;
    await cliente.save();

    res.json({ message: 'Envío eliminado y crédito reembolsado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el envío' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${port}`);
});