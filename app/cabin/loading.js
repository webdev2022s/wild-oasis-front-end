import SpinnerCabin from "../_components/SpinnerCabin";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <SpinnerCabin />
      <p className="text-xs uppercase text-accent-600">
        Loading Cabin Data ....
      </p>
    </div>
  );
}
