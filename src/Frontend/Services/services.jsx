import { Star } from 'lucide-react';

export default function Services() {
  return (
    <div
      className="min-h-screen mt-4 mb-4 bg-cover bg-center bg-no-repeat opacity-1"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#c59a63] mb-8">
          Our Services
        </h1>

        <p className="text-center max-w-4xl mx-auto mb-16 text-[#293941]">
          SunGum is a full fledged Event Management company with a wide spectrum
          of services to provide you one window solution.
        </p>

        <div className="grid md:grid-cols-3 justify-center gap-8">
          <div className="space-y-4">
            <ServiceItem text="Event Full Services" />
            <ServiceItem text="Decor Services" />
            <ServiceItem text="Floral & Stages" />
            <ServiceItem text="Event Management" />
            <ServiceItem text="Food & Catering" />
          </div>

          <div className="space-y-4">
            <ServiceItem text="Photography" />
            <ServiceItem text="Security" />
            <ServiceItem text="Secure Parking" />
            <ServiceItem text="Lighting & Sound" />
            <ServiceItem text="P.R. Events" />
          </div>

          <div className="space-y-4">
            <ServiceItem text="Wedding Entrances" />
            <ServiceItem text="Bridal Shower" />
            <ServiceItem text="Birthdays" />
            <ServiceItem text="Meetings" />
            <ServiceItem text="Corporate Events" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="images/conference.jpg"
              alt="Event decoration with purple lighting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="images/wedding.jpg"
              alt="Elegant chandelier decoration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="images/birthday.jpg"
              alt="Event space with draping and lighting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ text }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <Star className="w-4 h-4 text-[#c59a63] flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}
