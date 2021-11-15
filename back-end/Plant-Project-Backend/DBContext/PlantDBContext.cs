using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Logic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace DBContext
{
    public class PlantDBContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Group> Groups { get; set; }
        public PlantDBContext(DbContextOptions options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder builder) => base.OnModelCreating(builder);

        public List<Group> GetGroups()
        {
            Groups.Add(new Group() { Name = "group 4", Password = "123"});
            SaveChanges();        
                return Groups.ToList();
        }
    }
}
