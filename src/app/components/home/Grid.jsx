import React from 'react'

const Grid = () => {

const Gridbox = [
    {title:"1",row:"grid-rows-1/2",column:"1/2"},
    {title:"2",row:"grid-rows-2/4",column:"2/2"},
    {title:"3",row:"grid-rows-1/2",column:"1/2"},
    {title:"4",row:"grid-rows-1/2",column:"1/2"},
    {title:"5",row:"grid-rows-1/2",column:"1/2"},
    {title:"6",row:"grid-rows-1/2",column:"1/2"},
]

  return (
    <div>
      <div className="border-3 grid grid-cols-3   border-black h-150 w-300 m-9 ">
        {Gridbox.map((items, index) => (
          <div key={index} className={ `border border-red-400 [grid-row: ${items.row}][grid-column:${items.column}] `}>
            <p className="text-black text-4xl flex justify-center">
              {items.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid