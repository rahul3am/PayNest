// // src/components/LandingImage.tsx
// import React from 'react';
// import paymentIllustration from '../../../packages/ui/payment-illustration.png';
// import benefits from '../../../packages/ui/Banefits-image.png';
// const LandingImage: React.FC = () => {
//   return (
//     <div className="grid grid-cols-2 gap-8 py-8 rounded-lg ">
//       <img
//         src={paymentIllustration.src}
//         alt="Happy character making a payment"
//         className="w-72 h-auto rounded-lg mr-10" // w-72 = 18rem
//         // className="h-150 w-196 object-cover ... mt-6 ml-8 columns-2 .."
//       />
//        <img
//         src={benefits.src}
//         alt="Happy character making a payment"
//         className="w-80 h-auto" // w-80 = 20rem
//         // className=""  max-w-4xl w-full h-auto object-contain
//       />
      
//     </div>
//   );
// };

// export default LandingImage;



// import React from 'react';
// import paymentIllustration from '../../../packages/ui/payment-illustration.png';
// import benefits from '../../../packages/ui/Banefits-image.png';

// const LandingImage: React.FC = () => {
//   return (
//     <div className="flex justify-center items-start gap-8 p-8">
//       {/* Left Image */}
//       <img
//         src={paymentIllustration.src}
//         alt="Happy character making a payment"
//         className="w-[500px] h-[400px] object-cover rounded-xl shadow-lg"
//       />

//       {/* Right Image */}
//       <img
//         src={benefits.src}
//         alt="Benefits of payment app"
//         className="w-[500px] h-[400px] object-cover rounded-xl shadow-lg"
//       />
//     </div>
//   );
// };

// export default LandingImage;

// import React from 'react';
// import paymentIllustration from '../../../packages/ui/payment-illustration.png';
// import benefits from '../../../packages/ui/Banefits-image.png';

// const LandingImage: React.FC = () => {
//   return (
//     <div className="flex justify-center items-start gap-8 p-8">
//       {/* Left Image */}
//       <img
//         src={paymentIllustration.src}
//         alt="Happy character making a payment"
//         className="w-[500px] h-auto object-contain rounded-xl shadow-lg"
//       />

//       {/* Right Image */}
//       <img
//         src={benefits.src}
//         alt="Benefits of payment app"
//         className="w-[500px] h-auto object-contain rounded-xl shadow-lg"
//       />
//     </div>
//   );
// };

// export default LandingImage;


// import React from 'react';
// import paymentIllustration from '../../../packages/ui/payment-illustration.png';
// import benefits from '../../../packages/ui/Banefits-image.png';

// const LandingImage: React.FC = () => {
//   return (
//     <div className="flex justify-center items-start gap-8 p-8">
//       {/* Left Image */}
//       <img
//         src={paymentIllustration.src}
//         alt="Happy character making a payment"
//         className="h-[400px] w-auto object-contain rounded-xl shadow-lg"
//       />

//       {/* Right Image */}
//       <img
//         src={benefits.src}
//         alt="Benefits of payment app"
//         className="h-[400px] w-auto object-contain rounded-xl shadow-lg"
//       />
//     </div>
//   );
// };

// export default LandingImage;


import React from 'react';
import paymentIllustration from '../../../packages/ui/payment-illustration.png';
import benefits from '../../../packages/ui/Banefits-image.png';

const LandingImage: React.FC = () => {
  return (
    <div className="flex justify-center items-start gap-8 p-8">
      {/* Left Image */}
      <img
        src={paymentIllustration.src}
        alt="Happy character making a payment"
        className="h-[460px] w-auto object-contain rounded-xl shadow-lg"
      />

      {/* Right Image */}
      <img
        src={benefits.src}
        alt="Benefits of payment app"
        className="h-[460px] w-[520px] object-contain rounded-xl "
      />
    </div>
  );
};

export default LandingImage;
