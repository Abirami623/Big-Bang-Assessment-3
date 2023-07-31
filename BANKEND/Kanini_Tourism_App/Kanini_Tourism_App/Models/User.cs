using System.ComponentModel.DataAnnotations;

namespace Kanini_Tourism_App.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string? EmailId { get; set; }
        public string? Role { get; set; }
        public byte[]? passwordHash { get; set; }
        public byte[]? passwordKey { get; set; }
    }
}
