/** @module */
import '@pefish/js-node-assist';
import BaseWalletHelper from '@pefish/js-coin-btc/lib/base/base_bitcore_lib';
declare global {
    namespace NodeJS {
        interface Global {
            logger: any;
        }
    }
}
export default class Wallet extends BaseWalletHelper {
    decimals: number;
    bitcoinLib: any;
    constructor();
}
