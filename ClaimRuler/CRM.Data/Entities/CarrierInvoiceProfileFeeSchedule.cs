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
    
    public partial class CarrierInvoiceProfileFeeSchedule
    {
        public int ID { get; set; }
        public int CarrierInvoiceProfileID { get; set; }
        public decimal RangeAmountFrom { get; set; }
        public decimal RangeAmountTo { get; set; }
        public decimal FlatFee { get; set; }
        public decimal PercentFee { get; set; }
        public decimal MinimumFee { get; set; }
        public Nullable<decimal> FlatCatPercent { get; set; }
        public Nullable<decimal> FlatCatFee { get; set; }
    
        public virtual CarrierInvoiceProfile CarrierInvoiceProfile { get; set; }
    }
}
