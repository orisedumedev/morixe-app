/**
 * @component AuthCard
 * @description
 * Premium reusable authentication card used across Login, Register,
 * Forgot Password, Reset Password, Verification, and future auth flows.
 *
 * Designed with a modern glass-inspired appearance while avoiding
 * excessive backdrop blur that can reduce text clarity on some browsers.
 */

const AuthCard = ({ children }) => {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-3xl

        border
        border-slate-800

        bg-slate-900/90
        supports-[backdrop-filter]:bg-slate-900/75

        p-8
        sm:p-10

        shadow-[0_20px_80px_rgba(15,23,42,0.65)]
        ring-1
        ring-white/5

        transition-all
        duration-300

        hover:border-slate-700
        hover:shadow-[0_25px_90px_rgba(59,130,246,0.15)]
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-br
          from-blue-500/5
          via-transparent
          to-emerald-500/5
        "
      />

      {/* Top highlight */}
      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AuthCard;