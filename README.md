# Librería de APIs

Una aplicación web desarrollada para gestionar y visualizar una biblioteca digital de documentos PDF mediante una arquitectura **Frontend + Backend**, integrando autenticación con Google y servicios de Firebase.

## Descripción

Este proyecto permite a los usuarios acceder a una biblioteca digital de archivos PDF desde una interfaz moderna y sencilla. La aplicación implementa autenticación mediante Google OAuth para verificar la identidad de los usuarios antes de acceder al contenido.

El sistema está dividido en dos partes:

- **Frontend:** desarrollado con Vue 3 y Vite.
- **Backend:** desarrollado con Node.js y Express, encargado de la autenticación y de proporcionar la información de los documentos.

---

## Funcionalidades

- Inicio de sesión con Google.
- Visualización de una biblioteca de documentos PDF.
- Vista individual de cada PDF.
- Organización de documentos mediante componentes reutilizables.
- Comunicación entre Frontend y Backend mediante API REST.
- Integración con Firebase.

---

## Tecnologías utilizadas

### Frontend

- Vue 3
- Vite
- Vue Router
- Firebase
- Vue3 Google Login

### Backend

- Node.js
- Express
- Firebase Admin SDK
- Google Auth Library
- CORS

---

## Estructura del proyecto

```text
Libreria-APIs
│
├── Backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── firebase
│   ├── data
│   └── server.js
│
└── libreria-project
    ├── src
    │   ├── components
    │   ├── views
    │   ├── router
    │   └── firebase
    └── package.json
```

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/Libreria-APIs.git
```

### 2. Instalar dependencias

#### Backend

```bash
cd Backend
npm install
```

#### Frontend

```bash
cd libreria-project
npm install
```

### 3. Ejecutar el Backend

```bash
npm run dev
```

o

```bash
npm start
```

Servidor por defecto:

```text
http://localhost:3000
```

### 4. Ejecutar el Frontend

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173
```

---

## Autenticación

La aplicación utiliza **Google OAuth** para verificar la identidad de los usuarios.

Una vez autenticado:

- Se valida el token de Google en el servidor.
- Se obtiene la información del usuario.
- Se permite el acceso a la biblioteca digital.

---

## API

### Obtener PDFs

```http
GET /pdfs
```

Obtiene la lista de documentos disponibles.

### Autenticación

```http
POST /api/auth/google
```

Verifica el token generado por Google y devuelve la información del usuario autenticado.

---

## Objetivo del proyecto

El propósito de este proyecto es demostrar la integración de diferentes APIs y servicios modernos para el desarrollo de aplicaciones web, incluyendo:

- Autenticación mediante Google.
- Consumo de APIs REST.
- Integración con Firebase.
- Desarrollo Full Stack utilizando Vue y Node.js.

---

## Autores

- Vania Nuñez Ochoa
- Yorhel Hiram Esparza Heredia
- Danna Riccombeni Gaytán
  
Este proyecto fue desarrollado como practica académica para la integración de APIs y tecnologías web modernas.
