using System.ComponentModel.DataAnnotations;

namespace Kanini_Tourism_App.Models
{
    public class TravelAgent
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MaxLength(100)]
        public string Password { get; set; }

        [Required(ErrorMessage = "The Contact Number field is required.")]
        [RegularExpression(@"^\+?\d{0,3}[- ]?\d{10}$", ErrorMessage = "Invalid Contact Number.")]
        public string ContactNumber { get; set; }

        [Required(ErrorMessage = "The Address field is required.")]
        public string Address { get; set; }
    }
}
