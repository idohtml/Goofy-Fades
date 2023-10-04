import Scissors from "@/assets/images/Scissors.jpg";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrSchedule, GrSchedules } from "react-icons/gr";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto md:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-8 drop-shadow-2xl">
        {/* Grid 1 */}
        <div className="bg-violet-600 md:rounded-xl overflow-hidden">
          <h2 className="flex flex-col p-4 md:p-8 mb-4 text-2xl">
            <span>Save more</span>
            <span className="font-bold">With good</span>
          </h2>
          <p className="flex-1 px-4 md:px-8">
            We offer tailored haircut plans to meet the needs of each individual
            customer.
          </p>
          <button className="flex items-center my-4 px-4 md:px-8 mb-8">
            <a href="/Pricing" className="underline underline-offset-4">
              Read more
            </a>
            <AiOutlineArrowRight />
          </button>
          <img
            className="overflow-hidden"
            src={Scissors}
            alt="Image of Scissors"
          />
        </div>
        {/* Grid 2 */}
        <div className="p-4 md:p-8 bg-stone-100 md:rounded-xl flex flex-col">
          <h2 className="flex items-center just gap-4 dark:text-black">
            <span>
              <GrSchedule size={35} />
            </span>
            <span className="text-2xl font-bold">Day Pass</span>
          </h2>
          <p className="mt-8 text-gray-400 text-lg">What you get</p>
          <ul className="mt-4 dark:text-black">
            <li className="flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-violet-500" size={20} />
              Haircut
            </li>
            <li className="flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-violet-500" size={20} />
              Beard trim
            </li>
          </ul>
          <p className="flex-1"></p>
          <Separator className="mt-4" />
          <p className="mt-4 text-3xl font-bold dark:text-black">
            $25 <span className="text-lg font-normal text-gray-400">/day</span>
          </p>
          <Button className="w-full mt-2 bg-violet-500 hover:bg-violet-600">
            Book now
          </Button>
        </div>
        {/* Grid 3 */}
        <div className="p-4 md:p-8 bg-stone-100 md:rounded-xl flex flex-col">
          <h2 className="flex items-center just gap-4 dark:text-black">
            <span>
              <GrSchedules size={35} />
            </span>
            <span className="text-2xl font-bold">Monthly Pass</span>
          </h2>
          <p className="mt-8 text-gray-400 text-lg">What you get</p>
          <ul className="mt-4 dark:text-black">
            <li className="flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-violet-500" size={20} />
              Haircut
            </li>
            <li className="flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-violet-500" size={20} />
              Beard trim
            </li>
            <li className="flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-violet-500" size={20} />
              Hair wash + Schampoo
            </li>
            <li className="flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-violet-500" size={20} />4
              visits each month
            </li>
          </ul>
          <p className="flex-1"></p>
          <Separator className="mt-4" />
          <p className="mt-4 text-3xl font-bold dark:text-black">
            $80{" "}
            <span className="text-lg text-gray-400 font-normal">/month</span>
          </p>
          <Button className="w-full mt-2 bg-violet-500 hover:bg-violet-600">
            Book now
          </Button>
        </div>
      </div>
    </section>
  );
}
