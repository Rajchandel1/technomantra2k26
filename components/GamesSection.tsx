import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, X } from 'lucide-react';

const GamesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'TECH' | 'NON-TECH'>('TECH');
  const [selectedGame, setSelectedGame] = useState<any | null>(null);

  const techMissions = [
    {
      title: 'Shan-e-Technomantra',
      cat: 'CODING / INTERVIEW',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1526378722693-6e366b7f4b2d?q=80&w=1000',
      sticker: '💡',
      rules: `Shan-e-Technomantra
About the Game:
Shan-e-Technomantra is a dynamic competition that combines technical
expertise with strong communication skills. The event tests participants on
their analytical thinking, coding ability, and overall technical knowledge.
The final round includes a interview, where participants are evaluated on
their technical understanding, problem-solving approach, coding concepts,
and communication skills.
Rules:
No electronic devices are allowed during the rounds.
Any form of cheating, plagiarism, or misconduct will lead to disqualification.
The judges’ decision will be final.
Round 1 – Aptitude (15 minutes):
Participants will be tested on problem-solving and analytical skills through aptitude-based questions.
Round 2 – Technical (20 minutes):
Participants will engage in competitive programming challenges to demonstrate coding skills and
algorithmic thinking.
Round 3 – Interview (10–15 minutes):
Participants will face a personal interview to assess technical knowledge, problem-solving ability, and
communication skills. Questions may include technical, coding, and behavioral aspects.`
    },
    {
      title: 'Bug To Brain',
      cat: 'CODING',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000',
      sticker: '🐞',
      rules: `BUG TO BRAIN
Individual Technical Coding Game
Game Overview
• Individual participation
• Total 3 tasks
• Clear each task to unlock the next
• Time-based challenge
Task 1: Debug the Code
• Language: C
• Identify and fix bugs
• Run code successfully
• Time Limit: 20 minutes
Task 2: Logical Key
• Solve logical / technical question
• Correct answer unlocks Task 3
• Time Limit: 5 minutes
Task 3: Final Coding Challenge
• Problem statement given
• Any programming language allowed
• Working solution required
• Time Limit: 40 minutes
Rules & Evaluation
• No collaboration
• No plagiarism
• Judges' decision final
• Winner based on correctness & performance`
    },
    {
      title: 'Tech Echo',
      cat: 'QUIZ',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?q=80&w=1000',
      sticker: '🎤',
      rules: `Tech Echo
About Game:
In this event, two participants will team up to answer computer science, programming, software,
hardware, algorithms, and various technology fundamental based questions within a specific
time frame. The objective of the game is to assess participants’ knowledge and proficiency in the
field of technical and general knowledge.
Instruction And Rules:
• Each team consists of a maximum of 3 participants.
• Team members cannot be changed after registration.
• Participants are not allowed to use any kind of digital or electronic devices.
• Participants are required to raise their hands before answering any question in order to
gain the points.
• The judge’s decision will be final, and no disputes will be entertained.
ROUND 1: ELIMINATION [20 MIN]
• This will be The Elimination round with MCQs, where each team will get equal
opportunity to answer.
•  Each team can choose any one group member to sit for the MCQ round on behalf of the team.
• Teams with highest performance will get qualified for the next round.
ROUND 2: RAPID FIRE [2 MIN]
• This will be The Rapid-fire round, where teams have to answer questions within a
specified time frame.
• Points awarded based on correct answers.
ROUND 3: CLUE CASCADE [15 Minutes]
• This round is a Hint-Based Quiz Round.
• Each team will be given a question along with progressive hints (3–5 hints per
question).
• The hints will be revealed one by one, moving from difficult to easier clues.
• Teams can guess the answer after any hint is given.
• Points will be awarded based on how early the correct answer is guessed (fewer hints
used = higher points).
• The team with the highest total points at the end of the round will lead the scoreboard.
ROUND 4: BUZZER
• This will be The Buzzer round, where first to buzz answers the question.
• Points awarded based on performance.
• TIE – BREAKER (IF NECESSARY)
In case 2 or more teams tie, then a Tie-Breaker round will be initiated with sudden-death
buzzer questions.`
    },
    {
      title: 'Bro Code',
      cat: 'PAIR CODING',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000',
      sticker: '🤝',
      rules: `Bro Code
Registration Details:
•  Team Size: 2 Participants (Pair)
About the Game:
Bro Code is a two-player coding challenge that tests teamwork and logical thinking. One
participant starts coding based on a given problem, while the partner waits outside. After a fixed
time, the second participant enters and completes the unfinished code without any
communication. The game focuses on clean coding, problem-solving, and coordination under
pressure. Participants may use any programming language of their choice.
Instructions and Rules
• Each team must consist of two participants.
• The total time limit for the task is 40 minutes.
• The first participant will get 15 minutes to code while the partner waits outside.
• After 15 minutes, the first participant must stop coding immediately.
• The second participant will then enter and will get 25 minutes to complete the same
code.
• No communication is allowed between partners at any stage.
• Participants may use any one programming language (C, C++, Java, Python, etc.).
• Use of the internet, AI tools, or any external help is strictly prohibited.
• Evaluation will be based on correctness, code clarity, and teamwork.
• The decision of the judges will be final.`
    },
    {
      title: 'UIVERSE: Frontend Challenge',
      cat: 'FRONTEND',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000',
      sticker: '🌐',
      rules: `- 🚀 UIVERSE: The Frontend Challenge
"Where Creativity Meets Code"

Welcome to UIverse! This is a solo coding battle where you prove your mettle as a frontend developer. No drag-and-drop, no design tools—just pure code, logic, and a little help from your AI companion.

⚡ General Rules
Solo Mode: This is a single-player event. No teams allowed.
Tools Allowed: You can use any Code Editor (VS Code, Sublime, etc.) and browsers.
Strictly No Design Tools: Using Figma, Canva, or Photoshop for designing is not allowed. You must write code (HTML/CSS/JS) to generate your designs.
Internet: You have full internet access to look up syntax and documentation.
🎨 ROUND 1: The AI Co-Pilot (Creative Coding)
Time Limit: 30 Minutes

The Challenge:
This is your chance to show how you can use AI to boost your creativity! You need to pick any existing brand (e.g., Starbucks, Nike, a local chai shop, etc.) and create a Landing Page Concept for them.

How it Works:

Code with AI: You will use AI tools (like ChatGPT, Claude, Gemini, or Copilot) to help you write the HTML and CSS code for a redesigned version of your chosen brand’s website.
Companion, Not a Slave: Don’t just blindly copy-paste AI code! Use AI as your "Junior Developer." Guide it, tweak the code it gives you, and refine the design. If the AI makes a mistake, you fix it.
Goal: Create a fresh, modern look for the brand entirely in the browser.

Submission:

A zip file containing your index.html and style.css files.
(Optional) A text file mentioning the prompt you used to get the main structure.

Judging Criteria:

Creativity (40%): Is the redesign fresh and exciting?
Code Understanding (30%): Did you clean up the AI code? Does it run without errors?
Visuals (30%): Does it actually look like a professional landing page?

💻 ROUND 2: The Pixel Perfect Clone (Skill Test)
Time Limit: 45 Minutes

The Challenge:
This round tests your raw frontend skills. We will provide you with a screenshot of a webpage. Your job is to recreate it with code as perfectly as possible.

How it Works:

The Asset: We will give you an image of a webpage and a folder of necessary assets (images, logos).
Code from Scratch: You must write the HTML and CSS to match the image exactly. No AI tools allowed in this round—it’s all you!
The "Pro Move" (Bonus): If you finish early and think the original design is boring, you can add improvements! Add a cool hover effect, a button animation, or fix the colors. If we like your improvement, you get Bonus Points.

Submission:

A zip file containing your code files.

Judging Criteria:

Pixel Perfection (50%): How close is your code to the original image? (Margins, fonts, alignment).
Code Quality (30%): Is your CSS clean? Are class names sensible?
Bonus Points (20%): Awarded only if the base clone is accurate and the improvements are genuinely better than the original.

🏆 Winner Selection
Round 1 Score: /50
Round 2 Score: /50 (+ Bonus)
The player with the highest total score takes the crown!`
    },
    {
      title: 'SQL Showdown',
      cat: 'DATABASES',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000',
      sticker: '🗄️',
      rules: `SQL Showdown
- Event focused on SQL queries and database problem solving.
- Participants will be given datasets and tasks requiring SELECT, JOIN, GROUP BY, subqueries, window functions, and optimization.
- Time-limited rounds; accuracy and performance considered for scoring.
- No external database connections or internet for solutions allowed during rounds.
- Judges' decisions are final.`
    },
  ];

  const nonTechMissions = [
    {
      title: 'Rang-e-Tech',
      cat: 'CREATIVE',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1000',
      sticker: '🎨',
      rules: `Rang-e-Tech
ABOUT THE GAME:
Rang-e-Tech is a Technical Rangoli Competition where participants creatively blend traditional rangoli
art with modern technological themes. Designs must reflect a specified technical concept.
INSTRUCTIONS AND RULES:
• Participants must bring all materials required for rangoli creation.
• Rangoli designs must be original and created on the spot during the competition.
• Any violation of rules may lead to disqualification.
• The judges’ decision will be final.`
    },
    {
      title: 'Pictionary',
      cat: 'GAME',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000',
      sticker: '🖼️',
      rules: `Pictionary
About the Game:
Pictionary is a creative and engaging game that tests participants’ imagination and visual
thinking skills. One participant draws a given word or phrase while the other guesses it within a
limited time.
The game consists of two rounds:
Round 1:
Participants will perform the standard Pictionary task. One member will draw, and the other must
guess the word within 2 minutes.
Round 2:
Participants will be shown a broken, blurred, or partial image. They must carefully observe and
correctly identify the picture. Each team will get only 3 chances to guess the image.
Instructions and Rules:
• Each team consists of 2 participants.
• Team members cannot be changed after registration.
• Letters, numbers, symbols, gestures, or verbal hints are not allowed.
• Any form of cheating or misconduct will lead to disqualification.
• The judges’ decision will be final.`
    },
    {
      title: 'Say It Right',
      cat: 'COMMUNICATION',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1520975915084-6b97b9b3d6a8?q=80&w=1000',
      sticker: '👄',
      rules: `Say It Right
About the Game:
Say It Right is a fun and interactive game that tests participants’ communication, observation, and lip-reading skills. Participants must guess words or sentences within a limited time.
The game consists of two rounds, both based on the same concept:
• Rules:
• Each team consists of 2 participants.
• One participant will wear headphones with music playing.
• The other participant will silently lip-sync the given word or sentence.
• The participant wearing the headphones must guess the word by reading their partner’s lips.
• The team gets 1 minute to guess as many correct answers as possible.
• Winners of Round 1 qualify for Round 2.
• Participants are not allowed to use sign language, hand gestures, or any kind of signals.
• Any violation of rules will lead to disqualification.
• The judges’ decision will be final.
• Round 2 will be conducted in the Seminar Hall.`
    },
    {
      title: 'Reverse Charades',
      cat: 'GAME',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000',
      sticker: '🎭',
      rules: `Reverse Charades
ABOUT THE GAME:
Reverse Charades is a fun and interactive communication-based game. One player knows the action and
verbally instructs another player to perform it. After performing, the player must guess the action. The
game focuses on clarity, communication, and quick thinking.
INSTRUCTIONS AND RULES:
• Minimum 2 players per round; can be played one-on-one.
• One player acts as the Instructor and is shown an action card secretly.
• The Instructor must keep hands folded or behind the back.
• Only verbal, step-by-step instructions are allowed; no gestures or acting.
• The Performer follows instructions and then guesses the action.
• Correct guess within the time limit earns a point.
• Any misconduct will lead to disqualification.
• The judges’ decision will be final.
• The team gets 2 minutes to guess.`
    },
    {
      title: 'Tug Of War',
      cat: 'SPORTS',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1000',
      sticker: '💪',
      rules: `TUG OF WAR:
Team size = 5
Both teams pull the rope, the team that manages to pull their mark on the rope closest to the centre line
will be winner.
Rules:
• There would be 5 members required per team and one girl is compulsory among them.
• The rope must be pulled underarm and nobody’s elbow must go below the knee, otherwise foul will
be called.
• The team who is pulled by the opposition towards the center whose mark goes over the center line is
declared the loser.`
    },
    {
      title: 'BGMI / Free Fire',
      cat: 'ESPORTS',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000',
      sticker: '🎮',
      rules: `BGMI Game Competition Rules
General Rules
This is a BGMI (Mobile) competition. All players must register before the match starts. Players must join
the match on time. Late entries are not allowed. Organizer’s decision will be final and binding.
Team & Player Rules
Match Type: Squad  
No team changes after registration. Sharing accounts is strictly prohibited.
• Game Settings 
Map: Erangel  
Mode: Classic 
• Fair Play & Cheating 
No hacking, cheating, scripts, or third-party apps allowed. Use of glitches or bugs is not allowed. Any
player caught cheating will be immediately disqualified. Teaming up with other teams is not allowed.
• Match Rules 
Players must stay in the match until eliminated. Intentional disconnection may lead to disqualification.  
• If a player faces genuine network issues, no rematch will be given (unless organizers decide 
otherwise). 
• Prizes will be distributed after verification of results. Any rule violation may lead to forfeiture of 
prize money. 
• No abusive language or toxic behaviour. Respect all players and organizers. Maintain sportsmanship 
at all times 
Free Fire 
Instructions & Rules 
General Rules 
1. All matches will be played in custom rooms. 
2. Participants must join the lobby on time. 
3. Room ID and password will be shared before each match. 
4. Use of hacks, cheats, or unfair means will result in immediate disqualification. 
5. The organizers’ decision will be final in case of any dispute. 
6. If the number of participating teams is high, the tournament will be conducted in two 
rounds. 
7. If the number of participating teams is low, only one round will be conducted, and the 
winner of that round will be declared the tournament champion. 
Rounds 
The tournament will be conducted in two rounds, both played in custom rooms: 
Round 1 – Battle Royale (Qualifying Round) 
• Map: Bermuda 
• Mode: Battle Royale (Squad) 
• Each custom room will consist of 12 teams 
• The winning team from each room will qualify for the final round 
Round 2 – Clash Squad (Final Round) 
• Mode: Clash Squad 
• Teams: 2 
• Best of 7 rounds 
• The team that wins 4 rounds first will be declared the winner 
Round 1 – Battle Royale Rules 
1. All character skills are allowed. 
2. Sonia and Dimitri cannot be used together in the same match. 
3. Revive Points: Enabled. 
4. Revival Cards: Disabled. 
Round 2 – Clash Squad Rules 
1. All character skills are disabled. 
2. Only headshots are allowed. 
3. The team winning 4 rounds first will be declared the Game Winner.`
    },
    {
      title: 'Cook Without Fire',
      cat: 'CULINARY',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000',
      sticker: '🍽️',
      rules: `Cook Without Fire
About Game:[30 min]
Welcome to the Cook Without Fire Challenge, a creative and culinary event where participants
will showcase their cooking skills without the use of traditional heat sources. Participants aim to
prepare delicious dishes without using any heat source or fire.
Instruction And Rules:
• Each participant will be provided with a designated preparation area.
• Participants must keep their workstations clean and tidy throughout the competition.
• Competition must complete the dish within the allocated time.
• Participants are allowed to bring basic tools and utensils (e.g., knives, cutting boards,
mixing bowls).
• Participants must bring their own raw ingredients for the competition.
• Electrical appliances and heating devices are strictly prohibited.
• Dishes will be judged based on creativity, taste, and presentation.
• Participants must adhere to basic food safety and hygiene practices.
• Decisions of the judges are final.`
    },
    {
      title: 'Tech Canvas',
      cat: 'POSTER',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1000',
      sticker: '📄',
      rules: `Tech Canvas
Tech Canvas is a creative poster-making competition conducted as part of our technical event. It
provides a platform for students to visually showcase their technical ideas, innovations, and concepts in
an engaging and impactful way. Participants can express their understanding of a predefined technical
theme through posters that combine creativity with technical relevance. Posters may be hand-made or
digitally designed using tools like Canva, allowing participants the freedom to present their ideas in
their preferred format.
Instructions  
Participation can be individual.  
• All entries must be original and created solely by the participant or team submitting the work. 
• Posters may be hand-made or digitally designed using tools like Canva. 
• AI-generated posters, images, designs, or content are strictly prohibited. 
• All posters must be submitted before the specified deadline. 
• The poster must maintain a professional appearance and be technically relevant to the given 
theme. 
• A panel of judges will evaluate the posters based on the announced judging criteria. 
• Participants are responsible for bringing all required materials for poster creation. 
• Use of copied content, AI tools, or any unfair means will result in immediate 
disqualification. 
• Any violation of rules will lead to disqualification of the individual by the management team. 
• It is mandatory to submit the poster in A3 size. Any participant who does not follow the A3 
size requirement will be disqualified.`
    },
    {
      title: 'Beg Borrow Steel',
      cat: 'SCAVENGER',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000',
      sticker: '🔎',
      rules: `Beg Borrow Steel
REGISTRATION DETAILS:
Team Size: 4 participants
ABOUT GAME:
Welcome to the Beg-Borrow-Steal Challenge, an exhilarating and strategic hunt that tests your team's
resourcefulness. and cunning strategies. Teams aim to collect a list of items through begging, borrowing,
and strategic stealing within a limited time.
INSTRUCTION & RULES:
• Teams must complete the assigned tasks within the stipulated time for each round.
• Teams arriving late for a round will be eliminated from the competition.
• A list of items to be collected will be provided to each team for each round. Teams are not allowed to
use vehicles for the challenge.
• Teams are solely responsible for returning all items collected through begging, borrowing, or stealing.`
    },
    {
      title: 'IT Ramp Walk',
      cat: 'FASHION',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1495121605193-b116b5b09a6f?q=80&w=1000',
      sticker: '🕺',
      rules: `IT Ramp Walk
REGISTRATION DETAILS:
Team Size: 1 participant (Individual)
ABOUT GAME:
Welcome to the IT Ramp Walk, where technology meets confidence and creativity. Participants will
showcase IT-inspired outfits and presentations based on tech themes, trends, or innovations. The ramp
walk tests your confidence, communication skills, creativity, and tech awareness—all in a stylish way.
INSTRUCTION & RULES:
• Each participant must prepare an IT/tech-based theme (e.g., AI, Cyber Security, Future Tech,
Startups, Coding Culture, etc.).
• Time limit will be given for each participant on the ramp.
• Participants must explain their theme briefly while walking or at the end 
• Vulgar language, offensive content, or inappropriate outfits are strictly prohibited.
• Judging will be based on confidence, creativity, theme relevance, presentation, and overall impact.
• Late entries may lead to disqualification.`
    },
    {
      title: 'Reel Making',
      cat: 'MEDIA',
      prize: 'TBD',
      img: 'https://images.unsplash.com/photo-1510070009289-b5bc34383727?q=80&w=1000',
      sticker: '🎬',
      rules: `Reel Making
About the Game:
The Reel Making competition invites students to showcase their creativity by creating an engaging reel
based on the Technomantra theme. Participants can participate individually or in teams and use their
creativity to promote the spirit, energy, and vibe of Technomantra through short-form video content.
Instructions and Rules:
• Participants may take part individually or in teams (up to 3 members).
• The reel must be created strictly on the theme “Technomantra.”
• Participants must use the official thumbnail and image provided by the organizers.
• The provided image containing sponsor names must be displayed at the end of the reel.
• Teams must upload their reels using the Google Form link shared by the organizers.
• All submitted reels will first be filtered and reviewed by the judges.
• Only shortlisted teams will be allowed to post their reels on Instagram.
• Participants must collaborate with the official Technomantra Instagram page while 
posting the reel.
• The reel with the highest reach and engagement will be declared the winner.
• Any content that is offensive, plagiarized, or irrelevant to the theme will be disqualified.
• The decision of the organizing committee will be final.`
    },
  ];

  const currentMissions = activeTab === 'TECH' ? techMissions : nonTechMissions;

  return (
    <section id="games" className="bg-[#080310] relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center mb-14 sm:mb-20 lg:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10 lg:mb-12"
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-normal mb-5 sm:mb-6 lg:mb-8 leading-[0.85] uppercase font-display">
              CHOOSE YOUR <br /> <span className="text-vibrant">KARMA.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted font-medium max-w-lg mx-auto">Master the technical or dominate the non-technical arena.</p>
          </motion.div>

          <div className="flex gap-2 sm:gap-3 p-1.5 sm:p-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
            {(['TECH', 'NON-TECH'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 sm:px-8 md:px-12 lg:px-14 py-2.5 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.18em] sm:tracking-widest uppercase font-display transition-all duration-500 relative overflow-hidden ${
                  activeTab === tab ? 'text-black' : 'text-muted hover:text-white'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-vibrant z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab} ARENA</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 card-perspective">
          <AnimatePresence mode="wait">
            {currentMissions.map((game, idx) => (
              <motion.div
                key={game.title + activeTab}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -15, scale: 1.02 }}
                onClick={() => setSelectedGame(game)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedGame(game);
                  }
                }}
                role="button"
                tabIndex={0}
                className="group relative h-[380px] sm:h-[430px] lg:h-[500px] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[5rem] overflow-hidden bg-secondary border border-white/5 shadow-2xl cursor-pointer"
                aria-label={`Open ${game.title} rules`}
              >
                <img src={game.img} alt={game.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-5 sm:p-7 lg:p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-accent/20 backdrop-blur-md border border-accent/40 flex items-center justify-center">
                      <Sparkles size={20} className="text-accent sm:hidden" />
                      <Sparkles size={24} className="text-accent hidden sm:block lg:hidden" />
                      <Sparkles size={28} className="text-accent hidden lg:block" />
                    </div>
                    <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl tracking-[0.15em] sm:tracking-widest text-vibrant uppercase">{game.cat}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 sm:mb-7 lg:mb-10 tracking-tight leading-[0.95] group-hover:text-vibrant transition-colors">{game.title}</h3>

                  <div className="flex justify-between items-center bg-white p-3.5 sm:p-5 lg:p-7 rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl group-hover:bg-vibrant transition-all duration-500 transform group-hover:scale-[1.03]">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest font-bold text-black/40 mb-1"></span>
                      <span className="text-lg sm:text-2xl lg:text-3xl font-bold font-display text-black">RULEBOOK</span>
                    </div>
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-black text-white flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <ChevronRight size={20} className="sm:hidden" />
                      <ChevronRight size={24} className="hidden sm:block lg:hidden" />
                      <ChevronRight size={28} className="hidden lg:block" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 text-white/5 font-display text-[5rem] sm:text-[7rem] lg:text-[10rem] select-none pointer-events-none group-hover:text-accent/10 transition-colors">0{idx + 1}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedGame && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6" onClick={() => setSelectedGame(null)}>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.25 }} className="relative z-10 max-w-3xl w-full bg-[#0b0b12] border border-white/10 rounded-3xl p-8 shadow-2xl max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setSelectedGame(null)} className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10">
                  <X size={20} />
                </button>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <Sparkles size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{selectedGame.title}</h3>
                    <p className="text-sm text-muted mt-1">{selectedGame.cat} • {selectedGame.prize}</p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none whitespace-pre-wrap text-sm leading-relaxed">{selectedGame.rules}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GamesSection;
