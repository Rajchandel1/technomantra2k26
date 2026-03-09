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
      img: './shaan.jpeg',
      sticker: '💡',
      rules: `Shan-e-Technomantra
About the Game:
Shan-e-Technomantra is a dynamic competition that combines technical expertise with strong communication skills. The event tests participants on their analytical thinking, coding ability, and overall technical knowledge.
The final round includes an interview, where participants are evaluated on their technical understanding, problem-solving approach, coding concepts, and communication skills.
Rules:
• No electronic devices are allowed during the rounds.
• Any form of cheating, plagiarism, or misconduct will lead to disqualification.
• The judges’ decision will be final.
Round 1 – Aptitude (15 minutes): Participants will be tested on problem-solving and analytical skills through aptitude-based questions.
Round 2 – Technical (20 minutes): Participants will engage in competitive programming challenges to demonstrate coding skills and algorithmic thinking.
Round 3 – Interview (10-15 minutes): Participants will face a personal interview to assess technical knowledge, problem-solving ability, and communication skills. Questions may include technical, coding, and behavioral aspects.
Participation Fee: ₹40`
    },
    {
      title: 'IT-Prenuership',
      cat: 'INNOVATION',
      prize: 'TBD',
      img: './it.jpeg',
      sticker: '🚀',
      rules: `IT-Prenuership
About the Game :
IT-Prenuership is an innovation-driven competition designed to encourage students to present creative and technology-oriented business ideas. The event promotes entrepreneurial thinking, problem-solving ability, and the effective application of emerging technologies within the IT domain.
Participants are encouraged to showcase innovative concepts that integrate modern technologies such as Artificial Intelligence, Blockchain, Internet of Things (IoT), or other emerging digital solutions.
Rules :
• Participation is open to both individual participants and teams.
• Each presentation must clearly highlight the innovative use of technology.
• Participants may use visual aids such as slides, demos, or prototypes.
• Each presentation will be followed by a brief Q&A session conducted by the judges.
• Any form of plagiarism or misconduct will lead to disqualification.
• The decision of the judges will be final and binding
Round 1 – Preliminary Round (College Level)
• Participants will present their IT-based business idea.
• Each presentation will have a duration of 10–15 minutes.
• Judges will evaluate ideas based on innovation, feasibility, technical depth, and presentation quality.
• This round will serve as the elimination round.
• Selected participants or teams will advance to Round 2 in the Zoology Hall.
Round 2 – Final Round (Zoology Hall)
• Finalists will present their refined or expanded business ideas.
• Each presentation will have a duration of 10–15 minutes.
• A detailed Q&A session will follow each presentation.
• Final evaluation will determine the winner based on overall performance, innovation, and impact potential
Participation Fee: ₹40 per person`
    },
    {
      title: 'Bug To Brain',
      cat: 'CODING',
      prize: 'TBD',
      img: './btb.png',
      sticker: '🐞',
      rules: `Bug To Brain
About the Game :
Bug to Brain is an individual technical coding challenge that tests participants’ debugging, logical thinking, and programming skills. The game consists of multiple tasks that must be completed in sequence, where each task unlocks the next. Participants compete under time limits to solve problems accurately and efficiently.
Rules & Evaluation
• No collaboration
• No plagiarism
• Judges' decision final
• Winner based on correctness & performance
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
Participation Fee :- ₹40`
    },
    {
      title: 'Tech Hunt',
      cat: 'HUNT',
      prize: 'TBD',
      img: './hunt.png',
      sticker: '🧩',
      rules: `Tech Hunt
About the Game: Tech Hunt Mania is an immersive, campus-wide treasure hunt designed to challenge participants through a series of interconnected, technology-inspired riddles. Teams must decode each clue to unlock the next location, navigating across the campus in pursuit of the final destination. The game tests logical reasoning, teamwork, problem-solving ability, observation skills, and time management. Every correct solution advances the team further along the digital trail. The competition unfolds as one continuous round, where strategy and speed determine success. Only the most efficient and coordinated team will complete the hunt and claim victory.
Rules :
• Each team must consist of 3–4 participants (flexible as per registration guidelines).
• All teams will receive the starting clue simultaneously.
• Teams must solve the current riddle before proceeding to the next location.
• Clues must not be removed, damaged, or concealed.
• Sharing clues or answers with other teams is strictly prohibited.
• No external assistance or unfair means is allowed.
• Any form of misconduct will result in immediate disqualification.
• The decision of the judges and organizers will be final and binding.
Game Format – Continuous Hunt
• The event will run for a fixed duration, as announced by the organizers.
• The hunt begins with an initial riddle at the starting point.
• Each solved riddle leads to a designated campus location.
• At each location, teams will receive the next clue.
• Clues must be solved sequentially; skipping stages is not permitted.
• The game continues in this manner until the final clue is discovered.
Winning Criteria
• The team that reaches and correctly solves the final clue first will be declared the winner of Tech Hunt Mania.
• If no team completes the hunt within the allotted time, the team that has solved the highest number of clues will be declared the winner.
• In case of a tie, a tie-breaker challenge will be conducted to determine the final winner.
Participation Fee: ₹40 only per person`
    },
    {
      title: 'Tech Echo',
      cat: 'QUIZ',
      prize: 'TBD',
      img: './echo.jpeg',
      sticker: '🎤',
      rules: `Tech Echo
About Game:
In this event, three participants will team up to answer computer science, programming, software, hardware, algorithms, and various technology fundamental based questions within a specific time frame. The objective of the game is to assess participants’ knowledge and proficiency in the field of technical and general knowledge.
Instruction And Rules:
• Each team consists of a maximum of 3 participants.
• Team members cannot be changed after registration.
• Participants are not allowed to use any kind of digital or electronic devices.
• Participants are required to raise their hands before answering any question in order to gain the points.
• The judge’s decision will be final, and no disputes will be entertained.
ROUND 1: ELIMINATION [20 MIN]
• This will be The Elimination round with MCQs, where each team will get equal opportunity to answer.
• Each team can choose any one group member to sit for the MCQ round on behalf of the team.
• Teams with highest performance will get qualified for the next round.
ROUND 2: RAPID FIRE [2 MIN]
• This will be The Rapid-fire round, where teams have to answer questions within a specified time frame.
• Points awarded based on correct answers.
ROUND 3: CLUE CASCADE [15 Minutes]
• This round is a Hint-Based Quiz Round.
• Each team will be given a question along with progressive hints (3–5 hints per question).
• The hints will be revealed one by one, moving from difficult to easier clues.
• Teams can guess the answer after any hint is given.
• Points will be awarded based on how early the correct answer is guessed (fewer hints used = higher points).
• The team with the highest total points at the end of the round will lead the scoreboard
ROUND 4: BUZZER
• This will be The Buzzer round, where first to buzz answers the question.
• Points awarded based on performance.
• TIE – BREAKER (IF NECESSARY) In case 2 or more teams tie, then a Tie-Breaker round will be initiated with sudden-death buzzer questions.
Participation Fee: ₹40 only per person`
    },
    {
      title: 'Bro Code',
      cat: 'PAIR CODING',
      prize: 'TBD',
      img: './brocode.jpeg',
      sticker: '🤝',
      rules: `Bro Code
About the Game :
Two-players coding challenge, testing teamwork and coordination.
Partners code in shifts without communication.
Rules:
Round 1 - 15 mins (Elimination round)
• Both participants together solves an aptitude puzzle.
Round 2 - 30 mins (Final round)
• Partners have to solve a coding problem.
• Partner 1 - 15 mins,
• Partner 2 - 15 mins.
• No communication is allowed between partners.
• No internet or AI tools.
• Programming language - C
Instructions:
• Partners roles will be swapped after halftime.
• Judges’ decision will be final.
• One participant will write the initial code, and the other will continue from where the first one left it.
Participation Fee: ₹40 only per person`
    },
    {
      title: 'UI-Verse',
      cat: 'FRONTEND',
      prize: 'TBD',
      img: './ui.jpeg',
      sticker: '🌐',
      rules: `UI-Verse
About the Game :
UIVERSE: The Frontend Challenge is a solo coding competition designed to test participants’ frontend development skills and creativity. In this event, participants create and replicate web designs using HTML, CSS, and JavaScript. The challenge focuses on how well developers can design modern user interfaces and write clean frontend code within a limited time.
Rules :
• The event is solo, meaning each participant competes individually.
• Participants can use any code editor (like VS Code or Sublime) and web browsers.
• Design tools such as Figma, Canva, or Photoshop are not allowed. All designs must be created using code only.
• Internet access is allowed for documentation or syntax reference.
• In Round 1, AI tools can be used to assist in coding, but participants must understand and refine the generated code themselves.
• In Round 2, AI tools are strictly prohibited.
Round 1 – AI Comapnion (Creative Coding)
Participants must choose an existing brand and design a modern landing page concept for it using HTML and CSS. They can use AI tools as assistants to generate or improve code, but the final design should be customized and refined by the participant.
Time Limit: 30 minutes.
Round 2 – Pixel Perfect Clone (Skill Test)
Participants are given a screenshot of a webpage and must recreate it as accurately as possible using HTML and CSS. This round tests attention to detail, coding accuracy, and frontend fundamentals. AI tools are not allowed in this round.
Time Limit: 45 minutes.
Participation Fee: ₹40 only`
    },
    {
      title: 'SQL Slayer',
      cat: 'DATABASES',
      prize: 'TBD',
      img: './sql.jpeg',
      sticker: '🗄️',
      rules: `SQL Slayer
About the Game : SQL Slayer is a thrilling, story-driven SQL battle where participants enter a fictional database warzone. Players solve narrative-based SQL challenges to earn points and prepare for the ultimate showdown. The competition unfolds in two intense rounds — beginning in the College Arena and culminating in the Zoology Hall, where participants engage in a rapid-fire SQL battle against the Main Villain. Strategy, accuracy, and speed determine the ultimate SQL Slayer.
Rules :
• Participants must write valid and syntactically correct SQL queries.
• No electronic devices or external assistance is allowed.
• Any form of cheating or misconduct will lead to immediate disqualification.
• No retries once an answer is submitted.
• The judges’ decision will be final.
Round 1 – The Awakening (College Arena)
Duration: 45 Minutes
• Participants will be given a story-based database scenario.
• They must write SQL queries based on the storyline.
• Points will be awarded for correctness and accuracy.
• The total points earned in this round will carry forward to Round 2.
• Selected participants will advance to the Zoology Hall.
Winning Criteria
• The participant who defeats the Main Villain wins.
• If multiple participants defeat the Villain, the one with the highest remaining HP will be declared the winner.
• In case of a tie, a Surprise Round 3 will be conducted to determine the ultimate SQL Slayer
Participation Fee :- ₹40 only`
    },
  ];

  const nonTechMissions = [
    {
      title: 'Rang-e-Tech',
      cat: 'CREATIVE',
      prize: 'TBD',
      img: './rangoli.jpeg',
      sticker: '🎨',
      rules: `Rang-e-Tech
ABOUT THE GAME:
Rang-e-Tech is a Technical Rangoli Competition where participants creatively blend traditional rangoli art with modern technological themes. Designs must reflect a specified technical concept.
INSTRUCTIONS AND RULES:
• Participants must bring all materials required for rangoli creation.
• Rangoli designs must be original and created on the spot during the competition.
• Any violation of rules may lead to disqualification.
• The judges’ decision will be final.
Participation Fee: ₹40 only per person`
    },
    {
      title: 'Pictionary',
      cat: 'GAME',
      prize: 'TBD',
      img: './pictionary.jpeg',
      sticker: '🖍️',
      rules: `Pictionary
About the Game: Pictionary is a creative and engaging game that tests participants’ imagination and visual thinking skills. One participant draws a given word or phrase while the other guesses it within a limited time.
Round 1 ( KS Auditorium ):
• Participants will perform the standard Pictionary task.
• One member will draw, and the other must guess the word within 1 minutes.
Round 2 ( Zoology Hall ) :
• Participants will perform the standard Pictionary task.
• One member will draw, and the other must guess the word within 1 minutes.
Instructions and Rules:
• Each team consists of 2 participants.
• Team members cannot be changed after registration.
• Letters, numbers, symbols, gestures, or verbal hints are not allowed.
• Any form of cheating or misconduct will lead to disqualification.
• The judges’ decision will be final.
Participation Fee :- ₹50 only`
    },
    {
      title: 'Say It Right',
      cat: 'COMMUNICATION',
      prize: 'TBD',
      img: './sayit.jpeg',
      sticker: '👄',
      rules: `Say It Right
About the Game :
Say It Right is a fun and interactive game that tests participants’ communication, observation, and lip-reading skills. One participant lip-syncs a word or sentence while the other, wearing headphones with music, tries to guess it by reading their partner’s lips within a limited time.
Round 1
• Teams attempt to guess as many words or sentences as possible within 1 minute using lip-reading.
• The top performing teams qualify for Round 2.
Round 2
• The same format continues but with more challenging words or sentences. This round will be conducted in the Zoology Hall, and the best performing team will be declared the winner.
Rules & Instructions
• Each team consists of 2 participants.
• One participant wears headphones with music playing.
• The other participant will silently lip-sync the given word or sentence.
• The participant with headphones must guess by reading lips only.
• Each team gets 1 minute to guess as many correct answers as possible.
• No sign language, hand gestures, or signals are allowed.
• Any rule violation leads to disqualification.
• Judges’ decision will be final.
Participation Fee :- Rs 50 per person`
    },
    {
      title: 'Reverse Charades',
      cat: 'GAME',
      prize: 'TBD',
      img: './reverse.jpeg',
      sticker: '🎭',
      rules: `Reverse Charades
ABOUT THE GAME:
Reverse Charades is a fun and interactive communication-based game. One player knows the action and verbally instructs another player to perform it. After performing, the player must guess the action. The game focuses on clarity, communication, and quick thinking.
INSTRUCTIONS AND RULES:
• Minimum 2 players per round; can be played one-on-one.
• One player acts as the Instructor and is shown an action card secretly.
• The Instructor must keep hands folded or behind the back.
• Only verbal, step-by-step instructions are allowed; no gestures or acting.
• The Performer follows instructions and then guesses the action.
• Correct guess within the time limit earns a point.
• Any misconduct will lead to disqualification.
• The judges’ decision will be final.
• The team gets 1 minute to guess.
Participation Fee: ₹50 only per person`
    },
    {
      title: 'Tug of War',
      cat: 'SPORTS',
      prize: 'TBD',
      img: './tug.jpeg',
      sticker: '💪',
      rules: `Tug of War
About the Game
Both teams pull the rope, and the team that manages to pull their mark on the rope closest to the center line will be declared the winner.
Registration Details
• Team Size: 5 participants
• Participation Fee :- ₹250
Rules
• There would be 5 members required per team, and one girl is compulsory among them.
• The rope must be pulled underarm, and nobody’s elbow must go below the knee, otherwise a foul will be called.
• The team that is pulled by the opposition towards the center, whose mark goes over the center line, is declared the loser.`
    },
    {
      title: 'BGMI-Free Fire',
      cat: 'ESPORTS',
      prize: 'TBD',
      img: './bgmi.jpeg',
      sticker: '🎮',
      rules: `BGMI
Registration Details
• Match Type: Squad
Participation Fee (Squad): ₹250
General Rules
• This is a BGMI (Mobile) competition. All players must register before the match starts. Players must join the match on time, and late entries are not allowed.
The organizer’s decision will be final and binding.
Team & Player Rules
• Match Type: Squad
• No team changes after registration.
• Sharing accounts is strictly prohibited.
Game Settings
• Map: Erangel
• Mode: Classic
Fair Play & Cheating
• No hacking, cheating, scripts, or third-party apps are allowed.
• Use of glitches or bugs is not allowed.
• Any player caught cheating will be immediately disqualified.
• Teaming up with other teams is not allowed.
Match Rules
• Players must stay in the match until eliminated.
• Intentional disconnection may lead to disqualification.
• If a player faces genuine network issues, no rematch will be given (unless organizers decide otherwise).
• Prizes will be distributed after verification of results. Any rule violation may lead to forfeiture of prize money.
• No abusive language or toxic behaviour. Respect all players and organizers and maintain sportsmanship at all times.
Free Fire
Registration Details
Participation Fee: ₹250
General Rules
• All matches will be played in custom rooms.
• Participants must join the lobby on time.
• Room ID and passwordwill be shared before each match.
• Use of hacks, cheats, or unfair means will result in immediate disqualification.
• The organizers’ decision will be final in case of any dispute.
• If the number of participating teams is high, the tournament will be conducted in two rounds.
• If the number of participating teams is low, only one round will be conducted, and the winner of that round will be declared the tournament champion.
The tournament will be conducted in two rounds, both played in custom rooms.
There are two round in free fire 
    * 1st ROUND 
Battle royal 
[Based on ESPORTS point system and rule ]
      * 2nd round 
   Cs [like Cs-ranked]
Rule : character skill yes
           Gun attributes no 
           Loadout yes`
    },
    {
      title: 'Cook Without Fire',
      cat: 'CULINARY',
      prize: 'TBD',
      img: './cook.jpeg',
      sticker: '🍽️',
      rules: `Cook Without Fire
About Game:[30 min]
Welcome to the Cook Without Fire Challenge, a creative and culinary event where participants will showcase their cooking skills without the use of traditional heat sources. Participants aim to prepare delicious dishes without using any heat source or fire.
Team Size: 2 participants
Participation Fee: ₹50 per person
Instruction And Rules:
• Each participant will be provided with a designated preparation area.
• Participants must keep their workstations clean and tidy throughout the competition.
• Competition must complete the dish within the allocated time.
• Participants are allowed to bring basic tools and utensils (e.g., knives, cutting boards, mixing bowls).
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
      img: './canvas.jpeg',
      sticker: '🖼️',
      rules: `Tech Canvas
About the Game:
Tech Canvas is a creative poster-making competition conducted as part of our technical event. It provides a platform for students to visually showcase their technical ideas, innovations, and concepts in an engaging and impactful way. Participants can express their understanding of a predefined technical theme through posters that combine creativity with technical relevance.
Posters may be hand-made or digitally designed using tools like Canva, allowing participants the freedom to present their ideas in their preferred format.
Instructions & Rules :
Participation will be individual Only.
• All entries must be original and created solely by the participant.
• Posters may be hand-made or digitally designed using tools like Canva.
• AI-generated posters, images, designs, or content are strictly prohibited.
• All posters must be submitted before the specified deadline.
• The poster must maintain a professional appearance and be technically relevant to the given theme.
• A panel of judges will evaluate the posters based on the announced judging criteria.
• Participants are responsible for bringing all required materials for poster creation.
• Use of copied content, AI tools, or any unfair means will result in immediate disqualification.
• Any violation of rules will lead to disqualification of the individual by the management team.
• It is mandatory to submit the poster in A2 size. Any participant who does not follow the A2 size requirement will be disqualified.
Participation Fee: ₹40 only`
    },
    {
      title: 'Beg Borrow Steal',
      cat: 'SCAVENGER',
      prize: 'TBD',
      img: './bbs.jpeg',
      sticker: '🔎',
      rules: `Beg Borrow Steal
About the Game :
Beg-Borrow-Steal Challenge is an exciting and strategic team-based hunt that tests participants’ resourcefulness, teamwork, and quick thinking. Teams must collect a list of items by begging, borrowing, or strategically stealing within a limited time.
Registration Details
Team Size: 4 participants
Participation Fee: ₹250
Rounds
• The game will be conducted in 3 rounds, where teams must collect the given items within the allotted time. Teams that successfully complete the tasks move forward to the next round.
• Round 1: 20 minutes
• Round 2: 15 minutes
• Round 3: 15 minutes
Instructions & Rules
• Teams must complete the assigned tasks within the given time limit for each round.
• Teams arriving late for a round will be eliminated.
• A list of items to be collected will be provided for each round.
• Vehicles are not allowed during the challenge.
• Teams are responsible for returning all items collected through begging, borrowing, or stealing.
• Judges’ decision will be final.
Registration Details
Team Size: 4 participants
Participation Fee: ₹250`
    },
    {
      title: 'IT- Ramp Walk',
      cat: 'FASHION',
      prize: 'TBD',
      img: './ramp.jpeg',
      sticker: '🕺',
      rules: `IT Ramp Walk
REGISTRATION DETAILS: Team Size: 1 participant (Individual)
ABOUT GAME: Welcome to the IT Ramp Walk, where technology meets confidence and creativity. Participants will showcase IT-inspired outfits and presentations based on tech themes, trends, or innovations. The ramp walk tests your confidence, communication skills, creativity, and tech awareness—all in a stylish way.
INSTRUCTION & RULES:
• Each participant must prepare an IT/tech-based theme (e.g., AI, Cyber Security, Future Tech, Startups, Coding Culture, etc.).
• Time limit will be given for each participant on the ramp.
• Vulgar language, offensive content, or inappropriate outfits are strictly prohibited.
• Judging will be based on confidence, creativity, theme relevance, presentation, and overall impact.
• Late entries may lead to disqualification.`
    },
    {
      title: 'Reel Making',
      cat: 'MEDIA',
      prize: 'TBD',
      img: './reel.jpeg',
      sticker: '🎬',
      rules: `Reel Making
About the Game: The Reel Making competition invites students to showcase their creativity by creating an engaging reel based on the Technomantra theme. Participants can participate individually or in teams and use their creativity to promote the spirit, energy, and vibe of Technomantra through short-form video content
Instructions and Rules:
• Participants may take part individually or in teams (up to 3 members).
• The reel must be created strictly on the theme “Technomantra.”
• Participants must use the official thumbnail and image provided by the organizers.
• The provided image containing sponsor names must be displayed at the end of the reel.
• Teams must upload their reels using the Google Form link shared by the organizers.
• All submitted reels will first be filtered and reviewed by the judges.
• Only shortlisted teams will be allowed to post their reels on Instagram.
• Participants must collaborate with the official Technomantra Instagram page while posting the reel.
• The reel with the highest reach and engagement will be declared the winner.
• Any content that is offensive, plagiarized, or irrelevant to the theme will be disqualified.
• The decision of the organizing committee will be final.`
    },
  ];

  const currentMissions = activeTab === 'TECH' ? techMissions : nonTechMissions;
  const ruleLines = selectedGame ? selectedGame.rules.split('\n') : [];

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

              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.25 }} className="relative z-10 max-w-4xl w-full bg-[#0b0b12] border border-white/10 rounded-3xl p-8 shadow-2xl max-h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
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

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 h-[62vh] overflow-y-auto">
                  <div className="space-y-2 text-sm sm:text-[15px] leading-7 text-white/90">
                    {ruleLines.map((line: string, idx: number) => {
                      const trimmed = line.trim();
                      const isEmpty = trimmed.length === 0;
                      const isBullet = trimmed.startsWith('•') || trimmed.startsWith('- ') || /^\d+\./.test(trimmed);
                      const isHeading =
                        !isBullet &&
                        (/^(About the Game|About Game|ABOUT THE GAME|Rules|Rules & Evaluation|Instructions|Instructions & Rules|Instruction And Rules|INSTRUCTIONS AND RULES|Winning Criteria|Registration Details|Rounds|General Rules|Team & Player Rules|Game Settings|Fair Play & Cheating|Match Rules|Round \d|Participation Fee|Task \d|Game Format|ROUND \d)/i.test(trimmed) ||
                          trimmed === trimmed.toUpperCase());

                      if (isEmpty) return <div key={`line-${idx}`} className="h-2" />;

                      if (isHeading) {
                        return (
                          <p key={`line-${idx}`} className="pt-2 text-vibrant font-semibold tracking-wide">
                            {line}
                          </p>
                        );
                      }

                      if (isBullet) {
                        return (
                          <p key={`line-${idx}`} className="pl-4 border-l border-white/10 text-white/90">
                            {line}
                          </p>
                        );
                      }

                      return (
                        <p key={`line-${idx}`} className="text-white/90">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GamesSection;


