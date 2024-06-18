// Identity.sol

pragma solidity ^0.8.0;

contract Identity {
    struct User {
        string name;
        string email;
        string phone;
        mapping(address => bool) authorizedAddresses;
    }

    mapping(address => User) private users;

    function registerIdentity(string memory _name, string memory _email, string memory _phone) public {
        users[msg.sender].name = _name;
        users[msg.sender].email = _email;
        users[msg.sender].phone = _phone;
    }

    function getIdentity(address _userAddress) public view returns (string memory, string memory, string memory) {
        require(users[_userAddress].authorizedAddresses[msg.sender], "Not authorized to view this identity");
        User storage user = users[_userAddress];
        return (user.name, user.email, user.phone);
    }

    function updateIdentity(string memory _name, string memory _email, string memory _phone) public {
        users[msg.sender].name = _name;
        users[msg.sender].email = _email;
        users[msg.sender].phone = _phone;
    }

    function authorizeAccess(address _askerAddress) public {
        users[msg.sender].authorizedAddresses[_askerAddress] = true;
    }
}
