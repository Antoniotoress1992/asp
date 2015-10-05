﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using DHTMLX.Scheduler;
using DHTMLX.Scheduler.Data;
using SchedulerTest.Models;
using System.Text;
namespace SchedulerTest.Controllers
{

    /// <summary>
    /// Exporting events to iCal format
    /// </summary>
    public class ExportToICalController : BasicSchedulerController
    {

        public override ActionResult Index()
        {
            var sched = new DHXScheduler();

            sched.Controller = "BasicScheduler";
            sched.Config.first_hour = 8;

            // 'Serialize' extension is required
            sched.Extensions.Add(SchedulerExtensions.Extension.Serialize);
            sched.InitialDate = new DateTime(2011, 9, 19);

            return View(sched);
        }

        /// <summary>
        /// client-side serialization - client sends data in ical format, see Views/ExportToICal/Index.aspx
        /// </summary>
        /// <returns></returns>
        public ActionResult Export()
        {

            Response.ContentType = "text/plain";
            Response.AppendHeader("content-disposition", "attachment; filename=dhtmlxScheduler.ics");
            return Content(Request.Form["data"].ToString());           
        }


        /// <summary>
        /// Serializing data
        /// </summary>
        /// <returns></returns>
        public ActionResult ExportServerSide()
        {
            Response.ContentType = "text/plain";
            Response.AppendHeader("content-disposition", "attachment; filename=dhtmlxScheduler.ics");

            var renderer = new ICalRenderer();
            var events = new DHXSchedulerDataContext().Events;

            return Content(renderer.ToICal(events));
            //you can also use custom function for rendering of the events
            //renderer.ToICal(events, RenderItem);
        }


        public void RenderItem(StringBuilder builder, object item)
        {
            var ev = item as Event;
            builder.AppendLine("BEGIN:VEVENT");
            builder.AppendLine(string.Format("DTSTART:{0:yyyyMMddTHmmss}", ev.start_date));
            builder.AppendLine(string.Format("DTEND:{0:yyyyMMddTHmmss}", ev.end_date));
            builder.AppendLine(string.Format("SUMMARY:{0}", ev.text));
            builder.AppendLine("END:VEVENT");
        }      

    }
}
