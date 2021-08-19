using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        
        // Activities is a table containing rows defined as the properties of the class Domain.Activity
        public DbSet<Activity> Activities { get; set; }
    }
}