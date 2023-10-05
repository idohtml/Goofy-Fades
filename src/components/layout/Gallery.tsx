import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import img1 from "@/assets/images/Gallery-1.jpg";
import img2 from "@/assets/images/Gallery-2.jpg";
import img3 from "@/assets/images/Gallery-3.jpg";

const images = [img1, img2, img3];

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto md:mt-16">
      <div className="grid grid-cols-2 gap-4">
        <div className="w-4/5">
          <h2 className="text-6xl font-bold">Gallery</h2>
          <h3 className="text-gray-400 my-8">
            Follow us on social media to see more of our work
          </h3>
          <p className="text-lg">
            We love giving back to our customers. That's why we host social
            media giveaways each month. To enter our giveaways, simply follow us
            on social media and like and share the giveaway post. Don't miss
            your chance to win!
          </p>
          <div className="flex items-center gap-4 mt-4">
            <BsFacebook className="text-4xl text-blue-600" />
            <BsInstagram className="text-4xl text-pink-600" />
            <BsTwitter className="text-4xl text-blue-400" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Gallery"
              className="w-52 h-50 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
