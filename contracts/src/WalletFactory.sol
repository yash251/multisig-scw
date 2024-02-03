// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

import {IEntryPoint} from "account-abstraction/interfaces/IEntryPoint.sol";
import {Wallet} from "./Wallet.sol"

import {ERC1967Proxy} from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";;

contract WalletFactory {
    Wallet public immutable walletImplementation;

    constructor(IEntryPoint entryPoint) {
        walletImplementation = new Wallet(entryPoint, address(this));
    }
}