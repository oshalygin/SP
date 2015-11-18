﻿using System.Collections.Generic;
using Newtonsoft.Json;

namespace SP.Twitter.Entities
{
    public class Url
    {
        [JsonProperty("url")]
        public string UrlValue { get; set; }

        [JsonProperty("expanded_url")]
        public string ExpandedUrl { get; set; }

        [JsonProperty("display_url")]
        public string DisplayUrl { get; set; }

        [JsonProperty("indices")]
        public List<int> Indices { get; set; }
    }
}
