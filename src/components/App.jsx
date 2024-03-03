import { useMediaQuery } from '@uidotdev/usehooks';
import { useState } from 'react';
import Alerts from './alerts/Alerts';
import Filters from './filters/Filters';
import SideNav from './side-nav/SideNav';

function App() {
  const isDesktopScreen = useMediaQuery('only screen and (min-width : 1400px)');

  const [viewFilters, setViewFilters] = useState(false); // used for non desktop screens

  return (
    <>
      <main className='flex h-screen flex-col items-center justify-start bg-gray-800 font-poppins text-white xl:flex-row'>
        <SideNav />

        {/* desktop screens */}
        {isDesktopScreen && (
          <>
            <Alerts />
            <Filters />
          </>
        )}

        {/* non desktop screens */}
        {!isDesktopScreen && (viewFilters ? <Filters /> : <Alerts />)}
        {!isDesktopScreen && (
          <div className='flex justify-center space-x-4 p-4'>
            <button
              className={`rounded-lg px-4 py-2 ${
                viewFilters
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-300 text-gray-800'
              }`}
              onClick={() => setViewFilters(false)}
            >
              Alerts
            </button>
            <button
              className={`rounded-lg px-4 py-2 ${
                viewFilters
                  ? 'bg-gray-300 text-gray-800'
                  : 'bg-gray-800 text-white'
              }`}
              onClick={() => setViewFilters(true)}
            >
              Filters
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
