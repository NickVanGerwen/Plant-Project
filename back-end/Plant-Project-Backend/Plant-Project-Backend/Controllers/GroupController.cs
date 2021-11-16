using DBContext;
using Logic;
using Microsoft.AspNetCore.Mvc;
using Plant_Project_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Plant_Project_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroupController : ControllerBase
    {
        PlantDBContext context;
        public GroupController(PlantDBContext plantDBContext)
        {
            context = plantDBContext;
        }

        [HttpGet]
        [Route("UserGroups")]
        public List<Group> GetGroupsByUser(int userid)
        {
            return context.ReadGroups(userid);
        }
    }
}
