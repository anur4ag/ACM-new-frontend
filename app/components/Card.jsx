import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Card = ({ title, pubDate, approved, image, editLink }) => {
  return (
    <div className="w-auto h-auto bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-10em h-auto">
        <Image
          src={image}
          width={1000}
          height={1000}
          className="rounded-t-3xl"
          alt="Card image"
        />
      </div>
      <div className="h-auto p-5 bg-[#D9D9D9] overflow-hidden rounded-b-3xl">
        <h5 className="mb-2 text-2xl font-bold line-clamp-2 tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {pubDate}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {approved}
        </p>
        <Link href={editLink} className="flex justify-end">
          <Button className="bg-[#4E73DF] rounded-full text-lg px-6 py-2 hover:bg-[#2e59da]">
            Edit
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
