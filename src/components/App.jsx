import Alerts from './alerts/Alerts';
import Filters from './filters/Filters';
import SideNav from './side-nav/SideNav';

function App() {
  return (
    <div className='scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 flex h-screen items-center justify-between bg-gray-800 font-poppins text-white'>
      <SideNav />

      {/* Main Alerts Section */}
      <Alerts />

      {/* Filters Section */}
      <Filters />
    </div>
  );
}

export default App;
