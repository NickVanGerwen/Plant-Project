using DTOs;
using LogicInterfaces;
using System;
using System.Collections.Generic;

namespace Logic
{
    public class User : IUser
    {
        List<GroupDTO> groups = new List<GroupDTO>();
        public User()
        {
            groups.Add(new GroupDTO() { name = "group 1", password = "123" });
        }
        public List<GroupDTO> GetGroups()
        {
            return groups;
        }
    }
}
