const initialState = {
    instagram: {
        Followers:5,
        Likes:5,
        Views:5,
        Impressions:5,
        Saves:5,
        Mentions:5,
        Comment:4,
        Comments:5,
        ProfilVisits:5,
        Post:5,
        Story:5
    },
    tiktok: {
        Followers:5,
        Comments:5,
        Likes:5,
        Shares:5,
        Views:2
    },
    youtube: {
        Views:3,
        Likes:5,
        Subscribers:5,
        Favorites:5,
        Shares:5,
        Watch:5,
        Dislikes:5,
        Comment:5
    },
    twitter: {
        Flowers:5,
        Retweets:5,
        Comments:5,
        Likes:5,
        Views:5,
        Poll:5,
        Impressions:5
    },
    facebook: {
        Likes:5,Flowers:5,Views:5,Reviews:5,Group:5,Reactions:5,Attendes:5,
                Comment:5,Comments:5,Shares:5,Poll:5
    },
    spotify: {
        Followers:5,Monthly:5,Plays:5,Pre:5,Saves:5
    },
    clubhouse: {
        Followers:5,Room:5
    },
    discord:    {
        Members:5
    },
    linkedin: {
        Followers:5,
        Connections:5,
        Recommendations:5,
        Endorsements:5,
        Employees:5,
        Likes:5,
        Comments:5,
        Shares:5
    },
    twitch: {
        Followers:5,
        Views:5
    }
}

const RatingReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default RatingReducer;