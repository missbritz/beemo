'use client';
import { useRouter } from 'next/navigation';

function BackButton({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  const router = useRouter();
  return (
    <button className={`${className} text-sm md:mb-14 mb-5 text-gray-600 font-bold focus:text-pink-500 hover:text-pink-500`} onClick={() => router.back()}>
      {children}
    </button>
  );
}

export default BackButton;