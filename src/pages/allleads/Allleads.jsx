import React from 'react'
import { useFetchAllLeads } from '../../hooks/useFetch'
import LeadCard from '../../components/LeadCard'
import { Link } from 'react-router-dom'

function Allleads() {
    const { alluserleads, refetch } = useFetchAllLeads()
    return (
        <>
            <h3 className="text-2xl sm:text-4xl font-semibold text-center pt-12 pb-6 text-blue-900 uppercase">List of lead</h3>
            <div className=" flex justify-center items-center flex-wrap gap-6 ">

                {alluserleads?.map((lead) => (
                    // <LeadCard key={lead.id} lead={lead}  />
                    <LeadCard key={lead._id} lead={lead} />
                ))}
            </div>
        </>
    )
}

export default Allleads