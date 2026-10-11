## Setup Guide

To streamline the onboarding process, we have provided an automated configuration script. If your system does not currently have Node.js or `pnpm` installed, please open PowerShell in your designated workspace directory, copy the entire code block below, paste it into the terminal, and press Enter:

```powershell
# 1. Clone the main repository and the private admin submodule
git clone --recursive https://github.com/Kamojii06/LMS_Project.git
cd LMS_Project

# 2. Navigate to the admin submodule and checkout the main branch
cd app/admin
git checkout main
cd ../..

# 3. Install Node.js automatically via Windows Package Manager
winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements

# 4. Refresh current environment variables to recognize Node.js
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# 5. Install pnpm globally and execute the project setup script
npm install -g pnpm
.\setup.bat
```

## Coding

```powershell
git pull --recurse-submodules
pnpm install
pnpm run dev
```

## Commiting

To ensure changes are correctly synchronized across both the main public repository and the private admin submodule, we use an automated script. 

Whenever you are ready to save and push your work, simply run the following command in the root directory (or double-click the file):

```powershell
.\push.bat
```

The script will prompt you for a commit message and automatically handle the process of pushing changes to both the private `app/admin` submodule and the main public repository in the correct order. Do not commit manually to avoid "detached HEAD" or desync issues between the two repositories.