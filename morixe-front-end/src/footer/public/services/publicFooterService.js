/**
 * Public Footer Service
 */

import { publicFooterData } from "../data";

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const publicFooterService = {
  async getFooter() {
    await delay(100);

    return publicFooterData;
  },
};

export default publicFooterService;