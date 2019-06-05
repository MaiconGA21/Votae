import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})
export class Web3serviceService {
  web3: Web3;
  contract: any;
  contractAddress;
  myAddress;
  private address: string;

  privateKey;

  constructor() {
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/82633621e6534032923f1bc90f90ecfb');
    this.web3 = new Web3(provider);
    let abi: any;
    abi = [
      {
        "constant": true,
        "inputs": [],
        "name": "ola",
        "outputs": [
          {
            "name": "",
            "type": "int256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
    // this.contract = new this.web3.eth.Contract(abi as any, '0x5a6c640f1152e193b9dd3279b7eea58312489a8f');
    this.contract = new this.web3.eth.Contract(abi as any, '0x3a48a299161839d815f4092654d4ed1e6c6b80cf');
    const accountStr = localStorage.getItem('account');
    let account;
    if (accountStr) {
      account = JSON.parse(accountStr);
    } else {
      account = this.createAccount();
    }

    this.web3.eth.accounts.wallet.add(account);
    this.web3.eth.defaultAccount = account.address;
    this.address = account.address;
  }

  private createAccount() {
    const account = this.web3.eth.accounts.create();
    const current = { address: account.address, privateKey: account.privateKey };
    localStorage.setItem('account', JSON.stringify(current));
    return account;
  }

  getOla() {
    const accounts = '0x3a48a299161839d815f4092654d4ed1e6c6b80cf';
    console.log(accounts);
    return this.contract.methods.ola().send({
      from: accounts,
    });
  }

  getAddress() {
    return this.address;
  }
}
