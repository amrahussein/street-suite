export default function IndustryFiltersApplied({
  selectedIndustryFilters,
  handleIndustryFilterRemoval,
}) {
  return (
    <div className='mb-4'>
      <h2 className='mb-4 text-lg font-semibold'>Filters Applied</h2>
      <div className='h-28 rounded-lg bg-gray-500 p-4'>
        <div className='flex flex-wrap '>
          {selectedIndustryFilters.map((filter, index) => (
            <div
              key={index}
              className='mb-2 mr-2 rounded-md bg-blue-200 px-2 py-1 text-blue-800'
            >
              {filter}
              <span
                onClick={() => handleIndustryFilterRemoval(index)}
                className='text-gray-900-500 ml-1 cursor-pointer font-semibold focus:outline-none'
              >
                x
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
