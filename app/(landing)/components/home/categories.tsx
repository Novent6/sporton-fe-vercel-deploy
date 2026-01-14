import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
    { name: "Running", imgUrl: "/image/categories/category-running.svg" },
    { name: "Tennis", imgUrl: "/image/categories/category-tennis.svg" },
    { name: "Basketball", imgUrl: "/image/categories/category-basketball.svg" },
    { name: "Football", imgUrl: "/image/categories/category-football.svg" },
    { name: "Badminton", imgUrl: "/image/categories/category-badminton.svg" },
    { name: "Swimming", imgUrl: "/image/categories/category-swimming.svg" },
];

const CategoriesSect = () => {
    return (
        <section id="category-section" className="container mx-auto ">
            <div className="flex justify-between mb-6">
                <h2 className="font-bold text-2xl">Browse By Categories</h2>

                <Link href="/category" className="flex gap-2 text-primary font-medium">
                    <span className="self-center">See All Categories</span>
                    <FiArrowRight className="self-center" />
                </Link>
            </div>

            <div className="grid grid-cols-6 gap-12 mt-8">
                {categoryList.map((category, index) => (
                    <Link
                        key={index}
                        href={`/category/${category.name.toLowerCase()}`}
                        className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7D1] w-full aspect-square flex flex-col items-center justify-center hover:scale-105 transition">
                        <Image src={category.imgUrl}
                            width={86}
                            height={86}
                            alt={category.name}
                        />
                        <div className="text-primary font-medium text-xl mt-4">
                            {category.name}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoriesSect;
