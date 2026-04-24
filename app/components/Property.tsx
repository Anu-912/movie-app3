import React from "react";
import { img, MovieSummary } from "../type";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import Image from "next/image";

export const Property = ({ images }: { images:MovieSummary }) => {
 
  return (
    <div className="flex h-screen w-full snap-x snap-mandatory overflow-x-scroll">
          {images.backdrop_path.map((key,index)=> (
           <div key={index}  className="relative h-screen w-full flex-shrink-0 snap-center" >
<div className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url(${img})` }}>

</div>
 <div className="relative z-10 text-white">Title</div>
    </div>
        
          )
          )}
        
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${img})` }} // API URL
//           />
//           {/* Optional Overlay Content */}
//           <div className="relative z-10 text-white">Title</div>
//         </div>
//       ))}
//     </div>
//   );
};
{/* // const ImageCarousel = ({ images }: { images: string[] }) => { */}
//   return (
//     // 1. Container: Mandatory Scroll Snap
//     <div className="flex h-screen w-full snap-x snap-mandatory overflow-x-scroll">
//       {images.map((img, index) => (
//         <div 
//           key={index}
//           // 2. Snap child point
//           className="relative h-screen w-full flex-shrink-0 snap-center"
//         >
//           {/* 3. Absolute Background Image */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${img})` }} // API URL
//           />
//           {/* Optional Overlay Content */}
//           <div className="relative z-10 text-white">Title</div>
//         </div>
//       ))}
//     </div>
//   );
// };
