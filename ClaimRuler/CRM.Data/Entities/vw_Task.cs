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
    
    public partial class vw_Task
    {
        public int TaskID { get; set; }
        public Nullable<int> TaskStatusID { get; set; }
        public string TaskStatusName { get; set; }
        public Nullable<int> ClientID { get; set; }
        public string Subject { get; set; }
        public string Detail { get; set; }
        public Nullable<System.DateTime> DateDue { get; set; }
        public Nullable<System.DateTime> end_date { get; set; }
        public Nullable<int> UserID { get; set; }
        public string UserName { get; set; }
        public Nullable<int> LeadID { get; set; }
        public string InsuredName { get; set; }
        public Nullable<int> MasterStatusID { get; set; }
        public Nullable<int> PolicyID { get; set; }
        public Nullable<int> PolicyTypeID { get; set; }
        public Nullable<int> PriorityID { get; set; }
        public string PriorityName { get; set; }
        public Nullable<bool> isAllDay { get; set; }
        public Nullable<int> ReminderInterval { get; set; }
        public Nullable<bool> IsReminder { get; set; }
        public string Location { get; set; }
        public Nullable<int> CarrierID { get; set; }
        public int Activity { get; set; }
        public string Description { get; set; }
    }
}
