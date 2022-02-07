import { assertLeafType } from "graphql";

export const navItems = {
    instagram: {
        title: "instagram",
        content: ["Followers", "Likes", "Views", "Impressions", "Saves", "Mentions", "Comment Replies",
                "Comments", "Profile Visits", "Post Reach", "Story Poll Votes"],
        isTwo: true,
        inNav: true
    },
    tiktok: {
        title: "tiktok",
        content: ["Followers", "Comments", "Likes", "Shares", "Views"],
        isTwo: false,
        inNav: true
    },
    youtube: {
        title: "youtube",
        content: ["Views", "Likes", "Subscribers", "Favorites", "Shares", "Watch Time Hours",
                "Dislikes", "Comment Visits"],
        isTwo: true,
        inNav: true
    },
    twitter: {
        title: "twitter",
        content: ["Flowers", "Retweets", "Comments", "Likes", "Views", "Poll Votes", "Impressions"],
        isTwo: false,
        inNav: true
    },
    facebook: {
        title: "facebook",
        content: ["Likes", "Flowers", "Views", "Reviews", "Group Members", "Reactions", "Attendes",
                "Comment Replies", "Comments", "Shares", "Poll Votes"],
        isTwo: true,
        inNav: true
    },
    spotify: {
        title: "spotify",
        content: ["Followers", "Monthly Listeners", "Plays", "Pre Saves", "Saves"],
        isTwo: false,
        inNav: true
    },
    clubhouse: {
        title: "clubhouse",
        content: ["Followers", "Room Visitiors"],
        isTwo: false,
        inNav: true
    },
    discord:    {
        title: "discord",
        content: ["Members"],
        isTwo: false,
        inNav: true
    },
    linkedin: {
        title: "LinkedIn",
        content: ["Followers", "Connections", "Recommendations", "Endorsements", "Employees", "Likes", "Comments",
                "Shares"],
        isTwo: false,
        inNav: true
    },
    twitch: {
        title: "twitch",
        content: ["Followers", "Views"],
        isTwo: false,
        inNav: false
    }
}

export const navTitles = ["instagram", "tiktok", "youtube","twitter", "facebook","spotify",
                        "clubhouse", "discord", "linkedin", "twitch"]