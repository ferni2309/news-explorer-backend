# News Explorer Backend

Esta es la API de **News Explorer**, un servicio que permite a los usuarios buscar, guardar y gestionar artículos de noticias. El backend está construido con **Node.js**, **Express** y **MongoDB**, siguiendo las mejores prácticas de seguridad y validación.

## Características

- **Autenticación y Autorización:** Registro e inicio de sesión seguros mediante `bcryptjs` para el hash de contraseñas y `jsonwebtoken` (JWT) para la gestión de sesiones.
- **Gestión de Artículos:** Los usuarios pueden guardar sus noticias favoritas, listarlas y eliminarlas.
- **Validación Robusta:** Uso de `celebrate` y `Joi` para validar cada solicitud antes de que llegue a los controladores.
- **Manejo de Errores Centralizado:** Clases de error personalizadas (400, 401, 403, 404, 409) para respuestas consistentes.
- **Logging:** Registro de solicitudes y errores mediante `winston`.

## Tecnologías

- Node.js & Express
- MongoDB & Mongoose
- Celebrate / Joi (Validación)
- Winston (Logging)
- ESLint (Configuración Airbnb)

## Instalación y Uso

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Configura tu archivo `.env` con:
   - `PORT`
   - `JWT_SECRET`
   - `NODE_ENV`

3. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

## Rutas Principales

### Públicas
- `POST /signup`: Registro de nuevo usuario.
- `POST /signin`: Inicio de sesión.

### Protegidas (Requieren JWT)
- `GET /users/me`: Obtener datos del usuario actual.
- `GET /articles`: Listar artículos guardados por el usuario.
- `POST /articles`: Guardar un nuevo artículo.
- `DELETE /articles/:articleId`: Eliminar un artículo guardado.
