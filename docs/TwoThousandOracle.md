# TwoThousandOracle









## Methods

### latestRoundData

```solidity
function latestRoundData() external view returns (address, int256, address, address, address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | int256 | undefined |
| _2 | address | undefined |
| _3 | address | undefined |
| _4 | address | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### updatePrice

```solidity
function updatePrice(uint256 _newPrice) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newPrice | uint256 | undefined |



## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



