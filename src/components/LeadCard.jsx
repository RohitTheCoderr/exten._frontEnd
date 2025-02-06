
import { UserIcon, MailIcon, PhoneIcon, ClipboardListIcon, Trash2, RefreshCw  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const LeadCard = ({ lead, onDelete, onUpdate }) =>{
   const navigate = useNavigate();
  return (
  <div className="bg-gradient-to-r from-cyan-50 to-blue-100 p-2 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl w-[95%] sm:w-[35rem]">
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
        <p className="text-gray-700 font-medium">Lead ID: {lead._id || "N/A"}</p>
        {/* <p className="text-gray-700 font-medium">User ID: {lead.userId || "N/A"}</p> */}
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex justify-end gap-4 mt-6">
      <button
        onClick={() =>navigate("/lead_management" , { state: { leadData: lead }})}
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 sm:px-4 py-[0.4rem] sm:py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 shadow-lg flex items-center gap-2 transition-all"
      >
        <RefreshCw size={18} />
        Update
      </button>
      <button
        onClick={() => onDelete(lead._id)}
        className="bg-gradient-to-r from-red-500 to-red-700 text-white px-3 sm:px-4 py-[0.4rem] sm:py-2 rounded-lg hover:from-red-600 hover:to-red-800 shadow-lg flex items-center gap-2 transition-all"
      >
        <Trash2 size={18} />
        Delete
      </button>
    </div>
  </div>
)}

export default LeadCard;
