//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Monkey is ERC721 {
    using Strings for uint256;

    uint256 public lastedId;
    string  public baseURI;
    uint256 private constant maxBatch = 10;

    constructor() ERC721("Apes 3D", "APES") {}

    function setBaseURI(string memory _newUri) external {
        baseURI = _newUri;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token.");
        
        string memory baseURI_ = baseURI;
        return bytes(baseURI_).length > 0 ? string(abi.encodePacked(baseURI_, tokenId.toString(), ".json")) : ".json";
    }

    function mintBatch(uint256 _times) external {
        require(_times > 0 && _times <= maxBatch, "must mint fewer in each batch");
        uint256 id = lastedId;
        uint256[] memory tokenIds = new uint256[](_times);
        for(uint256 i; i < _times; i++) {
            tokenIds[i] = ++id;
            _mint(_msgSender(), id);
        }
        lastedId = id;
    }  
}