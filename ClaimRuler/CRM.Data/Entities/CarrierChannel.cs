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
    
    public partial class CarrierChannel
    {
        public int ChannelID { get; set; }
        public int ChannelTypeID { get; set; }
        public string ChannelData { get; set; }
        public int CarrierID { get; set; }
        public Nullable<bool> IsPrimary { get; set; }
    
        public virtual Carrier Carrier { get; set; }
        public virtual ChannelType ChannelType { get; set; }
    }
}