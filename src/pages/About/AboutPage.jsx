import React from 'react'

export default function AboutPage() {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full pt-8 px-8 md:w-[800px] [&>*]:mb-6'>
        <div className='text-[2rem] mb-4'>
          Vouch.vm
        </div>
        {/* <div className='text-[1.5rem]'>
          Share The Media That Inspires You; Find New Inspiration
          
        </div> */}
        <div className='mb-6'>
          
          Vouch.vm is a mobile application that creates a space for users to share the media that is making an impact on their life, and equally be inspired by the media that is inspiring the lives of others. The name "vouch" comes from the nature of the posts here: by posting a piece of media, artist, etc., you are "vouching" for it to those that follow you. If people typically enjoy your taste, or are simply interested in what is inspiring you, they are likely to check out the media that you have "vouched" for. The VM is simply an acronym for the name of the developer.
          </div>
          <div className='text-xl'>
            First steps:
          </div>
          <div>
            Users should begin by navigating to the Explore page, finding any friends that they may have on the app. If a friend recommended the app to you, ask them for their username! From there, you can find people you may know either by searching for usernames or by seeing who the people you follow are following.
          </div>
          <div>
            From there, you should feel free to make your first vouch! Back on the explore page, you will see 7 options of types of media that you can post:
          </div>
          <ul>
            <li>Songs</li>
            <li>Albums</li>
            <li>Artists</li>
            <li>Movies</li>
            <li>TV Series</li>
            <li>Podcasts</li>
            <li>Books</li>
          </ul>
          <div>
            If there is a piece of media from any of these categories that makes you feel inspired, find it using the built-in search! By tapping on the item once you find it, you can navigate to a detailed page with more information about that piece of media. Vouch's search runs using 3 incredible APIs: the Spotify Developer API, the MovieDB API, and the Google Books API. All details about any piece of media that you see on the app, besides those added by users such as "notes" or "tags", was retrieved from one of these 3 sources.
          </div>
          <div>
            If you decide that you've found a piece of media you'd like to vouch, simply press the Add Vouch button. This will take you to a post customization screen where you can optionally add a note (and more) to your vouch. When you are finished, press the Add Vouch button once more.
          </div>
          <div>
            That's it! Once you have seen the "Successfully added _" screen, your vouch is now live! It will not appear on your profile, and be added to the feed of anyone who follows you. If you ever wish to edit the note you added to your vouch, or delete the vouch entirely, simply navigate to said vouch from your profile or feed page, click the dropdown menu which is visible only to you, and press the edit or delete icons.
          </div>
          <div>
            The Feed Page:
          </div>
          <div>
            Coming soon!
          </div>
          <div>
            The Profile Page:
          </div>
          <div>
            Coming soon!
          </div>
          <div>
            Up and Coming Features:
          </div>
          <div>
          <ul>
            <li>An inbox for notifications, such as new follows, likes, etc.</li>
            <li>In addition, the inbox will have a section for "recommendations". Recommendations will be a feature that will allow users to directly recommend media to one another directly without having to post it to their profile and feed.</li>
            <li></li>
          </ul>
          </div>
          <div>
          
          Vouch.vm was developed for two reasons; the first was to create a space for artists and non-artists alike to share day-by-day what is keeping them inspired. I found myself constantly exchanging music, movie recommendations, etc. in group chats with various friend groups over the years. However, after I missed songs and movie recommendations from my friends because they'd gotten drowned out, I decided there had to be a better way.
          </div>
          <div>
          The second was to attempt to create a brand new form of social media, one in which you represent yourself only through the media you post. There are no comment threads on posts that could devolve into echo chambers or group fights. The posts on your feed show up chronologically, and only from the users that you follow. Vouch attempts to fill the void of the non-toxic, non-addictive social media platforms that so many people are craving in today's world. There are  and hopefully therein avoid much of The concept is very straightforward: Users can choose to share songs, albums, artists, moveis, tv series, and books that they think others might enjoy. 
        </div>
      </div>
    </div>
  )
}
