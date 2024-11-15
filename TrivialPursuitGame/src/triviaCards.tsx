const triviaQuestions = [
    {categoryquestion: 'geography1', category: 'geography', question: 'Which of the five Great Lakes does not have a border with Canada?', answer: 'Lake Michigan'},
    {categoryquestion: 'entertainment1', category: 'entertainment', question: 'Which self-proclaimed best friend of Nicole Brown Simpson wroter her posthumous tell-all and appeared on the The Read Housewives of Beverly Hills?', answer: 'Faye Resnick'},
    {categoryquestion: 'history1', category: 'history', question: 'What was Martin Luther King, Jrs birth name?', answer: 'Martin King, Jr'},
    {categoryquestion: 'arts&literature1', category: 'arts&literature', question: 'The town of Agra in India houses what famous monument to Shah Jahans wife?', answer: 'Taj Mahal'},
    {categoryquestion: 'science&nature1', category: 'science&nature', question: 'Where in the human body are the two most common areas to check for a pulse?', answer: 'Neck and Wrist'},
    {categoryquestion: 'sports&leisure1', category: 'sports&leisure', question: 'A race that is longer than 26.2 miles in length is called a what?', answer: 'Ultramarathon-Typical race lengths are 31 to 100 miles long, but can extend much further'},

    {categoryquestion: 'geography2', category: 'geography', question: 'What is the name of Earths most recent supercontinent, which formed about 270 million years ago?', answer: 'Pangaea-Each continent then went its own merry way about 70 million years later.'},
    {categoryquestion: 'entertainment2', category: 'entertainment', question: 'As a teen, Justin Timberlake appeared on which two shows that showcased his singing and dancing abilities?', answer: 'Star Search and The All-New Mickey Mouse Club'},
    {categoryquestion: 'history2', category: 'history', question: 'Pope Francis was born in which South American city?', answer: 'Buenos Aires'},
    {categoryquestion: 'arts&literature2', category: 'arts&literature', question: 'To which school did William Faulkner bequeth a majority of his manuscripts and personal papers at the time of his death?', answer: 'University of Virginia'},
    {categoryquestion: 'science&nature2', category: 'science&nature', question: 'After Jupiter, what is the second-largest planet in our solar system?', answer: 'Saturn'},
    {categoryquestion: 'sports&leisure2', category: 'sports&leisure', question: 'Which MMA fighter appeared on the cover of Sports Illustrated Swimsuit Issue sporting body paint?', answer: 'Ronda Rousey'},

    {categoryquestion: 'geography3', category: 'geography', question: 'In which city was the first mobile phone call made?', answer: 'New York City'},
    {categoryquestion: 'entertainment3', category: 'entertainment', question: 'Which electronic dance music duo wear helmets inspired by the film The Day the Earth Stood Still, to keep their ID secret?', answer: 'Daft Punk'},
    {categoryquestion: 'history3', category: 'history', question: 'Which California Democrat became the first female Speaker of the House of Representatives?', answer: 'Nancy Pelosi'},
    {categoryquestion: 'arts&literature3', category: 'arts&literature', question: 'Which R&B singer of I Feel For You sang the theme song for Reading Rainbow, which had a 26-year run on PBS?', answer: 'Chaka Khan'},
    {categoryquestion: 'science&nature3', category: 'science&nature', question: 'Which form of pollution means that more 75 percent of Americans cannot see the Milky Way?', answer: 'Light pollution'},
    {categoryquestion: 'sports&leisure3', category: 'sports&leisure', question: 'In which Arab capital is Ferrari World, an Italian race car theme park with rides that emulate the thrill of driving a Formula 1 machine?', answer: 'Abu Dhabi'},

    {categoryquestion: 'geography4', category: 'geography', question: 'Which country is the final resting place of Dian Fossey, the mountain gorilla researcher who inspired the film Gorillas in the Mist?', answer: 'Riwanda-She is buried next to her favorite gorilla Digit.'},
    {categoryquestion: 'entertainment4', category: 'entertainment', question: 'What are the first names of the three Crawley sisters on Downton Abbey?', answer: 'Mary, Edith and Sybil'},
    {categoryquestion: 'history4', category: 'history', question: 'Meriwether Lewis was accidentally shot in the butt on his historic expedition, when one of his men mistook him for an elk. True or False?', answer: 'True-it was a minor, but painful, injury.'},
    {categoryquestion: 'arts&literature4', category: 'arts&literature', question: 'The Statue of Liberty is taller than the Colssus of Rhodes, one of the Seven Wonders of the Ancient World. True or False?', answer: 'True-The Colossus was 160 ft tall on his pedastal; Liberty is 305 ft tall on hers'},
    {categoryquestion: 'science&nature4', category: 'science&nature', question: 'What was the first Internet search engine called?', answer: 'Archie-Launched in 1990, it predated the Google search engine by eight years'},
    {categoryquestion: 'sports&leisure4', category: 'sports&leisure', question: 'What Ben & Jerrys popular ice cream flavor of peanut butter, pretzels, and fudge was renamed in 2009 to support same-sex marriage?', answer: 'Chubby Hubby-it became Hubby Hubby for the month of September'},

    {categoryquestion: 'geography5', category: 'geography', question: 'Which Scottish competition includes contests in Highland dancing, hammer throwing, and caber tossing?', answer: 'Highland Games-The caber looks a lot like a telegraph pole.'},
    {categoryquestion: 'entertainment5', category: 'entertainment', question: 'With what part of his body does Mario hit those overhead bricks and blocks during a Nintendo game?', answer: 'Hand-If you look closely, you will notice he is not actually whacking his head on them.'},
    {categoryquestion: 'history5', category: 'history', question: 'Which item made for popes, cardinals, and bishops by Gammerilli tailors since 1798 is now available online for a mere $27 per pair?', answer: 'Socks-They come in cardinal red, bishop purple, and priest black.'},
    {categoryquestion: 'arts&literature5', category: 'arts&literature', question: 'What type of poem shares its name with an Irish town?', answer: 'Limerick'},
    {categoryquestion: 'science&nature5', category: 'science&nature', question: 'Which poisonous brown spider sports a violin-shaped mark on its head and neck, which explains its musical nickname, fiddleback spider?', answer: 'Brown recluse spider'},
    {categoryquestion: 'sports&leisure5', category: 'sports&leisure', question: 'In tennis, when players are tied 40-40, its called what?', answer: 'Deuce'},

    {categoryquestion: 'geography6', category: 'geography', question: 'Which Western coastal state has both the highest and the lowest points in the continental U.S. ?', answer: 'California-Mt. Whitney is the highest, and Death Valley, 85 miles away, is the lowest.'},
    {categoryquestion: 'entertainment6', category: 'entertainment', question: 'What 90s TV drama about five siblings who inherit a restaurant launched the careers of Matthew Fox and Jennifer Love Hewitt?', answer: 'Party of Five-The Salinger kids had a six-season run on FOX'},
    {categoryquestion: 'history6', category: 'history', question: 'What was the first space shuttle to be launched into space by the US?', answer: 'Columbia-in 1981'},
    {categoryquestion: 'arts&literature6', category: 'arts&literature', question: 'Which famous Da Vinci painting was stolen from the Louvre by an Italian in 1911, who kept it hidden for two years?', answer: 'Mona Lisa-The thief claimed that national pride inspired him to return it to its homeland.'},
    {categoryquestion: 'science&nature6', category: 'science&nature', question: 'Which primate is the worlds largest tree-dwelling mammal, weighing in at up to 200 pounds?', answer: 'Orangutan'},
    {categoryquestion: 'sports&leisure6', category: 'sports&leisure', question: 'In England, medievel kings restricted most sports on Sundays so that men would engage more in which crucial sport-jousting, fencing or archery?', answer: 'Archery-it was a military skill important to national defense.'}
    
]
