# CollarVault









## Methods

### changeMarketmaker

```solidity
function changeMarketmaker(address _newMM) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newMM | address | undefined |

### checkMatured

```solidity
function checkMatured() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### checkPhysicalCollateralPosted

```solidity
function checkPhysicalCollateralPosted() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### checkRepaid

```solidity
function checkRepaid() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### checkRollType

```solidity
function checkRollType() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### checkSettleType

```solidity
function checkSettleType() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### executeRoll

```solidity
function executeRoll() external nonpayable
```






### getClaimableClientCash

```solidity
function getClaimableClientCash() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getClaimableClientPhysical

```solidity
function getClaimableClientPhysical() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getCollateralAmount

```solidity
function getCollateralAmount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getFee

```solidity
function getFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getLoanAmt

```solidity
function getLoanAmt() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getMaturityTimestamp

```solidity
function getMaturityTimestamp() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getOraclePriceExternal

```solidity
function getOraclePriceExternal() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getRepaymentAmount

```solidity
function getRepaymentAmount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getRollDetails

```solidity
function getRollDetails() external view returns (bool, uint256, uint256, uint256, uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |
| _1 | uint256 | undefined |
| _2 | uint256 | undefined |
| _3 | uint256 | undefined |
| _4 | uint256 | undefined |

### getVaultDetails

```solidity
function getVaultDetails() external view returns (uint256, uint256, address, uint256, uint256, uint256, uint256, uint256, uint256, address, uint256, uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | uint256 | undefined |
| _2 | address | undefined |
| _3 | uint256 | undefined |
| _4 | uint256 | undefined |
| _5 | uint256 | undefined |
| _6 | uint256 | undefined |
| _7 | uint256 | undefined |
| _8 | uint256 | undefined |
| _9 | address | undefined |
| _10 | uint256 | undefined |
| _11 | uint256 | undefined |

### giveRollOrder

```solidity
function giveRollOrder() external nonpayable
```






### matureVault

```solidity
function matureVault() external nonpayable
```






### postCash

```solidity
function postCash(uint256 _stableAmt) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _stableAmt | uint256 | undefined |

### postPhysical

```solidity
function postPhysical() external payable
```






### postTradeDetailsA

```solidity
function postTradeDetailsA(uint256 _lent, uint256 _fill, uint256 _collat, uint256 _proceeds, address _weth) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _lent | uint256 | undefined |
| _fill | uint256 | undefined |
| _collat | uint256 | undefined |
| _proceeds | uint256 | undefined |
| _weth | address | undefined |

### postTradeDetailsB

```solidity
function postTradeDetailsB(uint256 _fee, address _feeWallet, uint256 _rollFeeRate, address _marketmaker, address _client) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _fee | uint256 | undefined |
| _feeWallet | address | undefined |
| _rollFeeRate | uint256 | undefined |
| _marketmaker | address | undefined |
| _client | address | undefined |

### pullRollRequest

```solidity
function pullRollRequest() external nonpayable
```






### reclaimCash

```solidity
function reclaimCash(uint256 _stableAmt) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _stableAmt | uint256 | undefined |

### reclaimPhysical

```solidity
function reclaimPhysical(uint256 amtWei) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amtWei | uint256 | undefined |

### rejectRoll

```solidity
function rejectRoll() external nonpayable
```






### repayLoan

```solidity
function repayLoan() external nonpayable
```






### requestRollPrice

```solidity
function requestRollPrice(uint256 _rollltvpct, uint256 _rollMaturityTimestamp) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _rollltvpct | uint256 | undefined |
| _rollMaturityTimestamp | uint256 | undefined |

### setRollPref

```solidity
function setRollPref(bool _newRollPref) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newRollPref | bool | undefined |

### setSettleType

```solidity
function setSettleType(uint256 _newSettlePref) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newSettlePref | uint256 | undefined |

### showRollPrice

```solidity
function showRollPrice(uint256 _rollcallpct) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _rollcallpct | uint256 | undefined |



## Events

### RollPrefChange

```solidity
event RollPrefChange(string rollPref, string newRollPref)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| rollPref  | string | undefined |
| newRollPref  | string | undefined |

### SettlePrefChanged

```solidity
event SettlePrefChanged(string settlePref, string newSettlePref)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| settlePref  | string | undefined |
| newSettlePref  | string | undefined |



