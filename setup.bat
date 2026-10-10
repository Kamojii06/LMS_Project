@echo off
echo ==========================================
echo    INITIALIZING LMS PROJECT
echo ==========================================

echo.
echo [1/4] Updating Git Submodule (Admin)...
git submodule update --init --recursive

echo.
echo [2/4] Installing dependencies with pnpm...
call pnpm install

echo.
echo [3/4] Checking .env configuration file...
if not exist .env (
if exist .env.example (
copy .env.example .env
echo [!] Created .env file from .env.example.
echo [!] PLEASE OPEN THE .env FILE AND FILL IN THE REAL KEYS BEFORE CONTINUING!
pause
) else (
echo [X] Could not find .env.example file.
)
) else (
echo [OK] .env file already exists.
)

echo.
echo [4/4] Setting up Prisma Database...
call pnpm prisma generate
call pnpm prisma db push

echo.
echo ==========================================
echo    SETUP COMPLETE!
echo ==========================================
echo Starting the development server...
call pnpm dev