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
    
    public partial class LeadReportGenerateLog
    {
        public int LeadReportGenerateId { get; set; }
        public Nullable<int> LeadId { get; set; }
        public Nullable<System.DateTime> GenerateDate { get; set; }
        public Nullable<int> Generatedby { get; set; }
        public Nullable<int> InsertBy { get; set; }
        public Nullable<System.DateTime> InsertDate { get; set; }
        public string InsertMachineInfo { get; set; }
    }
}
