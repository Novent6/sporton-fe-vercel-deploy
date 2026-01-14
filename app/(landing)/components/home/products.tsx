import Link from "next/link";
import Image from "next/image";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const productsList = [
    { name: "SportsOn Hyperfast Shoes",category:"Running",price: 329000,  imgUrl: "/image/products/product-1.svg" },
    { name: "SportsOn Rockets Tennis",category:"Tennis",price: 999000,  imgUrl: "/image/products/product-2.svg" },
    { name: "SportsOn Slowlivin",category:"Running",price: 119000, imgUrl: "/image/products/product-3.svg" },
    { name: "SportsOn HyperSoccer v2",category:"Football",price: 458000,  imgUrl: "/image/products/product-4.svg" },
    { name: "SportsOn HyperSoccer v2",category:"Football",price: 458000,  imgUrl: "/image/products/product-4.svg" },
    { name: "SportsOn Slowlivin",category:"Running",price: 119000,  imgUrl: "/image/products/product-5.svg" },
    { name: "SportsOn Hyperfast Shoes",category:"Running",price: 329000,  imgUrl: "/image/products/product-6.svg" },
    { name: "SportsOn Rockets Tennis",category:"Tennis",price: 999000,  imgUrl: "/image/products/product-7.svg" },
];

const ProductsSec = () => {
    return (
        <section id="products-section" className="container mx-auto mt-32">
            <h2 className="font-bold italic text-4xl text-center">
                <span className="text-primary">OUR</span> PRODUCTS
            </h2>
            <div className="grid grid-cols-4 gap-5 mt-8">
                {
                   productsList.map((product,index) => (
                        <Link href="#" key={index} className="p-1.5">
                            <div className="bg-white rounded-lg p-3 hover:scale-105 transition">
                                <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                                    <Image src={product.imgUrl}
                                        alt="product.name" 
                                        width={300} 
                                        height={280} 
                                        className="aspect-square object-contain "/>
                                    <Button className="w-10 h-10 p-2! absolute right-3 top-3"> <FiPlus size={24}/></Button>
                            </div>
                                <h3 className="font-medium text-lg mb-1.5">{product.name}</h3>
                                <div className="flex justify-between">
                                    <div className="text-gray-500">{product.category}</div>
                                    <div className="text-primary font-medium">
                                        {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                            minimumFractionDigits: 0,
                                        }).format(product.price)}
                                    </div>
                                </div>
                            </div>
                    
                        </Link>
                   )) 
                }
            </div>
        </section>
    );
};

export default ProductsSec;