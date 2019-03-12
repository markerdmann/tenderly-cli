const HDWalletProvider = require('truffle-hdwallet-provider-privkey');

module.exports = {
    networks: {
        development: {
            provider: function() {
                return new HDWalletProvider(["9842d144766e11acc647aba55da339197ca6bc8f6e0e263b2d8328c48a7705a4"], `http://127.0.0.1:9545`);
            },
            network_id: '5777',
            gasPrice: 2000000000 // 2 GWei
        },
    }
};
