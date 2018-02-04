using Microsoft.EntityFrameworkCore;
using daw.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace daw.Data
{
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //modelBuilder.Ignore<User>();
        }

        public DbSet<RentalUser> RentalUsers { get; set; }
        public DbSet<Boot> Boots { get; set; }
        public DbSet<Helmet> Helmets { get; set; }
        public DbSet<Ski> Skis { get; set; }
        public DbSet<SkiPole> SkiPoles { get; set; }
        public DbSet<Sledge> Sledges { get; set; }
        public DbSet<SnowBoard> SnowBoards { get; set; }
    }

}
