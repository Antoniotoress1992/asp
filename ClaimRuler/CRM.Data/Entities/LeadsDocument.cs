//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CRM.Data.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class LeadsDocument
    {
        public int LeadDocumentId { get; set; }
        public Nullable<int> LeadId { get; set; }
        public string DocumentName { get; set; }
        public string Description { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<int> InsertBy { get; set; }
        public Nullable<System.DateTime> InsertDate { get; set; }
        public string InsertMachineInfo { get; set; }
        public Nullable<int> UpdateBy { get; set; }
        public Nullable<System.DateTime> UpdateDate { get; set; }
        public string UpdateMachineInfo { get; set; }
        public Nullable<int> PolicyTypeID { get; set; }
        public Nullable<bool> IsPrint { get; set; }
    
        public virtual Leads Leads { get; set; }
    }
}