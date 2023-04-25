import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";

const Tweet = () => {
  return (
    <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex">
      <img
        className="rounded-full mr-3 h-12 w-12"
        src={
          "https://media.licdn.com/dms/image/D4E03AQF6qyPOBiZh_A/profile-displayphoto-shrink_800_800/0/1666311667680?e=1687996800&v=beta&t=YfkKY6sajeWRJneXofk_KTZ-eK_M_jLkhlyRTtvIews"
        }
        alt="profile"
      />
      <div className="w-full">
        <div className="flex">
          <Link href={"https://twitter.com/AComp_Scientist"}>
            <strong className="mr-1">Ahmed Ali Ansari</strong>
            <span className="text-gray-500 mr-1">@Ansari1120</span>
          </Link>
          <span className="text-gray-500 mr-1 align-middle">.</span>
          <span className="text-gray-500 mr-1">Apr 7</span>
          <div className="ml-auto">
            <GoKebabHorizontal />
          </div>
        </div>
        <div>
          You are amazing if you take time to comment on a tweet or YouTube
          video or a blogpost that has helped you! 🙌
        </div>
        <div className="mt-2 flex justify-between">
          <div className="mr-3 flex items-center">
            <TbMessageCircle2 />
            <span className="text-gray-500 text-sm">20</span>
          </div>
          <div className="mr-3 flex items-center">
            <AiOutlineRetweet />
            <span className="text-gray-500 text-sm">17</span>
          </div>
          <div className="mr-3 flex items-center">
            <AiOutlineHeart />
            <span className="text-gray-500 text-sm">215</span>
          </div>
          <div className="mr-3 flex items-center">
            <BsUpload />
          </div>
          <div className="mr-3 flex items-center">
            <FiBarChart2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
