---

# Zephyr Cloud

## Description

Zephyr Cloud is a powerful application designed for managing cloud resources efficiently. This Electron-based application provides a user-friendly interface for interacting with cloud services.

## Prerequisites

- Docker: Ensure Docker is installed on your Windows 11 machine. Docker Desktop for Windows is available from the [official Docker website](https://www.docker.com/products/docker-desktop).
- Node.js and npm: Ensure Node.js and npm are installed on your machine. You can download them from the [official Node.js website](https://nodejs.org/).

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/zephyr-cloud.git
   ```
2. Navigate to the project directory:
   ```
   cd zephyr-cloud
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Building the Application

### Using Docker

To build the application for macOS and Linux on Windows, you can use Docker. This method allows you to create a cross-platform build environment without needing access to macOS or Linux machines directly.

1. Ensure Docker is running on your machine.
2. Run the Docker build script:
   ```
   npm run docker-build
   ```
   This command will initiate the Docker-based build process, targeting macOS and Linux.

### Building for Windows

To build the application for Windows, you can use the following command:

```
npm run dist
```

This command will package your application into the `dist` directory, creating an installer for Windows.

## Running the Application

After building the application, you can run it using the following command:

```
npm start
```

This command will start the Electron application.

## Contributing

At the moment if you want to contribute you must create a pull request and agree to the license
```Contributions are welcome! Please read the [](CONTRIBUTING.md) before getting started.```

## License

Zephyr Cloud is licensed under the Thoq-License. See the [LICENSE](https://raw.githubusercontent.com/Thoq-jar/Thoq-License/main/License) file for details.

---
