# Proyecto POSTMAIL - API para Gestión de Envíos

Esta API permite:

✅ Registrar clientes con planes de envíos  
✅ Consultar cuántos envíos disponibles tiene un cliente  
✅ Registrar un envío (y descontar crédito)  
✅ Listar todos los envíos de un cliente  
✅ Eliminar un envío (y devolver crédito)

Tecnologías: **Node.js, Express.js, MongoDB, Mongoose**

---

## 🚀 Endpoints de la API

---

### 1️⃣ Crear cliente con plan de envíos

- **Método:** POST  
- **Ruta:** `/clientes`  
- **Descripción:** Crea un cliente asignándole crédito según el plan elegido.

Planes válidos: `"30 envíos"`, `"40 envíos"`, `"60 envíos"`

**Ejemplo `curl`:**

```bash
curl -X POST http://localhost:3000/clientes \
-H "Content-Type: application/json" \
-d '{"nombre": "Juan Pérez", "plan": "30 envíos"}'


