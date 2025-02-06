import React, { useEffect } from 'react';
import LeadCard from './leadCard';
import { useFetchLeads } from '../hooks/useFetch';
import { toast } from 'react-toastify';
import { deleteData, postData } from '../utils/apiCall';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../libs/zustand';

const LeadList = () => {
  const { userleads, refetch } = useFetchLeads()

  const { token } = useAuthStore((state) => state);
  const navigate = useNavigate();

  // Redirect to login if the user is not logged in
  useEffect(() => {
    refetch()

    if (!token) {
      toast.warn("Please login to access this page");
      navigate("/login");
    }
  }, [token, navigate])


  const deleteLead = async (id) => {
    try {

      const response = deleteData(`/api/users/lead/delete_leads/${id}`);
      toast.promise(
        response,
        {
          pending: 'Lead deleting...',
          success: 'Lead is deleted 👌',
          error: 'something went wrong.. 🤯',
        }
      );
      const data = await response;
      console.log("data is ",data);
      
      if (data.success) {
        console.log("hello");
        refetch()
      }

    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("There was an error deleting the lead", error);
    }
  };

  console.log("userleads rohit kumar listlead", userleads);
  const leads = []
  return (
    <div className="py-12  grid grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
      {userleads?.map((lead) => (
        // <LeadCard key={lead.id} lead={lead}  />
        <LeadCard key={lead._id} lead={lead} onDelete={deleteLead} />
      ))}
    </div>
  )
}

export default LeadList;
