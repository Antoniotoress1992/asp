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
    
    public partial class DataFormField
    {
        public DataFormField()
        {
            this.DataFormFieldTemplate = new HashSet<DataFormFieldTemplate>();
        }
    
        public int FieldID { get; set; }
        public int FormID { get; set; }
        public string FieldPrompt { get; set; }
    
        public virtual DataForm DataForm { get; set; }
        public virtual ICollection<DataFormFieldTemplate> DataFormFieldTemplate { get; set; }
    }
}
