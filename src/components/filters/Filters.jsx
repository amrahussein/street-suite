import { useState } from 'react';
import { data } from '../../Data';
import IndustryFilters from './IndustryFilters';
import IndustryFiltersApplied from './IndustryFiltersApplied';

export default function Filters() {
  const [selectedFilters, setSelectedFilters] = useState({
    industry: [],
    strategy: '',
    asset: '',
  });

  const handleIndustryFilterToggle = (filterName) => {
    setSelectedFilters((prev) => ({
      ...prev,
      industry: prev.industry.includes(filterName)
        ? prev.industry.filter((item) => item !== filterName)
        : [...prev.industry, filterName],
    }));
  };

  const handleStrategySelection = (strategy) => {
    setSelectedFilters((prev) => ({
      ...prev,
      strategy,
    }));
  };

  const handleAssetSelection = (asset) => {
    setSelectedFilters((prev) => ({
      ...prev,
      asset,
    }));
  };
  const handleAppliedFilters = () => {
    console.log('Selected Filters:', selectedFilters);
  };

  return (
    <div className='h-full overflow-auto bg-gray-800 pl-[4.3rem] xl:ml-4'>
      {' '}
      <div className='my-8 space-y-12 rounded-lg bg-slate-900 px-5 py-8'>
        <IndustryFiltersApplied
          selectedIndustryFilters={selectedFilters.industry}
          handleIndustryFilterRemoval={handleIndustryFilterToggle}
        />
        <IndustryFilters handleFilterToggle={handleIndustryFilterToggle} />
        {/* Market Cap and Risk Level */}
        <div className='grid place-items-center gap-4 xl:grid-cols-2'>
          <div>
            <h2 className='mb-2 text-lg font-semibold'>Market Cap</h2>
            {data.marketCap.map((item, index) => (
              <label
                key={`marketCap_${index}`}
                className='block cursor-pointer'
              >
                <input
                  type='radio'
                  name='marketCap'
                  id={`marketCap_${index}`}
                  value={item}
                  className='mr-4 h-3 w-3 appearance-none rounded-full border-2 border-gray-500 checked:border-transparent checked:bg-gray-800 checked:text-blue-500 checked:ring-2 checked:ring-offset-2'
                />
                {item}
              </label>
            ))}
          </div>

          <div className='pt-6 xl:pt-0'>
            <h2 className='mb-2 text-lg font-semibold'>Risk Level</h2>
            {data.riskLevel.map((item, index) => (
              <div key={index} className='flex items-center'>
                <label
                  htmlFor={`riskLevel-${index}`}
                  className='mr-2 flex cursor-pointer items-center'
                >
                  <input
                    type='radio'
                    id={`riskLevel-${index}`}
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
        <div className='grid xl:grid-cols-2 xl:space-x-0'>
          <div className=''>
            <h2 className='text-center text-lg font-semibold'>Strategy</h2>
            <div className='mt-2 flex max-h-20 flex-col items-center space-y-3 overflow-auto'>
              {data.strategy.map((item, index) => (
                <span
                  key={index}
                  className={` ${
                    item === selectedFilters.strategy
                      ? 'rounded-full bg-gray-600'
                      : ''
                  } block cursor-pointer  px-2 py-1`}
                  onClick={() => handleStrategySelection(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Asset */}
          <div className='pt-6 xl:pt-0'>
            <h2 className='mb-2 text-center text-lg font-semibold'>Asset</h2>
            <div className='mt-2 flex max-h-20 flex-col items-center space-y-3 overflow-auto'>
              {data.strategy.map((item, index) => (
                <div key={index} className='mr-4'>
                  <span
                    key={index}
                    className={` ${
                      item === selectedFilters.asset
                        ? 'rounded-full bg-gray-600'
                        : ''
                    } block cursor-pointer  px-2 py-1`}
                    onClick={() => handleAssetSelection(item)}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className='w-full rounded-lg bg-gray-600 py-2 font-semibold text-white'
          onClick={handleAppliedFilters}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
