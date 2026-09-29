@echo off
title Nusantara Bangkit - Localhost Server
echo ==========================================================
echo   Nusantara Bangkit - Menjalankan di Localhost...
echo   Membuka peramban di http://localhost:8080
echo ==========================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
