﻿/*
Crude oil, West Texas Intermediate (WTI) 40` API, f.o.b. Midland Texas, 
spot price Crude oil Price, WTI, $/bbl

Data from Quandl:
http://www.quandl.com/WORLDBANK-World-Bank/WLD_CRUDE_WTI-Crude-oil-Price-WTI-bbl

Originally from the World Bank:
http://www.worldbank.org/
*/

var data = [
  {
      "Date": "2013-06-30",
      "Value": "95.7895"
  },
  {
      "Date": "2013-05-31",
      "Value": "94.75818181818"
  },
  {
      "Date": "2013-04-30",
      "Value": "92.01909090909"
  },
  {
      "Date": "2013-03-31",
      "Value": "92.9125"
  },
  {
      "Date": "2013-02-28",
      "Value": "95.29947368421"
  },
  {
      "Date": "2013-01-31",
      "Value": "94.74428571429"
  },
  {
      "Date": "2012-12-31",
      "Value": "88.2155"
  },
  {
      "Date": "2012-11-30",
      "Value": "86.6780952381"
  },
  {
      "Date": "2012-10-31",
      "Value": "89.51739130435"
  },
  {
      "Date": "2012-09-30",
      "Value": "94.50789473684"
  },
  {
      "Date": "2012-08-31",
      "Value": "94.11043478261"
  },
  {
      "Date": "2012-07-31",
      "Value": "87.90142857143"
  },
  {
      "Date": "2012-06-30",
      "Value": "82.35952380952"
  },
  {
      "Date": "2012-05-31",
      "Value": "94.68181818182"
  },
  {
      "Date": "2012-04-30",
      "Value": "103.283"
  },
  {
      "Date": "2012-03-31",
      "Value": "106.15045454546"
  },
  {
      "Date": "2012-02-29",
      "Value": "102.214"
  },
  {
      "Date": "2012-01-31",
      "Value": "100.287"
  },
  {
      "Date": "2011-12-31",
      "Value": "98.56380952381"
  },
  {
      "Date": "2011-11-30",
      "Value": "97.12333333333"
  },
  {
      "Date": "2011-10-31",
      "Value": "86.40619047619"
  },
  {
      "Date": "2011-09-30",
      "Value": "85.57714285714"
  },
  {
      "Date": "2011-08-31",
      "Value": "86.32130434783"
  },
  {
      "Date": "2011-07-31",
      "Value": "97.3065"
  },
  {
      "Date": "2011-06-30",
      "Value": "96.25409090909"
  },
  {
      "Date": "2011-05-31",
      "Value": "101.28285714286"
  },
  {
      "Date": "2011-04-30",
      "Value": "109.9595"
  },
  {
      "Date": "2011-03-31",
      "Value": "102.91608695652"
  },
  {
      "Date": "2011-02-28",
      "Value": "89.53263157895"
  },
  {
      "Date": "2011-01-31",
      "Value": "89.4085"
  },
  {
      "Date": "2010-12-31",
      "Value": "89.14681818182"
  },
  {
      "Date": "2010-11-30",
      "Value": "84.23619047619"
  },
  {
      "Date": "2010-10-31",
      "Value": "81.89952380952"
  },
  {
      "Date": "2010-09-30",
      "Value": "75.29142857143"
  },
  {
      "Date": "2010-08-31",
      "Value": "76.60181818182"
  },
  {
      "Date": "2010-07-31",
      "Value": "76.35047619048"
  },
  {
      "Date": "2010-06-30",
      "Value": "75.35363636364"
  },
  {
      "Date": "2010-05-31",
      "Value": "73.73"
  },
  {
      "Date": "2010-04-30",
      "Value": "84.47761904762"
  },
  {
      "Date": "2010-03-31",
      "Value": "81.25043478261"
  },
  {
      "Date": "2010-02-28",
      "Value": "76.41315789474"
  },
  {
      "Date": "2010-01-31",
      "Value": "78.35526315789"
  },
  {
      "Date": "2009-12-31",
      "Value": "74.48727272727"
  },
  {
      "Date": "2009-11-30",
      "Value": "77.995"
  },
  {
      "Date": "2009-10-31",
      "Value": "75.77227272727"
  },
  {
      "Date": "2009-09-30",
      "Value": "69.44333333333"
  },
  {
      "Date": "2009-08-31",
      "Value": "71.06"
  },
  {
      "Date": "2009-07-31",
      "Value": "64.12045454545"
  },
  {
      "Date": "2009-06-30",
      "Value": "69.62136363636"
  },
  {
      "Date": "2009-05-31",
      "Value": "59.125"
  },
  {
      "Date": "2009-04-30",
      "Value": "49.80904761905"
  },
  {
      "Date": "2009-03-31",
      "Value": "47.52090909091"
  },
  {
      "Date": "2009-02-28",
      "Value": "39.15052631579"
  },
  {
      "Date": "2009-01-31",
      "Value": "41.7385"
  },
  {
      "Date": "2008-12-31",
      "Value": "41.43904761905"
  },
  {
      "Date": "2008-11-30",
      "Value": "57.29368421053"
  },
  {
      "Date": "2008-10-31",
      "Value": "76.6147826087"
  },
  {
      "Date": "2008-09-30",
      "Value": "103.93666666667"
  },
  {
      "Date": "2008-08-31",
      "Value": "116.64047619048"
  },
  {
      "Date": "2008-07-31",
      "Value": "133.37772727273"
  },
  {
      "Date": "2008-06-30",
      "Value": "133.92714285714"
  },
  {
      "Date": "2008-05-31",
      "Value": "125.013"
  },
  {
      "Date": "2008-04-30",
      "Value": "112.61818181818"
  },
  {
      "Date": "2008-03-31",
      "Value": "105.4725"
  },
  {
      "Date": "2008-02-29",
      "Value": "95.384"
  },
  {
      "Date": "2008-01-31",
      "Value": "92.97571428571"
  },
  {
      "Date": "2007-12-31",
      "Value": "91.35666666667"
  },
  {
      "Date": "2007-11-30",
      "Value": "94.75523809524"
  },
  {
      "Date": "2007-10-31",
      "Value": "85.90391304348"
  },
  {
      "Date": "2007-09-30",
      "Value": "79.90631578947"
  },
  {
      "Date": "2007-08-31",
      "Value": "72.37826086957"
  },
  {
      "Date": "2007-07-31",
      "Value": "74.1419047619"
  },
  {
      "Date": "2007-06-30",
      "Value": "67.4919047619"
  },
  {
      "Date": "2007-05-31",
      "Value": "63.45090909091"
  },
  {
      "Date": "2007-04-30",
      "Value": "63.9365"
  },
  {
      "Date": "2007-03-31",
      "Value": "60.60181818182"
  },
  {
      "Date": "2007-02-28",
      "Value": "59.25"
  },
  {
      "Date": "2007-01-31",
      "Value": "54.24"
  },
  {
      "Date": "2006-12-31",
      "Value": "61.999"
  },
  {
      "Date": "2006-11-30",
      "Value": "59.1305"
  },
  {
      "Date": "2006-10-31",
      "Value": "58.85045454545"
  },
  {
      "Date": "2006-09-30",
      "Value": "63.819"
  },
  {
      "Date": "2006-08-31",
      "Value": "73.04173913043"
  },
  {
      "Date": "2006-07-31",
      "Value": "74.40421052632"
  },
  {
      "Date": "2006-06-30",
      "Value": "70.93181818182"
  },
  {
      "Date": "2006-05-31",
      "Value": "70.93318181818"
  },
  {
      "Date": "2006-04-30",
      "Value": "69.41277777778"
  },
  {
      "Date": "2006-03-31",
      "Value": "62.88956521739"
  },
  {
      "Date": "2006-02-28",
      "Value": "61.61526315789"
  },
  {
      "Date": "2006-01-31",
      "Value": "65.4835"
  },
  {
      "Date": "2005-12-31",
      "Value": "59.41428571429"
  },
  {
      "Date": "2005-11-30",
      "Value": "58.283"
  },
  {
      "Date": "2005-10-31",
      "Value": "62.36380952381"
  },
  {
      "Date": "2005-09-30",
      "Value": "65.5380952381"
  },
  {
      "Date": "2005-08-31",
      "Value": "64.95565217391"
  },
  {
      "Date": "2005-07-31",
      "Value": "58.666"
  },
  {
      "Date": "2005-06-30",
      "Value": "56.38909090909"
  },
  {
      "Date": "2005-05-31",
      "Value": "49.81380952381"
  },
  {
      "Date": "2005-04-30",
      "Value": "52.96285714286"
  },
  {
      "Date": "2005-03-31",
      "Value": "54.16818181818"
  },
  {
      "Date": "2005-02-28",
      "Value": "47.96263157895"
  },
  {
      "Date": "2005-01-31",
      "Value": "46.82"
  },
  {
      "Date": "2004-12-31",
      "Value": "43.22904761905"
  },
  {
      "Date": "2004-11-30",
      "Value": "48.4465"
  },
  {
      "Date": "2004-10-31",
      "Value": "53.24619047619"
  },
  {
      "Date": "2004-09-30",
      "Value": "45.93047619048"
  },
  {
      "Date": "2004-08-31",
      "Value": "44.92363636364"
  },
  {
      "Date": "2004-07-31",
      "Value": "40.8219047619"
  },
  {
      "Date": "2004-06-30",
      "Value": "38.03095238095"
  },
  {
      "Date": "2004-05-31",
      "Value": "40.285"
  },
  {
      "Date": "2004-04-30",
      "Value": "36.70523809524"
  },
  {
      "Date": "2004-03-31",
      "Value": "36.73130434783"
  },
  {
      "Date": "2004-02-29",
      "Value": "34.73"
  },
  {
      "Date": "2004-01-31",
      "Value": "34.24315789474"
  },
  {
      "Date": "2003-12-31",
      "Value": "32.12333333333"
  },
  {
      "Date": "2003-11-30",
      "Value": "31.09222222222"
  },
  {
      "Date": "2003-10-31",
      "Value": "30.32173913043"
  },
  {
      "Date": "2003-09-30",
      "Value": "28.28380952381"
  },
  {
      "Date": "2003-08-31",
      "Value": "31.58380952381"
  },
  {
      "Date": "2003-07-31",
      "Value": "30.74954545455"
  },
  {
      "Date": "2003-06-30",
      "Value": "30.71"
  },
  {
      "Date": "2003-05-31",
      "Value": "28.13238095238"
  },
  {
      "Date": "2003-04-30",
      "Value": "28.22142857143"
  },
  {
      "Date": "2003-03-31",
      "Value": "33.31571428571"
  },
  {
      "Date": "2003-02-28",
      "Value": "35.80263157895"
  },
  {
      "Date": "2003-01-31",
      "Value": "32.94952380952"
  },
  {
      "Date": "2002-12-31",
      "Value": "29.43571428571"
  },
  {
      "Date": "2002-11-30",
      "Value": "26.28315789474"
  },
  {
      "Date": "2002-10-31",
      "Value": "28.850869565220002"
  },
  {
      "Date": "2002-09-30",
      "Value": "29.67"
  },
  {
      "Date": "2002-08-31",
      "Value": "28.37045454545"
  },
  {
      "Date": "2002-07-31",
      "Value": "26.92380952381"
  },
  {
      "Date": "2002-06-30",
      "Value": "25.5085"
  },
  {
      "Date": "2002-05-31",
      "Value": "27.04454545455"
  },
  {
      "Date": "2002-04-30",
      "Value": "26.24318181818"
  },
  {
      "Date": "2002-03-31",
      "Value": "24.377"
  },
  {
      "Date": "2002-02-28",
      "Value": "20.72315789474"
  },
  {
      "Date": "2002-01-31",
      "Value": "19.68761904762"
  },
  {
      "Date": "2001-12-31",
      "Value": "19.31263157895"
  },
  {
      "Date": "2001-11-30",
      "Value": "19.59"
  },
  {
      "Date": "2001-10-31",
      "Value": "22.17565217391"
  },
  {
      "Date": "2001-09-30",
      "Value": "26.115"
  },
  {
      "Date": "2001-08-31",
      "Value": "27.4452173913"
  },
  {
      "Date": "2001-07-31",
      "Value": "26.44285714286"
  },
  {
      "Date": "2001-06-30",
      "Value": "27.56"
  },
  {
      "Date": "2001-05-31",
      "Value": "28.61"
  },
  {
      "Date": "2001-04-30",
      "Value": "27.4205"
  },
  {
      "Date": "2001-03-31",
      "Value": "27.23863636364"
  },
  {
      "Date": "2001-02-28",
      "Value": "29.5685"
  },
  {
      "Date": "2001-01-31",
      "Value": "29.55"
  },
  {
      "Date": "2000-12-31",
      "Value": "28.4025"
  },
  {
      "Date": "2000-11-30",
      "Value": "34.368"
  },
  {
      "Date": "2000-10-31",
      "Value": "33.0459"
  },
  {
      "Date": "2000-09-30",
      "Value": "33.886"
  },
  {
      "Date": "2000-08-31",
      "Value": "31.3083"
  },
  {
      "Date": "2000-07-31",
      "Value": "29.9729"
  },
  {
      "Date": "2000-06-30",
      "Value": "31.8609"
  },
  {
      "Date": "2000-05-31",
      "Value": "28.83"
  },
  {
      "Date": "2000-04-30",
      "Value": "25.84"
  },
  {
      "Date": "2000-03-31",
      "Value": "29.92"
  },
  {
      "Date": "2000-02-29",
      "Value": "29.281"
  },
  {
      "Date": "2000-01-31",
      "Value": "27.27"
  },
  {
      "Date": "1999-12-31",
      "Value": "26.08"
  },
  {
      "Date": "1999-11-30",
      "Value": "24.85"
  },
  {
      "Date": "1999-10-31",
      "Value": "22.64"
  },
  {
      "Date": "1999-09-30",
      "Value": "23.86"
  },
  {
      "Date": "1999-08-31",
      "Value": "21.25"
  },
  {
      "Date": "1999-07-31",
      "Value": "20.07"
  },
  {
      "Date": "1999-06-30",
      "Value": "17.89"
  },
  {
      "Date": "1999-05-31",
      "Value": "17.75"
  },
  {
      "Date": "1999-04-30",
      "Value": "17.34"
  },
  {
      "Date": "1999-03-31",
      "Value": "14.66"
  },
  {
      "Date": "1999-02-28",
      "Value": "12.01"
  },
  {
      "Date": "1999-01-31",
      "Value": "12.49"
  },
  {
      "Date": "1998-12-31",
      "Value": "11.31"
  },
  {
      "Date": "1998-11-30",
      "Value": "12.96"
  },
  {
      "Date": "1998-10-31",
      "Value": "14.42"
  },
  {
      "Date": "1998-09-30",
      "Value": "14.98"
  },
  {
      "Date": "1998-08-31",
      "Value": "13.4024"
  },
  {
      "Date": "1998-07-31",
      "Value": "14.112"
  },
  {
      "Date": "1998-06-30",
      "Value": "13.706"
  },
  {
      "Date": "1998-05-31",
      "Value": "14.9"
  },
  {
      "Date": "1998-04-30",
      "Value": "15.32"
  },
  {
      "Date": "1998-03-31",
      "Value": "14.76"
  },
  {
      "Date": "1998-02-28",
      "Value": "15.81"
  },
  {
      "Date": "1998-01-31",
      "Value": "16.51"
  },
  {
      "Date": "1997-12-31",
      "Value": "18.09"
  },
  {
      "Date": "1997-11-30",
      "Value": "19.88"
  },
  {
      "Date": "1997-10-31",
      "Value": "21.21"
  },
  {
      "Date": "1997-09-30",
      "Value": "19.58523809524"
  },
  {
      "Date": "1997-08-31",
      "Value": "19.62"
  },
  {
      "Date": "1997-07-31",
      "Value": "19.3"
  },
  {
      "Date": "1997-06-30",
      "Value": "18.87"
  },
  {
      "Date": "1997-05-31",
      "Value": "20.5048"
  },
  {
      "Date": "1997-04-30",
      "Value": "19.4"
  },
  {
      "Date": "1997-03-31",
      "Value": "20.69"
  },
  {
      "Date": "1997-02-28",
      "Value": "21.83"
  },
  {
      "Date": "1997-01-31",
      "Value": "24.93"
  },
  {
      "Date": "1996-12-31",
      "Value": "25.32"
  },
  {
      "Date": "1996-11-30",
      "Value": "23.66"
  },
  {
      "Date": "1996-10-31",
      "Value": "24.94"
  },
  {
      "Date": "1996-09-30",
      "Value": "23.92"
  },
  {
      "Date": "1996-08-31",
      "Value": "21.97"
  },
  {
      "Date": "1996-07-31",
      "Value": "21.36"
  },
  {
      "Date": "1996-06-30",
      "Value": "20.27"
  },
  {
      "Date": "1996-05-31",
      "Value": "21.08"
  },
  {
      "Date": "1996-04-30",
      "Value": "23.2"
  },
  {
      "Date": "1996-03-31",
      "Value": "21.16"
  },
  {
      "Date": "1996-02-29",
      "Value": "19.07"
  },
  {
      "Date": "1996-01-31",
      "Value": "18.89"
  },
  {
      "Date": "1995-12-31",
      "Value": "18.83"
  },
  {
      "Date": "1995-11-30",
      "Value": "17.79"
  },
  {
      "Date": "1995-10-31",
      "Value": "17.33"
  },
  {
      "Date": "1995-09-30",
      "Value": "18.03"
  },
  {
      "Date": "1995-08-31",
      "Value": "17.96"
  },
  {
      "Date": "1995-07-31",
      "Value": "17.42"
  },
  {
      "Date": "1995-06-30",
      "Value": "18.5"
  },
  {
      "Date": "1995-05-31",
      "Value": "19.64"
  },
  {
      "Date": "1995-04-30",
      "Value": "19.87"
  },
  {
      "Date": "1995-03-31",
      "Value": "18.54"
  },
  {
      "Date": "1995-02-28",
      "Value": "18.53"
  },
  {
      "Date": "1995-01-31",
      "Value": "17.99"
  },
  {
      "Date": "1994-12-31",
      "Value": "17.16"
  },
  {
      "Date": "1994-11-30",
      "Value": "18.1"
  },
  {
      "Date": "1994-10-31",
      "Value": "17.65"
  },
  {
      "Date": "1994-09-30",
      "Value": "17.45"
  },
  {
      "Date": "1994-08-31",
      "Value": "18.35"
  },
  {
      "Date": "1994-07-31",
      "Value": "19.65"
  },
  {
      "Date": "1994-06-30",
      "Value": "19.05"
  },
  {
      "Date": "1994-05-31",
      "Value": "17.85"
  },
  {
      "Date": "1994-04-30",
      "Value": "16.3"
  },
  {
      "Date": "1994-03-31",
      "Value": "14.65"
  },
  {
      "Date": "1994-02-28",
      "Value": "14.75"
  },
  {
      "Date": "1994-01-31",
      "Value": "15.0"
  },
  {
      "Date": "1993-12-31",
      "Value": "15.55"
  },
  {
      "Date": "1993-11-30",
      "Value": "16.75"
  },
  {
      "Date": "1993-10-31",
      "Value": "18.15"
  },
  {
      "Date": "1993-09-30",
      "Value": "17.5"
  },
  {
      "Date": "1993-08-31",
      "Value": "18.0"
  },
  {
      "Date": "1993-07-31",
      "Value": "17.9"
  },
  {
      "Date": "1993-06-30",
      "Value": "19.15"
  },
  {
      "Date": "1993-05-31",
      "Value": "20.0"
  },
  {
      "Date": "1993-04-30",
      "Value": "20.3"
  },
  {
      "Date": "1993-03-31",
      "Value": "20.35"
  },
  {
      "Date": "1993-02-28",
      "Value": "20.05"
  },
  {
      "Date": "1993-01-31",
      "Value": "19.05"
  },
  {
      "Date": "1992-12-31",
      "Value": "19.4"
  },
  {
      "Date": "1992-11-30",
      "Value": "20.35"
  },
  {
      "Date": "1992-10-31",
      "Value": "21.7"
  },
  {
      "Date": "1992-09-30",
      "Value": "21.9"
  },
  {
      "Date": "1992-08-31",
      "Value": "21.3"
  },
  {
      "Date": "1992-07-31",
      "Value": "21.75"
  },
  {
      "Date": "1992-06-30",
      "Value": "22.35"
  },
  {
      "Date": "1992-05-31",
      "Value": "21.0"
  },
  {
      "Date": "1992-04-30",
      "Value": "20.25"
  },
  {
      "Date": "1992-03-31",
      "Value": "18.95"
  },
  {
      "Date": "1992-02-29",
      "Value": "19.0"
  },
  {
      "Date": "1992-01-31",
      "Value": "18.8"
  },
  {
      "Date": "1991-12-31",
      "Value": "19.55"
  },
  {
      "Date": "1991-11-30",
      "Value": "22.6"
  },
  {
      "Date": "1991-10-31",
      "Value": "23.25"
  },
  {
      "Date": "1991-09-30",
      "Value": "21.85"
  },
  {
      "Date": "1991-08-31",
      "Value": "21.7"
  },
  {
      "Date": "1991-07-31",
      "Value": "21.45"
  },
  {
      "Date": "1991-06-30",
      "Value": "20.2"
  },
  {
      "Date": "1991-05-31",
      "Value": "21.25"
  },
  {
      "Date": "1991-04-30",
      "Value": "20.8"
  },
  {
      "Date": "1991-03-31",
      "Value": "19.9"
  },
  {
      "Date": "1991-02-28",
      "Value": "20.55"
  },
  {
      "Date": "1991-01-31",
      "Value": "24.7"
  },
  {
      "Date": "1990-12-31",
      "Value": "27.15"
  },
  {
      "Date": "1990-11-30",
      "Value": "32.3"
  },
  {
      "Date": "1990-10-31",
      "Value": "35.9"
  },
  {
      "Date": "1990-09-30",
      "Value": "33.7"
  },
  {
      "Date": "1990-08-31",
      "Value": "27.15"
  },
  {
      "Date": "1990-07-31",
      "Value": "18.65"
  },
  {
      "Date": "1990-06-30",
      "Value": "16.85"
  },
  {
      "Date": "1990-05-31",
      "Value": "18.45"
  },
  {
      "Date": "1990-04-30",
      "Value": "18.6"
  },
  {
      "Date": "1990-03-31",
      "Value": "20.4"
  },
  {
      "Date": "1990-02-28",
      "Value": "22.1"
  },
  {
      "Date": "1990-01-31",
      "Value": "22.65"
  },
  {
      "Date": "1989-12-31",
      "Value": "21.1"
  },
  {
      "Date": "1989-11-30",
      "Value": "19.8"
  },
  {
      "Date": "1989-10-31",
      "Value": "20.1"
  },
  {
      "Date": "1989-09-30",
      "Value": "19.6"
  },
  {
      "Date": "1989-08-31",
      "Value": "18.55"
  },
  {
      "Date": "1989-07-31",
      "Value": "19.75"
  },
  {
      "Date": "1989-06-30",
      "Value": "20.0"
  },
  {
      "Date": "1989-05-31",
      "Value": "20.05"
  },
  {
      "Date": "1989-04-30",
      "Value": "20.95"
  },
  {
      "Date": "1989-03-31",
      "Value": "19.45"
  },
  {
      "Date": "1989-02-28",
      "Value": "17.8"
  },
  {
      "Date": "1989-01-31",
      "Value": "18.0"
  },
  {
      "Date": "1988-12-31",
      "Value": "16.3"
  },
  {
      "Date": "1988-11-30",
      "Value": "14.0"
  },
  {
      "Date": "1988-10-31",
      "Value": "13.8"
  },
  {
      "Date": "1988-09-30",
      "Value": "14.45"
  },
  {
      "Date": "1988-08-31",
      "Value": "15.55"
  },
  {
      "Date": "1988-07-31",
      "Value": "15.5"
  },
  {
      "Date": "1988-06-30",
      "Value": "16.65"
  },
  {
      "Date": "1988-05-31",
      "Value": "17.4"
  },
  {
      "Date": "1988-04-30",
      "Value": "17.85"
  },
  {
      "Date": "1988-03-31",
      "Value": "16.2"
  },
  {
      "Date": "1988-02-29",
      "Value": "16.75"
  },
  {
      "Date": "1988-01-31",
      "Value": "17.15"
  },
  {
      "Date": "1987-12-31",
      "Value": "17.3"
  },
  {
      "Date": "1987-11-30",
      "Value": "18.85"
  },
  {
      "Date": "1987-10-31",
      "Value": "19.85"
  },
  {
      "Date": "1987-09-30",
      "Value": "19.5"
  },
  {
      "Date": "1987-08-31",
      "Value": "20.2"
  },
  {
      "Date": "1987-07-31",
      "Value": "21.3"
  },
  {
      "Date": "1987-06-30",
      "Value": "20.05"
  },
  {
      "Date": "1987-05-31",
      "Value": "19.4"
  },
  {
      "Date": "1987-04-30",
      "Value": "18.65"
  },
  {
      "Date": "1987-03-31",
      "Value": "18.45"
  },
  {
      "Date": "1987-02-28",
      "Value": "17.75"
  },
  {
      "Date": "1987-01-31",
      "Value": "18.6"
  },
  {
      "Date": "1986-12-31",
      "Value": "16.25"
  },
  {
      "Date": "1986-11-30",
      "Value": "15.25"
  },
  {
      "Date": "1986-10-31",
      "Value": "14.9"
  },
  {
      "Date": "1986-09-30",
      "Value": "14.95"
  },
  {
      "Date": "1986-08-31",
      "Value": "15.3"
  },
  {
      "Date": "1986-07-31",
      "Value": "11.55"
  },
  {
      "Date": "1986-06-30",
      "Value": "13.5"
  },
  {
      "Date": "1986-05-31",
      "Value": "15.45"
  },
  {
      "Date": "1986-04-30",
      "Value": "12.9"
  },
  {
      "Date": "1986-03-31",
      "Value": "12.65"
  },
  {
      "Date": "1986-02-28",
      "Value": "15.4"
  },
  {
      "Date": "1986-01-31",
      "Value": "22.9"
  },
  {
      "Date": "1985-12-31",
      "Value": "27.35"
  },
  {
      "Date": "1985-11-30",
      "Value": "29.85"
  },
  {
      "Date": "1985-10-31",
      "Value": "28.85"
  },
  {
      "Date": "1985-09-30",
      "Value": "27.65"
  },
  {
      "Date": "1985-08-31",
      "Value": "27.6"
  },
  {
      "Date": "1985-07-31",
      "Value": "26.85"
  },
  {
      "Date": "1985-06-30",
      "Value": "27.2"
  },
  {
      "Date": "1985-05-31",
      "Value": "27.65"
  },
  {
      "Date": "1985-04-30",
      "Value": "28.85"
  },
  {
      "Date": "1985-03-31",
      "Value": "28.3"
  },
  {
      "Date": "1985-02-28",
      "Value": "27.35"
  },
  {
      "Date": "1985-01-31",
      "Value": "25.65"
  },
  {
      "Date": "1984-12-31",
      "Value": "26.70000076294"
  },
  {
      "Date": "1984-11-30",
      "Value": "28.15999984741"
  },
  {
      "Date": "1984-10-31",
      "Value": "28.63999938965"
  },
  {
      "Date": "1984-09-30",
      "Value": "29.29999923706"
  },
  {
      "Date": "1984-08-31",
      "Value": "29.17000007629"
  },
  {
      "Date": "1984-07-31",
      "Value": "28.79000091553"
  },
  {
      "Date": "1984-06-30",
      "Value": "30.04000091553"
  },
  {
      "Date": "1984-05-31",
      "Value": "30.45000076294"
  },
  {
      "Date": "1984-04-30",
      "Value": "30.62999916077"
  },
  {
      "Date": "1984-03-31",
      "Value": "30.72999954224"
  },
  {
      "Date": "1984-02-29",
      "Value": "30.07999992371"
  },
  {
      "Date": "1984-01-31",
      "Value": "29.84000015259"
  },
  {
      "Date": "1983-12-31",
      "Value": "29.23999977112"
  },
  {
      "Date": "1983-11-30",
      "Value": "30.0"
  },
  {
      "Date": "1983-10-31",
      "Value": "30.39999961853"
  },
  {
      "Date": "1983-09-30",
      "Value": "31.26000022888"
  },
  {
      "Date": "1983-08-31",
      "Value": "31.95999908447"
  },
  {
      "Date": "1983-07-31",
      "Value": "31.60000038147"
  },
  {
      "Date": "1983-06-30",
      "Value": "30.95000076294"
  },
  {
      "Date": "1983-05-31",
      "Value": "29.97999954224"
  },
  {
      "Date": "1983-04-30",
      "Value": "30.62999916077"
  },
  {
      "Date": "1983-03-31",
      "Value": "28.65999984741"
  },
  {
      "Date": "1983-02-28",
      "Value": "29.23999977112"
  },
  {
      "Date": "1983-01-31",
      "Value": "31.05999946594"
  },
  {
      "Date": "1982-12-31",
      "Value": "32.55"
  },
  {
      "Date": "1982-11-30",
      "Value": "33.0"
  },
  {
      "Date": "1982-10-31",
      "Value": "32.95"
  },
  {
      "Date": "1982-09-30",
      "Value": "33.1"
  },
  {
      "Date": "1982-08-31",
      "Value": "33.2"
  },
  {
      "Date": "1982-07-31",
      "Value": "33.35"
  },
  {
      "Date": "1982-06-30",
      "Value": "31.05"
  },
  {
      "Date": "1982-05-31",
      "Value": "30.6"
  },
  {
      "Date": "1982-04-30",
      "Value": "30.7"
  },
  {
      "Date": "1982-03-31",
      "Value": "32.6"
  },
  {
      "Date": "1982-02-28",
      "Value": "34.8"
  },
  {
      "Date": "1982-01-31",
      "Value": "35.3"
  },
  {
      "Date": "1982-01-31",
      "Value": "35.3"
  }
];