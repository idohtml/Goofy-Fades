import { useRouteError } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page" className="w-full h-screen grid place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl">Oops!</h1>
        <p className="text-lg mt-12">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-sm flex flex-col items-center">
          <span>
            <i>{error.message}</i>
          </span>
          <span>
            <Button variant="outline" className="mt-12">
              <a href="/">Back to home</a>
            </Button>
          </span>
        </p>
      </div>
    </div>
  );
}
