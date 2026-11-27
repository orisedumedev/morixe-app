/**
 * @component DashboardPreview
 * @description
 * Interactive dashboard preview component designed for marketing and
 * onboarding screens. Simulates a mobile crypto dashboard with animated
 * particles, glowing backgrounds, hover interactions, and mock financial
 * data visualization.
 *
 * @architecture
 * - Uses Tailwind utility classes for consistent styling and responsive
 *   behavior.
 * - Hover state is managed via local component state to animate the phone
 *   scaling and rotation.
 * - Crypto particles and glow layers are purely decorative and rely on
 *   absolute positioning + CSS animations.
 * - SVG polyline chart is rendered inline for lightweight visualization.
 *
 * @responsibilities
 * - Provide an animated, visually rich dashboard preview.
 * - Demonstrate UI motion, color hierarchy, and crypto-themed styling.
 * - Serve as a hero element for landing or authentication pages.
 *
 * @constraints
 * - Must remain presentation-only; no real financial data or logic.
 * - Should not introduce heavy animation libraries to preserve performance.
 *
 * @risks
 * - Excessive blur or glow may reduce readability on dark backgrounds.
 * - Overuse of absolute positioning may cause layout issues on small screens.
 */

import { useState } from "react";
import "./dashboardPreview.css";
import { Home, BarChart3, Wallet, User } from "lucide-react";

const DashboardPreview = () => {
  const [hover, setHover] = useState(false); // Controls phone hover animation

  return (
    <div
      className="
        relative
        flex justify-center items-center
        hero-phone
      "
    >
      {/* BACKGROUND GLOW — ambient blue halo */}
      <div
        className="
          absolute
          w-[450px] h-[450px]
          bg-blue-500/20
          blur-[130px]
          rounded-full
          animate-pulse
        "
      />

      {/* CRYPTO PARTICLES — decorative floating symbols */}
      <div className="crypto-particle bitcoin">₿</div>
      <div className="crypto-particle eth">◆</div>
      <div className="crypto-particle sol">◎</div>

      {/* PHONE CONTAINER — interactive hover scaling + rotation */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`
          relative
          w-[310px] h-[620px]
          rounded-[45px]
          bg-slate-950
          border border-blue-400/30
          p-3
          shadow-[0_0_80px_rgba(59,130,246,0.35)]
          transition duration-500
          ${hover ? "scale-105 rotate-2" : ""}
        `}
      >
        {/* SCREEN AREA */}
        <div
          className="
            relative
            h-full
            bg-slate-900
            rounded-[35px]
            p-5
            overflow-hidden
          "
        >
          {/* HEADER — balance + notification */}
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-slate-400">Balance</p>
              <h2 className="text-2xl font-bold">$24,567</h2>
              <p className="text-green-400 text-sm">▲ 5.24%</p>
            </div>

            <span>🔔</span>
          </div>

          {/* CHART — inline SVG polyline */}
          <div
            className="
              mt-8
              bg-slate-800
              rounded-2xl
              p-3
            "
          >
            <svg viewBox="0 0 300 120" className="w-full">
              <polyline
                className="chart-line"
                points="
                  0,90
                  40,70
                  80,85
                  120,40
                  160,65
                  210,30
                  260,55
                  300,20
                "
                fill="none"
                stroke="#3B82F6"
                strokeWidth="4"
              />
            </svg>
          </div>

          {/* ACTION BUTTONS — Buy / Sell */}
          <div
            className="
              grid grid-cols-2
              gap-3
              mt-5
            "
          >
            <button
              className="
                bg-blue-500
                rounded-xl
                py-3
                font-semibold
                hover:shadow-lg hover:shadow-blue-500/50
                transition
              "
            >
              Buy
            </button>

            <button
              className="
                border border-slate-700
                rounded-xl
                hover:bg-slate-800
                transition
              "
            >
              Sell
            </button>
          </div>

          {/* COIN LIST — mock crypto data */}
          <div className="mt-6 space-y-3">
            {[
              ["BTC", "67,245", "+4.25%"],
              ["ETH", "3,456", "+2.14%"],
              ["SOL", "152", "-1.23%"],
            ].map((coin) => (
              <div
                key={coin[0]}
                className="
                  bg-slate-800
                  rounded-xl
                  p-3
                  flex justify-between
                  hover:translate-x-2
                  transition
                "
              >
                <div>
                  <p className="font-bold">{coin[0]}</p>
                  <span className="text-xs text-slate-400">Crypto</span>
                </div>

                <div>
                  <p>${coin[1]}</p>
                  <p
                    className={
                      coin[2].includes("+")
                        ? "text-green-400 text-xs"
                        : "text-red-400 text-xs"
                    }
                  >
                    {coin[2]}
                  </p>
                </div>

                {/* BOTTOM NAV — mobile-style navigation bar */}
                <div
                  className="
                    absolute
                    bottom-5 left-5 right-5
                    bg-slate-800/90
                    backdrop-blur-md
                    rounded-2xl
                    p-3
                    flex justify-around items-center
                    border border-slate-700
                    shadow-lg
                  "
                >
                  <Home
                    size={18}
                    className="
                      text-blue-400
                      cursor-pointer
                      hover:scale-125
                      transition
                    "
                  />

                  <BarChart3
                    size={18}
                    className="
                      text-slate-400
                      cursor-pointer
                      hover:text-blue-400
                      hover:scale-125
                      transition
                    "
                  />

                  <Wallet
                    size={18}
                    className="
                      text-slate-400
                      cursor-pointer
                      hover:text-green-400
                      hover:scale-125
                      transition
                    "
                  />

                  <User
                    size={18}
                    className="
                      text-slate-400
                      cursor-pointer
                      hover:text-blue-400
                      hover:scale-125
                      transition
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
