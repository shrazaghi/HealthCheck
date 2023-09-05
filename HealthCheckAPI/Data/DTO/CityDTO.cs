using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using WorldCitiesAPI.Data.Models;

namespace HealthCheckAPI.Data.DTO
{
    public class CityDTO
    {
        #region properties
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; } = null!;
        
        [JsonPropertyName("lat")]
        public decimal Lat { get; set; }
        
        [JsonPropertyName("lon")]
        public decimal Lon { get; set; }

        public int CountryId { get; set; }
        public string CountryName { get; set; }
        #endregion
    }
}
