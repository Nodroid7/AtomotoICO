# Welcome to ATO-token-ico 👋

> Opinionated Dapp Starter Template

## Screenshot
![Untitled](https://user-images.githubusercontent.com/89033750/161400353-2983d277-eb7d-4025-a7d4-b7bfd7621b9a.png)
![Untitled1](https://user-images.githubusercontent.com/89033750/161400355-905ead66-9263-4ae6-b75e-bd98dd44ca65.png)

## Features

- ⚡️ React TypeScript template with [Vite 2](https://vitejs.dev/)
- 📦 [Hardhat](https://hardhat.org/) - BSC development environment for professionals
- 🔥 [web3-react](https://github.com/NoahZinsmeister/web3-react/) - A simple, maximally extensible, dependency minimized framework for building modern BSC DApps
- 🎨 [daisyUI Tailwind CSS Components](https://daisyui.com/) - clean HTML with component classes
- 🎨 [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/) - standard for secure blockchain applications

## Install

```sh
yarn install
```

## Usage

```sh
yarn dev
```

## Run tests

```sh
yarn test
```

## ICO Token

Create .env from .env.example from root directory. Remember to fill the value for deployed addresses.

```
BSCSCAN_API_KEY="login to bsc and get api key"
PRIVATE_KEY=<YOUR PRIVATE KEY>
VITE_CROWDSALE_ADDRESS=<YOUR DEPLOYED SMART CONTRACT ADDRESS>
VITE_PROVIDER_URL=https://eth-ropsten.alchemyapi.io/v2/<YOUR ALCHEMY KEY>
VITE_BSC_TESTNET=
```

Then deploy to specific network, e.g: Ropsten

```sh
npx hardhat run scripts/deploy_ATOMOTOScrowdsale.js --network ropsten
```

Output:

```sh
Generating typings for: 0 artifacts in dir: src/types for target: 
Successfully generated 3 typings!
Successfully generated 3 typings for external artifacts!
ATOMOTOSToken deployed to: 0x589e9B37053b140D969d5fCECC53daDcC630B1c4
Name ATOMOTOSToken
Symbol ATO
Decimals 18
Total Supply BigNumber { _hex: '0xd3c21bcecceda1000000', _isBigNumber: true }
Owner 0xdb2Dbd4aC76eC030849bbcFC31Cc0cadd08c551e
openingTime 1648847673
closeTime 1649452473
ATOMOTOSTokenCrowdsale deployed to: 0x03266CA60258461A9F66Ea8498D445A8D401F842
```

Next step is verifying the IT Man Token

```sh
npx hardhat verify --network bsctestnet 0x589e9B37053b140D969d5fCECC53daDcC630B1c4
```

Output:

```sh
Nothing to compile
Generating typings for: 0 artifacts in dir: src/types for target: ethers-v5
Successfully generated 3 typings!
Successfully generated 3 typings for external artifacts!
Compiling 1 file with 0.8.4
Successfully submitted source code for contract
contracts/ATOMOTOS.sol:ATOMOTOS at 0x589e9B37053b140D969d5fCECC53daDcC630B1c4
for verification on Etherscan. Waiting for verification result...

Successfully verified contract ATOMOTOS on Etherscan.
https://bscscan.io/address/0x589e9B37053b140D969d5fCECC53daDcC630B1c4#code
```

Finally, verify the IT Man Token Crowdsale

```sh
npx hardhat verify9F66Ea8498D445A8D401F842 500 0xdb2Dbd4aC76eC030849bbcFC31Cc0cadd08b310229c 0xdb2Dbd4aC76eC030849bbcFC31Cc0cadd08c551e 1648847673 164
```

Output:

```sh
Nothing to compile
Generating typings for: 0 artifacts in dir: src/types for target: ethers-v5
Successfully generated 3 typings!
Successfully generated 3 typings for external artifacts!
Compiling 1 file with 0.8.4

... some warnings

Successfully submitted source code for contract
contracts/ATOMOTOSCrowdsale.sol:ATOMOTOSTokenCrowdsale at 0x03266CA60258461A9F66Ea8498D4
for verification on Etherscan. Waiting for verification result...

```

## Hardhat guideline

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile --network localhost
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy_greeter.js --network localhost
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

## Contract upgrade

OpenZeppelin provides tooling for deploying and securing [upgradeable smart contracts](https://docs.openzeppelin.com/learn/upgrading-smart-contracts).

Smart contracts deployed using OpenZeppelin Upgrades Plugins can be upgraded to modify their code, while preserving their address, state, and balance. This allows you to iteratively add new features to your project, or fix any bugs you may find in production.

In this project, there are a 2 versions of contract: Box and BoxV2 which is improvement of Box. First deploy your contract:

```shell
npx hardhat run --network localhost scripts/deploy_upgradeable_box.js
```

Then, deploy the upgrade smart contract

```shell
npx hardhat run --network localhost scripts/upgrade_box.js
