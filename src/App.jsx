function App() {
  // Generate world map pattern dots (simplified continents)
  const generateWorldMapDots = () => {
    const dots = [];
    const radius = 128; // Circle radius (w-64 h-64 = 256px, so radius is 128)
    const centerX = 128;
    const centerY = 128;

    // North America (left side)
    for (let lat = -20; lat <= 50; lat += 3) {
      for (let lon = -120; lon <= -60; lon += 4) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const x = centerX + radius * Math.cos(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi);
        
        // Shape it like North America
        if (lon > -110 && lon < -70 && lat > 25 && lat < 50) {
          dots.push({ x, y });
        } else if (lon > -100 && lon < -80 && lat > 10 && lat < 35) {
          dots.push({ x, y });
        }
      }
    }

    // South America (left side, lower)
    for (let lat = -50; lat <= 10; lat += 3) {
      for (let lon = -80; lon <= -40; lon += 4) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const x = centerX + radius * Math.cos(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi);
        
        if (lon > -75 && lon < -45 && lat > -50 && lat < 10) {
          dots.push({ x, y });
        }
      }
    }

    // Europe/Africa (center)
    for (let lat = -35; lat <= 60; lat += 3) {
      for (let lon = -20; lon <= 40; lon += 4) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const x = centerX + radius * Math.cos(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi);
        
        // Europe
        if (lon > -10 && lon < 40 && lat > 35 && lat < 70) {
          dots.push({ x, y });
        }
        // Africa
        if (lon > -20 && lon < 50 && lat > -35 && lat < 35) {
          dots.push({ x, y });
        }
      }
    }

    // Asia (right side)
    for (let lat = -10; lat <= 70; lat += 3) {
      for (let lon = 40; lon <= 150; lon += 4) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const x = centerX + radius * Math.cos(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi);
        
        if (lon > 50 && lon < 140 && lat > 10 && lat < 60) {
          dots.push({ x, y });
        }
      }
    }

    // Australia (bottom right)
    for (let lat = -40; lat <= -10; lat += 4) {
      for (let lon = 110; lon <= 155; lon += 5) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const x = centerX + radius * Math.cos(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi);
        
        if (lon > 115 && lon < 155 && lat > -40 && lat < -10) {
          dots.push({ x, y });
        }
      }
    }

    return dots;
  };

  const worldMapDots = generateWorldMapDots();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="border-2 border-gray-700 rounded-none w-[600px] h-[400px] relative overflow-hidden">
        {/* Text Content - Top Left */}
        <div className="absolute top-1 left-6 right-6 z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
            Deploy in seconds.
          </h1>
          <p className="text-[11px] md:text-xs text-gray-900 leading-relaxed">
            With our blazing fast, state of the art, cutting edge,<br />
            we are so back cloud servies (read AWS) - you can<br />
            deploy your model in seconds.
          </p>
        </div>

        {/* Pill-shaped Containers - Continuous Scroll Row */}
        <div className="absolute top-[48%] left-0 right-0 -translate-y-1/2 z-10 overflow-hidden">
          <div className="flex items-center gap-3 animate-scroll-pills-right">
            {/* First set of pills */}
            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Your Brand</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9h6v6H9z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Features</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Solutions</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Support</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M20 7h-4M4 7h4m12 0v10M8 7v10m12 0h-4M8 17H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Pricing</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Resources</span>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Your Brand</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9h6v6H9z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Features</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Solutions</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Support</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M20 7h-4M4 7h4m12 0v10M8 7v10m12 0h-4M8 17H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Pricing</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Resources</span>
            </div>
          </div>
        </div>

        {/* Pill-shaped Containers - Continuous Scroll Row (Right to Left) */}
        <div className="absolute top-[63%] left-0 right-0 -translate-y-1/2 z-10 overflow-hidden">
          <div className="flex items-center gap-3 animate-scroll-pills-left">
            {/* First set of pills */}
            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Your Brand</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9h6v6H9z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Features</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Solutions</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Support</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M20 7h-4M4 7h4m12 0v10M8 7v10m12 0h-4M8 17H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Pricing</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Resources</span>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Your Brand</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9h6v6H9z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Features</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Solutions</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Support</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M20 7h-4M4 7h4m12 0v10M8 7v10m12 0h-4M8 17H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Pricing</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Resources</span>
            </div>
          </div>
        </div>

        {/* Pill-shaped Containers - Continuous Scroll Row (Left to Right) - Third Row */}
        <div className="absolute top-[78%] left-0 right-0 -translate-y-1/2 z-10 overflow-hidden">
          <div className="flex items-center gap-3 animate-scroll-pills-right">
            {/* First set of pills */}
            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Your Brand</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9h6v6H9z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Features</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Solutions</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Support</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M20 7h-4M4 7h4m12 0v10M8 7v10m12 0h-4M8 17H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Pricing</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Resources</span>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Your Brand</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9h6v6H9z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Features</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Solutions</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Support</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M20 7h-4M4 7h4m12 0v10M8 7v10m12 0h-4M8 17H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Pricing</span>
            </div>

            <div className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Resources</span>
            </div>
          </div>
        </div>

        {/* Solid black circle in bottom-right corner with world map pattern */}
        <div className="absolute bottom-0 right-0 w-80 h-80 translate-x-[20%] translate-y-[20%]">
          <div className="w-full h-full animate-rotate-anticlockwise">
            <svg viewBox="0 0 256 256" className="w-full h-full">
            {/* Black circle background */}
            <circle cx="128" cy="128" r="128" fill="black" />
            
            {/* World map pattern - white dots forming continents */}
            {worldMapDots.map((dot, idx) => (
              <circle
                key={idx}
                cx={dot.x}
                cy={dot.y}
                r="1"
                fill="white"
                opacity="0.9"
              />
            ))}
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;