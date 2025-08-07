import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "../lib/puter";
import { useEffect } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analyzr" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate("/");
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-bg-gradient max-h-screen grid md:grid-cols-2 items-center">
      <div className=" flex items-center justify-center max-md:hidden">
        <img
          src="/images/auth-logo.png"
          alt="auth logo"
          className="w-[60%] h-auto object-contain"
        />
      </div>

      <div className="mx-auto">
        <div className="gradient-border shadow-lg w-full">
          <section className="flex flex-col gap-8 bg-white dark:bg-secondary rounded-2xl p-10">
            {/* Header Text */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-gradient text-4xl font-bold">Welcome</h1>
              <h2 className="text-gradient text-lg font-medium">
                Get AI-powered feedback on your resume
              </h2>
            </div>

            {/* Auth Button */}
            <div className="flex justify-center">
              {isLoading ? (
                <button className="auth-button animate-pulse">
                  <p>Signing in...</p>
                </button>
              ) : auth.isAuthenticated ? (
                <button className="auth-button" onClick={auth.signOut}>
                  <p>Log Out</p>
                </button>
              ) : (
                <button className="auth-button" onClick={auth.signIn}>
                  <p>Log In</p>
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
export default auth;
