using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic
{
    public class DateCalculator
    {
        public DateTime CalcNextWaterDate(DateTime date, int timeInDays)
        {
            return date.AddDays(timeInDays);
        }
    }
}
