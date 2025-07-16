export function InputFields({ handleChange, inputTime }) {
  return (
    <div className='flex items-center justify-center'>
      {[
        { title: 'days', maxVal: 365 },
        { title: 'hours', maxVal: 24 },
        { title: 'minutes', maxVal: 60 },
        { title: 'seconds', maxVal: 60 },
      ].map((inp, inx, arr) => (
        <div className='relative' key={inp.title}>
          <input
            type='number'
            name={inp.title}
            value={inputTime[inp.title]}
            max={inp.maxVal}
            onChange={handleChange}
            className={`block w-[150px] text-center text-xl bg-white px-5 py-3 pt-7  text-black focus:outline-green-400 focus:border-0 border-r-1 border-r-gray-400 ${
              inx === 0 && 'rounded-l-2xl'
            } ${inx === arr.length - 1 && 'rounded-r-2xl'}`}
          ></input>
          <div className='title text-gray-800 capitalize absolute top-0 left-1/2 transform -translate-x-1/2'>
            {inp.title}
          </div>
        </div>
      ))}
    </div>
  );
}
