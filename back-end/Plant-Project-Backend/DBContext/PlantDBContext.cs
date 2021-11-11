using System;
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
    }
}
