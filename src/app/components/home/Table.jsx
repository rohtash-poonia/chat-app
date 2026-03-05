// "use client"
// import React, { useState, useRef, useEffect } from "react";

// const CustomDropdown = ({ items = [], value = "", onChange }) => {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(value || items[0] || "");
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleOutside = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", handleOutside);
//     return () => document.removeEventListener("mousedown", handleOutside);
//   }, []);

//   const handleSelect = (item) => {
//     setSelected(item);
//     onChange && onChange(item);
//     setOpen(false);
//   };

//   return (
//     <div ref={ref} className="relative">
//       <button
//         type="button"
//         onClick={() => setOpen((s) => !s)}
//         className="w-full text-left p-2 border rounded bg-white"
//       >
//         {selected}
//       </button>

//       {open && (
//         <ul className="absolute left-0 top-full mt-1 w-full bg-white border rounded shadow max-h-40 overflow-auto z-10">
//           {items.map((it, idx) => (
//             <li
//               key={idx}
//               onClick={() => handleSelect(it)}
//               className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               {it}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// const Table = () => {
//   const students = ["Divesh", "Duhan", "Rohtash", "poonia", "Sandeep", "Nain"];

//   return (
//     <div className="my-10">
//       {/* Outer container will clip any overflow so dropdown cannot open outside */}
//       <div className="p-5 m-2 border-2 overflow-hidden max-h-72">
//         <table className="w-full table-fixed">
//           <thead>
//             <tr className="border-2">
//               <th className="text-left p-2">Students Data</th>
//             </tr>
//           </thead>
//         </table>

//         <div className="max-h-56 overflow-auto">
//           <table className="w-full table-fixed">
//             <tbody>
//               <tr className="border-2">
//                 <td className="p-2 border-2 w-1/4">
//                   <div className="relative">
//                     <CustomDropdown items={students} />
//                   </div>
//                 </td>
//                 <td className="p-2 border-2">Vijender</td>
//                 <td className="p-2 border-2">Sandeep</td>
//                 <td className="p-2 border-2">Pankaj</td>
//               </tr>
//               <tr className="border-2">
//                 <td className="p-2 border-2">full-stack</td>
//                 <td className="p-2 border-2">front-end</td>
//                 <td className="p-2 border-2">full-stack</td>
//                 <td className="p-2 border-2">full-stack</td>
//               </tr>
//               <tr className="border-2">
//                 <td className="p-2 border-2">full-stack</td>
//                 <td className="p-2 border-2">front-end</td>
//                 <td className="p-2 border-2">full-stack</td>
//                 <td className="p-2 border-2">full-stack</td>
//               </tr>
//               <tr className="border-2">
//                 <td className="p-2 border-2">full-stack</td>
//                 <td className="p-2 border-2">front-end</td>
//                 <td className="p-2 border-2">full-stack</td>
//                 <td className="p-2 border-2">full-stack</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;
