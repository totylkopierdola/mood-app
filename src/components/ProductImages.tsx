"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://static.wixstatic.com/media/11062b_5bf329b4a72946ca99a678de833cb515~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/11062b_5bf329b4a72946ca99a678de833cb515~mv2.webp",
  },
  {
    id: 2,
    url: "https://static.wixstatic.com/media/11062b_e543457876454eb8bdd6ee7f28797d6e~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/11062b_e543457876454eb8bdd6ee7f28797d6e~mv2.webp",
  },
  {
    id: 3,
    url: "https://static.wixstatic.com/media/11062b_d1360754c7724712b6e496a55444977f~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/11062b_d1360754c7724712b6e496a55444977f~mv2.webp",
  },
  {
    id: 4,
    url: "https://static.wixstatic.com/media/11062b_7f8433883b5547e0877d1ec84e9af6cc~mv2.jpg/v1/fill/w_340,h_340,al_c,q_80,usm_0.66_1.00_0.01/11062b_7f8433883b5547e0877d1ec84e9af6cc~mv2.webp",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
