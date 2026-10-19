'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';

export interface LocationCard {
  id: string;
  country: string;
  type: string;
  city: string;
  address: string;
  phone: string;
  coordinates: [number, number]; // [longitude, latitude]
}

interface LocationsProps {
  locations: LocationCard[];
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function Locations({ locations }: LocationsProps) {
  const [activeId, setActiveId] = useState<string>(locations[0].id);
  const [position, setPosition] = useState({ coordinates: [0, 20] as [number, number], zoom: 1 });

  const handleCardClick = (loc: LocationCard) => {
    setActiveId(loc.id);
    setPosition({ coordinates: loc.coordinates, zoom: 2.5 });
  };

  return (
    <section className="relative w-full bg-background overflow-hidden pt-24 pb-8">
      
      {/* Background Curved Globe Element */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden flex justify-center items-end">
        
        {/* The Horizon Curve */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350%] sm:w-[250%] md:w-[160%] lg:w-[120%] h-[1500px] border border-gray-200 bg-gray-50/50 rounded-[100%] rounded-b-none overflow-hidden flex justify-center items-end shadow-sm">
          
          {/* React Simple Maps Map */}
          <div className="absolute bottom-0 w-full max-w-[1400px] h-[600px] flex items-center justify-center px-4">
            <ComposableMap 
              projection="geoMercator" 
              projectionConfig={{ scale: 140 }}
              width={1000} 
              height={500}
              className="w-full h-full object-contain -translate-y-10"
            >
              <ZoomableGroup 
                zoom={position.zoom} 
                center={position.coordinates}
                translateExtent={[[0, 0], [1000, 500]]}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#67793D"
                        stroke="#8da853"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none", transition: "all 250ms" },
                          hover: { outline: "none", fill: "#546332", transition: "all 250ms" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

              {/* Location Markers */}
              <AnimatePresence>
                {locations.map((loc) => {
                  return (
                    <Marker key={loc.id} coordinates={loc.coordinates}>
                      <motion.g
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <g transform={`scale(${1 / position.zoom})`}>
                          {/* Dot Indicator */}
                          <circle r={12} fill="rgba(255,255,255,0.5)" className="animate-ping" style={{ animationDuration: '3s' }} />
                          <circle r={5} fill="#ffffff" stroke="#67793D" strokeWidth={2} />
                          
                          {/* Tooltip for Active Pin */}
                          {activeId === loc.id && (
                            <g transform="translate(15, -24)" style={{ filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))" }}>
                              <rect x="0" y="0" width="180" height="48" fill="white" rx="6" stroke="#e5e7eb" strokeWidth="1" />
                              <text x="12" y="19" fontSize="12" fontWeight="bold" fill="#111827">{loc.city}</text>
                              <text x="12" y="36" fontSize="10" fill="#6b7280">{loc.address.split('\n')[0]}</text>
                            </g>
                          )}
                        </g>
                      </motion.g>
                    </Marker>
                  );
                })}
              </AnimatePresence>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </div>
      </div>

      {/* Foreground Cards */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-[200px] sm:mt-[240px] lg:mt-[280px]">
        
        {/* Horizontal scrollable flex container for cards */}
        <div className="flex overflow-x-auto gap-5 pb-8 rs-hide-sb snap-x snap-mandatory">
          <style>{`.rs-hide-sb::-webkit-scrollbar { display: none; }`}</style>

          {locations.map((loc) => {
            return (
              <div 
                key={loc.id}
                onClick={() => handleCardClick(loc)}
                onMouseEnter={() => setActiveId(loc.id)}
                className={`group relative shrink-0 w-[300px] sm:w-[340px] rounded-lg p-6 sm:p-8 cursor-pointer transition-all duration-300 snap-center border z-0 hover:z-10 shadow-xl ${activeId === loc.id ? 'bg-white border-white' : 'bg-[#67793D] border-[#67793D] hover:bg-white hover:border-white'}`}
              >
                {/* Country (Large Heading) */}
                <h3 className={`text-[24px] sm:text-[28px] font-normal tracking-tight mb-6 transition-colors duration-300 ${activeId === loc.id ? 'text-gray-900' : 'text-white group-hover:text-gray-900'}`}>
                  {loc.country}
                </h3>

                {/* Address */}
                <p className={`text-[13px] leading-relaxed mb-8 h-16 whitespace-pre-line transition-colors duration-300 ${activeId === loc.id ? 'text-gray-600' : 'text-white/80 group-hover:text-gray-600'}`}>
                  {loc.address}
                </p>

                {/* Phone & CTA */}
                <div className={`flex flex-col mt-auto pt-4 border-t transition-colors duration-300 ${activeId === loc.id ? 'border-gray-100' : 'border-white/20 group-hover:border-gray-100'}`}>
                  <div className="flex items-center justify-between">
                    <div className={`flex flex-col gap-1 text-[13px] font-medium transition-colors duration-300 ${activeId === loc.id ? 'text-gray-900' : 'text-white group-hover:text-gray-900'}`}>
                      {loc.phone.split('\n').map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                    </div>
                    <button className={`flex items-center justify-center w-8 h-8 shrink-0 rounded-full transition-colors duration-300 ${activeId === loc.id ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-white/20 text-white group-hover:bg-gray-100 group-hover:text-gray-900'}`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows (Bottom Right) */}
        <div className="flex justify-end gap-3 mt-4 pr-4">
          <button 
            onClick={() => {
              const idx = locations.findIndex(l => l.id === activeId);
              if (idx > 0) handleCardClick(locations[idx - 1]);
            }}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-white"
            disabled={activeId === locations[0].id}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => {
              const idx = locations.findIndex(l => l.id === activeId);
              if (idx < locations.length - 1) handleCardClick(locations[idx + 1]);
            }}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-white"
            disabled={activeId === locations[locations.length - 1].id}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}