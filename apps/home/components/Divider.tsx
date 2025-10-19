export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`my-4 xl:my-6 h-px w-full bg-black/10 ${className}`} />
  );
}
