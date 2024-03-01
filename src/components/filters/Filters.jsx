import { useState } from 'react';
import { data } from '../../Data';
import IndustryFilters from './IndustryFilters';
import IndustryFiltersApplied from './IndustryFiltersApplied';

export default function Filters() {
  const [selectedIndustryFilters, setSelectedIndustryFilters] = useState([]);

  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [selectedAsset, setSelectedAsset] = useState('');

  const handleIndustryFilterToggle = (filterName) => {
    if (selectedIndustryFilters.includes(filterName)) {
      setSelectedIndustryFilters(
        selectedIndustryFilters.filter((filter) => filter !== filterName),
      );
    } else {
      setSelectedIndustryFilters([...selectedIndustryFilters, filterName]);
    }
  };
  const handleIndustryFilterRemoval = (indexToRemove) => {
    setSelectedIndustryFilters((prevFilters) =>
      prevFilters.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <div className=' h-full w-full bg-gray-800'>
      {' '}
      <div className='my-8 space-y-12 rounded-lg bg-slate-900 px-5 py-8'>
        <IndustryFiltersApplied
          selectedIndustryFilters={selectedIndustryFilters}
          handleIndustryFilterRemoval={handleIndustryFilterRemoval}
        />
        <IndustryFilters handleFilterToggle={handleIndustryFilterToggle} />
        {/* Market Cap and Risk Level */}
        <div className='grid grid-cols-2 place-items-center gap-4'>
          <div>
            <h2 className='mb-2 text-lg font-semibold'>Market Cap</h2>
            {data.marketCap.map((item, index) => (
              <label key={index} className='block cursor-pointer'>
                <input
                  type='radio'
                  name='marketCap'
                  value={item}
                  className='mr-4 h-3 w-3 appearance-none rounded-full border-2 border-gray-500 checked:border-transparent checked:bg-gray-800 checked:text-blue-500 checked:ring-2 checked:ring-offset-2 '
                />
                {item}
              </label>
            ))}
          </div>

          <div>
            <h2 className='mb-2 text-lg font-semibold'>Risk Level</h2>
            {data.riskLevel.map((item, index) => (
              <div key={index} className='flex items-center'>
                <label
                  htmlFor={item}
                  className='mr-2 flex cursor-pointer items-center'
                >
                  <input
                    type='radio'
                    name='riskLevel'
                    value={item}
                    className='mr-4 h-3 w-3 appearance-none rounded-full border-2 border-gray-500 checked:border-transparent checked:bg-gray-800 checked:text-blue-500 checked:ring-2 checked:ring-offset-2 '
                  />

                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Strategy and Asset */}
        {/* Strategy */}
        <div className='grid grid-cols-2'>
          <div className=''>
            <h2 className='text-center text-lg font-semibold'>Strategy</h2>
            <div className='mt-2 flex max-h-20 flex-col items-center space-y-3 overflow-auto'>
              {data.strategy.map((item, index) => (
                <span
                  key={index}
                  className={` ${
                    item === selectedStrategy ? 'rounded-full bg-gray-600' : ''
                  } block cursor-pointer  px-2 py-1`}
                  onClick={() => setSelectedStrategy(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Asset */}
          <div>
            <h2 className='mb-2 text-center text-lg font-semibold'>Asset</h2>
            <div className='mt-2 flex max-h-20 flex-col items-center space-y-3 overflow-auto'>
              {data.strategy.map((item, index) => (
                <div key={index} className='mr-4'>
                  <span
                    key={index}
                    className={` ${
                      item === selectedAsset ? 'rounded-full bg-gray-600' : ''
                    } block cursor-pointer  px-2 py-1`}
                    onClick={() => setSelectedAsset(item)}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
