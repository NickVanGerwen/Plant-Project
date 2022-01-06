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
            var entity = Groups.Include("Users").Where(x => x.Id == groupId).FirstOrDefault();
            entity.Users.Add(ReadUser(userId));
            SaveChanges();
        }

        //User

        public void CreateUser(User user)
        {
            Users.Add(user);
            SaveChanges();
        }

        public User ReadUser(int userid)
        {
            return Users.Where(x => x.Id == userid).FirstOrDefault();
        }

        public List<Group> ReadGroups()
        {
            List<Group> groups = Groups.Include("Users").Include("Plants").ToList();

            foreach (Group group in groups)
            {
                group.UserCount = group.Users.Count;
                group.Users = null;

                group.PlantCount = group.Plants.Count;
                group.Plants = null;
            }

            return groups;
        }

        //Plant

        public void CreatePlant(string name, string type, int waterInterval, int groupid)
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

        public void WaterPlant(int plantid)
        {
            var entity = Plants.Where(x => x.Id == plantid).FirstOrDefault();
            entity.WaterTime = DateCalculator.CalcNextWaterDate(entity.WaterTime, entity.WaterIntervalInDays);
            SaveChanges();
        }
    }
}
