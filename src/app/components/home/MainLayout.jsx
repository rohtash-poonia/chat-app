// "use client";
// import { usePathname } from "next/navigation";
// import React from "react";
// const MainLayout = ({ children }) => {
//   const path = usePathname();
//   const navData = ["home", "about us", "service", "contact"];
//   console.log(path, "path");
//   return (
//     <div>
//       <header className="flex gap-4 items-center ">
//         {navData.map((items, index) => (
//           <a
//             href={items.toLowerCase().replace(" ", "-")}
//             key={index}
//             className={` p-1 ${
//               path === `/${items.toLowerCase().replace(" ", "-")}`
//                 ? "text-white bg-black"
//                 : "text-black bg-white"}`}>
//             {items}
//           </a>
//         ))}
//       </header>
//       <main>{children}</main>
//       <footer>footer</footer>
//     </div>
//   );
// };
// export default MainLayout;










