#!/bin/bash
# 一键启动：Vite前端 + 内网穿透
# 访问 https://<tunnel-url> 即可

echo "=== 启动 Vite 开发服务器 ==="
cmd.exe /c "start /b npx vite --host 0.0.0.0" &
sleep 4

echo ""
echo "=== 启动内网穿透隧道 ==="
echo "公网地址将在下方显示..."
echo "按 Ctrl+C 停止所有服务"
echo ""

# Ctrl+C 时关闭所有子进程
trap 'echo "正在关闭..."; kill 0; exit 0' INT TERM

ssh -F /dev/null -o StrictHostKeyChecking=no -o ServerAliveInterval=30 \
    -R 80:localhost:5173 localhost.run
