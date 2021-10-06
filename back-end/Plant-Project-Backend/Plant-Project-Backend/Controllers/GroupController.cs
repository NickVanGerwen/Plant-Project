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
        [HttpGet]
        public GroupModel[] GetGroups(int userId)
        {

            return null;
        }

        [HttpPost]
        [Route("new")]
        public int CreateGroup(string name, string password)
        {
            //create group
            return 200;
        }
    }
}
