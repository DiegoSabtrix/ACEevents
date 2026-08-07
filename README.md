# ACE Events — Capacitación Empresarial Online

Landing page en español para los programas gratuitos de capacitación empresarial de ACE.

## Sitio publicado

https://ace-capital-coaching.diego681936.chatgpt.site

## Contenido incluido

- Hero y secciones orientadas a emprendedores y dueños de pequeños negocios
- Programa Financiero
- Programa de Marketing
- Selector para asistir a uno o ambos programas
- Formulario de registro en dos pasos
- Pantalla final de confirmación
- Sección de eventos pasados y presencia en la comunidad
- Logos de ACE y patrocinadores
- Avisos de privacidad, términos y disclaimer
- Diseño responsive para escritorio y dispositivos móviles

## Formulario

El flujo actual permite:

1. Reservar el cupo con nombre, correo, teléfono, código postal y programa.
2. Agregar información opcional del negocio.
3. Mostrar la confirmación del registro.

> Para guardar los leads y enviar realmente SMS y correos es necesario conectar el formulario con un webhook, CRM o plataforma de automatización.

## Desarrollo local

Requiere Node.js 22.13 o superior.

```bash
npm ci
npm run dev
```

Para validar la versión de producción:

```bash
npm run build
```

## Repositorio

El código principal se encuentra en `app/`. Los recursos visuales utilizados por la landing están en `public/`.
