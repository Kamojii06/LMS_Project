## 🚀 Automated Setup Guide [FOR TEAM MEMBERS]

To streamline the onboarding process, we have provided an automated configuration script. If your system does not currently have Node.js or `pnpm` installed, please open **PowerShell (Run as Administrator)** in your designated workspace directory, copy the entire code block below, paste it into the terminal, and press Enter:

```powershell
# 1. Clone the main repository and the private admin submodule
git clone --recursive [https://github.com/Kamojii06/LMS_Project.git](https://github.com/Kamojii06/LMS_Project.git)
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