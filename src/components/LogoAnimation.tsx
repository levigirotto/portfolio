export default function LogoAnimation() {
  return (
    <video
      src="/animations/logo-animation-dark.mp4"
      autoPlay
      loop
      muted
      className="fixed inset-0 w-full h-full object-cover opacity-15"
    />
  );
}