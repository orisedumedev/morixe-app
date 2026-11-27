
import DashboardPreview from "@/components/DashboardPreview/DashboardPreview";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import TrustedStats from "@/components/TrustedStats/TrustedStats";
import MarketPreview from "@/components/MarketPreview/MarketPreview";
import SecuritySection from "@/components/SecuritySection/SecuritySection";


const Landing = () => {


return (

<div

className="
relative
min-h-screen
overflow-hidden
bg-slate-950
text-white
"

>
<div

className="
absolute
top-30
right-40
w-[500px]
h-[500px]
bg-blue-500/10
blur-[140px]
rounded-full

"

></div>   





<section
className="
max-w-7xl
mx-auto
px-6
pt-36
pb-20
grid
lg:grid-cols-2
gap-20
items-center
"
>


{/* LEFT SIDE */}

<div>


<h1
className="
text-6xl
font-bold
leading-tight
"
>

Trade Crypto

<br/>

<span
className="
text-blue-500
"
>
Smarter.
</span>

<br/>

Faster.

</h1>



<p
className="
mt-8
text-lg
text-slate-400
max-w-lg
leading-relaxed
"
>

A professional crypto trading platform built
for secure investing, real-time market analysis,
and smarter portfolio management.

</p>



<div
className="
flex
gap-5
mt-10
"
>

<button
className="
bg-blue-500
px-8
py-3
rounded-xl
font-semibold
"
>
Start Trading
</button>


<button
className="
border
border-slate-700
px-8
py-3
rounded-xl
"
>
Explore Markets
</button>


</div>


</div>



{/* RIGHT SIDE */}

<DashboardPreview />


</section>





<section
className="
max-w-7xl
mx-auto
px-6
mt-24
relative
z-10
grid
md:grid-cols-3
gap-8

"
>


<FeatureCard

icon="🛡"

title="Secure Trading"

description="Enterprise security protecting your assets."

/>



<FeatureCard

icon="📈"

title="Advanced Analytics"

description="Track markets with powerful insights."

/>



<FeatureCard

icon="⚡"

title="Real-Time Data"

description="Live prices and market updates."

/>



</section>

<TrustedStats/>

<MarketPreview/>

<SecuritySection/>

</div>


)

}


export default Landing;