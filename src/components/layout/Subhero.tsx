import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import H2 from "@/components/ui/TypographyH2";

export default function Subhero() {
  return (
    <section className="bg-black dark:bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 place-items-center text-white dark:text-black p-6">
          <H2>Get 10% off your first haircut</H2>
          <div className="flex flex-col md:items-left gap-2 w-full md:w-auto">
            <Label htmlFor="email">Sign up today</Label>
            <div className="flex md:items-center gap-2">
              <Input type="email" id="email" placeholder="email" />
              <Button variant="secondary">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
