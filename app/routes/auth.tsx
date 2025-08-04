import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "../lib/puter";
import { useEffect } from "react";
import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analyzr" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);

  return (
    <main className="bg-bg-gradient min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="pt-30">
        <div className="gradient-border shadow-lg">
          <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
            <div className="flex flex-col items-center gap-2 text-center">
              <h1>Welcome</h1>
              <h2>Log In to Continue Your Job Journey</h2>
            </div>
            <div>
              {isLoading ? (
                <button className="auth-button animate-pulse">
                  <p>Signing in...</p>
                </button>
              ) : (
                <>
                  {auth.isAuthenticated ? (
                    <button className="auth-button" onClick={auth.signOut}>
                      <p>Log Out</p>
                    </button>
                  ) : (
                    <button className="auth-button" onClick={auth.signIn}>
                      <p>Log In</p>
                    </button>
                  )}
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
export default auth;
