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
    
    public partial class Reminder
    {
        public int ReminderID { get; set; }
        public Nullable<int> TaskID { get; set; }
        public Nullable<int> EventID { get; set; }
        public Nullable<System.DateTime> ReminderDate { get; set; }
        public Nullable<int> RepeatFrequencyID { get; set; }
        public Nullable<int> AlertTypeID { get; set; }
        public bool IsActive { get; set; }
        public Nullable<int> ReminderWhen { get; set; }
    
        public virtual Task Task { get; set; }
    }
}