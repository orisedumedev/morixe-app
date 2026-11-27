import {
  ArrowDownCircle,
  ArrowUpCircle,
  LogIn,
  ShoppingCart,
} from "lucide-react";

const activityIcons = {
  "Logged In": LogIn,
  Deposit: ArrowDownCircle,
  Withdrawal: ArrowUpCircle,
  Trade: ShoppingCart,
};

const ProfileActivity = ({
  activity = [],
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-4">

        {activity.length === 0 ? (
          <div className="py-8 text-center text-slate-400">
            No recent activity.
          </div>
        ) : (
          activity.map((item) => {
            const Icon =
              activityIcons[item.action] ??
              ShoppingCart;

            return (
              <div
                key={item.id}
                className="flex items-start gap-4 rounded-xl bg-slate-800 p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                  <Icon
                    size={18}
                    className="text-white"
                  />
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3 className="font-medium text-white">
                      {item.action}
                    </h3>

                    <span className="text-xs text-slate-400">
                      {item.date}
                    </span>

                  </div>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })
        )}

      </div>

    </div>
  );
};

export default ProfileActivity;