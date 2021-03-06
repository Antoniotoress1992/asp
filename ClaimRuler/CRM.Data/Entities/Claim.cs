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
    
    public partial class Claim
    {
        public Claim()
        {
            this.ClaimComment = new HashSet<ClaimComment>();
            this.ClaimDocument = new HashSet<ClaimDocument>();
            this.ClaimImage = new HashSet<ClaimImage>();
            this.ClaimLimit = new HashSet<ClaimLimit>();
            this.ClaimService = new HashSet<ClaimService>();
            this.ClaimSubLimit = new HashSet<ClaimSubLimit>();
            this.Invoice = new HashSet<Invoice>();
        }
    
        public int ClaimID { get; set; }
        public int PolicyID { get; set; }
        public Nullable<int> StatusID { get; set; }
        public Nullable<int> SubStatusID { get; set; }
        public Nullable<int> AdjusterID { get; set; }
        public string AdjusterClaimNumber { get; set; }
        public Nullable<int> SupervisorID { get; set; }
        public Nullable<int> TeamLeadID { get; set; }
        public Nullable<int> ManagerID { get; set; }
        public Nullable<int> ManagerEntityID { get; set; }
        public Nullable<int> SeverityNumber { get; set; }
        public string EventType { get; set; }
        public string EventName { get; set; }
        public string ClaimWorkflowType { get; set; }
        public string CauseOfLoss { get; set; }
        public Nullable<System.DateTime> LossDate { get; set; }
        public Nullable<System.DateTime> DateOpenedReported { get; set; }
        public Nullable<System.DateTime> DateInitialReserveChange { get; set; }
        public Nullable<System.DateTime> DateAssigned { get; set; }
        public Nullable<System.DateTime> DateAcknowledged { get; set; }
        public Nullable<System.DateTime> DateFirstContactAttempt { get; set; }
        public Nullable<System.DateTime> DateContacted { get; set; }
        public Nullable<System.DateTime> DateInspectionScheduled { get; set; }
        public Nullable<System.DateTime> DateInspectionCompleted { get; set; }
        public Nullable<System.DateTime> DateSubmitted { get; set; }
        public Nullable<System.DateTime> DateIndemnityPaymentRequested { get; set; }
        public Nullable<System.DateTime> DateIndemnityPaymentApproved { get; set; }
        public Nullable<System.DateTime> DateIndemnityPaymentIssued { get; set; }
        public Nullable<System.DateTime> DateClosed { get; set; }
        public Nullable<System.DateTime> DateFirstReOpened { get; set; }
        public Nullable<System.DateTime> DateReopenCompleted { get; set; }
        public Nullable<System.DateTime> DateFinalClosed { get; set; }
        public string PolicyFormType { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> IsInvoiced { get; set; }
        public Nullable<int> FeeInvoiceDesignation { get; set; }
        public Nullable<decimal> GrossLossPayable { get; set; }
        public Nullable<decimal> Depreciation { get; set; }
        public Nullable<decimal> Deductible { get; set; }
        public Nullable<decimal> OutstandingIndemnityReserve { get; set; }
        public Nullable<decimal> OutstandingLAEReserves { get; set; }
        public Nullable<decimal> TotalIndemnityPaid { get; set; }
        public Nullable<decimal> CoverageAPaid { get; set; }
        public Nullable<decimal> CoverageBPaid { get; set; }
        public Nullable<decimal> CoverageCPaid { get; set; }
        public Nullable<decimal> CoverageDPaid { get; set; }
        public Nullable<decimal> TotalExpensesPaid { get; set; }
        public Nullable<decimal> NetClaimPayable { get; set; }
        public Nullable<System.DateTime> DateCompleted { get; set; }
        public Nullable<System.DateTime> DateFirstClosed { get; set; }
        public Nullable<bool> IsInvoiceReady { get; set; }
        public string DamageType { get; set; }
        public Nullable<int> CasualtyFeeInvoiceDesignation { get; set; }
        public Nullable<decimal> CasualtyGrossClaimPayable { get; set; }
        public string InsurerClaimNumber { get; set; }
        public Nullable<System.DateTime> LastStatusUpdate { get; set; }
        public Nullable<decimal> CycleTime { get; set; }
        public Nullable<decimal> ReopenCycleTime { get; set; }
        public Nullable<System.DateTime> DateEstimateUploaded { get; set; }
        public Nullable<int> OutsideAdjusterID { get; set; }
        public Nullable<int> ContentAdjusterID { get; set; }
        public Nullable<int> ExaminerID { get; set; }
        public Nullable<int> CompanyBuilderID { get; set; }
        public Nullable<int> CompanyInventoryID { get; set; }
        public Nullable<int> OurBuilderID { get; set; }
        public Nullable<int> InventoryCompanyID { get; set; }
        public Nullable<int> CarrierInvoiceProfileID { get; set; }
        public Nullable<int> ProgressStatusID { get; set; }
        public string XactNetTransactionID { get; set; }
        public Nullable<System.DateTime> LastProgressChanged { get; set; }
        public string TypeofLoss { get; set; }
        public string CatId { get; set; }
        public Nullable<decimal> AdjCommOverride { get; set; }
        public Nullable<decimal> AdjCommFlatFeeOverride { get; set; }
        public string StatusUpdatedBy { get; set; }
        public string StatusCommentNote { get; set; }
        public string StatusEmailTo { get; set; }
        public Nullable<int> CarrierID { get; set; }
        public Nullable<decimal> NonRecoverableDepreciation { get; set; }
        public string JobSizeCode { get; set; }
        public string EstimateCount { get; set; }
        public string CarrierName { get; set; }
        public string Mitigation { get; set; }
        public string ProfileCode { get; set; }
        public string taxJurisdiction { get; set; }
        public string Overhead { get; set; }
        public string profit { get; set; }
        public string CumulativeOp { get; set; }
        public string DefaultRepairedBy { get; set; }
        public Nullable<bool> DepOnMaterials { get; set; }
        public Nullable<bool> DepOnNonMaterials { get; set; }
        public Nullable<bool> DepOnTaxes { get; set; }
        public Nullable<decimal> MaxAllowedDep { get; set; }
        public string Catastrophe { get; set; }
        public string JobType { get; set; }
        public string LossDescription { get; set; }
        public Nullable<int> InvoiceTypeID { get; set; }
        public Nullable<int> EstimatorID { get; set; }
        public Nullable<int> DeskAdjusterID { get; set; }
        public Nullable<System.DateTime> DateEntered { get; set; }
        public Nullable<System.DateTime> DateProjCompleted { get; set; }
    
        public virtual AdjusterMaster AdjusterMaster { get; set; }
        public virtual LeadPolicy LeadPolicy { get; set; }
        public virtual StatusMaster StatusMaster { get; set; }
        public virtual SubStatusMaster SubStatusMaster { get; set; }
        public virtual ICollection<ClaimComment> ClaimComment { get; set; }
        public virtual ICollection<ClaimDocument> ClaimDocument { get; set; }
        public virtual ICollection<ClaimImage> ClaimImage { get; set; }
        public virtual ICollection<ClaimLimit> ClaimLimit { get; set; }
        public virtual ICollection<ClaimService> ClaimService { get; set; }
        public virtual ICollection<ClaimSubLimit> ClaimSubLimit { get; set; }
        public virtual ICollection<Invoice> Invoice { get; set; }
    }

    public class ClaimReport{
        public int claimId { get; set; }
        public string AdjusterClaimNumber { get; set; }
        public string InsurerClaim{get;set;}
        public string InsuredName{get;set;}
        public Nullable<decimal> CoverageA { get; set; }
        public Nullable<decimal> CoverageB { get; set; }
        public Nullable<decimal> CoverageC { get; set; }
        public Nullable<decimal> CoverageD { get; set; }
        public Nullable<decimal> CoverageE { get; set; }
        public Nullable<decimal> OtherCoverage { get; set; }
        public Nullable<decimal> OurInvoice { get; set; }
        public Nullable<decimal> Miles { get; set; }
        public Nullable<DateTime> DateReceived { get; set; }
        public Nullable<DateTime> DateClosed { get; set; }
        public Nullable<int> DaystoClose{get;set;}
        public string OurAdjuster{get;set;}
        public string CarrierExaminer {get;set;}
        public string InsureBranch { get; set; }
        public Nullable <int> CarrierId { get; set; }
        public int InsureBranchId { get; set; }
        public Nullable<int> ExaminerId { get; set; }
        public int limitId { get; set; }
        public Nullable<int> CarrierInvoiceProfileID { get; set; }
        public string examinerName { get; set; }
        public int policyId { get; set; }
  
      
    }
    public class ClaimReportView
    {
        public List<ClaimReport> claimReportArr { get; set; }
        public List<ClaimReportAverage> ClaimReportAverageObj { get; set; }

    }
    public class ClaimReportAverage
    {
        public decimal avgCoverageA { get; set; }
        public decimal avgCoverageB { get; set; }
        public decimal avgCoverageC { get; set; }
        public decimal avgCoverageD { get; set; }
        public decimal avgCoverageE { get; set; }
        public decimal avgOtherCoverage { get; set; }
        public decimal avgOurInvoice { get; set; }
        public decimal avgMiles { get; set; }
        public decimal totalCoverageA { get; set; }
        public decimal totalCoverageB { get; set; }
        public decimal totalCoverageC { get; set; }
        public decimal totalCoverageD { get; set; }
        public decimal totalCoverageE { get; set; }
        public decimal totalOtherCoverage { get; set; }
        public decimal totalOurInvoice { get; set; }
        public decimal totalMiles { get; set; }
    }
}
