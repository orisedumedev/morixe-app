import {
  Copy,
  Check,
  Download,
  QrCode,
} from "lucide-react";

import { useState } from "react";

const DepositQRCode = ({
  asset,
  network,
  qrCode,
  address,
}) => {
  const [copied, setCopied] =
    useState(false);

  if (!asset) return null;

  const shortAddress = address
    ? `${address.slice(0, 10)}...${address.slice(-10)}`
    : "";

  const handleCopy = async () => {
    if (!address) return;

    try {
      await navigator.clipboard.writeText(
        address
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = () => {
    if (!qrCode) return;

    const link =
      document.createElement("a");

    link.href = qrCode;

    link.download = `${asset.symbol}-${network}-QRCode.png`;

    link.click();
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
      "
    >
      {/* Header */}

      <div className="border-b border-slate-800 p-6">

        <h2 className="text-xl font-semibold text-white">
          Deposit QR Code
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Scan this QR code using your wallet.
        </p>

      </div>

      {/* Body */}

      <div className="p-6">

        {/* QR */}

        <div
          className="
            mx-auto
            flex
            h-72
            w-72
            items-center
            justify-center
            rounded-2xl
            bg-white
            p-4
          "
        >
          {qrCode ? (
            <img
              src={qrCode}
              alt={`${asset.symbol} QR`}
              className="
                h-full
                w-full
                object-contain
              "
            />
          ) : (
            <QrCode
              size={160}
              className="text-slate-400"
            />
          )}
        </div>

        {/* Asset */}

        <div className="mt-6 text-center">

          <h3 className="text-xl font-semibold text-white">
            {asset.name}
          </h3>

          <p className="mt-1 text-slate-400">
            {asset.symbol}
          </p>

        </div>

        {/* Network */}

        <div className="mt-6">

          <div
            className="
              rounded-xl
              bg-slate-800
              p-4
            "
          >
            <p className="text-sm text-slate-400">
              Network
            </p>

            <p className="mt-2 font-medium text-white">
              {network}
            </p>

          </div>

        </div>

        {/* Address */}

        <div className="mt-4">

          <div
            className="
              rounded-xl
              bg-slate-800
              p-4
            "
          >
            <p className="text-sm text-slate-400">
              Deposit Address
            </p>

            <p
              className="
                mt-2
                break-all
                text-sm
                text-white
              "
            >
              {shortAddress}
            </p>

          </div>

        </div>

        {/* Buttons */}

        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-4
          "
        >
          <button
            type="button"
            onClick={handleCopy}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              py-3
              font-medium
              text-white
              transition
              hover:bg-blue-700
            "
          >
            {copied ? (
              <>
                <Check size={18} />
                Copied
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              py-3
              font-medium
              text-white
              transition
              hover:bg-slate-700
            "
          >
            <Download size={18} />
            Download
          </button>

        </div>

      </div>

    </div>
  );
};

export default DepositQRCode;