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
    
    public partial class vw_AdjusterPayoutSubReport
    {
        public Nullable<int> InvoiceNumber { get; set; }
        public Nullable<System.DateTime> ServiceDate { get; set; }
        public string AdjusterClaimNumber { get; set; }
        public int ClaimID { get; set; }
        public int PolicyID { get; set; }
        public string AdjusterName { get; set; }
        public decimal ExpenseAmount { get; set; }
        public Nullable<decimal> CommissionRate { get; set; }
        public Nullable<decimal> CommissionAmount { get; set; }
        public decimal TaxRate { get; set; }
        public Nullable<decimal> NetCommissionAmount { get; set; }
        public string InsuredName { get; set; }
        public string ServiceDescription { get; set; }
        public Nullable<int> StatusID { get; set; }
        public Nullable<int> ClientID { get; set; }
    }
}