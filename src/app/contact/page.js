// import React from "react";
// import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

// const ContactSection = () => {
//   return (
//     <section className="bg-red-400 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
//         {/* Left Column: Contact Information */}
//         <div className="text-white">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//             Contact Us
//           </h1>
//           <p className="text-lg mb-8 max-w-md">
//             Wish to enquire about admissions or anything else? You can walk in
//             during office hours, give us a call or simply submit the form here.
//           </p>

//           {/* Address */}
//           <div className="flex items-start mb-6">
//             <span className="material-icons text-2xl mr-3 mt-1">
//               <FaMapMarkerAlt className="text-2xl mr-3 mt-1" />
//             </span>
//             <div>
//               <p className="font-semibold text-xl mb-1">Address</p>
//               <address className="not-italic text-lg">
//                 Komplek Pondok Duta 1, Jalan Duta
//                 <br />
//                 Wenang Blok H2 No.4 RT. 15 RW. 14 Kel.
//                 <br />
//                 Tugu Kec. Cimanggis. Depok. 16451
//               </address>
//             </div>
//           </div>

//           {/* WhatsApp */}
//           <div className="flex items-center mb-6">
//             <span className="material-icons text-2xl mr-3">
//               <FaWhatsapp className="text-2xl mr-3" />
//             </span>
//             <div>
//               <p className="font-semibold text-xl mb-1">WhatsApp</p>
//               <a
//                 href="https://wa.me/628118411893"
//                 className="text-lg underline hover:no-underline"
//               >
//                 +628118411893
//               </a>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="flex items-center mb-6">
//             <span className="material-icons text-2xl mr-3">
//               <FaEnvelope className="text-2xl mr-3" />
//             </span>
//             <div>
//               <p className="font-semibold text-xl mb-1">Email</p>
//               <a
//                 href="mailto:preschoolgranada@gmail.com"
//                 className="text-lg underline hover:no-underline"
//               >
//                 preschoolgranada@gmail.com
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Contact Form */}
//         <div>
//           <h2 className="text-3xl font-bold text-white mb-6">
//             Send Us a Message
//           </h2>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="fullName" className="sr-only">
//                 Full name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 placeholder="Full name"
//                 className="bg-white w-full px-4 py-3 rounded-md border-gray-300 focus:ring-orange-700 focus:border-orange-700 text-gray-900 placeholder-gray-500"
//               />
//             </div>
//             <div>
//               <label htmlFor="yourNumber" className="sr-only">
//                 Your Number
//               </label>
//               <input
//                 type="tel" // Use type="tel" for phone numbers
//                 id="yourNumber"
//                 name="yourNumber"
//                 placeholder="Your Number"
//                 className="bg-white w-full px-4 py-3 rounded-md border-gray-300 focus:ring-orange-700 focus:border-orange-700 text-gray-900 placeholder-gray-500"
//               />
//             </div>
//             <div>
//               <label htmlFor="subject" className="sr-only">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 placeholder="Subject"
//                 className="bg-white w-full px-4 py-3 rounded-md border-gray-300 focus:ring-orange-700 focus:border-orange-700 text-gray-900 placeholder-gray-500"
//               />
//             </div>
//             <div>
//               <label htmlFor="yourMessage" className="sr-only">
//                 Your message
//               </label>
//               <textarea
//                 id="yourMessage"
//                 name="yourMessage"
//                 placeholder="Your message"
//                 rows="5" // Adjust rows for desired height
//                 className="bg-white w-full px-4 py-3 rounded-md border-gray-300 focus:ring-orange-700 focus:border-orange-700 text-gray-900 placeholder-gray-500 resize-y" // resize-y allows vertical resizing
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-white text-red-400 font-bold py-3 px-8 rounded-md hover:bg-orange-100 transition duration-300 ease-in-out"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
