## Zephyr Cloud

**Description:**

Zephyr Cloud is a powerful application designed for managing cloud resources efficiently. This Electron-based application provides a user-friendly interface for interacting with cloud services.

**Prerequisites:**

* **Node.js and npm:** Ensure Node.js and npm are installed on your machine. You can download them from the official Node.js website.

**Installation:**

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/zephyr-cloud.git
   ```

2. Navigate to the project directory:

   ```bash
   cd zephyr-cloud
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

**Building the Application:**

**Building for Windows:**

```bash
npm run dist
```

This command will build the application for Windows and create an installer in the `dist` directory.

**Building for macOS:**

```bash
npm run build:mac
```

**Note:** This assumes you have added the following script to your `package.json` file:

```json
"scripts": {
  // ... other scripts
  "build:mac": "electron-builder --mac"
}
```

**Building for Linux:**

```bash
npm run build:linux
```

**Note:** This assumes you have added the following script to your `package.json` file:

```json
"scripts": {
  // ... other scripts
  "build:linux": "electron-builder --linux"
}
```

**Running the Application:**

After building the application for your specific platform, you can run it using the following command:

```bash
npm start
```

This command will start the Electron application.

**Contributing:**

Contributions are welcome! Please read the contributing guidelines before getting started.

**License:**

Zephyr Cloud is licensed under the Thoq-License. See the license file for details.

**Note:** Building for macOS requires a dedicated machine, while building for Linux requires additional configuration in your `package.json` file. If cross-platform development without Docker is necessary, explore alternative solutions like cloud build services that support these platforms.
