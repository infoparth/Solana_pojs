
# Solana Wallet KeyPair Generator and Testnet Airdrop

This repository houses the code to effortlessly generate new key pairs on the Solana Blockchain. In addition, it simplifies the process of airdropping testnet SOL into the newly created wallet address. Whether you're a seasoned Solana developer or just diving into the world of blockchain development, this project provides a straightforward solution for managing key pairs and testnet SOL funds.

## Getting Started
To get started with this project, simply follow these steps:

1. Clone the Repository: Begin by cloning this repository to your local machine using the following command:
```
git clone
```
1. Navigate to the Project Directory: Use the cd command to move into the project directory:
```
cd Solana_pojs
```
1. Install Dependencies: Ensure you have Node.js installed, then install the project dependencies by running:
```
npm i
```
1. Generate Key Pair and Airdrop Testnet SOL: Execute the key pair generation script to create a new private and public key and airdrop some SOL:
```
node generate-keypair.js
```
1. Transfer Testnet SOL: Once you have your key pair, you can easily airdrop testnet SOL to the newly generated wallet address by running:
```
node transfer.js ----recipient=<Recipient-Public-Key> --amount=<Amount-in-SOL>
```

## Usage
 This repository offers the following functionality:
- KeyPair Generation: Create new Solana wallet key pairs, consisting of a private and public key.

- Airdrop Testnet SOL: Airdrop testnet SOL into the newly generated wallet address for testing purposes.

- Transfer SOL: Transfer SOL from one wallet to another, facilitating transactions within the Solana blockchain.

## Contributing
Contributions to this repository are welcome! If you have any improvements, bug fixes, or new features to suggest, please feel free to open an issue or submit a pull request.

## Connect with Me
If you have any questions, or suggestions, or want to connect and discuss Solidity and blockchain development, please don't hesitate to reach out. You can find me on [LinkedIn](https://www.linkedin.com/in/parthverma-/) or [Twitter](https://twitter.com/verma_parth79).

Happy coding, and enjoy your journey into the exciting world of Solidity development! 🚀
