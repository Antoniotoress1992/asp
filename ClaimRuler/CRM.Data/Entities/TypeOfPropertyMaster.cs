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
    
    public partial class TypeOfPropertyMaster
    {
        public TypeOfPropertyMaster()
        {
            this.Leads = new HashSet<Leads>();
        }
    
        public int TypeOfPropertyId { get; set; }
        public string TypeOfProperty { get; set; }
        public Nullable<bool> Status { get; set; }
        public Nullable<int> InsertBy { get; set; }
        public Nullable<System.DateTime> InsertDate { get; set; }
        public string InsertMachineInfo { get; set; }
        public Nullable<int> UpdateBy { get; set; }
        public Nullable<System.DateTime> UpdateDate { get; set; }
        public string UpdateMachineIfo { get; set; }
    
        public virtual ICollection<Leads> Leads { get; set; }
    }
}
