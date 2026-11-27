import {
  useEffect,
  useState,
} from "react";

import {
  AppearanceSettings,
  CurrencySettings,
  DangerZone,
  GeneralSettings,
  LanguageSettings,
  NotificationSettings,
  PasswordSettings,
  SecuritySettings,
  SettingsSidebar,
} from "../components";

import {
  useSettings,
} from "../hooks";

const Settings = () => {
  const {
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
  } = useSettings();

  const [
    activeSection,
    setActiveSection,
  ] = useState("general");

  const [
    generalForm,
    setGeneralForm,
  ] = useState(null);

    useEffect(() => {
    if (general) {
        setGeneralForm(general);
    }
    }, [general]);

  const updateGeneralField = (
    field,
    value
  ) => {
    setGeneralForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateNotification = (
    field,
    value
  ) => {
    updateNotifications({
      ...notifications,
      [field]: value,
    });
  };

  const updateAppearanceField = (
    field,
    value
  ) => {
    updateAppearance({
      ...appearance,
      [field]: value,
    });
  };

  const updateLanguageField = (
    field,
    value
  ) => {
    updateLanguage({
      ...language,
      [field]: value,
    });
  };

  const updateCurrencyField = (
    field,
    value
  ) => {
    updateCurrency({
      ...currency,
      [field]: value,
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "general":
        return (
          <GeneralSettings
            general={generalForm}
            onChange={
              updateGeneralField
            }
            onSave={() =>
              updateGeneral(
                generalForm
              )
            }
          />
        );

      case "security":
        return (
          <SecuritySettings
            security={security}
            onSave={
              updateSecurity
            }
          />
        );

      case "notifications":
        return (
          <NotificationSettings
            notifications={
              notifications
            }
            onChange={
              updateNotification
            }
          />
        );

      case "appearance":
        return (
          <AppearanceSettings
            appearance={
              appearance
            }
            onChange={
              updateAppearanceField
            }
          />
        );

      case "language":
        return (
          <LanguageSettings
            language={language}
            onChange={
              updateLanguageField
            }
          />
        );

      case "currency":
        return (
          <CurrencySettings
            currency={currency}
            onChange={
              updateCurrencyField
            }
          />
        );

      case "password":
        return (
          <PasswordSettings
            password={password}
            onSave={
              updatePassword
            }
          />
        );

      case "danger":
        return (
          <DangerZone
            onLogoutAll={() =>
              console.log(
                "Logout all devices"
              )
            }
            onDeleteAccount={() =>
              console.log(
                "Delete account"
              )
            }
          />
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center">

        <p className="text-slate-400">
          Loading Settings...
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Page Header */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your account,
          security, preferences,
          appearance, and
          notifications.
        </p>

      </div>

      {/* Layout */}

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">

        {/* Sidebar */}

        <SettingsSidebar
          active={activeSection}
          onChange={
            setActiveSection
          }
        />

        {/* Content */}

        <div>
          {renderContent()}
        </div>

      </div>

    </div>
  );
};

export default Settings;