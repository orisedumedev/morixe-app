import performanceData from "./performanceData";

class PerformanceService {
  async getPerformance() {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return performanceData;
  }
}

export default new PerformanceService();