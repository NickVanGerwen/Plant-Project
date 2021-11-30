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
            return context.ReadUserGroups(userid);
        }

        [HttpGet]
        [Route("GroupDetails")]
        public List<Group> GetGroupDetails(int groupid)
        {
            return new List<Group>() { context.ReadGroupDetails(groupid) };
        }

        [HttpGet]
        [Route("GroupUsers")]
        public List<User> GetUsersByGroup(int groupid)
        {
            return context.ReadGroupUsers(groupid);
        }


        [HttpPost]
        [Route("NewGroup")]
        public int CreateGroup(int userid, string groupName, string groupPassword)
        {
            try
            {
                context.CreateGroup(userid, groupName, groupPassword);
                return 201;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        [Route("AddUserToGroup")]
        public int CreateGroup(int userid, int groupId)
        {
            try
            {
                context.AddUserToGroup(userid, groupId);
                return 200;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
