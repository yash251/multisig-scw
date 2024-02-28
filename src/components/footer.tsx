import Link from "next/link";

// Define the Footer function
export default function Footer() {
  return (
    <div className="w-full px-6 border-t border-t-gray-700 py-2 text-center">
      Build your own account-abstracted multisig wallet with{" "}
      <Link
        href="https://twitter.com/0x_yasshhh_"
        target="_blank"
        className="text-blue-500 hover:text-blue-600"
      >
        0x_yasshhh_
      </Link>
      !
    </div>
  );
}