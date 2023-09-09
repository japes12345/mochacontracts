# CollarEngine

*jpaulmeyer.eth*

> Collar Protocol Engine

Runs the entire protocol



## Methods

### clientGiveOrder

```solidity
function clientGiveOrder() external payable
```






### clientPullOrder

```solidity
function clientPullOrder() external nonpayable
```






### executeTrade

```solidity
function executeTrade(address _client) external nonpayable returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _client | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getAdmin

```solidity
function getAdmin() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getClientEscrow

```solidity
function getClientEscrow(address client) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| client | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getClientVaultById

```solidity
function getClientVaultById(address _client, uint256 _id) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _client | address | undefined |
| _id | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getCurrRfqid

```solidity
function getCurrRfqid() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getDexRouter

```solidity
function getDexRouter() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getFeerate

```solidity
function getFeerate() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getFeewallet

```solidity
function getFeewallet() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getLastThreeClientVaults

```solidity
function getLastThreeClientVaults(address _client) external view returns (address[3])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _client | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[3] | undefined |

### getLastThreeMarketmakerVaults

```solidity
function getLastThreeMarketmakerVaults(address _marketmaker) external view returns (address[3])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _marketmaker | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[3] | undefined |

### getLastTradeVault

```solidity
function getLastTradeVault(address client) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| client | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getLastTradeVaultMarketmaker

```solidity
function getLastTradeVaultMarketmaker(address _marketmaker) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _marketmaker | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getLendAsset

```solidity
function getLendAsset() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getMarketmaker

```solidity
function getMarketmaker() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getMarketmakerVaultById

```solidity
function getMarketmakerVaultById(address _marketmaker, uint256 _id) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _marketmaker | address | undefined |
| _id | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getMyPrice

```solidity
function getMyPrice() external view returns (uint256, address, address, enum CollarEngine.PxState, string, string, uint256, uint256, uint256, uint256, uint256, string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | address | undefined |
| _2 | address | undefined |
| _3 | enum CollarEngine.PxState | undefined |
| _4 | string | undefined |
| _5 | string | undefined |
| _6 | uint256 | undefined |
| _7 | uint256 | undefined |
| _8 | uint256 | undefined |
| _9 | uint256 | undefined |
| _10 | uint256 | undefined |
| _11 | string | undefined |

### getNextMarketmakerVaultId

```solidity
function getNextMarketmakerVaultId(address _marketmaker) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _marketmaker | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getNextUserVaultId

```solidity
function getNextUserVaultId(address _client) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _client | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getOraclePrice

```solidity
function getOraclePrice() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getPricingByClient

```solidity
function getPricingByClient(address client) external view returns (struct CollarEngine.Pricing)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| client | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | CollarEngine.Pricing | undefined |

### getStateByClient

```solidity
function getStateByClient(address client) external view returns (enum CollarEngine.PxState)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| client | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | enum CollarEngine.PxState | undefined |

### inc

```solidity
function inc() external nonpayable
```






### isCustomer

```solidity
function isCustomer(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### rejectOrder

```solidity
function rejectOrder(address _client, string _reason) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _client | address | undefined |
| _reason | string | undefined |

### requestPrice

```solidity
function requestPrice(uint256 _qty, uint256 _ltvPct, uint256 _maturityTimestamp, address _user) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _qty | uint256 | undefined |
| _ltvPct | uint256 | undefined |
| _maturityTimestamp | uint256 | undefined |
| _user | address | undefined |

### rfqid

```solidity
function rfqid() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### updateDexRouter

```solidity
function updateDexRouter(address _newDexRouter) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newDexRouter | address | undefined |



## Events

### TestEvent

```solidity
event TestEvent(address admin)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| admin  | address | undefined |



