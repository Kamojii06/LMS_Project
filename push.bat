@echo off
echo ==========================================
echo    SYNCING ALL CHANGES TO GITHUB
echo ==========================================
echo.

set /p msg="Enter commit message: "

echo.
echo [1/2] Committing and pushing Admin Submodule (Private Repo)...
cd app\admin
git add .
git commit -m "%msg%"
git push origin main
cd ..\..

echo.
echo [2/2] Committing and pushing Main Repository (Public Repo)...
git add .
git commit -m "%msg%"
git push origin main

echo.
echo ==========================================
echo    SUCCESS! ALL CHANGES HAVE BEEN PUSHED.
echo ==========================================
pause