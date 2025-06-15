"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="bg-base-100 text-base-content">
      <div className="navbar max-w-4xl mx-auto">
        <div className="navbar-start">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-2xl font-bold"
          >
            Torutoru
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/vocabulary">Vocabulary</Link>
            </li>
            <li>
              <Link href="/phrases">Phrases</Link>
            </li>
            <li>
              <Link href="/quiz">Quiz</Link>
            </li>
            {session ? (
              <li>
                <button onClick={() => signOut()}>Log out</button>
              </li>
            ) : (
              <li>
                <button onClick={() => signIn()}>Log in</button>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/vocabulary">Vocabulary</Link>
              </li>
              <li>
                <Link href="/phrases">Phrases</Link>
              </li>
              <li>
                <Link href="/quiz">Quiz</Link>
              </li>
              <div className="divider my-1"></div>
              {session ? (
                <li>
                  <button onClick={() => signOut()}>Log out</button>
                </li>
              ) : (
                <li>
                  <button onClick={() => signIn()}>Log in</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 