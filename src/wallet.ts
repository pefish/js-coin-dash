/** @module */
import '@pefish/js-node-assist'
import BaseWalletHelper from '@pefish/js-coin-btc/lib/base/base_bitcore_lib'

declare global {
  namespace NodeJS {
    interface Global {
      logger: any;
    }
  }
}

export default class Wallet extends BaseWalletHelper {
  decimals: number = 8;
  bitcoinLib: any

  public constructor () {
    super()
    this.bitcoinLib = require('dashcore-lib')
  }
}
