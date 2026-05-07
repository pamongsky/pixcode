export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FDF6EF] flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-black/5 text-center">
          <div className="text-6xl font-display font-bold text-[#E8522A] mb-4">
            404
          </div>

          <h1 className="font-display font-bold text-[#1D1D1F] text-xl mb-2">
            Halaman Tidak Ditemukan
          </h1>

          <p className="text-[#8E8E93] font-sans text-sm mb-6 leading-relaxed">
            Halaman yang kamu cari tidak tersedia atau telah dipindahkan.
          </p>

          <a
            href="/"
            className="w-full py-3 rounded-xl bg-[#E8522A] text-white text-sm font-semibold hover:bg-[#D4471F] transition-colors font-sans inline-block"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </main>
  )
}
