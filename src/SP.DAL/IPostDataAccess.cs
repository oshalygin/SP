﻿using System;
using System.Collections.Generic;
using SP.Entities;

namespace SP.DAL
{
    public interface IPostDataAccess
    {
        
        IEnumerable<Post> GetPosts(int page, int pageSize);
        Post GetPost(int postId);
        IEnumerable<Post> GetRecentPosts(int quantity);
        Post SaveNewPost(Post post);
        Post EditPost(Post post);
        IEnumerable<Post> GetPostsByDateRange(DateTime postedStartingDate, DateTime postedEndingDate);
        IEnumerable<Post> GetInactivePosts();


    }
}