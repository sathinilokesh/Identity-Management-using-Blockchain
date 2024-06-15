from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from web3 import Web3
import json

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the contract ABI and bytecode
with open('artifacts/contracts/Identity.sol/Identity.json') as f:
    contract_data = json.load(f)

abi = contract_data['abi']
bytecode = contract_data['bytecode']

# Set up Web3 connection (replace with your local Ganache RPC endpoint)
w3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8545'))

# Get the first account from Ganache
account = w3.eth.accounts[0]

# Contract deployment function
def deploy_contract():
    Identity = w3.eth.contract(abi=abi, bytecode=bytecode)
    tx_hash = Identity.constructor().transact({'from': account})
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    return tx_receipt.contractAddress

# Deploy the contract
contract_address = deploy_contract()
print("contract address: " + contract_address)

# Create contract instance
contract = w3.eth.contract(address=contract_address, abi=abi)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register_identity():
    data = request.json
    name = data['name']
    email = data['email']
    phone = data['phone']

    # Send transaction to register identity
    tx_hash = contract.functions.registerIdentity(name, email, phone).transact({'from': account})
    receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

    return jsonify({'status': 'Identity registered', 'transaction': receipt.transactionHash.hex()})

@app.route('/identity/<user_address>', methods=['GET'])
def get_identity(user_address):
    identity = contract.functions.getIdentity(user_address).call()
    return jsonify({'name': identity[0], 'email': identity[1], 'phone': identity[2]})

@app.route('/update', methods=['POST'])
def update_identity():
    data = request.json
    name = data['name']
    email = data['email']
    phone = data['phone']

    # Send transaction to update identity
    tx_hash = contract.functions.updateIdentity(name, email, phone).transact({'from': account})
    receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

    return jsonify({'status': 'Identity updated', 'transaction': receipt.transactionHash.hex()})

if __name__ == '__main__':
    app.run(port=5000)
