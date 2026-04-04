"use client";

import { ButtonIcon } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ FIX

const HeaderDetailOrderPage = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.back();
  };

  return (
    <nav className="flex items-center gap-3 px-4 h-15 border-b border-gray-200">
      <ButtonIcon
        onClick={handleNavigate}
        title="Kembali"
        lucideIcon={ArrowLeft}
        className="text-black bg-transparent hover:bg-gray-100 rounded-full p-2"
      />
      <h4>Rincian Pesanan</h4>
    </nav>
  );
};

export default HeaderDetailOrderPage;