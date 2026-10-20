import Image from "next/image";
import {PulsePuck} from "@/ui/components/PulsePuck.ts";

export default function Home() {
  return (
      <main className="bg-fpink pb-40">
        <div className="max-w-screen">
          <a href='https://www.eventbrite.co.uk/e/10-years-of-fchoir-tickets-1984035902794'>
            <Image
              className="p-2 m-auto w-auto block"
              src="/images/venue-change-poster.jpeg"
              alt="10 Years of F Choir. Tap for tickets. 25/10/2026, venue change, Woolwich Works, The Fireworks Factory, SE18 6HD"
              width="1080"
              height="1440"
              loading="eager"
            />
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-pulse"><PulsePuck/></div>
          </a>
        </div>
      </main>
  );
}
