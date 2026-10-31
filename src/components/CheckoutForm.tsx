"use client";

import { useState } from "react";
import { Send, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

type CheckoutFormProps = {
  onBack: () => void;
};

type FormData = {
  nama: string;
  telepon: string;
  metode: "Ambil Sendiri (Pickup)" | "Delivery (Pesan Antar)";
  tanggal: string;
  waktu: string;
  alamat: string;
  catatan: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function CheckoutForm({ onBack }: CheckoutFormProps) {
  const { cartItems, getTotalPrice, clearCart, closeCart } = useCart();
  const totalPrice = getTotalPrice();

  // Dapatkan tanggal besok atau hari ini sebagai nilai minimum pre-order
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState<FormData>({
    nama: "",
    telepon: "",
    metode: "Ambil Sendiri (Pickup)",
    tanggal: today,
    waktu: "10:00",
    alamat: "",
    catatan: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nama.trim()) {
      newErrors.nama = "Nama lengkap wajib diisi.";
    } else if (formData.nama.trim().length < 3) {
      newErrors.nama = "Nama terlalu pendek (minimal 3 karakter).";
    }

    const cleanPhone = formData.telepon.replace(/\D/g, "");
    if (!formData.telepon.trim()) {
      newErrors.telepon = "Nomor WhatsApp wajib diisi.";
    } else if (cleanPhone.length < 9 || cleanPhone.length > 15) {
      newErrors.telepon = "Nomor WhatsApp tidak valid (9-15 digit).";
    }

    if (!formData.tanggal) {
      newErrors.tanggal = "Tanggal pre-order wajib dipilih.";
    }

    if (!formData.waktu) {
      newErrors.waktu = "Waktu pengambilan/kirim wajib diisi.";
    }

    if (formData.metode === "Delivery (Pesan Antar)" && !formData.alamat.trim()) {
      newErrors.alamat = "Alamat pengiriman wajib diisi untuk layanan pesan antar.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (cartItems.length === 0) {
      alert("Keranjang belanja kosong!");
      return;
    }

    setIsSubmitting(true);

    // Format list pesanan
    const itemsList = cartItems
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.name} (${item.quantity}x) = Rp ${(
            item.price * item.quantity
          ).toLocaleString("id-ID")}`
      )
      .join("\n");

    // Format pesan WhatsApp persis dan rapi
    const message = [
      "Halo Arini Bakery, saya ingin melakukan Pre-Order:",
      "",
      "📋 *DATA PEMESAN:*",
      `- *Nama:* ${formData.nama.trim()}`,
      `- *No. WhatsApp:* ${formData.telepon.trim()}`,
      `- *Metode:* ${formData.metode}`,
      `- *Tanggal Pre-Order:* ${formData.tanggal}`,
      `- *Jam:* ${formData.waktu}`,
      formData.metode === "Delivery (Pesan Antar)"
        ? `- *Alamat Pengiriman:* ${formData.alamat.trim()}`
        : "- *Lokasi:* Ambil di Toko Arini Bakery",
      formData.catatan.trim() ? `- *Catatan Tambahan:* ${formData.catatan.trim()}` : "",
      "",
      "🛒 *DETAIL PESANAN:*",
      itemsList,
      "",
      `💰 *TOTAL PEMBAYARAN:* Rp ${totalPrice.toLocaleString("id-ID")}`,
      "",
      "Mohon konfirmasi ketersediaan dan rincian pembayarannya ya. Terima kasih! 🙏",
    ]
      .filter((line) => line !== undefined && line !== null)
      .join("\n");

    // WhatsApp Direct Link
    const waUrl = `https://wa.me/6281336664010?text=${encodeURIComponent(message)}`;

    // Buka WhatsApp di tab baru
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Kosongkan keranjang & tampilkan status sukses
    clearCart();
    setIsSuccess(true);
    setIsSubmitting(false);

    // Tutup drawer setelah beberapa saat
    setTimeout(() => {
      closeCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-xl font-heading font-extrabold text-text-main">
          Pesanan Terkirim ke WhatsApp!
        </h3>
        <p className="text-sm text-text-main/75 max-w-xs mx-auto leading-relaxed">
          Keranjang telah dikosongkan. Tim Arini Bakery akan segera mengonfirmasi pesanan Anda.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Header Form */}
      <div className="flex items-center gap-2 pb-2 border-b border-[#3E2723]/10">
        <button
          type="button"
          onClick={onBack}
          className="p-1.5 rounded-lg hover:bg-[#3E2723]/5 text-text-main transition-colors"
          aria-label="Kembali ke keranjang"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h3 className="font-heading font-bold text-base text-text-main">
            Data Pemesan Pre-Order
          </h3>
          <p className="text-xs text-text-main/60">
            Pesanan akan diteruskan langsung ke WhatsApp resmi toko
          </p>
        </div>
      </div>

      {/* Input Nama */}
      <div>
        <label className="block text-xs font-heading font-bold text-text-main mb-1">
          Nama Lengkap <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          value={formData.nama}
          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          placeholder="Contoh: Rina Kusuma"
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-body bg-white outline-none transition-all ${
            errors.nama
              ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
              : "border-[#3E2723]/15 focus:border-btn-primary focus:ring-2 focus:ring-[#FDE68A]"
          }`}
        />
        {errors.nama && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.nama}
          </p>
        )}
      </div>

      {/* Input No WhatsApp */}
      <div>
        <label className="block text-xs font-heading font-bold text-text-main mb-1">
          Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
        </label>
        <input
          type="tel"
          value={formData.telepon}
          onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
          placeholder="Contoh: 081234567890"
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-body bg-white outline-none transition-all ${
            errors.telepon
              ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
              : "border-[#3E2723]/15 focus:border-btn-primary focus:ring-2 focus:ring-[#FDE68A]"
          }`}
        />
        {errors.telepon && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.telepon}
          </p>
        )}
      </div>

      {/* Metode Pengambilan */}
      <div>
        <label className="block text-xs font-heading font-bold text-text-main mb-1.5">
          Metode Pemesanan
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, metode: "Ambil Sendiri (Pickup)" })
            }
            className={`py-2 px-3 rounded-xl text-xs font-heading font-bold border transition-all text-center ${
              formData.metode === "Ambil Sendiri (Pickup)"
                ? "bg-[#FDE68A] border-accent-orange text-btn-primary shadow-sm"
                : "bg-white border-[#3E2723]/15 text-text-main/70 hover:bg-[#FDF8F0]"
            }`}
          >
            🏪 Ambil di Toko
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, metode: "Delivery (Pesan Antar)" })
            }
            className={`py-2 px-3 rounded-xl text-xs font-heading font-bold border transition-all text-center ${
              formData.metode === "Delivery (Pesan Antar)"
                ? "bg-[#FDE68A] border-accent-orange text-btn-primary shadow-sm"
                : "bg-white border-[#3E2723]/15 text-text-main/70 hover:bg-[#FDF8F0]"
            }`}
          >
            🛵 Pesan Antar
          </button>
        </div>
      </div>

      {/* Tanggal & Waktu */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-xs font-heading font-bold text-text-main mb-1">
            Tanggal Pre-Order <span className="text-rose-500">*</span>
          </label>
          <input
            type="date"
            min={today}
            value={formData.tanggal}
            onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
            className={`w-full px-3 py-2 rounded-xl border text-xs font-body bg-white outline-none ${
              errors.tanggal ? "border-rose-400" : "border-[#3E2723]/15 focus:border-btn-primary"
            }`}
          />
          {errors.tanggal && (
            <p className="mt-1 text-[11px] text-rose-500">{errors.tanggal}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-heading font-bold text-text-main mb-1">
            Perkiraan Jam <span className="text-rose-500">*</span>
          </label>
          <input
            type="time"
            value={formData.waktu}
            onChange={(e) => setFormData({ ...formData, waktu: e.target.value })}
            className={`w-full px-3 py-2 rounded-xl border text-xs font-body bg-white outline-none ${
              errors.waktu ? "border-rose-400" : "border-[#3E2723]/15 focus:border-btn-primary"
            }`}
          />
          {errors.waktu && (
            <p className="mt-1 text-[11px] text-rose-500">{errors.waktu}</p>
          )}
        </div>
      </div>

      {/* Alamat Pengiriman (jika pesan antar) */}
      {formData.metode === "Delivery (Pesan Antar)" && (
        <div className="animate-in fade-in duration-200">
          <label className="block text-xs font-heading font-bold text-text-main mb-1">
            Alamat Pengiriman Lengkap <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={2}
            value={formData.alamat}
            onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
            placeholder="Jalan, No. Rumah, RT/RW, Kecamatan, Patokan..."
            className={`w-full px-3 py-2 rounded-xl border text-xs font-body bg-white outline-none resize-none ${
              errors.alamat ? "border-rose-400" : "border-[#3E2723]/15 focus:border-btn-primary"
            }`}
          />
          {errors.alamat && (
            <p className="mt-0.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" />
              {errors.alamat}
            </p>
          )}
        </div>
      )}

      {/* Catatan Khusus */}
      <div>
        <label className="block text-xs font-heading font-bold text-text-main mb-1">
          Catatan Tambahan (Opsional)
        </label>
        <textarea
          rows={2}
          value={formData.catatan}
          onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
          placeholder="Contoh: Roti jangan dipotong, cantumkan ucapan selamat..."
          className="w-full px-3 py-2 rounded-xl border border-[#3E2723]/15 text-xs font-body bg-white outline-none resize-none focus:border-btn-primary"
        />
      </div>

      {/* Total & Submit Button */}
      <div className="pt-2 border-t border-[#3E2723]/10 space-y-3">
        <div className="flex justify-between items-center text-sm font-heading">
          <span className="text-text-main/70">Total yang Dibayarkan:</span>
          <span className="text-lg font-extrabold text-btn-primary">
            Rp {totalPrice.toLocaleString("id-ID")}
          </span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          <span>Kirim Pre-Order via WhatsApp</span>
        </button>
      </div>
    </form>
  );
}
