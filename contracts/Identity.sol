// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    struct IdentityInfo {
        string name;
        string email;
        string phone;
    }

    mapping(address => IdentityInfo) private identities;
    event IdentityRegistered(address indexed user, string name, string email, string phone);
    event IdentityUpdated(address indexed user, string name, string email, string phone);

    function registerIdentity(string memory name, string memory email, string memory phone) public {
        require(bytes(identities[msg.sender].name).length == 0, "Identity already registered.");
        identities[msg.sender] = IdentityInfo(name, email, phone);
        emit IdentityRegistered(msg.sender, name, email, phone);
    }

    function updateIdentity(string memory name, string memory email, string memory phone) public {
        require(bytes(identities[msg.sender].name).length != 0, "Identity not registered.");
        identities[msg.sender] = IdentityInfo(name, email, phone);
        emit IdentityUpdated(msg.sender, name, email, phone);
    }

    function getIdentity(address _user) public view returns (string memory, string memory, string memory) {
        IdentityInfo memory identity = identities[_user];
        return (identity.name, identity.email, identity.phone);
    }
}
