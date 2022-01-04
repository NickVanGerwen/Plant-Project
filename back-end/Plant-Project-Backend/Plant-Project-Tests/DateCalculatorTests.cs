using Logic;
using System;
using Xunit;

namespace Plant_Project_Tests
{
    public class DateCalculatorTests
    {
        [Fact]
        public void TestCalcNextWaterDate()
        {
            int timeInDays = 7;
            DateTime startdate = new DateTime(2000, 1, 1);
            DateTime expected = new DateTime(2000, 1, 8);

            DateTime result = DateCalculator.CalcNextWaterDate(startdate, timeInDays);

            Assert.Equal(expected, result);
        }
    }
}
