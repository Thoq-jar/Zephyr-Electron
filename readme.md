## Zephyr Cloud

**Description:**

Zephyr Cloud is a powerful application designed for managing cloud resources efficiently. This Electron-based application provides a user-friendly interface for interacting with cloud services.

**Prerequisites:**

* **Docker:** Ensure Docker is installed on your machine. You can download Docker Desktop from the official website.
* **Node.js and npm:** Ensure Node.js and npm are installed on your machine. You can download them from the official Node.js website.

**Installation:**

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/zephyr-cloud.git
   ```

2. Navigate to the project directory:

   ```bash
   cd zephyr-electron
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

**Building the Application:**

**Building for All Platforms (Windows, macOS, Linux):**

1. Ensure Docker is running.
2. Run the Docker build script:

   ```bash
   npm run docker-build
   ```

This command will build the application for all three platforms using Docker.

**Building for a Specific Platform:**

**Building for Windows:**

```bash
npm run dist
```

This command will build the application for Windows and create an installer in the `dist` directory.

**Building for macOS or Linux:**

Unfortunately, building directly for macOS or Linux requires access to those specific operating systems. You can use the Docker method above to build for these platforms on Windows, or you can build them natively on their respective machines.

**Running the Application:**

After building the application, you can run it using the following command:

```bash
npm start
```

This command will start the Electron application.

**Contributing:**

Contributions are welcome! Please read the contributing guidelines before getting started.

**License:**

Zephyr Cloud is licensed under the Thoq-License. See the license file for details.
--
