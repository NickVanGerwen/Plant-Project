using DBContext;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Plant_Project_Backend.Controllers
{
    public class PlantController : ControllerBase
    {
        PlantDBContext context;
        public PlantController(PlantDBContext plantDBContext)
        {
            context = plantDBContext;
        }

        [HttpPost]
        [Route("NewPlant")]
        public int CreatePlant(string name, string type,TimeSpan waterInterval, int groupid)
        {
            try
            {
                context.CreatePlant(name, type, waterInterval, groupid);
                return 201;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
