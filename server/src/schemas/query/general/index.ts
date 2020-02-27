import { getChainBalance, getPendingChainBalance } from './chainBalance';
import { getNetworkInfo } from './networkInfo';
import { getNodeInfo } from './nodeInfo';
import { adminCheck } from './adminCheck';

export const generalQueries = {
    getChainBalance,
    getPendingChainBalance,
    getNetworkInfo,
    getNodeInfo,
    adminCheck,
};