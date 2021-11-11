using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic
{
    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password{ get; set; }
        public virtual List<User> Users{ get; set; }

    }
}
