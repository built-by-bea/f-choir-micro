import Image from "next/image";

export default function Home() {
  return (
      <main>
        <div className="max-w-screen max-h-screen  bg-fpink">
          <a href='https://www.eventbrite.co.uk/e/10-years-of-fchoir-tickets-1984035902794'>
            <Image className="p-2 m-auto" src="/images/venue-change-poster.jpeg" alt="25/10/2026 10 Years of F Choir, venue change, Woolwich Works, The Fireworks Factory, SE18 6HD" width="1080" height="1440" loading="eager"/>
          </a>
        </div>
      </main>
  );
}
