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
    
    public partial class CityMaster
    {
        public CityMaster()
        {
            this.Carrier = new HashSet<Carrier>();
            this.CarrierLocation = new HashSet<CarrierLocation>();
            this.Client = new HashSet<Client>();
            this.Contact = new HashSet<Contact>();
            this.Leads = new HashSet<Leads>();
            this.Leads1 = new HashSet<Leads>();
            this.LeadPolicy = new HashSet<LeadPolicy>();
            this.Mortgagee = new HashSet<Mortgagee>();
        }
    
        public int CityId { get; set; }
        public string CityName { get; set; }
        public int StateId { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<int> InsertBy { get; set; }
        public Nullable<System.DateTime> InsertDate { get; set; }
        public string InsertMachineInfo { get; set; }
        public Nullable<int> UpdateBy { get; set; }
        public Nullable<System.DateTime> UpdateDate { get; set; }
        public string UpdateMachineInfo { get; set; }
    
        public virtual ICollection<Carrier> Carrier { get; set; }
        public virtual ICollection<CarrierLocation> CarrierLocation { get; set; }
        public virtual StateMaster StateMaster { get; set; }
        public virtual ICollection<Client> Client { get; set; }
        public virtual ICollection<Contact> Contact { get; set; }
        public virtual ICollection<Leads> Leads { get; set; }
        public virtual ICollection<Leads> Leads1 { get; set; }
        public virtual ICollection<LeadPolicy> LeadPolicy { get; set; }
        public virtual ICollection<Mortgagee> Mortgagee { get; set; }
    }
}
