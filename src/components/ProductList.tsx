import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://static.wixstatic.com/media/22e53e_7348028d79194c7faf4550d76dbc29f6~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/22e53e_7348028d79194c7faf4550d76dbc29f6~mv2.webp"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://static.wixstatic.com/media/22e53e_e5dc29871f1e4cc989ed572ddc8bc189~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/22e53e_e5dc29871f1e4cc989ed572ddc8bc189~mv2.webp"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">{`product.name`}</span>
          <span className="font-semibold">${`product.price?.price`}</span>
        </div>
        <div className="text-sm text-gray-500"></div>
        <button className="rounded-2xl ring-1 ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://static.wixstatic.com/media/22e53e_ee601f8cd7754a2399de75c2de661cba~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/22e53e_ee601f8cd7754a2399de75c2de661cba~mv2.webp"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://static.wixstatic.com/media/22e53e_b9d80a107799453f9614208a8dbea085~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/22e53e_b9d80a107799453f9614208a8dbea085~mv2.webp"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">{`product.name`}</span>
          <span className="font-semibold">${`product.price?.price`}</span>
        </div>
        <div className="text-sm text-gray-500"></div>
        <button className="rounded-2xl ring-1 ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://static.wixstatic.com/media/22e53e_c1ba6201124944d499b8e1c23b4722cf~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/22e53e_c1ba6201124944d499b8e1c23b4722cf~mv2.webp"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://static.wixstatic.com/media/22e53e_c04186a558d04ed0b337b83f6ecf2877~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/22e53e_c04186a558d04ed0b337b83f6ecf2877~mv2.webp"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">{`product.name`}</span>
          <span className="font-semibold">${`product.price?.price`}</span>
        </div>
        <div className="text-sm text-gray-500"></div>
        <button className="rounded-2xl ring-1 ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://static.wixstatic.com/media/22e53e_c023853bf67c4b5cbcbee1888c928e79~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/22e53e_c023853bf67c4b5cbcbee1888c928e79~mv2.webp"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://static.wixstatic.com/media/22e53e_a4d10347d8284fe091f329d81273226a~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/22e53e_a4d10347d8284fe091f329d81273226a~mv2.webp"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">{`product.name`}</span>
          <span className="font-semibold">${`product.price?.price`}</span>
        </div>
        <div className="text-sm text-gray-500"></div>
        <button className="rounded-2xl ring-1 ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        /> */}
    </div>
  );
};

export default ProductList;
