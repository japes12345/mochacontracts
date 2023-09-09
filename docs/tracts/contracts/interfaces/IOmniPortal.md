# IOmniPortal









## Methods

### chain

```solidity
function chain() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### getLatestOmniBlock

```solidity
function getLatestOmniBlock() external view returns (struct OmniCodec.Block)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | OmniCodec.Block | undefined |

### isXChainTx

```solidity
function isXChainTx() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### sendOmniTx

```solidity
function sendOmniTx(address _to, bytes _data) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _data | bytes | undefined |

### sendXChainTx

```solidity
function sendXChainTx(string _chain, address _to, bytes _data) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _chain | string | undefined |
| _to | address | undefined |
| _data | bytes | undefined |

### supportedChains

```solidity
function supportedChains(string) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### txSender

```solidity
function txSender() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### txSourceChain

```solidity
function txSourceChain() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### verifyOmniState

```solidity
function verifyOmniState(uint64 _blockNumber, bytes _storageProof, bytes _storageKey, bytes _storageValue) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _blockNumber | uint64 | undefined |
| _storageProof | bytes | undefined |
| _storageKey | bytes | undefined |
| _storageValue | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |




