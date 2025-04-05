@echo off

:: รัน Chrome ในโหมด Kiosk
start chrome --kiosk "http://localhost:3000/order"

:: รัน Node.js server
node index.js

:: รอให้คำสั่งทำงานเสร็จ
pause
