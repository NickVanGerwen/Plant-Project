using DTOs;
using Logic;
using LogicInterfaces;
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
        IUser user;
        public GroupController(IUser _user)
        {
            user = _user;
        }

        [HttpGet]
        public List<GroupModel> GetGroups(int userId)
        {
            List<GroupModel> groups = new List<GroupModel>();
            foreach(GroupDTO group in user.GetGroups())
            {
                groups.Add(new GroupModel() { Name = group.name, Id = 1, Password = group.password });
            }
            return groups;
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
