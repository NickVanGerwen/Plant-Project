using DTOs;
using System;
using System.Collections.Generic;

namespace LogicInterfaces
{
    public interface IUser
    {
        public List<GroupDTO> GetGroups();

    }
}
