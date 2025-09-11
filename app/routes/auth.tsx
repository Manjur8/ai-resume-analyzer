import { useEffect } from 'react'
import type { Route } from "./+types/home";
import { usePuterStore } from '~/lib/puter';
import { useLocation, useNavigate } from 'react-router';


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumine | Auth" },
    { name: "description", content: "Login page for Resumine" },
  ];
}

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const navigate = useNavigate();
    const location = useLocation();
    const next = location.search.split("next=")[1]

    useEffect(() => {
        if(auth.isAuthenticated)  navigate(next || "/");
    }, [auth.isAuthenticated])
    
    return (
        <main className="flex items-center justify-center">
                <div className="glass-card rounded-3xl shadow-2xl w-full max-w-lg p-10 relative z-10">
                    <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                        {/* <!-- Header Section --> */}
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-3">Welcome</h1>
                            <p className="text-gray-600 text-lg font-light">Log In to Continue Your Job Journey</p>
                        </div>
                        <div className='space-y-6'>
                            {isLoading ? (
                                <button className="auth-button animate-pulse">
                                    <p>Signing you in...</p>
                                </button>
                            ) : (
                                <>
                                    {auth.isAuthenticated ? (
                                        <button
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                                            onClick={auth.signOut}>
                                            <p>Log Out</p>
                                        </button>
                                    ) : (
                                        <button
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                                            onClick={() => {auth.signIn(); }}>
                                            <p>Log In</p>
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </section>
                </div>
            </main>
    )
}

export default Auth