import transactionData from "./transactionData";

class TransactionService {
  async getTransactions() {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return transactionData;
  }
}

export default new TransactionService();