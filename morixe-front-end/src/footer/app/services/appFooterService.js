/**
 * App Footer Service
 */

import { appFooterData } from "../data";

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const appFooterService = {
  async getFooter() {
    await delay(100);

    return appFooterData;
  },
};

export default appFooterService;