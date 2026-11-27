import {
  navigation,
  announcement,
  languages,
  publicNavbarSettings,
} from "../data";

const getNavigation = () => navigation;

const getAnnouncement = () => announcement;

const getLanguages = () => languages;

const getSettings = () => publicNavbarSettings;

const publicNavbarService = {
  getNavigation,
  getAnnouncement,
  getLanguages,
  getSettings,
};

export default publicNavbarService;