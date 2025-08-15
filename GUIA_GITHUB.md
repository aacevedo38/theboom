# 🌐 Guía Visual para GitHub Pages

## 🚀 **Paso a Paso Completo para GitHub**

### **Paso 1: Crear Cuenta en GitHub**
1. Ve a [github.com](https://github.com)
2. Haz clic en "Sign up"
3. Completa tu información y crea tu cuenta

### **Paso 2: Crear Nuevo Repositorio**
1. Haz clic en el botón **"+"** en la esquina superior derecha
2. Selecciona **"New repository"**
3. Completa la información:
   - **Repository name**: `mapa-mental-ia`
   - **Description**: `Mapa Mental Interactivo de Inteligencia Artificial`
   - **Visibility**: `Public` (recomendado)
   - **NO marques** "Add a README file"
   - **NO marques** "Add .gitignore"
   - **NO marques** "Choose a license"
4. Haz clic en **"Create repository"**

### **Paso 3: Preparar tu Repositorio Local**
1. **Ejecuta** el script `inicializar_github.bat`
2. **Se inicializará** Git automáticamente
3. **Se hará** el primer commit

### **Paso 4: Conectar con GitHub**
En tu terminal, ejecuta estos comandos (reemplaza `TUUSUARIO` con tu nombre de usuario):

```bash
git remote add origin https://github.com/TUUSUARIO/mapa-mental-ia.git
git branch -M main
git push -u origin main
```

### **Paso 5: Activar GitHub Pages**
1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (pestaña)
3. En el menú izquierdo, haz clic en **"Pages"**
4. En **"Source"**, selecciona **"Deploy from a branch"**
5. En **"Branch"**, selecciona **"main"**
6. Haz clic en **"Save"**

### **Paso 6: Esperar el Despliegue**
- GitHub Actions se ejecutará automáticamente
- Verás un check verde cuando esté listo
- Tu mapa mental estará disponible en: `https://TUUSUARIO.github.io/mapa-mental-ia`

## 📧 **Email para Compartir con tu Equipo**

**Asunto:** 🧠 Mapa Mental de IA - Disponible Online

**Cuerpo:**
```
Hola equipo,

He subido el Mapa Mental Interactivo de IA a GitHub Pages 
para que sea más fácil de acceder.

🌐 **Enlace directo:**
https://TUUSUARIO.github.io/mapa-mental-ia

✨ **Ventajas de la versión online:**
- ✅ No hay que descargar archivos
- ✅ Funciona en cualquier dispositivo
- ✅ Siempre actualizado
- ✅ Accesible desde cualquier lugar
- ✅ No requiere instalación

🚀 **Para usarlo:**
1. Abre el enlace en tu navegador
2. Explora haciendo clic en los diferentes conceptos
3. Lee la información detallada en el panel derecho

¿Te parece útil? ¿Sugerencias para mejorarlo?

Saludos,
[Tu Nombre]
```

## 🔧 **Comandos Git Útiles**

### **Para futuras actualizaciones:**
```bash
# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push origin main
```

### **Para ver el estado:**
```bash
# Ver archivos modificados
git status

# Ver historial de commits
git log --oneline
```

## 🎯 **Ventajas de GitHub Pages**

✅ **URL permanente** que nunca cambia  
✅ **Acceso desde cualquier lugar** con internet  
✅ **No requiere descarga** de archivos  
✅ **Siempre actualizado** automáticamente  
✅ **Profesional** para presentar a clientes  
✅ **Fácil de compartir** en redes sociales  
✅ **Métricas de uso** disponibles  

## 🚨 **Solución de Problemas Comunes**

### **Error: "Repository not found"**
- Verifica que el nombre del repositorio sea exacto
- Asegúrate de que el repositorio sea público

### **Error: "Permission denied"**
- Verifica que estés usando tu nombre de usuario correcto
- Asegúrate de que hayas creado el repositorio

### **GitHub Pages no funciona**
- Espera unos minutos después de activarlo
- Verifica que hayas seleccionado la rama `main`
- Revisa la pestaña "Actions" para ver si hay errores

## 🎉 **¡Listo para Compartir!**

Una vez que GitHub Pages esté activo, podrás:

1. **Compartir el enlace** directamente con tu equipo
2. **Presentarlo** en reuniones sin problemas técnicos
3. **Usarlo** como material de capacitación
4. **Referenciarlo** en documentos y presentaciones
5. **Mostrarlo** a clientes y stakeholders

---

**¡Tu mapa mental ahora es accesible globalmente! 🌍**
