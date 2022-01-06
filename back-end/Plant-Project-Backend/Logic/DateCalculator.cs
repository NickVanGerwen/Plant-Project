using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic
{
    public static  class DateCalculator
    {
        public static DateTime CalcNextWaterDate(DateTime date, int timeInDays)
        {
            return date.AddDays(timeInDays);
        }
    }
}
