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
        public DbSet<Plant> Plants { get; set; }
        public PlantDBContext(DbContextOptions options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder) => base.OnModelCreating(modelBuilder);

        
        //group

        public void CreateGroup(int userId, string groupName, string groupPassword)
        {
                Groups.Add(
                    new Group()
                    {
                        Name = groupName,
                        Password = groupPassword,
                        Users = new List<User>()
                        {
                            ReadUser(userId)
                        }
                    });
                SaveChanges();
        }

        public List<Group> ReadUserGroups(int userid)
        {
                User user = Users.Include("Groups").Where(u => u.Id == userid).FirstOrDefault();
                foreach (Group group in user.Groups)
                {
                    Groups.Include("Users").Include("Plants").Where(g => g.Id == group.Id).FirstOrDefault();
                    group.UserCount = group.Users.Count;
                    group.Users = null;

                    group.PlantCount = group.Plants.Count;
                    group.Plants = null;
                }
                return user.Groups;
        }

        public Group ReadGroupDetails(int groupid)
        {
                Group group = Groups.Include("Users").Include("Plants").Where(g => g.Id == groupid).FirstOrDefault();
                foreach (User user in group.Users)
                {
                    user.Groups = null;
                }
                return group;
        }

        public List<User> ReadGroupUsers(int groupid)
        {
                Group group = Groups.Include("Users").Where(g => g.Id == groupid).FirstOrDefault();
                foreach (User user in group.Users)
                {
                    group.UserCount = group.Users.Count;
                    user.Groups = null;
                }
                return group.Users;
        }


        public void AddUserToGroup(int userId, int groupId)
        {
            try
            {
                var entity = Groups.Include("Users").Where(x => x.Id == groupId).FirstOrDefault();
                entity.Users.Add(ReadUser(userId));
                SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        //User

        public void CreateUser(User user)
        {
            try
            {
                Users.Add(user);
                SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public User ReadUser(int userid)
        {
            try
            {
                return Users.Where(x => x.Id == userid).FirstOrDefault();
            }
            catch (Exception)
            {
                throw;
            }
        }

        //Plant

        public void CreatePlant(string name, string type, int waterInterval, int groupid)
        {
            try
            {
                Plant plant = new Plant()
                {
                    Name = name,
                    Type = type,
                    WaterIntervalInDays = waterInterval,
                    WaterTime = DateCalculator.CalcNextWaterDate(DateTime.Now, waterInterval)
                };
                Plants.Add(plant);
                Group group = Groups.Include("Plants").Where(g => g.Id == groupid).FirstOrDefault();
                group.Plants.Add(plant);

                SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void WaterPlant(int plantid)
        {
            try
            {
                var entity = Plants.Where(x => x.Id == plantid).FirstOrDefault();
                entity.WaterTime = DateCalculator.CalcNextWaterDate(entity.WaterTime,entity.WaterIntervalInDays);
                SaveChanges();
            }
            catch(Exception)
            {
                throw;
            }
        }
    }
}
