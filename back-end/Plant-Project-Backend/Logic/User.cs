using System;
using System.Collections.Generic;

namespace Logic
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public virtual List<Group> Groups { get; set; }
    }
}
