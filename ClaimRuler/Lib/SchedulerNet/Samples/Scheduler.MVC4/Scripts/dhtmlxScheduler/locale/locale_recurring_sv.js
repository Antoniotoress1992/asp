/*
Copyright Dinamenta, UAB. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/
scheduler.__recurring_template='<div class="dhx_form_repeat"> <form> <div class="dhx_repeat_left"> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="day" />Dagligen</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="week"/>Veckovis</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="month" checked />M\u00e5nadsvis</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="year" />\u00c5rligen</label> </div> <div class="dhx_repeat_divider"></div> <div class="dhx_repeat_center"> <div style="display:none;" id="dhx_repeat_day"> <label><input class="dhx_repeat_radio" type="radio" name="day_type" value="d"/>Var</label><input class="dhx_repeat_text" type="text" name="day_count" value="1" />dag<br /> <label><input class="dhx_repeat_radio" type="radio" name="day_type" checked value="w"/>Varje arbetsdag</label> </div> <div style="display:none;" id="dhx_repeat_week"> Upprepa var<input class="dhx_repeat_text" type="text" name="week_count" value="1" />vecka dessa dagar:<br /> <table class="dhx_repeat_days"> <tr> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="1" />M\u00e5ndag</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="4" />Tisdag</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="2" />Torsdag</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="5" />Fredag</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="3" />Onsdag</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="6" />L\u00f6rdag</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="0" />S\u00f6ndag</label><br /><br /> </td> </tr> </table> </div> <div id="dhx_repeat_month"> <label><input class="dhx_repeat_radio" type="radio" name="month_type" value="d"/>Upprepa</label><input class="dhx_repeat_text" type="text" name="month_day" value="1" />dagen var<input class="dhx_repeat_text" type="text" name="month_count" value="1" />m\u00e5nad<br /> <label><input class="dhx_repeat_radio" type="radio" name="month_type" checked value="w"/>Den</label><input class="dhx_repeat_text" type="text" name="month_week2" value="1" /><select name="month_day2"><option value="1" selected >m\u00e5ndagen<option value="2">tisdagen<option value="3">onsdagen<option value="4">torsdagen<option value="5">fredagen<option value="6">l\u00f6rdagen<option value="0">s\u00f6ndagen</select>var<input class="dhx_repeat_text" type="text" name="month_count2" value="1" />m\u00e5nad<br /> </div> <div style="display:none;" id="dhx_repeat_year"> <label><input class="dhx_repeat_radio" type="radio" name="year_type" value="d"/>Varje</label><input class="dhx_repeat_text" type="text" name="year_day" value="1" />dag i<select name="year_month"><option value="0" selected >Januari<option value="1">Februari<option value="2">Mars<option value="3">April<option value="4">Maj<option value="5">Juni<option value="6">Juli<option value="7">Augusti<option value="8">September<option value="9">Oktober<option value="10">November<option value="11">December</select>m\u00e5nad<br /> <label><input class="dhx_repeat_radio" type="radio" name="year_type" checked value="w"/>Den</label><input class="dhx_repeat_text" type="text" name="year_week2" value="1" /><select name="year_day2"><option value="1" selected >m\u00e5ndagen<option value="2">tisdagen<option value="3">onsdagen<option value="4">torsdagen<option value="5">fredagen<option value="6">l\u00f6rdagen<option value="7">s\u00f6ndagen</select>i<select name="year_month2"><option value="0" selected >Januari<option value="1">Februari<option value="2">Mars<option value="3">April<option value="4">Maj<option value="5">Juni<option value="6">Juli<option value="7">Augusti<option value="8">September<option value="9">Oktober<option value="10">November<option value="11">December</select><br /> </div> </div> <div class="dhx_repeat_divider"></div> <div class="dhx_repeat_right"> <label><input class="dhx_repeat_radio" type="radio" name="end" checked/>Inget slutdatum</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="end" />Efter</label><input class="dhx_repeat_text" type="text" name="occurences_count" value="1" />upprepningar<br /> <label><input class="dhx_repeat_radio" type="radio" name="end" />Sluta efter</label><input class="dhx_repeat_date" type="text" name="date_of_end" value="'+
scheduler.config.repeat_date_of_end+'" /><br /> </div> </form> </div> <div style="clear:both"> </div>';
