import i18n from "@/i18n";
import store from "@/store";
import Vue from "vue";
import operator from "./abi/operator";
import { checkAccount } from "./chain";

var contract = undefined;

/** 获取市场合约 */
function getOperatorContract() {
  const web3 = window.web3Particle;
  if (!web3) {
    Vue.$toast(i18n.t("common.need_reconnect_wallet"));
    return null;
  }
  if (contract) {
    return contract;
  } else {
    contract = new web3.eth.Contract(
      operator.abi,
      process.env.VUE_APP_OPERATOR
    );
    return contract;
  }
}

/** 合约签到 */
export function checkInContract() {
  if (!checkAccount()) {
    return;
  }
  const operatorContract = getOperatorContract();
  if (!operatorContract) {
    return;
  }
  const fromAddress = store.state.chain.account;
  return new Promise((resolve, reject) => {
    operatorContract.methods
      .checkIn()
      .send({ from: fromAddress })
      .on("transactionHash", (hash) => {
        console.log("transactionHash:", hash);
      })
      .on("receipt", (receipt) => {
        resolve(receipt);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

/** 检查盲盒 */
export function checkBoxContract() {
  const operatorContract = getOperatorContract();
  const fromAddress = store.state.chain.account;
  return new Promise((resolve, reject) => {
    operatorContract.methods
      .checkBox()
      .call({ from: fromAddress })
      .then((r) => {
        resolve(r);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/** 获取盲盒 */
export function getBoxContract(tokenId) {
  if (!checkAccount()) {
    return;
  }
  const operatorContract = getOperatorContract();
  if (!operatorContract) {
    return;
  }
  const fromAddress = store.state.chain.account;
  return new Promise((resolve, reject) => {
    operatorContract.methods
      .getBox(tokenId)
      .send({ from: fromAddress })
      .on("transactionHash", (hash) => {
        console.log("transactionHash:", hash);
      })
      .on("receipt", (receipt) => {
        resolve(receipt);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

/** 打开盲盒 */
export function openBoxContract() {
  if (!checkAccount()) {
    return;
  }
  const operatorContract = getOperatorContract();
  if (!operatorContract) {
    return;
  }
  const fromAddress = store.state.chain.account;
  return new Promise((resolve, reject) => {
    operatorContract.methods
      .openBox()
      .send({ from: fromAddress })
      .on("transactionHash", (hash) => {
        console.log("transactionHash:", hash);
      })
      .on("receipt", (receipt) => {
        resolve(receipt);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

/** 关注创作者 */
export function subscribeAuthorContract(address) {
  if (!checkAccount()) {
    return;
  }
  const operatorContract = getOperatorContract();
  if (!operatorContract) {
    return;
  }
  const fromAddress = store.state.chain.account;
  return new Promise((resolve, reject) => {
    operatorContract.methods
      .followUser(address)
      .send({ from: fromAddress })
      .on("transactionHash", (hash) => {
        console.log("transactionHash:", hash);
      })
      .on("receipt", (receipt) => {
        resolve(receipt);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

/** 查询我是否关注了 */
export function isFollow(account) {
  const operatorContract = getOperatorContract();
  if (!operatorContract) {
    return;
  }
  const fromAddress = store.state.chain.account;
  return new Promise((resolve, reject) => {
    operatorContract.methods
      .checkFollow(account)
      .call({ from: fromAddress })
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
