## Synopsis

Tapas is a tool to guide a disciplined music practice.  A user can build custom chord progressions, aligned with an appropriate scale or arpeggio and include them in their customized practice journal.  The current version supports simple chord progressions (each chord/scale pair limited to one measure) and the basic functionality to simple journal entries that contain multiple activities.  

Future developments will include:
* User-defined activity types
* Custom profile (sorry...now it's just my picture :)
* User-definted journal templates
* Long-term goal setting
* User practice data

## Motivation

I created this app to support my own practice habits.  After getting feedback from and interviewing several musicians to understand their routines and inform the design, I realized that many of us don't have much discipline or structure for our practice time.  We approach practice in ways that playing more fun and practical, but that also limit new learning.  

What I learned from my research is that the most effective regimens are regular, have some structure but maintain some flexibility, and involve both problem solving and reflection.  This tool is more or less a blank slate for a musician to build structure to their practice with those principles in mind.

## Installation

This is a Node/Express app that uses Sequelize and PSQL.  Refer to Config.JSON for the correct versions of the node modules.  Seeders must be run after migrations to populate 3 database tables with values for rendering musical notes and choosing activity types.

## API Reference

This app uses the [VexFlow API]:  (http://www.vexflow.com/) for rendering chords and scales.  Refer to their site for documentation.

## Planning

**Wireframes v 1.0**: Ugly sketches in my notebook 

**Wireframes v 2.0**: Ugly sketches on post-it notes, across 2 pages in my notebook

**Deployed product**: Barely recognizable from wireframes


**Database**:  Refer to this [Lucid Chart](https://www.lucidchart.com/invitations/accept/f7fecefd-bb2d-491e-a658-b02fe43c191b) to view the database structure.


**Routes**:  The routes are as follows:

Verb | Path | Action | Used For
-----|------|--------|---------
GET | /signup | signup page | go to signup page
POST | /signup | create | creates a new user (or throws error)
GET | /login | login screen | login or signup
POST | /login | auth | logs user in -> profile
GET | /logout | auth | logs user out -> Login screen
GET | /journal | journal list | loads list of journals for current user
GET | /journal/createJournal | create form | create journal entry -> edit page
GET | /journal/editJournal | edit form | update journal entry & add items
POST | /journal/createJournal | create | new session log
POST | /journal/addJournalItem | create | adds session item related to session log
PUT | /journal/editJournal | update | update journal entry
GET | /profile | profile page | go to profile page
GET | /progression | prog list | list of custom chord progressions
GET | /progression/createProgression | create form | create progression -> edit page
GET | /progression/editProgression | edit form | update progression and add segments
POST | /progression/create | create | new chord progression -> edit page
POST | /progression/addProgressionSegment | create | new segment related to chord prog
PUT | /progression/editProgression | update | update progression -> prog list
GET | /progression/deleteSegment |destroy | delete segment -> edit page
DELETE | /progression/deleteProgression | destroy | delete progression -> prog list



## Contributions & User Research

I had some excellent conversations with the following musicians about what they do:
* Maggie Zager (Cello)
    >*In the last year or so I've switched to a new plan of practicing for shorter stints more frequently. I used to devote whatever free 
    >nights I had to practicing and then get overwhelmed with the idea of practicing for hours and then just procrastinate... now I set a 
    >timer for 15 minutes just about every day and I have to play at least that much. Usually I get into something I'm working on and just 
    >keep playing longer than that but at a minimum I'm doing 15 min a day. 
    >I never really practice scales although I did a ton growing up. One of the perks of being an adult 😝 I like to tackle spots in 
    >whatever I'm working on and just drill them over and over often with a metronome. So my strategy is to focus on one challenging spot 
    >at a time for as long as it takes and then take a break, eat some chocolate, then work on another spot. I love working on a hard part 
    >with a metronome and speeding it up one click each time. That's my idea of a good time. Also I count listening to music and following 
    >along with the score as practicing.* 
    
* Joe Hanley (Piano)
    >*What would a good teacher do if they could sit next to you every time you practice? Answer that question, and then make the app do 
    >that. To me, that's three things: Curriculum, Effort Tracking, and Feedback.  Perhaps a list of common subjects, with helpful infoand 
    >tips on each one. You pick which ones to practice and they're added to your subject list. And of course, you can create your own as 
    >well. Down the road, this could get even smarter. You could tell it in plain English what you want to be able to do, and it could 
    >recommend a list of subjects you should be practicing to get there. "I want to shred like a beast!" "Okay, stop eating and drinking 
    >and practice this ridiculous scale at 5000 bpm 24 hours a day"*
    
* Florie Namir (Piano/Voice)
    >*I never kept a practice journal, and in fact I the word ''practice'' always put me off. Rather I would think what do I WANT to 
    >improve. When I was growing up I specifically remember challanges of playing and singing at the same time and keeping different 
    >rhythms in these parts. Now when I practice I  try to get to the place where the song could be played when I sleep walk... haha not 
    >really but you get the point. Reaching the comfort of playing as if it was second nature and less technique. As for memorizing lyrics 
    >I do have some routin which is writing the song down and empahsizing an openings word of a verse or line in a verse and concept of 
    >that verse to remind me the rest.*
    
* Justin Nash-Fisher (Guitar)
    > *Its funny because im always flattered when people assume i actually practice... haha... I honestly think its a subconscious thing. 
    > My "practice" consists solely of learning new tunes constantly, and when im not going in that direction, im straight up musically 
    > masturbating. Pure thought flow. I rarely have time to practice things just cause i want to.*
    
* Lex Marburger (Drums)
    > *As a drummer, I had the WORST time practicing rudiments and isolations, et al when I got to Berklee, because I started by just 
    > playing music with people, and gradually playing more difficult stuff; when I had to figure out a pattern it was because the song 
    > demanded it. Tapping out patterns didn't have the endorphin rush of playing a song. So to answer the question, an app that puts the 
    > user into an environment that makes it feel like there's an immediate use and benefit might work.*
    
* Sarah Brindell (Piano/Vocal/Songwriting Professor)
    >My notes from a phone conversation:
    >* *Work w/metronome or a drum track*
    >* *Start at the end of a piece and break it into chunks* 
    >    * *play through 5x in a row*
    >    * *start with slower tempo*
    >    * *work on troublesome spots*
    >* *Single things out/isolate*
    >* *Regularly assess where you are* 

## License

Use what you like.  Give credit where it's due.  
