import Button from "../common/Button";

export default function OfferBanner() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-orange-500 to-red-500 p-8 lg:p-12 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                🔥 Limited Time
              </span>

              <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-4">
                Get 50% OFF
                <br />
                on your first order
              </h2>

              <p className="text-orange-50 text-lg mb-6">
                Use coupon code <span className="font-bold text-white">QRDINE50</span> at checkout and enjoy delicious food at half the price.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-3">
              <Button size="lg" variant="secondary">
                Claim Offer
              </Button>

              <p className="text-sm text-orange-100">
                Valid for today only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}