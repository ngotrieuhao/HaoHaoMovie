export function ErrorComponent({ error }) {
  return (
    <div className="p-5 text-red-500 border border-red-500 rounded-xl">
      Something went wrong with this component {error.message}
    </div>
  );
}
