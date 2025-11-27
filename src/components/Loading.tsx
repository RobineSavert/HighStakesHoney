export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <span className="animate-spin text-[200px] font-semibold text-red-900">&#9829;</span>
      <p className="text-2xl font-semibold text-white/40">loading..</p>
    </div>
  );
}
