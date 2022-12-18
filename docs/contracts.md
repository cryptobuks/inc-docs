---
sidebar_position: 6
---

# INC Contracts

Below are the addresses of INC's main contracts.

| Name               | Address                                    | Description                                             |
|--------------------|--------------------------------------------|---------------------------------------------------------|
| INCToken           | 0x07833afE46E945296e842e295DC6FCB329E38899 | INC Token contract |
| TokenOffer         | 0xa6B479Da6Dd33954Af2C847CAb4b0097fBaF7681 | Initial offer - Phase 1 |
| SurveyConfig       | 0xE06cC1927423CB020e9aDa389F74B2834fa7eB9A | Global protocol settings |
| SurveyEngine       | 0x4f1Aa41a535Ede6AB321ce3C39597123B13391e0 | Survey protocol engine, responsible for verifying and adding surveys and participations. |
| SurveyStorage      | 0x8ca11A221b221647645dDBf8bB380886Ae645478 | It stores the addresses of surveys and participations and provides all the necessary functions to access the stored data. |
| SurveyValidator    | 0xc6F391aBA8F8cb5c3D698432E43d3d718CaF8e7C | Contains functions to validate the parameters of surveys and participations. |
| SurveyFactory      | 0x3607B52c00D3665302f016EfB568B14fa9C3ee83 | Survey factory, is responsible for creating new surveys through the ISurveyImpl interface. |
| INCForwarder       | 0x4e493b52aa191fA82ACd9327A0beb0f50Df19457 | Is responsible for receiving the signed meta-transactions containing the participation transactions and executes them through a low-level call. |
| INCGovernor        | 0x9a342e71abEab4B9F47Daf520D4C8df3bE938153 | DAO governance contract |
| TimelockController | 0xcA0fc4eE85b8AFF05dAC6510a1d3452E7d8C56ea | Contract module which acts as a timelocked controller. When set as the owner of an `Ownable` smart contract, it enforces a timelock on all `onlyOwner` maintenance operations. This gives time for users of the controlled contract to exit before a potentially dangerous maintenance operation is applied. |
| TokenLock          | 0x0f43e8D8612255803293747302435D6846042F2d | Blocking contract, progressively releases the tokens during the indicated time. |
