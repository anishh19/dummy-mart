import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();
  if (session) {
    console.log(session.user.name);
  }

  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="flex justify-evenly md:justify-between md:py-3 text-xl gap-2 bg-gray-800 w-full pt-2 pr-4 text-white">
      <Link href="/">
        <div className="text-2xl align-middle md:text-4xl p-1">DummyMart</div>
      </Link>
      <form className="w-2/5 md:pl-0 md:h-10 h-8 flex flex-row align-center justify-between ">
        <input
          onChange={handleChange}
          className="w-24 grow text-black p-2 rounded-l-xl"
          type="text"
          id="search"
        ></input>
        <Link href={`/search/${query}`} className="w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="bg-white h-8 w-8 md:h-10   rounded-r-xl"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </form>
      <div className="flex justify-end md:justify-between w-48">
        {session ? (
          <>
            <button className="text-lg" onClick={() => signOut()}>
              Sign out
            </button>
            <Link href="/wishlist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </Link>

            <Link href="/cart">
              <div className="text-sm md:text-lg absolute top-0 right-2">
                {getItemsCount()}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </Link>
          </>
        ) : (
          <>
            <button className="text-lg" onClick={() => signIn()}>
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
