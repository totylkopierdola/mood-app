"use client";

import { useEffect, useState } from "react";
import Add from "./Add";

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h4 className="font-medium">Choose a color</h4>
        <ul className="flex items-center gap-3">
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative">
            <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </li>
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative">
            <div className="absolute w-10 h-10 rounded-full bg-blue-100 ring-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </li>
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 bg-green-200 relative">
            <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </li>
        </ul>
      </div>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-black text-black rounded-md py-1 px-4 text-sm cursor-pointer bg-opacity-80 hover:bg-opacity-100">
          Small
        </li>
        <li className="ring-1 ring-black text-black bg-green-200 rounded-md py-1 px-4 text-sm cursor-pointer bg-opacity-80 hover:bg-opacity-100">
          Medium
        </li>
        <li className="ring-1 ring-black text-black bg-yellow-200 rounded-md py-1 px-4 text-sm cursor-pointer bg-opacity-80 hover:bg-opacity-100">
          Large
        </li>
      </ul>
      {/* <Add
        productId={productId}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
      /> */}
      {/* COLOR */}
      {/* 
          <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
              <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
          </ul> */}
      {/* OTHERS */}
    </div>
  );
};

export default CustomizeProducts;
