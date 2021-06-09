require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan rice mad miss hunt inhale flock view'; 
let testAccounts = [
"0x2025419deef51837fb5f105e0cf6263f7d87f7bb12721e28747b8e92943cc7f3",
"0xb129b899c70e0ccc123799d351e0177a9f3a609f1090273a6194fd32353d121a",
"0xdde536993a5fb7835d5bf930757dabf3e0d19a896d14d0b9efdde708f61e7af0",
"0x44073dd928eb73962017578f20e29ba045ba814ccf1174f9cfbde906abcae678",
"0x5403c7f2b65e2811682ed58fb89f015659e2297990c409ec373f2b0738d69450",
"0x855d761af55e082ef865b8480e40da8a7409b26f7af7091041e1797ed56eef87",
"0xeebf0916f8040484d0c18d2fb0066c3f1028ddab4557024c562aff4cbf90b361",
"0xffcfbc81b265497d36918cd65722b7dcdbc22a8a663e4ab2a6ee74fac37c19cd",
"0x236ff61d71332dbeec6d3c54210676915d798ebb5953155003f448644c71359a",
"0x9cec58a038edf1924b9c87546930291c8be25805c666ce61da7e8881261d68ad"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

