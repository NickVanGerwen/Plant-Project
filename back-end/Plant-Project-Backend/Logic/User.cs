using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Logic
{
    public class User
    {
        [NotMapped]
        public int GroupCount { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public List<Group> Groups { get; set; }
    }
}
