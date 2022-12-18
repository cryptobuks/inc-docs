---
sidebar_position: 4
---

# INC Governance

The governance process of the DAO is carried out through governance proposals.
There are two main types of proposals that can be made:

**Executable Proposal:** This is a proposal for a series of smart contract operations to be executed by accounts controlled by the DAO. These can include token transfers as well as arbitrary smart contract calls. Examples of this include allocating funds to a workflow multisig wallet or updating an INC parent contract. Executable proposals have a 5% quorum requirement and require a minimum approval of 50% to be approved.

**Social Proposal:** This is a proposal that asks for the DAO's agreement on something that cannot be enforced on-chain. Examples of this include a proposal to change the fee in the survey protocol, or a request to root key holders. Social proposals have a 5% quorum requirement and require a minimum approval of 50% to be approved.

## Snapshot

[Snapshot](https://snapshot.org/#/inctoken.eth) is a simple voting interface that allows users to signal sentiment off-chain. Votes on snapshot are weighted by the number of INC delegated to the address used to vote.

## Governance portals

[Tally](https://www.tally.xyz/gov/eip155:137:0x9a342e71abEab4B9F47Daf520D4C8df3bE938153) is a governance portal that allows token holders to delegate their votes, and allows delegates to create and vote on binding proposals.

## Governance Glossary

**INC**: An ERC-20 token that designates the weight of a user’s voting rights. The more INC a user has in their wallet, the more weight their delegation or vote on a proposal holds.

**Delegation**: INC holders cannot vote or create proposals until they delegate their voting rights to an address. Delegation can be given to one address at a time, including the holder’s own address. Note that delegation does not lock tokens; it simply adds votes to the chosen delegation address.

**Executable Proposal**: An executable proposal is a type of proposal that is executed by the governance contract through timelock. It can replace the governance contract, transfer tokens from the community treasury, or perform an almost infinite range of other on-chain actions. In order to create a proposal, an address must have at least 0.1% (100M INC) of all INC delegated to their address. Proposals are stored in the “proposals” mapping of the Governor smart contract. All proposals are subject to a 7-day voting period.

**Quorum**: In order for a vote to pass, a certain percentage of INC tokens must vote in the affirmative. The current quorum requirements are:

* Executable Proposals: 5%
* Social Proposals: 5%

The purpose of this quorum is to ensure that the only measures that pass have adequate voter participation.

**Voting on Executable Proposals**: Users can vote for or against single proposals once they have voting rights delegated to their address. Votes can be cast while a proposal is in the “Active” state. Votes can be submitted immediately using “castVote” or submitted later with “castVoteBySig” (For more info on castVoteBySig and offline signatures, see EIP-712). If the majority of votes (and a 5% quorum of INC) vote for a proposal, the proposal may be queued in the Timelock.

**Voting Period**: Proposals on Snapshot have a 5 day voting period. Once an executable proposal has been put forward, INC community members will have a seven day period (the Voting Period) to cast their votes.

**Timelock**: All governance actions are delayed for a minimum of 2 days by the timelock contract before they can be executed.
