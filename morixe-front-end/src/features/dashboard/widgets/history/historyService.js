import historyData from "./historyData";

class HistoryService {
  async getHistory() {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return historyData;
  }
}

export default new HistoryService();