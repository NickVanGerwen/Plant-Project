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

        //group

        public void CreateGroup(int userId, string groupName, string groupPassword)
        {
            try
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
            catch (Exception)
            {
                throw;
            }
        }

        public List<Group> ReadUserGroups(int userid)
        {
            try
            {
                User user = Users.Include("Groups").Where(u => u.Id == userid).FirstOrDefault();
                foreach (Group group in user.Groups)
                {
                    group.Users = null;
                }
                return user.Groups;
            }
            catch (Exception)
            {
                throw;
            }
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
    }
}
