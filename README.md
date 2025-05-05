# POSTMAIL - API para Gestión de Envíos

Este proyecto consiste en una API para la gestión de envíos de la empresa POSTMAIL. Permite crear clientes, asignarles planes con créditos de envíos, registrar envíos, consultar envíos disponibles y eliminar envíos devolviendo créditos. Utiliza **MongoDB** como base de datos y **Express.js** como servidor backend.

## Endpoints de la API

### 1. Crear un cliente con plan de envíos

- **Método:** POST  
- **Ruta:** `/clientes`  
- **Descripción:** Crea un nuevo cliente asignándole créditos según el plan.

**Planes disponibles:**
- `30 envíos` → 30 créditos
- `40 envíos` → 40 créditos
- `60 envíos` → 60 créditos

**Ejemplo JSON del cuerpo:**
```json
{
  "nombre": "Rafael Vásquez",
  "plan": "30 envíos"
}

{
  "_id": "cliente_id",
  "nombre": "Rafael Vásquez",
  "plan": "30 envíos",
  "credito_envios": 30,
  "envios": []
}

### 2. Ver créditos de un usuario

- **Método:** GET  
- **Ruta:** `/credito/:id`  
- **Descripción:** Verifica los créditos disponibles del usuario.

**Respuesta esperada:**
```json
{
  "credito_envios": 30
}

### 3. Registrar un nuevo envío

- **Método:** POST  
- **Ruta:** `/clientes/:id/envios`  
- **Descripción:** Registra un nuevo envío para el cliente y descuenta 1 crédito.

**Ejemplo JSON del cuerpo:**
```json
{
  "nombre": "Rafael Vásquez",
  "direccion": "Calle 123",
  "telefono": "7182-9499",
  "referencia": "Casa color Negro",
  "observacion": "Entregar viernes",
  "descripcion": "Tenis",
  "peso": 2,
  "bultos": 1,
  "fecha_entrega": "2025-05-29"
}

{
  "_id": "cliente_id",
  "nombre": "Rafael Vásquez",
  "plan": "30 envíos",
  "credito_envios": 29,
  "envios": [
    {
      "nombre": "Rafael Vásquez",
      "direccion": "Calle 123",
      "telefono": "7182-9499",
      "referencia": "Casa color Negro",
      "observacion": "Entregar viernes",
      "descripcion": "Tenis",
      "peso": 2,
      "bultos": 1,
      "fecha_entrega": "2025-05-29"
    }
  ]
}
### 4. Consultar todos los envíos de un cliente

- **Método:** GET  
- **Ruta:** `/clientes/:id/envios`  
- **Descripción:** Consulta todos los envíos registrados de un cliente.

**Respuesta esperada:**
```json
[
  {
    "nombre": "Rafael Vásquez",
    "direccion": "Calle 123",
    "telefono": "7182-9499",
    "referencia": "Casa color Negro",
    "observacion": "Entregar viernes",
    "descripcion": "Tenis",
    "peso": 2,
    "bultos": 1,
    "fecha_entrega": "2025-05-29"
  }
]
### 5. Eliminar un envío y reembolsar crédito

- **Método:** DELETE  
- **Ruta:** `/clientes/:clienteId/envios/:envioId`  
- **Descripción:** Elimina un envío registrado y devuelve 1 crédito al cliente.

**Respuesta esperada:**
```json
{
  "message": "Envío eliminado y crédito reembolsado"
}

## ¿Cómo ejecutar el proyecto?

1. **Clona este repositorio:**
   
   Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio:

   ```bash
   git clone https://github.com/Rafael2319b/POO-PARCIAL-2

Instala las dependencias:

Una vez clonado el repositorio, navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

bash
Copiar
Editar
npm install
Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto y agrega tus credenciales de MongoDB y cualquier otra configuración que necesite tu aplicación. Ejemplo:

env
Copiar
Editar
MONGO_URI=mongodb://localhost:27017/postmail
PORT=5000
Ejecuta el servidor:

Para iniciar el servidor, ejecuta el siguiente comando en la terminal:

bash
Copiar
Editar
npm start
Prueba la API:

Puedes usar herramientas como Postman o Insomnia para realizar pruebas con los endpoints descritos arriba.

Tecnologías utilizadas
Node.js

Express.js

MongoDB

Mongoose

Autor
Rafael Alexander Vásquez Hernández






