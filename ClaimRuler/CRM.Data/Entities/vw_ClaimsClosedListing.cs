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
    
    public partial class vw_ClaimsClosedListing
    {
        public int ClaimID { get; set; }
        public int PolicyID { get; set; }
        public string Claim_num { get; set; }
        public string ClientClaimNumber { get; set; }
        public string Insured { get; set; }
        public bool IsActive { get; set; }
        public string StatusName { get; set; }
        public Nullable<System.DateTime> DateClosed { get; set; }
        public Nullable<System.DateTime> DateOpenedReported { get; set; }
        public int Age { get; set; }
        public int UserID { get; set; }
        public int AdjusterID { get; set; }
        public int CarrierID { get; set; }
        public Nullable<int> ClientID { get; set; }
    }
}
