# Identity Management DApp with MetaMask Integration

## Overview

This is a decentralized identity management DApp built using Flask for the backend, React.js for the frontend, Web3.js for blockchain interaction, and MetaMask for user authentication. The DApp allows users to:

- Register their identity on the blockchain.
- View their registered identity using their MetaMask wallet.
- Update their identity information.
- Share access to their identity with other users via their Ethereum address.

## Features

- **MetaMask Integration**: Users must log in with MetaMask to interact with the DApp.
- **Identity Management**: Users can register, view, and update their identity.
- **Access Control**: Users can authorize other Ethereum addresses to access their identity data.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Install Node.js](https://nodejs.org/)
- **Python 3**: Ensure you have Python 3 installed. [Install Python](https://www.python.org/)
- **Ganache**: For local blockchain development, you'll need Ganache. [Install Ganache](https://www.trufflesuite.com/ganache)
- **MetaMask**: MetaMask extension should be installed in your browser. [Install MetaMask](https://metamask.io/)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Identity-Management-using-Blockchain.git
cd Identity-Management-using-Blockchain
```

### 2. Backend Setup (Flask)

1. Create a virtual environment and activate it:

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

2. Install the necessary dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Set up Ganache and deploy the contract:

    - Open Ganache and start a workspace.
    - In `app.py`, ensure the RPC endpoint matches the one from Ganache (default is `http://127.0.0.1:7545`).

4. Run the Flask server:

    ```bash
    python app.py
    ```

    The server will start on `http://127.0.0.1:5000`.

### 3. Frontend Setup (React)

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the React development server:

    ```bash
    npm start
    ```

    The React app will run on `http://localhost:3000`.

## Usage

### MetaMask Setup

1. Ensure your browser has the MetaMask extension installed.
2. Connect MetaMask to your local Ganache blockchain by adding a custom RPC network in MetaMask:
   - Network Name: Ganache
   - New RPC URL: `http://127.0.0.1:7545`
   - Chain ID: 1337
   - Currency Symbol: ETH

3. Use the first account from Ganache for transactions, or import other accounts as needed.

### Interacting with the DApp

#### Register Identity

1. Open the application at `http://localhost:3000`.
2. Connect to MetaMask by clicking the "Connect Wallet" button.
3. Navigate to the "Register" page and input your name, email, and phone number.
4. Click "Register", and the transaction will be sent to the blockchain to store your identity.

#### View Identity

1. Navigate to the "Get Identity" page.
2. After connecting with MetaMask, input your Ethereum address and click "Get Identity".
3. Your identity data stored on the blockchain will be retrieved and displayed.

#### Update Identity

1. Navigate to the "Update Identity" page.
2. After connecting with MetaMask, your current details will auto-populate in the input fields.
3. Update the fields you want and click "Update", which will store the changes on the blockchain.

#### Authorize Identity Access

1. Navigate to the "Authorize Access" page.
2. Input the Ethereum address of the user to whom you want to grant access to your identity data.
3. Click "Authorize", and the transaction will be sent to the blockchain.

## Smart Contract Details

- The smart contract handles the following functions:
  - `registerIdentity(name, email, phone)`: Registers a new identity.
  - `getIdentity(userAddress)`: Retrieves the identity of the provided address.
  - `updateIdentity(name, email, phone)`: Updates the identity of the connected user.
  - `authorizeAccess(askerAddress)`: Grants the specified address access to the user’s identity.

### Contract Deployment

The contract is automatically deployed when the Flask server starts. It uses the first account in your Ganache setup.

## MetaMask Integration

MetaMask is integrated with the DApp for user authentication and transaction signing:

- On the frontend, MetaMask is used to connect to the user's Ethereum wallet.
- Transactions are sent and signed by the user via MetaMask, ensuring a secure interaction with the Ethereum blockchain.
- The user's Ethereum address is used to register, fetch, and update their identity on the blockchain.

### How It Works

- **MetaMask Connect**: When the user clicks "Connect Wallet", the application requests access to the user's MetaMask wallet.
- **Register Identity**: The connected MetaMask account is used to register an identity on the blockchain, and the transaction is signed by the user.
- **Authorize Access**: Users can authorize specific Ethereum addresses to access their identity data stored on-chain.

## Troubleshooting

1. **Invalid Address Error**: Ensure all Ethereum addresses used in transactions are converted to checksum addresses using `Web3.toChecksumAddress()`.
2. **Transaction Not Being Sent**: Make sure MetaMask is connected to the correct network (Ganache) and that your wallet has sufficient ETH for gas.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed explanation of your changes.

## License

This project is open-source and available under the MIT License.
