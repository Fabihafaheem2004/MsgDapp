// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DecentralizedChat {
    struct Message {
        address sender;
        address receiver;
        string content;
        uint256 timestamp;
    }
    mapping(address => Message[]) private inbox;
    event MessageSent(
        address indexed from,
        address indexed to,
        string content,
        uint256 timestamp
    );
    function sendMessage(address _to, string memory _content) public {
        require(_to != address(0), "Invalid receiver address");
        require(msg.sender != _to, "Cannot message yourself");
        Message memory newMsg = Message({
            sender: msg.sender,
            receiver: _to,
            content: _content,
            timestamp: block.timestamp
        });
        inbox[_to].push(newMsg);
        emit MessageSent(msg.sender, _to, _content, block.timestamp);
    }
    function getMyMessages() public view returns (Message[] memory) {
        return inbox[msg.sender];
    }
    function getConversation(address _user) public view returns (Message[] memory) {
        uint count = 0;
        for (uint i = 0; i < inbox[msg.sender].length; i++) {
            if (inbox[msg.sender][i].sender == _user) {
                count++;
            }
        }
        Message[] memory convo = new Message[](count);
        uint index = 0;
        for (uint i = 0; i < inbox[msg.sender].length; i++) {
            if (inbox[msg.sender][i].sender == _user) {
                convo[index] = inbox[msg.sender][i];
                index++;
            }
        }
        return convo;
    }
}
