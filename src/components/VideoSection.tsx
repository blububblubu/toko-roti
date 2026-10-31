export default function VideoSection() {
  const videos = [
    {
      src: "/video/v1.mp4",
      fallbackSrc: "/video/proses-1.mp4",
    },
    {
      src: "/video/v2.mp4",
      fallbackSrc: "/video/proses-2.mp4",
    },
    {
      src: "/video/v3.mp4",
      fallbackSrc: "/video/proses-3.mp4",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="space-y-6">
        <div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#231F20]/75 uppercase">
            DAPUR KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#231F20] tracking-tight mt-1">
            Behind the scene
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((vid, index) => (
            <div key={index} className="overflow-hidden rounded-xl bg-black/5 shadow-sm">
              <video
                src={vid.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain rounded-xl"
              >
                <source src={vid.src} type="video/mp4" />
                <source src={vid.fallbackSrc} type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
