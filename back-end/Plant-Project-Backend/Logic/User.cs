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
            groups.Add(new GroupDTO() { name = "group 1", password = "123", id = 1 });
            groups.Add(new GroupDTO() { name = "group 2", password = "123", id = 2 });
            groups.Add(new GroupDTO() { name = "group 3", password = "123", id = 3});
            groups.Add(new GroupDTO() { name = "group 4", password = "123", id = 4 });
        }
        public List<GroupDTO> GetGroups()
        {
            return groups;
        }
    }
}
