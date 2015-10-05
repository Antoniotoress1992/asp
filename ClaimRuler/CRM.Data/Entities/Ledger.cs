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
    
    public partial class Ledger
    {
        public int ID { get; set; }
        public Nullable<int> LeadID { get; set; }
        public Nullable<int> InvoiceID { get; set; }
        public string ClientName { get; set; }
        public Nullable<System.DateTime> ClientPaid { get; set; }
        public Nullable<int> AdjusterID { get; set; }
        public Nullable<System.DateTime> AdjusterPaidDate { get; set; }
        public Nullable<decimal> CommissionTotal { get; set; }
        public Nullable<decimal> TotalExpenses { get; set; }
        public Nullable<decimal> AdjusterNet { get; set; }
        public Nullable<decimal> InvoiceTotal { get; set; }
    
        public virtual AdjusterMaster AdjusterMaster { get; set; }
        public virtual LeadInvoice LeadInvoice { get; set; }
        public virtual Leads Leads { get; set; }
    }
}