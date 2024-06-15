# Tea Time Server

Tea Time Server is the backend component of the Tea Time web application. It provides the necessary APIs and server-side logic to support the seamless and ad-free gaming experience offered by the Tea Time client. This repository is open for contributions, allowing other developers to enhance the backend functionality or add new features.

## Play Online

You can play Tea Time online [here](https://www.ttime.site/).

## Repositories

Tea Time consists of two repositories:

- **Frontend (client)**: This repository contains the frontend code of the application. You can find it [here](https://github.com/uankit/teatime-client).
- **Backend (server)**: This repository contains the backend code. If you are working with the API, make changes in this repository. You can find it [here](https://github.com/uankit/teatime-server).


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Note on Code Quality](#note-on-code-quality)


## Features

- **API Support**: Provides backend APIs for the Tea Time client.
- **Game Data Management**: Handles data related to games, including movie trivia.
- **CORS Enabled**: Allows cross-origin requests to support frontend-backend communication.

## Installation

To get started with Tea Time Server, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/uankit/teatime-server.git
    cd teatime-server
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the necessary environment variables. 


4. **Start the server**:
    ```sh
    npm run dev
    ```

The server will be running at the default port.

## Usage

The Tea Time Server provides APIs that can be consumed by the Tea Time client. Ensure the server is running and properly configured to handle requests from the frontend.

## Contributing

We welcome contributions from the community! Here's how you can contribute:

1. **Fork the repository**.
2. **Create a new branch**:
    ```sh
    git checkout -b feature/new-api-endpoint
    ```
3. **Make your changes**.
4. **Commit your changes**:
    ```sh
    git commit -m "Add new API endpoint: Endpoint Name"
    ```
5. **Push to the branch**:
    ```sh
    git push origin feature/new-api-endpoint
    ```
6. **Create a pull request**.


## Note on Code Quality

The current codebase is a work in progress and may not be well-structured. I will be iterating over it to improve documentation and code quality. If anyone feels like providing structure, optimizations, or enhancements, please feel free to contribute. Your help is greatly appreciated!

---

Enjoy using Tea Time! If you have any questions or feedback, please feel free to reach out at [uankitu@gmail.com](mailto:uankitu@gmail.com) or on [LinkedIn](https://www.linkedin.com/in/uankit).
