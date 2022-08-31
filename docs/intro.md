---
sidebar_position: 1
---

# Introduction

Incentive (INC) is an **ERC-20** token that was born to support a set of projects that allow the use of incentives to promote collaboration and cooperation, some completed and others in process. INC is built on **Polygon**, which addresses Ethereum's limitations, such as transaction speed, throughput, and gas fees.  
Next we will see the basic concepts of the **INC Survey** protocol.

## Basic Concepts

INC Survey is a survey protocol and as such, allows on the one hand that the company creates a questionnaire asking the appropriate questions to collect opinions and promote the brand and on the other, that users participate and receive an incentive in exchange for their collaboration.  
The INC Survey protocol consists of the following components.

### Survey Engine

The SurveyEngine contract is the main entry point to the protocol, it is responsible for:

- Check and add surveys
- Resolve active surveys
- Check and add participations

### Survey Validator

The SurveyValidator contract is responsible for checking the survey parameters to ensure consistency and validating the responses of participations through the validators indicated during the creation of the survey.

### Survey

The SurveyINC contract is the warehouse of surveys and participations, it provides all the necessary functions to access the stored data, such as:
- Get / Search for Surveys
- Get participations
- Get questions from a default survey
- Get answers to a default question
- Get information about the status of a default survey

### Forwarder

The INCForwarder contract is responsible for receiving the signed meta-transactions containing the participation transactions and executes them through a low-level call.

### Relayer

The Relayer is an external module that allows users to participate in surveys without having a balance
in their wallet to pay for the gas of the transactions, since it is responsible for managing the gas
reserves provided by the creators and sending the transactions to the Forwarder.
