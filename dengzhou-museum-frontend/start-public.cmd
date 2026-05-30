@echo off
echo === 启动 Vite 开发服务器 ===
start "" /b npx vite --host 0.0.0.0 --port 5173
REM 等待 vite 启动
ping -n 5 127.0.0.1 >nul

echo.
echo === 启动内网穿透隧道 ===
echo 公网地址将在下方显示...
echo 按 Ctrl+C 停止所有服务
echo.

ssh -F /dev/null -o StrictHostKeyChecking=no -o ServerAliveInterval=30 -R 80:localhost:5173 localhost.run
