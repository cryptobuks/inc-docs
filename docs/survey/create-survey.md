---
sidebar_position: 1
---

# Create Survey

Go to section [Create survey](https://survey.inctoken.org/create-survey)

## Enter the survey parameters

- **Logo:** Your logo, you can indicate the link (https://.. or ipfs://..) or you can upload an image, in which case the image will be uploaded to IPFS and the link will be saved on the blockchain.
- **Token:** Select the token you would like to use to incentivize participants. You can add a [custom token](./custom-token).
- **Title:** Title of the survey
- **Description:** Brief description of the purpose of the survey
- **Start date:** Survey start date
- **End date:** Survey end date
- **Total budget:** Budget of tokens destined to reward the participants.
- **Reward for participation:** Reward for each participation. Dividing the budget by the reward should result in a positive integer that represents the maximum number of entries.
- **Gas reserve:** Gas reserve destined to finance the participations of users who do not have a balance to assume the gas of the transaction. It is not obligatory to finance the participations, however the participation must be profitable so that the users decide to collaborate.
- **Coupons (Optional):** Coupons guarantee the participation of specific users but this will increase the cost of the transaction (gas). Alternatively, you can choose not to use the coupons, this way everyone can participate in this survey.
Maximum 10000 coupons, each coupon allows a single participation, you will need to send these coupons to the users you want to survey.

## Implement the survey questions

Drag the components you want to use and drop them onto the question section in the order you want.

![Drag question component](/img/tutorial/drag_question_light.png#gh-light-mode-only)
![Drag question component](/img/tutorial/drag_question_dark.png#gh-dark-mode-only)

Each question is made up of the following fields.

![Question fields](/img/tutorial/question_light.png#gh-light-mode-only)
![Question fields](/img/tutorial/question_dark.png#gh-dark-mode-only)

- **1:** This field contains the question to help the user in his choice.
- **2:** Allows you to drag the component vertically to change the order of the question.
- **3:** It is a representation of the component that the participant will see, this component is disabled.
- **4:** This button allows you to clone the component by creating an exactly the same one just below it.
- **5:** This button allows you to remove the component.
- **6:** Allows you to indicate whether the answer is mandatory or not.
- **7:** It shows a menu with the extra options that differ depending on the component.

All questions allow the introduction of an extra description to give more details to the user.

![Question description](/img/tutorial/question_desc_light.png#gh-light-mode-only)
![Question description](/img/tutorial/question_desc_dark.png#gh-dark-mode-only)

Some questions allow the addition of validators and a custom error message.

![Question validators](/img/tutorial/question_validators_light.png#gh-light-mode-only)
![Question validators](/img/tutorial/question_validators_dark.png#gh-dark-mode-only)

- **1:** First validation condition, in this case for the minimum size of the response.
- **2:** Second validation condition, in this case for the maximum size of the response.
- **3:** Custom error message, **indicates the requirements to pass the validation**.

Each condition is made up of the following fields:
- **Expression:** The expression indicates the type of condition, such as Equal, Not Equal, Contains, Not Contains ...
- **Value:** The value, if any, is used during validation. Ex. in the image above, the `Maximum Length` expression uses the value 100.
- **Operator:** The concatenation operator (And/Or) is required if the following conditions exist.

The operator `And` has precedence over `Or` in the order of operations.  
So, this:  
CONDITION_A `And` CONDITION_B `Or` CONDITION_C `And` CONDITION_D  
Is entirely equivalent to:   
CONDITION_AB `Or` CONDITION_CD

## Check the preview and test your survey

Once your survey is complete, on the next screen you can preview and test your survey using the `Test survey` button to check validations before submitting the transaction to the blockchain.

## Submit the transaction

When you are totally sure of your survey, press the `Send survey` button, then your blockchain client will ask you for confirmation to send the transaction.  

:::danger Please note
Once the transaction is submitted, the survey cannot be modified.
:::
