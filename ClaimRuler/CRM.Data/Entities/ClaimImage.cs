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
    
    public partial class ClaimImage
    {
        public int ClaimImageID { get; set; }
        public int ClaimID { get; set; }
        public string ImageName { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public Nullable<int> UserID { get; set; }
        public bool IsPrint { get; set; }
        public Nullable<System.DateTime> ImageDate { get; set; }
    
        public virtual Claim Claim { get; set; }
        public virtual SecUser SecUser { get; set; }
    }
}
