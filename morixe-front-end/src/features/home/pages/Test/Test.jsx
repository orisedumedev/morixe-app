import { Mail } from "lucide-react";
import { useState } from "react";
import { AuthLayout, AuthCard } from "@/components/Auth";
import InputField from "@/components/Ui/Form/InputField";

const Test = () => {
  const [email, setEmail] = useState("");

  return (
    <AuthLayout>
      <AuthCard>
            <InputField
                id="email"
                label="Email Address"
                placeholder="Enter your email"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
      </AuthCard>
    </AuthLayout>
  );
};

export default Test;