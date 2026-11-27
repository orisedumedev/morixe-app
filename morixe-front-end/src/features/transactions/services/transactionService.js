import transactionData from "../data/transactionData";

class TransactionService {
  async getTransactions() {
    return Promise.resolve(transactionData);
  }

  async getTransaction(id) {
    return Promise.resolve(
      transactionData.find(
        (transaction) => transaction.id === id
      )
    );
  }

  async searchTransactions(query = "") {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return Promise.resolve(transactionData);
    }

    return Promise.resolve(
      transactionData.filter(
        (transaction) =>
          transaction.asset
            .toLowerCase()
            .includes(keyword) ||
          transaction.type
            .toLowerCase()
            .includes(keyword) ||
          transaction.network
            .toLowerCase()
            .includes(keyword) ||
          transaction.status
            .toLowerCase()
            .includes(keyword)
      )
    );
  }
}

export default new TransactionService();