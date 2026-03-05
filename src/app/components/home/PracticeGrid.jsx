// import React from 'react'
// const items = [
//   { id: "a", area: "a" },
//   { id: "b", area: "b" },
//   { id: "c", area: "c" },
//   { id: "d", area: "d" },
//   { id: "e", area: "e" },
//   { id: "f", area: "f" },
//   { id: "g", area: "g" },
//   { id: "h", area: "h" },
// ];
// const Practice = () => {
//   return (
//     <div className="min-h-screen bg-black p-6">
//       <div
//         className="grid gap-3"
//         style={{
//           gridTemplateColumns: "6",
//           gridAutoRows: "120px",
//           gridTemplateAreas: `
//             "a a b b c c"
//             "d d b b c c"
//             "d d e e f f"
//             "g g g g f f"
//             "g g g g h h"
//           `,
//         }}
//       >
//         {items.map((item) => (
//           <div
//             key={item.id}
//             style={{ gridArea: item.area }}
//             className="border border-white bg-black"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Practice