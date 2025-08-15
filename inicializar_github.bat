@echo off
echo ========================================
echo   Inicializando Repositorio Git
echo   para GitHub Pages
echo ========================================
echo.

echo 🚀 Inicializando repositorio Git...
git init

echo.
echo 📝 Agregando archivos al repositorio...
git add .

echo.
echo 💾 Haciendo primer commit...
git commit -m "🎉 Initial commit: Mapa Mental Interactivo de IA"

echo.
echo ========================================
echo   ✅ Repositorio Git inicializado!
echo ========================================
echo.
echo 📋 Próximos pasos:
echo.
echo 1. 🌐 Ve a github.com y crea un nuevo repositorio
echo    - Nombre: mapa-mental-ia
echo    - Descripción: Mapa Mental Interactivo de Inteligencia Artificial
echo    - NO inicialices con README, .gitignore o licencia
echo.
echo 2. 🔗 Conecta tu repositorio local:
echo    git remote add origin https://github.com/TUUSUARIO/mapa-mental-ia.git
echo.
echo 3. 📤 Sube el código:
echo    git branch -M main
echo    git push -u origin main
echo.
echo 4. ⚙️ Activa GitHub Pages:
echo    - Ve a Settings > Pages
echo    - Source: Deploy from a branch
echo    - Branch: main
echo.
echo 5. 🌍 Tu mapa mental estará disponible en:
echo    https://TUUSUARIO.github.io/mapa-mental-ia
echo.
echo ========================================
echo   🎯 ¡Listo para compartir con tu equipo!
echo ========================================
echo.
pause
