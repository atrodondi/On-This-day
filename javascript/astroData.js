var lifePathInfo = {
  one:
    "A person with Life Path Number 1 tends to be hard working, a natural born leader, with a pioneering spirit that is full of energy, and a passion for art. They have a strong desire to be number one, which means a person with this number can manifest very easily. Due to their determination and self-motivation, they won't let anything stand in their way of accomplishing a goal. Their drive allows them to overcome any obstacle or challenge they may encounter, and they have the desire to accomplish great things in their lifetime. Their only need is to focus on what they want in order to achieve it.",
  two:
    "Life Path Number 2 is a vibration of duality and division, the number of truth and learning. Those with Life Path Number 2 are more likely to seeks harmony and peace, and are symbolized by relationships, co-operation, and being considerate and thoughtful of others. People with a Life Path 2 are natural peacemakers, and because they see all the viewpoints in any situation, handle difficult situations with grace, and tend to be persuasive rather than forceful when trying to get their point across, people may often look to them to be a mediator in any argument.",
  three:
    "Life Path Number 3 is a strong vibration, one of creative self expression, independence, playfulness, and communication. People with a Life Path Number 3 have a very high level of creativity and self expression. This abundance of creative energy, and the ease with which they are able to communicate in all areas, both written word and verbal, could lead them to become a poet, actor, writer, artist or musician. In fact many writers, radio broadcasters, actors, singers, performers, and counselors share this life path number.",
  four:
    "People with Life Path Number 4 are often seen as builders and worker of society. If your Life Path is a 4 you are likely more determined, serious, practical, disciplined, and hard working. Down-to-earth and grounded are terms that are probably often used to describe you. You find hard work rewarding and don't look for the easy way to the top or to finding success. Not only do you work hard yourself, but you expect the same from those around you.",
  five:
    "Life Path Number 5 is the number of freedom and change, and those with a Life Path of 5 tend to seek freedom above all else. They are adventurers, having a restless nature, and being on the go, constantly seeking change and variety in life. They have a free spirit and need to have variety in their day. If they do not live the adventure, their lives become way too dramatic.",
  six:
    "Life Path Number 6 is the number of responsibility and awareness, and those born with a Life Path number 6 tend to be incredible nurturers. You are likely more home, family, or community oriented, and tend to be more loving, warm, understanding, compassionate, responsible and reliable and interested in pleasing others. You are an excellent caretaker and provider, and enjoy being of service to others, and this is especially true with your family and friends. You life revolves around home and family, and your parenting instincts are very strong.",
  seven:
    "Seven is a cerebral number, and those with a Life Path Number 7 have a loner quality. They need to learn to have faith. If they do not have faith they tend to become very cynical and escape through drugs, alcohol, work, and geography. They have a love of natural beauty: ocean, green grass, plants, flowers, etc.. Life Path Number 7 is the number of a higher awareness, a wider point of view. Sevens tend to have an air of mystery, and do not want you to know who they are. Intellectual, analytical, intuitive, reserved, natural inclination towards spiritual subjects, aloof, loner, pessimistic, secretive, and insecure; are some of the qualities of those born into the Seventh Life path.",
  eight:
    "Those with Life Path Number 8, tend to be a better judge of character and attract the right kind of people to work with you toward your vision. This makes you a natural executive and excellent in the business or political arena. You have a need for success, and a strong desire to be recognized for your achievements. This leads you to not feel 'safe' unless you have found a way to establish financial security, and because you are more likely to consider status important, you may be tempted to live above your means. You should also pay special attention to telling and showing your loved ones that you care - being a good provider isn't the only way of doing this.",
  nine:
    "Life Path Number 9 is the number of completion and resolution, and those born with a Life Path Number 9 are natural leaders, and they assume they are in charge even if they are not. If in a department store, people think they work there. They take care of everyone else but need to learn to speak up when they need help, love, and hugs. Nines often feel unloved or abandoned by their mother or father, or they feel completely responsible for them. It's hard for them to let go of the past.",
  eleven:
    "Master Number 11 is considered the most intuitive of all numbers, and those with the Life Path Number 11 tend to be very sensitive and intuitive, with a deeper understanding of others and a natural sense of what is going on behind the scenes. For example, they will pick up on people's relationships and health without being told anything, and so they often end up working in the fields where they can use their gifts of intuition, and sensitivity to help others.",
  twentytwo:
    "Those with a Life Path Number 22 tend to have greater spiritual understanding, and the ability to apply knowledge in a practical way. They have the potential to achieve enormous success, with a unique talent for manifesting ideas into reality, and as such are often referred to as Master Builders.",
  thirtythree:
    "Life Path Number 33 is referred to as a Master Number in Numerology, and is considered the number of a Master Teacher. This individual's focus is on reaching the world and uplifting the loving energy of mankind. They are not concerned with personal ambition, and have great devotion to their cause. A birth date that reduces down to 33 is very rare. When it does happen you may be looking at a great and significant spiritual leader along the lines of the Dalai Lama (Life Path 22) or Gandhi (Life Path 9). Remember that 33 is the higher, double digit vibration of Life Path Number 6, a very nurturing and responsible number."
};

var signInfo = {
  aquarius:
    "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities.",
  aquariusPic: "img/aquarius.jpg",
  aquariusStr: "Progressive, original, independent, humanitarian",
  aquariusWk:
    "Runs from emotional expression, temperamental, uncompromising, aloof",
  pisces:
    "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity.",
  piscesPic: "img/pisces.jpg",
  piscesStr: "Compassionate, artistic, intuitive, gentle, wise, musical",
  piscesWk:
    "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
  aries:
    "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings. Thanks to its ruling planet Mars and the fact it belongs to the element of Fire (just like Leo and Sagittarius), Aries is one of the most active zodiac signs. It is in their nature to take action, sometimes before they think about it well.",
  ariesPic: "img/aries.jpg",
  ariesStr:
    "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
  ariesWk: "Impatient, moody, short-tempered, impulsive, aggressive",

  taurus:
    "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.",
  taurusPic: "img/taurus.jpg",
  taurusStr: "Reliable, patient, practical, devoted, responsible, stable",
  taurusWk: "Stubborn, possessive, uncompromising",
  gemini:
    "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see.",
  geminiPic: "img/gemini.jpg",
  geminiStr:
    "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
  geminiWk: "Nervous, inconsistent, indecisive",
  cancer:
    "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering.",
  cancerPic: "img/cancer.jpg",
  cancerStr:
    "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
  cancerWk: "Moody, pessimistic, suspicious, manipulative, insecure",
  leo:
    "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their 'king of the jungle' status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier.",
  leoPic: "img/leo.jpg",
  leoStr: "Creative, passionate, generous, warm-hearted, cheerful, humorous",
  leoWk: "Arrogant, stubborn, self-centered, lazy, inflexible",
  virgo:
    "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time.",
  virgoPic: "img/virgo.jpg",
  virgoStr: "Loyal, analytical, kind, hardworking, practical",
  virgoWk:
    "Shyness, worry, overly critical of self and others, all work and no play",
  libra:
    "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible",
  libraPic: "img/libra.jpg",
  libraStr: "Cooperative,diplomatic, gracious, fair-minded, social",
  libraWk: "Indecisive, avoids confrontations, will carry a grudge, self-pity",
  scorpio:
    "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness.Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.",
  scorpioPic: "img/scorpio.jpg",
  scorpioStr: "Resourceful, brave, passionate, stubborn, a true friend",
  scorpioWk: "Distrusting, jealous, secretive, violent",
  sagittarius:
    "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals.",
  sagittariusPic: "img/sagittarius.jpg",
  sagittariusStr: "Generous, idealistic, great sense of humor",
  sagittariusWk:
    "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
  capricorn:
    "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise.",
  capricornPic: "img/capricorn.jpg",
  capricornStr: "Responsible, disciplined, self-control, good managers",
  capricornWk: "Know-it-all, unforgiving, condescending, expecting the worst"
};
