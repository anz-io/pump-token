// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";

contract PUMP is ERC20, Ownable2Step {

    constructor() ERC20("PUMP", "PUMP") Ownable(_msgSender()) {
        _mint(_msgSender(), 1_000_000_000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public onlyOwner {
        _burn(_msgSender(), amount);
    }
    
}

