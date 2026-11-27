/**
 * @component BackgroundParticles
 * @description
 * Animated background component used to create ambient motion and glow
 * effects behind authentication layouts. Particles are generated from a
 * configuration array to ensure predictable behavior and easy expansion.
 *
 * @architecture
 * - Particle definitions are stored in a static array to keep rendering
 *   declarative and avoid unnecessary re-renders.
 * - Glow elements are rendered as large blurred circles to create depth
 *   without relying on heavy image assets.
 * - Tailwind utility classes are used directly for consistent styling.
 *
 * @responsibilities
 * - Render ambient glow layers (blue + green).
 * - Render floating particles with configurable size, position, and delay.
 * - Provide a visually rich but non-intrusive background for auth screens.
 *
 * @constraints
 * - Must remain presentation-only; no business logic or state management.
 * - Particle count should remain low to avoid performance degradation.
 *
 * @risks
 * - Incorrect z-index layering may cause particles to overlap foreground UI.
 * - Excessive blur or glow intensity may reduce readability on dark themes.
 */

const particles = [
  // Particle configuration objects — define size, position, and animation delay
  { id: 1, size: "w-3 h-3", top: "10%", left: "15%", delay: "0s" },
  { id: 2, size: "w-5 h-5", top: "20%", right: "10%", delay: "2s" },
  { id: 3, size: "w-2 h-2", top: "60%", left: "8%", delay: "4s" },
  { id: 4, size: "w-4 h-4", bottom: "18%", right: "20%", delay: "1s" },
  { id: 5, size: "w-3 h-3", bottom: "10%", left: "45%", delay: "3s" },
];

const BackgroundParticles = () => {
  return (
    <>
      {/* Blue ambient glow — positioned top-left */}
      <div
        className="
          absolute -top-40 -left-40
          w-[500px] h-[500px]
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />

      {/* Green ambient glow — positioned bottom-right */}
      <div
        className="
          absolute bottom-[-150px] right-[-150px]
          w-[600px] h-[600px]
          rounded-full
          bg-emerald-500/30
          blur-[150px]
        "
      />

      {/* Floating particles — generated from configuration array */}
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={`particle ${particle.size}`} // Tailwind size + custom animation class
          style={{
            top: particle.top,
            left: particle.left,
            right: particle.right,
            bottom: particle.bottom,
            animationDelay: particle.delay, // Staggered animation timing
          }}
        />
      ))}
    </>
  );
};

export default BackgroundParticles;
