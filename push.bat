@echo off
chcp 65001 >nul
echo ==========================================
echo    SYNCING ALL CHANGES TO GITHUB
echo ==========================================
echo.

set "msgfile=%TEMP%\lms_commit_msg.txt"

:readtitle
set "msg="
set /p msg="Enter commit title: "
if not defined msg goto readtitle
> "%msgfile%" echo %msg%
>> "%msgfile%" echo.

echo Enter commit description (one line at a time, press Enter on an empty line to finish):
:readdesc
set "line="
set /p line="> "
if not defined line goto donedesc
>> "%msgfile%" echo %line%
goto readdesc
:donedesc

echo.
echo [1/2] Committing and pushing Admin Submodule (Private Repo)...
cd app\admin
git add .
git commit -F "%msgfile%"
git push origin main
cd ..\..

echo.
echo [2/2] Committing and pushing Main Repository (Public Repo)...
git add .
git commit -F "%msgfile%"
git push origin main

del "%msgfile%"

echo.
echo ==========================================
echo    SUCCESS! ALL CHANGES HAVE BEEN PUSHED.
echo ==========================================
pause