import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/action";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
        <ArrowRightCircleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign Out</span>
      </button>
    </form>
  );
}
