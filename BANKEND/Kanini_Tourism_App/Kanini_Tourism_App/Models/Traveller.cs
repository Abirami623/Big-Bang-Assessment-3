using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace Kanini_Tourism_App.Models
{
    public class Traveller
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "The Name field is required.")]
        [StringLength(100, ErrorMessage = "The Name field must not exceed 100 characters.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "The Email field is required.")]
        [EmailAddress(ErrorMessage = "Invalid Email address.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "The Contact Number field is required.")]
        [RegularExpression(@"^\+?\d{0,3}[- ]?\d{10}$", ErrorMessage = "Invalid Contact Number.")]
        public string ContactNumber { get; set; }

        [Required(ErrorMessage = "The Address field is required.")]
        public string Address { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Date of Birth")]
        public DateTime DateOfBirth { get; set; }

        [Required(ErrorMessage = "The Passport Number field is required.")]
        public string PassportNumber { get; set; }

    }
}
