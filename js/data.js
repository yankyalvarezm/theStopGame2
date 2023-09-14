console.log('data.js connected');

const countries = {
    a: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan'],
    b: ['Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi'],
    c: ['Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia'],
    d: ['Denmark', 'Djibouti', 'Dominica', 'Dominican Republic'],
    e: ['East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia'],
    f: ['Fiji', 'Finland', 'France'],
    g: ['Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana'],
    h: ['Haiti', 'Honduras', 'Hungary'],
    i: ['Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy'],
    j: ['Jamaica', 'Japan', 'Jordan'],
    k: ['Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan'],
    l: ['Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg'],
    m: ['Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar'],
    n: ['Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway'],
    o: ['Oman'],
    p: ['Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal'],
    q: ['Qatar'],
    r: ['Romania', 'Russia', 'Rwanda'],
    s: ['Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria'],
    t: ['Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu'],
    u: ['Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan'],
    v: ['Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam'],
    y: ['Yemen'],
    z: ['Zambia', 'Zimbabwe']
};

const sports = {
    a: ['Archery', 'Athletics', 'Aikido', 'Auto Racing', 'Australian Football', 'Aquatics'],
    b: ['Basketball', 'Baseball', 'Badminton', 'Boxing', 'Bowling', 'Beach Volleyball'],
    c: ['Cricket', 'Cycling', 'Canoeing', 'Crossfit', 'Curling', 'Cheerleading'],
    d: ['Darts', 'Diving', 'Discus', 'Dodgeball', 'Dancesport', 'Downhill Skiing'],
    e: ['Equestrian', 'Endurance Racing', 'Extreme Sports', 'Esports', 'Eight-ball', 'Epée'],
    f: ['Football', 'Fencing', 'Formula 1', 'Freestyle Skiing', 'Field Hockey', 'Futsal'],
    g: ['Golf', 'Gymnastics', 'Greco-Roman Wrestling', 'Gaelic Football', 'Go-Karting', 'Goalball'],
    h: ['Handball', 'Hockey', 'Hurling', 'High Jump', 'Horse Racing', 'Hang Gliding'],
    i: ['Ice Hockey', 'Indoor Volleyball', 'Inline Skating', 'Ice Climbing', 'Ice Skating', 'Ironman'],
    j: ['Judo', 'Javelin', 'Ju-jitsu', 'Jump Roping', 'Jet Skiing', 'Jousting'],
    k: ['Karate', 'Kite Surfing', 'Kickboxing', 'Kendo', 'Kayaking', 'Kabaddi'],
    l: ['Lacrosse', 'Long Jump', 'Luge', 'Lawn Tennis', 'Laser Tag', 'Lifting'],
    m: ['Martial Arts', 'Mountain Biking', 'Motocross', 'Motor Racing', 'Modern Pentathlon', 'Mountaineering'],
    n: ['Netball', 'Nordic Combined', 'NASCAR', 'Nine-ball', 'Ninjutsu', 'Naginata'],
    o: ['Orienteering', 'Open Water Swimming', 'Obstacle Racing', 'Olympic Lifting', 'Octopush', 'Outrigger Canoeing'],
    p: ['Polo', 'Powerlifting', 'Paragliding', 'Pole Vault', 'Paintball', 'Ping Pong'],
    q: ['Quidditch', 'Quarter Horse Racing', 'Quickstep', 'Qianball', 'Quad Biking', 'Quoits'],
    r: ['Rugby', 'Rowing', 'Racquetball', 'Rock Climbing', 'Rodeo', 'Roller Derby'],
    s: ['Soccer', 'Swimming', 'Softball', 'Skiing', 'Snowboarding', 'Sumo Wrestling'],
    t: ['Tennis', 'Table Tennis', 'Taekwondo', 'Triathlon', 'Track and Field', 'Tug of War'],
    u: ['Ultimate Frisbee', 'Underwater Hockey', 'Unicycling', 'Ultramarathon', 'Uppies and Downies', 'Underwater Rugby'],
    v: ['Volleyball', 'Vaulting', 'Velo', 'Varpa', 'Vintage Car Racing', 'Valencian Pilota'],
    w: ['Wrestling', 'Water Polo', 'Weightlifting', 'Windsurfing', 'Wakeboarding', 'Wushu'],
    x: ['Xare', 'Xingyiquan', 'Xtreme Sports', 'Xiangqi', 'Xarm', 'Xare'],
    y: ['Yoga', 'Yachting', 'Yawara', 'Yubi Lakpi', 'Yo-yoing', 'Yukigassen'],
    z: ['Ziplining', 'Zui Quan', 'Zumba', 'Zorb Football', 'Zen Archery', 'Zero Gravity Sports']
};

const professions = {
    a: ['Accountant', 'Actor', 'Architect', 'Astronomer', 'Author', 'Artist', 'Auditor', 'Animator', 'Athlete', 'Arborist'],
    b: ['Baker', 'Banker', 'Barber', 'Biologist', 'Blacksmith', 'Butcher', 'Brewer', 'Bartender', 'Bouncer', 'Builder'],
    c: ['Carpenter', 'Chef', 'Chemist', 'Cleaner', 'Clerk', 'Coach', 'Counselor', 'Composer', 'Comedian', 'Consultant'],
    d: ['Dancer', 'Dentist', 'Designer', 'Detective', 'Director', 'Doctor', 'Dermatologist', 'Dietician', 'Driver', 'Drummer'],
    e: ['Editor', 'Electrician', 'Engineer', 'Entertainer', 'Entrepreneur', 'Environmentalist', 'Economist', 'Embroiderer', 'Esthetician', 'Ethnographer'],
    f: ['Farmer', 'Filmmaker', 'Fisherman', 'Florist', 'Forester', 'Firefighter', 'Flight Attendant', 'Freelancer', 'Financial Advisor', 'Funeral Director'],
    g: ['Gardener', 'Geologist', 'Graphic Designer', 'Grocer', 'Guide', 'Gunsmith', 'Geographer', 'Genealogist', 'Gastroenterologist', 'Gymnast'],
    h: ['Hairdresser', 'Historian', 'Hotel Manager', 'Housekeeper', 'Hunter', 'Hydrologist', 'Handyman', 'Horticulturist', 'Hematologist', 'Helicopter Pilot'],
    i: ['Illustrator', 'Interpreter', 'Instructor', 'Insurance Agent', 'Investigator', 'Interior Designer', 'Immunologist', 'Ironworker', 'Ichthyologist', 'Inventor'],
    j: ['Jeweler', 'Judge', 'Journalist', 'Janitor', 'Jockey', 'Java Developer', 'Jailer', 'Jazz Musician', 'Juggler', 'Joiner'],
    k: ['Kinesiologist', 'Kindergarten Teacher', 'Key Grip', 'Karate Instructor', 'Kennel Operator', 'Kite Designer', 'Kickboxer', 'Kiln Operator', 'Keyboardist', 'King'],
    l: ['Lawyer', 'Librarian', 'Linguist', 'Locksmith', 'Lifeguard', 'Landscaper', 'Laundress', 'Lobbyist', 'Luthier', 'Logistician'],
    m: ['Mechanic', 'Musician', 'Magician', 'Mathematician', 'Manager', 'Model', 'Mason', 'Meteorologist', 'Microbiologist', 'Miner'],
    n: ['Nurse', 'Nutritionist', 'Novelist', 'Nanny', 'Navigator', 'Neurologist', 'Notary', 'Nail Technician', 'News Reporter', 'Naturopath'],
    o: ['Oncologist', 'Optometrist', 'Orthodontist', 'Organist', 'Osteopath', 'Office Clerk', 'Operator', 'Oceanographer', 'Orchestrator', 'Ophthalmologist'],
    p: ['Painter', 'Pilot', 'Photographer', 'Physician', 'Plumber', 'Pharmacist', 'Poet', 'Podiatrist', 'Politician', 'Pediatrician'],
    q: ['Quantity Surveyor', 'Quilter', 'Quality Analyst', 'Quarry Worker', 'Quizmaster'],
    r: ['Receptionist', 'Reporter', 'Roofer', 'Radiologist', 'Ranger', 'Researcher', 'Realtor', 'Racer', 'Retailer', 'Recruiter'],
    s: ['Scientist', 'Singer', 'Surgeon', 'Software Developer', 'Sailor', 'Sculptor', 'Statistician', 'Salesperson', 'Secretary', 'Sommelier'],
    t: ['Teacher', 'Technician', 'Therapist', 'Tailor', 'Translator', 'Taxidermist', 'Truck Driver', 'Tour Guide', 'Travel Agent', 'Tutor'],
    u: ['Urologist', 'Undertaker', 'Upholsterer', 'Urban Planner', 'Usher', 'Utility Worker', 'UI Designer', 'UX Designer'],
    v: ['Veterinarian', 'Vocalist', 'Violinist', 'Valet', 'Venture Capitalist', 'Virologist', 'Volcanologist', 'Videographer'],
    w: ['Writer', 'Welder', 'Waiter', 'Web Developer', 'Window Cleaner', 'Woodworker', 'Winemaker', 'Weather Forecaster', 'Warehouse Manager'],
    x: ['X-ray Technician', 'Xylophonist'],
    y: ['Yoga Instructor', 'Youth Worker', 'Yachtsman', 'YouTuber', 'Yarn Spinner'],
    z: ['Zoologist', 'Zookeeper', 'Zumba Instructor', 'Zen Master', 'Zitherist']
};

function verifyCountry(inputCountry, startingLetter) {
    const lowerInputCountry = inputCountry.toLowerCase();
    const lowerStartingLetter = startingLetter.toLowerCase();

    const lowerCaseCountries = countries[lowerStartingLetter].map(country => country.toLowerCase());

    if (lowerCaseCountries.includes(lowerInputCountry)) {
        // console.log('Valid Country');
        document.getElementById('descriptionID').innerHTML = `Try to fill as many categories as you can, good luck!`;
        document.getElementById('input-country').style.border = '2px solid green';
        document.getElementById('input-country').style.backgroundColor = 'rgb(202, 230, 202)';
        return true
    } else if (lowerInputCountry.charAt(0) !== lowerStartingLetter) {
        // console.log(`Start with the letter: ${lowerStartingLetter.toUpperCase()}`);
        document.getElementById('descriptionID').innerHTML = `Remember to start with the letter: ${lowerStartingLetter.toUpperCase()}`;
        document.getElementById('input-country').style.border = '3px solid grey';
        document.getElementById('input-country').style.backgroundColor = 'white';

        setTimeout(() => {
            document.getElementById('descriptionID').innerHTML = `Try to fill as many categories as you can, good luck!`;
        }, 3000);
        return false
    } else {
        // console.log('Invalid Country');
        document.getElementById('descriptionID').innerHTML = `Try to fill as many categories as you can, good luck!`;
        document.getElementById('input-country').style.border = '2px solid grey';
        document.getElementById('input-country').style.backgroundColor = 'white';
        return false
    }
}

function verifySport(inputSport, startingLetter) {

    const lowerInputSport = inputSport.toLowerCase();
    const lowerStartingLetter = startingLetter.toLowerCase();

    const sportsWithStartingLetter = sports[lowerStartingLetter];

    if (sportsWithStartingLetter && sportsWithStartingLetter.map(sport => sport.toLowerCase()).includes(lowerInputSport)) {
        // console.log('Valid Sport');
        document.getElementById('descriptionID').innerHTML = 'Try to fill as much categories as you can, good luck!';
        document.getElementById('input-sport').style.border = '2px solid green';
        document.getElementById('input-sport').style.backgroundColor = 'rgb(202, 230, 202)';
        return true
    } else if (lowerInputSport.charAt(0) !== lowerStartingLetter) {
        // console.log(`Start with the letter: ${lowerStartingLetter.toUpperCase()}`);
        document.getElementById('descriptionID').innerHTML = `Remember to start with the letter: ${lowerStartingLetter.toUpperCase()}`;
        document.getElementById('input-sport').style.border = '3px solid grey';
        document.getElementById('input-sport').style.backgroundColor = 'white';
        setTimeout(() => {
            document.getElementById('descriptionID').innerHTML = 'Try to fill as much categories as you can, good luck!';
        }, 3000);
        return false
    } else {
        // console.log('Invalid Sport');
        document.getElementById('descriptionID').innerHTML = 'Try to fill as much categories as you can, good luck!';
        document.getElementById('input-sport').style.border = '2px solid grey';
        document.getElementById('input-sport').style.backgroundColor = 'white';
        return false
    }
}

function verifyProfession(inputProfession, startingLetter) {

    const lowerInputProfession = inputProfession.toLowerCase();
    const lowerStartingLetter = startingLetter.toLowerCase();

    const professionsWithStartingLetter = professions[lowerStartingLetter];

    if (professionsWithStartingLetter && professionsWithStartingLetter.map(profession => profession.toLowerCase()).includes(lowerInputProfession)) {
        // console.log('Valid Profession');
        document.getElementById('descriptionID').innerHTML = 'Try to fill as much categories as you can, good luck!';
        document.getElementById('input-profession').style.border = '2px solid green';
        document.getElementById('input-profession').style.backgroundColor = 'rgb(202, 230, 202)';
        return true
    } else if (lowerInputProfession.charAt(0) !== lowerStartingLetter) {
        // console.log(`Start with the letter: ${lowerStartingLetter.toUpperCase()}`);
        document.getElementById('descriptionID').innerHTML = `Remember to start with the letter: ${lowerStartingLetter.toUpperCase()}`;
        document.getElementById('input-profession').style.border = '3px solid grey';
        document.getElementById('input-profession').style.backgroundColor = 'white';
        setTimeout(() => {
            document.getElementById('descriptionID').innerHTML = 'Try to fill as much categories as you can, good luck!';
        }, 3000);
        return false
    } else {
        // console.log('Invalid Profession');
        document.getElementById('descriptionID').innerHTML = 'Try to fill as much categories as you can, good luck!';
        document.getElementById('input-profession').style.border = '2px solid grey';
        document.getElementById('input-profession').style.backgroundColor = 'white';
        return false
    }
}