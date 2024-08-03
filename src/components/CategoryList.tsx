import { wixClientServer } from "@/lib/wixClientServer";
import { collections } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

const CategoriesList = async () => {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.queryCollections().find();

  console.log("categories", categories);

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.items.map((category: collections.Collection) => (
          <Link
            href={`/list?category=${category.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={category._id}
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={
                  category.media?.mainMedia?.image?.url ||
                  "/images/image-placeholder.jpg"
                }
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {category.name}
            </h1>
          </Link>
        ))}
        {/* <Link
          href={`/list?cat=${`item.slug`}`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://static.wixstatic.com/media/22e53e_b5836d495cdf458db52e0875e7369564~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/22e53e_b5836d495cdf458db52e0875e7369564~mv2.webp"
              }
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">{`item.name`}</h1>
        </Link> */}
      </div>
    </div>
  );
};

export default CategoriesList;
