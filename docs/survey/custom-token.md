---
sidebar_position: 2
---

# Custom token

During survey creation, you can select a token from the list or add a custom one that belongs to the same network. To do this open the token selection dialog and use the `Manage tokens` option.

![Select token](/img/tutorial/select_token_light.png#gh-light-mode-only)
![Select token](/img/tutorial/select_token_dark.png#gh-dark-mode-only)

In the `Tokens` tab enter the address of your token and press the `Import` button.

![Manage token](/img/tutorial/manage_token_light.png#gh-light-mode-only)
![Manage token](/img/tutorial/manage_token_dark.png#gh-dark-mode-only)

If the token is new or unknown, it is normal that the associated icon does not appear. Token icons are searched for in the following locations:

- INC Lists: 
    * https://inctoken.github.io/tokens.json
    * https://inctoken.github.io/extended-tokens.json
    * https://inctoken.github.io/experimental-tokens.json

- Trust Wallet URL: 
    * https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/**<network\>**/assets/**<address\>**/logo.png

Tokens that are on the experimental list are not considered trusted, it is a preliminary stage before moving to the trustworthy lists (main and extended) after a trial period. **This list is intended to display the icon in surveys while the token is being evaluated.**

<img src="/img/tutorial/survey_card_unk_token_light.png#gh-light-mode-only" alt="Unknown token" width="400"/>
<img src="/img/tutorial/survey_card_unk_token_dark.png#gh-dark-mode-only" alt="Unknown token" width="400"/>

If you would like to add your token to the experimental list, please use [**this form**](https://github.com/inctoken/inctoken.github.io/issues/new?assignees=&labels=add-token-request&template=add-token-request.md&title=Request%3A+add+%7BToken+name%7D).  
Alternatively, you can use your token logo as a survey image.

:::danger Please note
A warning will be displayed to the participant if the token is unknown, until it is moved to the trusted lists.
:::
