import allocationData from "./allocationData";

class AllocationService {
  async getAllocation() {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return allocationData;
  }
}

export default new AllocationService();