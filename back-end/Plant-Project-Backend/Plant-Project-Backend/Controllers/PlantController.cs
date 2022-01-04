using DBContext;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Plant_Project_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlantController : ControllerBase
    {
        PlantDBContext context;
        public PlantController(PlantDBContext plantDBContext)
        {
            context = plantDBContext;
        }

        [HttpPut]
        [Route("NewPlant")]
        public int CreatePlant(string name, string type,int waterIntervalinDays, int groupid)
        {
            try
            {
                context.CreatePlant(name, type, waterIntervalinDays, groupid);
                return 201;
            }
            catch (Exception)
            {
                throw;
            }
        }


        [HttpPatch]
        [Route("WaterPlant")]
        public int WaterPlant(int plantId)
        {
            try
            {
                context.WaterPlant(plantId);
                return 204;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
