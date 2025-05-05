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
  "plan": "30 envíos"
}

Respuesta esperada:
{
  "_id": "cliente_id",
  "nombre": "Rafael Vásquez",
  "plan": "30 envíos",
  "credito_envios": 30,
  "envios": []
}

2. Ver envíos disponibles (créditos) de un cliente
Método: GET

Ruta: /clientes/:id/envios-disponibles

Descripción: Consulta los créditos (envíos) disponibles de un cliente.

Respuesta esperada:

json
Copiar
Editar
{
  "credito_envios": 30
}
3. Registrar un nuevo envío
Método: POST

Ruta: /clientes/:id/envios

Descripción: Registra un nuevo envío para el cliente y descuenta 1 crédito.

Ejemplo JSON del cuerpo:

json
Copiar
Editar
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
Respuesta esperada (cliente actualizado):

json
Copiar
Editar
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
4. Consultar todos los envíos de un cliente
Método: GET

Ruta: /clientes/:id/envios

Descripción: Consulta todos los envíos registrados de un cliente.

Respuesta esperada:

json
Copiar
Editar
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
5. Eliminar un envío y reembolsar crédito
Método: DELETE

Ruta: /clientes/:clienteId/envios/:envioId

Descripción: Elimina un envío registrado y devuelve 1 crédito al cliente.

Respuesta esperada:

json
Copiar
Editar
{
  "message": "Envío eliminado y crédito reembolsado"
}




