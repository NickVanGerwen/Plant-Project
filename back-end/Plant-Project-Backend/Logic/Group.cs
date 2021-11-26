using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic
{
    public class Group
    {
        [NotMapped]
        public int UserCount { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password{ get; set; }
        public List<User> Users{ get; set; }
        

    }
}
