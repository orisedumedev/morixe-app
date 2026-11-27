const SidebarHeader = ({ collapsed }) => {
  return (
    <div
      className="
        h-20
        flex
        items-center
        justify-center
        border-b
        border-slate-800
      "
    >
      <h1
        className={`
          font-bold
          text-blue-500
          transition-all
          ${
            collapsed
              ? "text-xl"
              : "text-2xl"
          }
        `}
      >
        {collapsed ? "M" : "Morixe"}
      </h1>
    </div>
  );
};

export default SidebarHeader;