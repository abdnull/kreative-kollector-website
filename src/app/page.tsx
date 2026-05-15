import ProductListSec from "@/components/common/ProductListSec";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const foundationProductsData: Product[] = [
  {
    id: 1,
    title: "BrickPack - 60 Inch Play Mat & Storage Backpack",
    srcUrl: "/images/brickpack-hero.jpg",
    gallery: ["/images/brickpack-hero.jpg"],
    price: 45.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
  },
  {
    id: 2,
    title: "FigFortress - Minifigure Display Case",
    srcUrl: "/images/figfortress-hero.jpg",
    gallery: ["/images/figfortress-hero.jpg"],
    price: 44.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.6,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Sarah M.",
    content: "The BrickPack is a game changer! My son can finally take his LEGOs anywhere without the mess. The cleanup chute works perfectly and the minifig display window is his favorite part.",
    rating: 5,
    date: "April 12, 2025",
  },
  {
    id: 2,
    user: "Mike R.",
    content: "FigFortress is exactly what I needed for my collection. The mirrored back makes every figure look amazing and the magnetic door is so smooth. Premium quality all around.",
    rating: 5,
    date: "March 28, 2025",
  },
  {
    id: 3,
    user: "Jennifer K.",
    content: "Best purchase for our LEGO-obsessed family. The BrickPack holds SO many bricks and the playmat is huge. Road trips are so much easier now!",
    rating: 5,
    date: "April 3, 2025",
  },
  {
    id: 4,
    user: "David L.",
    content: "As a collector, I'm impressed with the FigFortress build quality. The UV protection and dust seal give me peace of mind. My rare minifigs are finally displayed properly.",
    rating: 5,
    date: "March 15, 2025",
  },
  {
    id: 5,
    user: "Amanda T.",
    content: "Bought both products and they're worth every penny. The BrickPack makes cleanup so fast and the FigFortress looks professional on our shelf. Highly recommend!",
    rating: 5,
    date: "April 8, 2025",
  },
  {
    id: 6,
    user: "Chris P.",
    content: "My kids love showing off their minifigs in the FigFortress. The embedded studs keep everything secure and the mirrored back is a nice touch. Great product!",
    rating: 5,
    date: "March 22, 2025",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="OUR PRODUCTS"
          data={foundationProductsData}
          viewAllLink="/shop"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <Reviews data={reviewsData} />
        </div>
      </main>
    </>
  );
}