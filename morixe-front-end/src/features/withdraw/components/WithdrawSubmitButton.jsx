import {
  AlertTriangle,
  ArrowUpRight,
  Loader2,
} from "lucide-react";

const WithdrawSubmitButton = ({
  loading = false,
  canWithdraw = false,
  validationError = "",
  onSubmit,
}) => {
  return (
    <div className="space-y-4">

      {/* Validation Error */}

      {validationError && (
        <div
          className="
            flex
            items-start
            gap-3
            rounded-xl
            border
            border-red-500/30
            bg-red-500/10
            p-4
          "
        >
          <AlertTriangle
            size={20}
            className="
              mt-0.5
              shrink-0
              text-red-400
            "
          />

          <p
            className="
              text-sm
              leading-6
              text-red-300
            "
          >
            {validationError}
          </p>

        </div>
      )}

      {/* Submit Button */}

      <button
        type="button"
        disabled={!canWithdraw || loading}
        onClick={onSubmit}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-emerald-600
          px-6
          py-4
          text-base
          font-semibold
          text-white
          transition-all
          duration-200
          hover:bg-emerald-700
          disabled:cursor-not-allowed
          disabled:bg-slate-700
          disabled:text-slate-400
        "
      >
        {loading ? (
          <>
            <Loader2
              size={20}
              className="animate-spin"
            />

            Processing Withdrawal...
          </>
        ) : (
          <>
            <ArrowUpRight size={20} />

            Withdraw Crypto
          </>
        )}
      </button>

    </div>
  );
};

export default WithdrawSubmitButton;