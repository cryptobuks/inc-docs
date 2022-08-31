---
sidebar_position: 2
---

# Add a Participation

Go to the [List of surveys](https://survey.inctoken.org/surveys). You can search for a survey by title, description, or part of them.  
If you know the `Survey ID` you can go directly to the details using the link `http://survey.inctoken.org/surveys/<ID>`.  
Once the survey is located, to participate the following conditions must be met.

- The survey must be open
- The survey must have a sufficient budget
- You must not have previously participated in the same survey

Browse the survey to see the details and check if the survey requires a coupon for participation, if so, you must have a coupon to participate.  
Use the `Take survey` button to participate.

## Participation Assuming the Gas

Once the survey is completed, if it is profitable for you to participate by assuming the gas of the transaction, you can do so by submitting the transaction directly to the SurveyEngine contract.

![Participation assuming the gas](/img/tutorial/part_paying_gas_light.png#gh-light-mode-only)
![Participation assuming the gas](/img/tutorial/part_paying_gas_dark.png#gh-dark-mode-only)

## Participation Without Gas

In this case, a meta-transaction will be signed and sent to the Relayer server that assumes the gas and is in charge of sending it to the INCForwarder contract, which in turn is in charge of decomposing the meta-transaction and executing the transaction wrapped in the SurveyEngine contract.

![Participation without gas](/img/tutorial/part_without_gas_light.png#gh-light-mode-only)
![Participation without gas](/img/tutorial/part_without_gas_dark.png#gh-dark-mode-only)

:::danger Please note
To participate without gas, the survey must have enough gas in reserve for the Relayer to pay for the transaction for you.
:::

## Receive the Reward

Once your participation is registered, you will immediately receive the reward tokens in your wallet.
