import H1 from "@/components/ui/TypographyH1";
import P from "@/components/ui/TypographyP";
import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/images/Hero.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      <img
        className="absolute -z-10 w-screen h-full md:h-full object-cover brightness-75"
        src={HeroImage}
        alt="Barber knives"
      />
      <div className="h-full max-w-6xl mx-auto">
        <motion.div
          className="text-white dark:text-white py-40 p-6 md:w-1/2"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <H1>Get your hair done, get your swagger on</H1>
          <P>
            Get your hair done, get your swagger on. That's what we're all about
            at Goofy Fades. We know that when you look good, you feel good. And
            when you feel good, you have more swagger.
          </P>
          <Button variant="ghost" className="mt-8 mb-4 bg-violet-500">
            Booking
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
