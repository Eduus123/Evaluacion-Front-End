# Evaluación Sumativa N°02 - Front End

## Cómo verlo funcionando

1. Abrir el archivo `sign-in.html` en el navegador.
2. Ingresar las credenciales de prueba:
   - Usuario: `admin`
   - Contraseña: `1234`
3. Si son correctas, se redirigira a `dashboard.html`.

## Estructura del proyecto

```
├── sign-in.html      
├── dashboard.html    
├── css/
│   └── styles.css
├── js/
│   ├── login.js      
│   └── dashboard.js  
└── img/              
```

## Funcionalidades

**Login:**
- Valida usuario y contraseña guardados en memoria.
- Muestra alert de Bootstrap si hay campos vacíos o datos incorrectos.
- Permite iniciar sesión con Enter o con el botón.

**Dashboard:**
- Botón que va disminuyendo un contador desde 15.
- Card que cambia de color e información según el rango del contador (normal, warning, danger).
- Al llegar a 0, el contador reinicia a 15.
