import haircut1 from "@/assets/images/haircut-1.jpg";
import haircut2 from "@/assets/images/haircut-2.jpg";
import haircut3 from "@/assets/images/haircut-3.jpg";
import { GiBeard, GiHairStrands } from "react-icons/gi";

export default function Steps() {
  return (
    <section className="mt-8 max-w-6xl mx-auto mb-4">
      <h2 className="text-5xl font-bold text-center md:text-left mb-8">
        How it works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 md:p-8">
          <GiHairStrands size={40} />
          <h3 className="text-2xl md:text-4xl font-bold my-4">Step 1</h3>
          <p className="text-lg md:text-xl">
            You can either book a date and time for your appointment and we will
            confirm it or you can walk in and wait for your turn. If you have a
            monthly subscription, you can walk in anytime and get your haircut.
          </p>
        </div>
        <img
          className="md:rounded-xl overflow-hidden"
          src={haircut1}
          alt="Hairline side cut"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-8">
        <img
          className="md:rounded-xl overflow-hidden order-2 md:order-first"
          src={haircut2}
          alt="Scissors cutting hair"
        />
        <div className="p-4 md:p-8">
          <GiBeard size={40} />
          <h3 className="text-2xl md:text-4xl font-bold my-4">Step 2</h3>
          <p className="text-lg md:text-xl">
            Get your beard trimmed and styled by our expert barbers. We will
            make sure you get the best beard trim and style that suits your
            face.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-8">
        <div className="p-4 md:p-8">
          <GiHairStrands size={40} />
          <h3 className="text-2xl md:text-4xl font-bold my-4">Step 1</h3>
          <p className="text-lg md:text-xl">
            As soon as you are done with your haircut and beard trim, you can
            get your hair washed and styled. We will make sure you get the best
            hair wash and style that suits your wishes.
          </p>
        </div>
        <img
          className="md:rounded-xl overflow-hidden"
          src={haircut3}
          alt="Hairline side cut"
        />
      </div>
    </section>
  );
}
