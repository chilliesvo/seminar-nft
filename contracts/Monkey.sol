//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Monkey is ERC721 {
    uint256 public lastedId;
    string  public baseURI;

    constructor() ERC721("Apes 3D", "APES") {}

    function setBaseURI(string memory _newUri) external {
        baseURI = _newUri;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function mintBatch(uint256 _times) external {
        uint256 id = lastedId;
        uint256[] memory tokenIds = new uint256[](_times);
        for(uint256 i; i < _times; i++) {
            tokenIds[i] = ++id;
            _mint(_msgSender(), id);
        }
        lastedId = id;
    }  
}