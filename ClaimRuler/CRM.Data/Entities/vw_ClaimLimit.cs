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
    
    public partial class vw_ClaimLimit
    {
        public int ClaimLimitID { get; set; }
        public int ClaimID { get; set; }
        public int LimitID { get; set; }
        public string LimitLetter { get; set; }
        public int LimitType { get; set; }
        public string LimitDescription { get; set; }
        public Nullable<decimal> LimitAmount { get; set; }
        public Nullable<decimal> LimitDeductible { get; set; }
        public string CATDeductible { get; set; }
        public string SettlementType { get; set; }
        public Nullable<decimal> ConInsuranceLimit { get; set; }
        public Nullable<decimal> LossAmountACV { get; set; }
        public Nullable<decimal> LossAmountRCV { get; set; }
        public Nullable<decimal> Depreciation { get; set; }
        public Nullable<decimal> OverageAmount { get; set; }
        public Nullable<decimal> NonRecoverableDepreciation { get; set; }
        public string ApplyTo { get; set; }
        public Nullable<decimal> ITV { get; set; }
        public Nullable<decimal> Reserve { get; set; }
        public Nullable<bool> IsStatic { get; set; }
        public Nullable<bool> IsDeletedClaim { get; set; }
        public Nullable<bool> IsDeletedPolicy { get; set; }
    }
}