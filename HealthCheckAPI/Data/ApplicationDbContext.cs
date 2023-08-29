using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using WorldCitiesAPI.Data.Models;

namespace WorldCitiesAPI.Data
{
    public class ApplicationDbContext : DbContext, IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        public ApplicationDbContext() : base() { }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<City> Cities => Set<City>();
        public DbSet<Country> Countries => Set<Country>();

        //https://go.microsoft.com/fwlink/?linkid=851728
        public ApplicationDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-BQPQRM2;Initial Catalog=WorldCities;Integrated Security=True;MultipleActiveResultSets=True;TrustServerCertificate=True");

            return new ApplicationDbContext(optionsBuilder.Options);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Entity<City>().ToTable("Cities");
            //modelBuilder.Entity<City>()
            //    .HasKey(x => x.Id);
            //modelBuilder.Entity<City>()
            //    .Property(x => x.Id).IsRequired();
            //modelBuilder.Entity<City>()
            //    .Property(x => x.Lat).HasColumnType("decimal(7,4)");
            //modelBuilder.Entity<City>()
            //    .Property(x => x.Lon).HasColumnType("decimal(7,4)");
            //modelBuilder.Entity<Country>().ToTable("Countries");
            //modelBuilder.Entity<Country>()
            //    .HasKey(x => x.Id);
            //modelBuilder.Entity<Country>()
            //    .Property(x => x.Id).IsRequired();
            //modelBuilder.Entity<City>()
            //    .HasOne(x => x.Country)
            //    .WithMany(y => y.Cities)
            //    .HasForeignKey(x => x.CountryId);
        }
    }
}