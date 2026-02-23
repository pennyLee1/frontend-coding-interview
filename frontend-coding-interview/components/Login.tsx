'use client';

import { Button } from "@headlessui/react"
import { Logo } from "./Logo"
import TextInput from "./TextInput"
import { useRouter } from "next/navigation"
import { useState } from "react";

export const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        if (username && password) {
            localStorage.setItem("isAuthenticated", "true");
            router.push("/photos");
        } else {
            alert("Please enter both username and password.");
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[319px] h-[395px]">
                <div className="w-full flex justify-center mb-4">
                    <Logo />
                </div>
                <h1 className="text-center text-2xl font-bold mb-[40px] mt-[24px]">
                    Sign in to your account
                </h1>
                <form onSubmit={handleSignIn}>
                    <TextInput
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        link="Forgot password?"
                        classes="mt-4"
                    />
                    <Button
                        type="submit"
                        className="mt-6 w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
};