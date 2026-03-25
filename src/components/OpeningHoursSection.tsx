import { OPENING_HOURS } from '../constants';
import { Clock } from 'lucide-react';

export default function OpeningHoursSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary/20 p-3 rounded-2xl inline-block mb-6">
                <Clock className="text-primary w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                When Can You <span className="text-primary">Visit Us?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We are proud to serve you 24 hours a day, 7 days a week. 
                Whether it's a late-night craving or an early breakfast, we're always here.
              </p>
            </div>
            
            <div className="space-y-6">
              {OPENING_HOURS.map((item) => (
                <div 
                  key={item.day}
                  className="flex justify-between items-center py-4 border-b border-gray-800"
                >
                  <span className="text-white font-bold text-xl">{item.day}</span>
                  <span className="text-primary font-bold text-lg">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -ml-48 -mb-48" />
        </div>
      </div>
    </section>
  );
}
