import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">Product description</p>
        <div className="h-[2px] bg-gray-100" />
        <h2 className="font-medium text-2xl">$49.99</h2>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum
            eaque molestiae. Provident eveniet sit animi. Amet vitae quas non,
            omnis, quisquam possimus, pariatur sit consequuntur dicta facere
            quaerat nam!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum
            eaque molestiae. Provident eveniet sit animi. Amet vitae quas non,
            omnis, quisquam possimus, pariatur sit consequuntur dicta facere
            quaerat nam!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum
            eaque molestiae. Provident eveniet sit animi. Amet vitae quas non,
            omnis, quisquam possimus, pariatur sit consequuntur dicta facere
            quaerat nam!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum
            eaque molestiae. Provident eveniet sit animi. Amet vitae quas non,
            omnis, quisquam possimus, pariatur sit consequuntur dicta facere
            quaerat nam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
