﻿
namespace CRM.Data.Entities
{
	public class Globals {
		
		public enum Actions {
			AssignUsersToActivities = 1,
			GenerateInvoice = 2
		}

		public enum CarrierInvoiceProfileType {
			FlatRate = 1,
			CATRate = 2,
			ItemizedBilling = 3,
		}

		public enum ClaimProgressStatus {
			ClaimAssignedNotAcceptedYet = 1,
			ClaimInProcessAccepted,
			ContactedInsured,
			SiteInspectionScheduled,
			SiteInspectionCompleted,
			FirstReportCompleted,
			InterimReportCompleted,
			FinalReportCompleted,
			ReadyForInvoice,
			ClaimInvoiceApprovedSent,
			ClaimInvoiceRejectedRedo,
			InvoicePartialPayment,
			InvoicePaidInFullClosed,
			ClaimInvoiceReopened,
			ClaimCompletedReadyForReview
		}

		public enum ContactType {
			Agent = 57,
			ContentsAdjuster = 19,
			CompanyBuilder = 48,
			CompanyInventory = 49,
			Examiner = 46,
			InventoryCompany = 51,
			InsideAdjuster = 45,
			OurBuilder = 56,
			OutsideAdjuster = 44,
			OwnerManager = 13,
			OwnerManagerEntityName = 14,
			Supervisor = 6,
            Claimant=60,
			TeamLead = 12,
            Estimator = 58,
            DeskAdjuster = 61
		}

		public enum FeeInvoiceDesignation {
			FlatRate = 1,
			CAT = 2,
			Daily = 3,
			LossPercentageFee = 4,
			TimeAndExpenseOnly = 5
		}

		public enum InvoiceType {
			NetClaimPayable = 1,
			GrossClaimPayable = 2
		}

		public enum ObjectType {
			Claim = 1,
			Invoice = 2
		}

		public enum RepeatFrequency {
			Daily = 1, Weekly, Monthly, Year

		}

        public enum RuleType
        {

            NewClaimAttention = 1,
            ClaimAssingmentReview = 2,
            ContactWithInsured = 8,
            FirstReport = 33,

            InterimOrFinalReportOrClaimClosing = 36,

            AdjusterClaimReview = 37,
            FlagSpecificExpenseTypeperCarrier = 38,


            HighClaimAmountReview = 3,
            CarrierClaimReview = 4,
            ClaimExpenseReview = 5,
            CATFlatRateClaimBorderlineReview = 6,
            ApprovalMasterControlReviewAllClaimsInvoicesByException = 7,
            SpecificExpenseTypePerCarrier = 100,
            EventNameAutomatedProgramNameBillingSelection = 9

        }

		public enum Status {
			Active,
			New,
			Deleted
		}

		public enum Task_Status {
			Active = 1,
			Cancelled = 2,
			Complete = 3,
			Dismissed = 4
		}

		public enum Task_Priority {
			Low = 1, Normal = 2, High = 3
		}

		public enum TaskType {
			Task = 1,
			Event = 2
		}

        public static string ClaimId = "";
        public static string UserId = "";
        public static string UserName = "";
        public static string RoleId = "";
        public static string ClientId = "";
        public static string ClientShowTask = "";
        public static string rolePermission = "";
        public static string roleActions = "";
        public static string Count = "";
        public static int[] ClaimList = new int[0];
        public static int claimCount = 0;
        public static int[] exceptionListAdjuster = new int[0];
        public static int[] exceptionListSupervisor = new int[0];
        
		
        static readonly Globals _instance = new Globals();


        public void setclaimCount(int int_calimCount)
        {

            claimCount = int_calimCount;
        }
        public int getclaimCount()
        {

            return claimCount;
        }

        public void setExceptionListAdjuster(int[] int_exception) {
            exceptionListAdjuster = int_exception;
        }

        public int[] getExceptionListAdjuster() {

            return exceptionListAdjuster;
        }

        public void setExceptionListSupervisor(int[] int_exception)
        {
            exceptionListSupervisor = int_exception;
        }

        public int[] getExceptionListSupervisor()
        {

            return exceptionListSupervisor;
        }


        public void setCliamList(int[] int_claim) {

            ClaimList = int_claim;
        }
        public int[] getCliamList()
        {

            return ClaimList;
        }





        public void setClaimId(string str_val) {
            ClaimId = str_val;
        }

        public string getClaimId()
        {
            return ClaimId;
        }



        public void setUserId(string str_val)
        {
            UserId = str_val;
        }

        public string getUserId()
        {
            return UserId;
        }


        public void setUserName(string str_val)
        {
            UserName = str_val;
        }

        public string getUserName()
        {
            return UserName;
        }




        public void setRoleId(string str_val)
        {
            RoleId = str_val;
        }

        public string getRoleId()
        {
            return RoleId;
        }



        public void setClientId(string str_val)
        {
            ClientId = str_val;
        }

        public string getClientId()
        {
            return ClientId;
        }



        public void setClientShowTask(string str_val)
        {
            ClientShowTask = str_val;
        }

        public string getClientShowTask()
        {
            return ClientShowTask;
        }


        public void setrolePermission(string str_val)
        {
            rolePermission = str_val;
        }

        public string getrolePermission()
        {
            return rolePermission;
        }


        public void setroleActions(string str_val)
        {
            roleActions = str_val;
        }

        public string getroleActions()
        {
            return roleActions;
        }

        public void setCount(string str_val)
        {
            Count = str_val;
        }

        public string getCount()
        {
            return Count;
        }





        public static Globals Instance()
        {
            return _instance;
        }
    }
}
