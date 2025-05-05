# POSTMAIL - API para Gestión de Envíos

Este proyecto consiste en una API para la gestión de envíos de la empresa POSTMAIL. Permite crear clientes, asignarles planes con créditos de envíos, registrar envíos, consultar envíos disponibles y eliminar envíos devolviendo créditos. Utiliza **MongoDB** como base de datos y **Express.js** como servidor backend.

## Endpoints de la API

---

### 1. Crear un cliente con plan de envíos

- **Método:** POST  
- **Ruta:** `/clientes`  
- **Descripción:** Crea un nuevo cliente asignándole créditos según el plan.

Planes disponibles:
- `30 envíos` → 30 créditos
- `40 envíos` → 40 créditos
- `60 envíos` → 60 créditos

**Ejemplo JSON del cuerpo:**
```json
{
  "nombre": "Rafael Vásquez",
  "plan": "30 envíos",
  "credito_envios": 30
}

```

**Respuesta esperada:**
```json
{
  "_id": "clienteId",
  "nombre": "Rafael Vásquez",
  "plan": "30 envíos",
  "credito_envios": 30,
  "envios": []
}

```
### 2.Ver créditos de un usuario
- **Método:** `GET`  
- **Ruta:** `/clientes/:id/envios-disponibles`  
- **Descripción:** Verifica los créditos disponibles del usuario.

**Respuesta esperada:**
```json
{
  "credito_envios": 30
}

```

---

### 3. Registrar un nuevo envío
- **Método:** `POST`  
- **Ruta:** `/clientes/:id/envios`  
- **Descripción:** Registra un nuevo envío para un usuario, asignando el producto y los detalles del envío.

**Ejemplo de cuerpo (JSON):**
```json
{
  "nombre": "Rafael Vásquez",
  "direccion": "Calle Falsa 123",
  "telefono": "123456789",
  "referencia": "Casa con portón rojo",
  "observacion": "Entregar de lunes a viernes",
  "descripcion": "Paquete con documentos",
  "peso": 4,
  "bultos": 1,
  "fecha_entrega": "2025-05-10T10:00:00Z"
}

```
**Respuesta esperada:**
```json
{
  "descripcion": "Paquete con documentos",
      "peso": 4,
      "bultos": 1,
      "fecha_entrega": "2025-05-10T10:00:00.000Z",
      "nombre": "Rafael Vásquez",
      "direccion": "Calle Falsa 123",
      "telefono": "123456789",
      "referencia": "Casa con portón rojo",
      "observacion": "Entregar de lunes a viernes",
      "costo": 9,
      "_id": "68186f2bdb5868011e793b4e"
},
```

---

### 4. Consultar todos los envíos de un usuario
- **Método:** `GET`  
- **Ruta:** `/clientes/:id/envios`  
- **Descripción:** Consulta todos los envíos registrados de un usuario.

**Respuesta esperada:**
```json
{
  "envios": [
    {
    "descripcion": "Paquete con documentos",
    "peso": 4,
    "bultos": 1,
    "fecha_entrega": "2025-05-10T10:00:00.000Z",
    "nombre": "Rafael Vásquez",
    "direccion": "Calle Falsa 123",
    "telefono": "123456789",
    "referencia": "Casa con portón rojo",
    "observacion": "Entregar de lunes a viernes",
    "costo": 9,
    "_id": "68186f2bdb5868011e793b4e"
    }
  ]
}
```

---

### 5. Eliminar un envío y devolver créditos
- **Método:** `DELETE`  
- **Ruta:** `/clientes/:clienteId/envios/:envioId`  
- **Descripción:** Elimina un envío registrado y devuelve los créditos al usuario.

**Respuesta esperada:**
```json
{
  "message": "Envío eliminado y crédito reembolsado"
}
```

---
## ¿Cómo ejecutar el proyecto?

1. Clona este repositorio:
```bash
git clone https://github.com/Rafael2319b/POO-PARCIAL-2
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
Crea un archivo llamado `.env` en la raíz del proyecto y agrega ahí la conexión a tu base de datos MongoDB y otras configuraciones necesarias.  

4. Ejecuta el servidor:
```bash
npm start
```

5. Prueba la API:
Puedes usar herramientas como Postman o Insomnia para hacer pruebas con los endpoints descritos arriba.

---

## Tecnologías utilizadas

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

---

## Autor

**Rafael Alexander Vásquez Hernández**







