// Import Solana web3 functionalities
const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction
} = require("@solana/web3.js");



const transferSol = async() => {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // Generate a new keypair
    const from = Keypair.generate();

    // Generate another Keypair (account we'll be sending to)
    const to = Keypair.generate();

    // Aidrop 2 SOL to Sender wallet
     console.log("Airdopping some SOL to Sender wallet!");
     const fromAirDropSignature = await connection.requestAirdrop(
         new PublicKey(from.publicKey),
         2 * LAMPORTS_PER_SOL
     );

     console.log("process initiated")

    // Latest blockhash (unique identifer of the block) of the cluster
     let latestBlockHash = await connection.getLatestBlockhash();

     console.log("verifying blockhash")

    
    // Confirm transaction using the last valid block height (refers to its time)
    // to check for transaction expiration
     await connection.confirmTransaction({
         blockhash: latestBlockHash.blockhash,
         lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
         signature: fromAirDropSignature
     });

     console.log("Airdrop completed for the Sender account");

     const getWalletBalance = async (pubKey) => {
         try {
             // Connect to the Devnet
             const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
             // console.log("Connection object is:", connection);
    
            // Make a wallet (keypair) from privateKey and get its balance
             // const myWallet = await Keypair.fromSecretKey(privateKey);
             const walletBalance = await connection.getBalance(
                 // new PublicKey
                 (pubKey)
             );
             console.log(`Wallet balance: ${pubKey} is ${parseInt(walletBalance) / LAMPORTS_PER_SOL} SOL`);
         } catch (err) {
             console.log(err);
         }
     };

    //  // Get the balance of the sender wallet
      const senderBalance = await getWalletBalance(from.publicKey);

    // Send money from "from" wallet and into "to" wallet
    var transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: from.publicKey,
            toPubkey: to.publicKey,
            lamports: BigInt(Math.floor(senderBalance * 0.5))
        })
    );

    // Sign transaction
    var signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [from]
    );
    console.log('Signature is', signature);

    console.log("After transfer the wallet address");
    await getWalletBalance(to);

    
}



transferSol();