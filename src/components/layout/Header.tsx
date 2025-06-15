"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="navbar">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-2xl font-bold">
          torutoru
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-neutral"
          >
            <li>
              <Link href="/learn">Vocabulary</Link>
            </li>
            <li>
              <Link href="/phrases">Phrases</Link>
            </li>
            <li>
              <Link href="/quiz">Quiz</Link>
            </li>
            <div className="divider my-1"></div>
            {session ? (
              <>
                <li>
                  <Link href="/account">
                    {session.user?.name || "Account"}
                  </Link>
                </li>
                <li>
                  <button onClick={() => signOut()}>Sign Out</button>
                </li>
              </>
            ) : (
              <li>
                <button onClick={() => signIn()}>Sign In</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
} 