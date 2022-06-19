pragma solidity ^0.8.0;

// Importing zkSync contract interface
import "@matterlabs/zksync-contracts/contracts/interfaces/IZkSync.sol";
// Importing `Operations` library which has the `Operations.QueueType` and `Operations.OpTree` types
import "@matterlabs/zksync-contracts/contracts/libraries/Operations.sol";

error NotEnoughFunds(uint256 requested, uint256 available);

contract Donation {
    mapping(address => uint256) balances;

    function donate(address payable recipient, uint256 amount)
        external
        payable
    {
        // IZkSync zksync = IZkSync(recipient);
        // zksync.transfer();

        uint256 balance = balances[msg.sender];
        if (balance < amount) revert NotEnoughFunds(amount, balance);

        uint256 commission = ((amount * 1) / 100); // 1% commission
        uint256 updatedAmount = (amount - commission);

        recipient.transfer(updatedAmount);
        return;
    }

    // function depositBaseCost(
    //     uint256 gasPrice,
    //     Operations.QueueType _queueType,
    //     Operations.OpTree _opTree
    // ) public view returns (uint256);
}
