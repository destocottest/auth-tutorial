import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function HomePage() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-radial-sky-blue">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            poppins.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">a simple authentication service</p>
        <div className="">
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
