import { Contract, providers } from "ethers";
import { Constants } from "userop";
import {
  BUNDLER_RPC_URL,
  ENTRY_POINT_ABI,
  WALLET_ABI,
  WALLET_FACTORY_ABI,
  WALLET_FACTORY_ADDRESS,
} from "./constants";

// This needs to be an ethers provider because we will share this with `userop` 
export const provider = new providers.JsonRpcProvider(BUNDLER_RPC_URL);

export const entryPointContract = new Contract(
  Constants.ERC4337.EntryPoint,
  ENTRY_POINT_ABI,
  provider
);