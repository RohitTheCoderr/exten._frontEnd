// import { UserIcon, MailIcon, PhoneIcon, ClipboardListIcon, Trash2 } from 'lucide-react';

// const LeadCard = ({ lead, onDelete }) => (
//   <div className="bg-gradient-to-r from-cyan-50 to-blue-100 p-6 rounded-2xl shadow-xl mb-6 hover:shadow-2xl transition-transform transform hover:scale-105">
//     {/* Header Section */}
//     <div className="flex justify-between items-center mb-4">
//       <div className="flex items-center gap-3">
//         <UserIcon className="text-blue-600" size={24} />
//         <h3 className="text-2xl font-bold text-blue-900">{lead.name}</h3>
//       </div>
//       <span
//         className={`px-3 py-1 text-sm font-semibold rounded-full ${
//           lead.status === "New"
//             ? "bg-green-200 text-green-800"
//             : lead.status === "Contacted"
//             ? "bg-yellow-200 text-yellow-800"
//             : "bg-red-200 text-red-800"
//         }`}
//       >
//         {lead.status}
//       </span>
//     </div>

//     {/* Lead Info Section */}
//     <div className="">
//       <div className="flex items-center gap-3">
//         <MailIcon className="text-blue-600" size={20} />
//         <p className="text-blue-700">{lead.email}</p>
//       </div>

//       <div className="flex items-center gap-3">
//         <PhoneIcon className="text-blue-600" size={20} />
//         <p className="text-blue-700">{lead.phoneNumber || "N/A"}</p>
//       </div>

//       <div className="flex items-center gap-3">
//         <ClipboardListIcon className="text-blue-600" size={20} />
//         <p className="text-gray-700 font-medium">User ID: {lead.userId || "N/A"}</p>
//       </div>
//     </div>

//     {/* Action Buttons */}
//     <div className="flex justify-end mt-4">
//       <button
//         onClick={() => onDelete(lead._id)}
//         className="bg-gradient-to-r from-red-400 to-red-600 text-white px-5 py-2 rounded-md hover:from-red-600 hover:to-red-700 shadow-md flex items-center gap-2 transition-colors"
//       >
//         <Trash2 size={18} />
//         Delete
//       </button>
//     </div>
//   </div>
// );

// export default LeadCard;


import { UserIcon, MailIcon, PhoneIcon, ClipboardListIcon, Trash2 } from 'lucide-react';

const LeadCard = ({ lead, onDelete }) => (
  <div className="bg-gradient-to-r from-cyan-50 to-blue-100 p-2 sm:p-6 rounded-2xl shadow-lg mb-6 hover:shadow-xl  m-auto w-[95%]  sm:w-[35rem]">
    {/* Header Section */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <UserIcon className="text-blue-600" size={28} />
        <h3 className="text-sm sm:text-xl font-semibold text-blue-900 uppercase">{lead.name}</h3>
      </div>
      <span
        className={`px-3 py-1 text-sm font-semibold rounded-full ${
          lead.status === "New"
            ? "bg-green-100 text-green-700"
            : lead.status === "Contacted"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {lead.status}
      </span>
    </div>

    {/* Lead Info Section */}
    <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4">
      <div className="flex items-center gap-3">
        <MailIcon className="text-blue-600" size={20} />
        <p className="text-blue-700 truncate">{lead.email}</p>
      </div>

      <div className="flex items-center gap-3">
        <PhoneIcon className="text-blue-600" size={20} />
        <p className="text-blue-700">{lead.phoneNumber || "N/A"}</p>
      </div>

      <div className="flex items-center gap-3">
        <ClipboardListIcon className="text-blue-600" size={20} />
        <p className="text-gray-700 font-medium">User ID: {lead.userId || "N/A"}</p>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex justify-end mt-6">
      <button
        onClick={() => onDelete(lead._id)}
        className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-800 shadow-lg flex items-center gap-2 transition-all"
      >
        <Trash2 size={18} />
        Delete
      </button>
    </div>
  </div>
);

export default LeadCard;
