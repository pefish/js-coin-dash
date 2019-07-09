import BtcRemote from "@pefish/js-coin-btc/lib/remote";
/**
 * dash rpc调用工具
 */
export default class DashRpc extends BtcRemote {
    [x: string]: any;
    /**
     * Returns an object containing governance parameters
     * @returns {Promise<void>}
     */
    getgovernanceinfo(): Promise<any>;
    /**
     * Returns an object containing mixing pool related information
     * @returns {Promise<void>}
     */
    getpoolinfo(): Promise<any>;
    /**
     *Returns the absolute maximum sum of superblock payments allowed
     * @param index
     * @returns {Promise<void>}
     */
    getsuperblockbudget(index: any): Promise<any>;
}
