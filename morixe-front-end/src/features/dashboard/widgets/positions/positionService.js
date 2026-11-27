import positionData from "./positionData";

class PositionService {
  async getPositions() {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return positionData;
  }
}

export default new PositionService();