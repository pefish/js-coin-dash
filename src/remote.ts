import BtcRemote from "@pefish/js-coin-btc/lib/remote";

/**
 * dash rpc调用工具
 */
export default class DashRpc extends BtcRemote {
  [x: string]: any
  /**
   * Returns an object containing governance parameters
   * @returns {Promise<void>}
   */
  async getgovernanceinfo() {
    return await this.request('getgovernanceinfo', [])
  }

  /**
   * Returns an object containing mixing pool related information
   * @returns {Promise<void>}
   */
  async getpoolinfo() {
    return await this.request('getpoolinfo', [])
  }

  /**
   *Returns the absolute maximum sum of superblock payments allowed
   * @param index
   * @returns {Promise<void>}
   */
  async getsuperblockbudget(index) {
    return await this.request('getsuperblockbudget', [index])
  }

}