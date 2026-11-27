import {
  useEffect,
  useState,
} from "react";

import settingsService from "../services/settingsService";

const useSettings = () => {
  const [loading, setLoading] =
    useState(true);

  const [general, setGeneral] =
    useState(null);

  const [security, setSecurity] =
    useState(null);

  const [
    notifications,
    setNotifications,
  ] = useState(null);

  const [
    appearance,
    setAppearance,
  ] = useState(null);

  const [language, setLanguage] =
    useState(null);

  const [currency, setCurrency] =
    useState(null);

  const [password, setPassword] =
    useState(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setLoading(true);

    try {
      const data =
        await settingsService.getSettings();

      setGeneral(data.general);

      setSecurity(data.security);

      setNotifications(
        data.notifications
      );

      setAppearance(
        data.appearance
      );

      setLanguage(
        data.language
      );

      setCurrency(
        data.currency
      );

      setPassword(
        data.password
      );
    } finally {
      setLoading(false);
    }
  };

  const updateGeneral =
    async (data) => {
      const updated =
        await settingsService.updateGeneral(
          data
        );

      setGeneral(updated);
    };

  const updateSecurity =
    async (data) => {
      const updated =
        await settingsService.updateSecurity(
          data
        );

      setSecurity(updated);
    };

  const updateNotifications =
    async (data) => {
      const updated =
        await settingsService.updateNotifications(
          data
        );

      setNotifications(updated);
    };

  const updateAppearance =
    async (data) => {
      const updated =
        await settingsService.updateAppearance(
          data
        );

      setAppearance(updated);
    };

  const updateLanguage =
    async (data) => {
      const updated =
        await settingsService.updateLanguage(
          data
        );

      setLanguage(updated);
    };

  const updateCurrency =
    async (data) => {
      const updated =
        await settingsService.updateCurrency(
          data
        );

      setCurrency(updated);
    };

  const updatePassword =
    async (data) => {
      const updated =
        await settingsService.updatePassword(
          data
        );

      setPassword(updated);
    };

  return {
    loading,

    general,
    security,
    notifications,
    appearance,
    language,
    currency,
    password,

    updateGeneral,
    updateSecurity,
    updateNotifications,
    updateAppearance,
    updateLanguage,
    updateCurrency,
    updatePassword,

    reload: loadSettings,
  };
};

export default useSettings;