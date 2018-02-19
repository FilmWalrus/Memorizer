//document.getElementById("demo").innerHTML = "Debug Msg: " + showLetters;

var deck_afi_movies = ["Citizen Kane", "The Godfather", "Casablanca", "Raging Bull", "Singin in the Rain", "Gone with the Wind", "Lawrence of Arabia", "Schindlers List", "Vertigo", "The Wizard of Oz", "City Lights", "The Searchers", "Star Wars", "Psycho", "2001 A Space Odyssey", "Sunset Boulevard", "The Graduate", "The General", "On the Waterfront", "Its a Wonderful Life", "Chinatown", "Some Like It Hot", "The Grapes of Wrath", "ET the Extraterrestrial", "To Kill a Mockingbird", "Mr. Smith Goes to Washington", "High Noon", "All About Eve", "Double Indemnity", "Apocalypse Now", "The Maltese Falcon", "The Godfather Part II", "One Flew Over the Cuckoo's Nest", "Snow White and the Seven Dwarfs", "Annie Hall", "The Bridge on the River Kwai", "The Best Years of Our Lives", "The Treasure of the Sierra Madre", "Dr Strangelove", "The Sound of Music", "King Kong", "Bonnie and Clyde", "Midnight Cowboy", "The Philadelphia Story", "Shane", "It Happened One Night", "A Streetcar Named Desire", "Rear Window", "Intolerance", "The Lord of the Rings The Fellowship of the Ring", "West Side Story", "Taxi Driver", "The Deer Hunter", "MASH", "North by Northwest", "Jaws", "Rocky", "The Gold Rush", "Nashville", "Duck Soup", "Sullivans Travels", "American Graffiti", "Cabaret", "Network", "The African Queen", "Raiders of the Lost Ark", "Whos Afraid of Virginia Woolf", "Unforgiven", "Tootsie", "A Clockwork Orange", "Saving Private Ryan", "The Shawshank Redemption", "Butch Cassidy and the Sundance Kid", "The Silence of the Lambs", "In the Heat of the Night", "Forrest Gump", "All the Presidents Men", "Modern Times", "The Wild Bunch", "The Apartment", "Spartacus", "Sunrise A Song of Two Humans", "Titanic", "Easy Rider", "A Night at the Opera", "Platoon", "12 Angry Men", "Bringing Up Baby", "The Sixth Sense", "Swing Time", "Sophie's Choice", "Goodfellas", "The French Connection", "Pulp Fiction", "The Last Picture Show", "Do the Right Thing", "Blade Runner", "Yankee Doodle Dandy", "Toy Story", "Ben Hur"];
var deck_alphabet_g = [["Alphabet-Greek", "#"], ["Alpha", "1"], ["Beta", "2"], ["Gamma", "3"], ["Delta", "4"], ["Epsilon", "5"], ["Zeta", "6"], ["Eta", "7"], ["Theta", "8"], ["Iota", "9"], ["Kappa", "10"], ["Lambda", "11"], ["Mu", "12"], ["Nu", "13"], ["Xi", "14"], ["Omicron", "15"], ["Pi", "16"], ["Rho", "17"], ["Sigma", "18"], ["Tau", "19"], ["Upsilon", "20"], ["Phi", "21"], ["Chi", "22"], ["Psi", "23"], ["Omega", "24"]];
var deck_alphabet_p = [["Alphabet-Phonetic", "Word Type"], ["Alfa|Alpha", "Car"], ["Bravo", "Cheer"], ["Charlie", "Name"], ["Delta", "Wave"], ["Echo", "Wave"], ["Foxtrot", "Dance"], ["Golf", "Sport"], ["Hotel", "Place"], ["India", "Place"], ["Juliett", "Name"], ["Kilo", "Unit"], ["Lima", "Place"], ["Mike", "Name"], ["November", "Time"], ["Oscar", "Name"], ["Papa", "Person"], ["Quebec", "Place"], ["Romeo", "Name"], ["Sierra", "Place"], ["Tango", "Dance"], ["Uniform", "Clothes"], ["Victor", "Name"], ["Whiskey|Whisky", "Drink"], ["Xray", "Wave"], ["Yankee", "Person"], ["Zulu", "Person"]];
var deck_anniversary = ["Paper", "Cotton", "Leather", "Linen", "Wood", "Iron", "Wool", "Bronze", "Copper", "Tin", "Steel", "Silk", "Lace", "Ivory", "Crystal", "Porcelain", "Silver", "Ruby", "Golden", "Diamond", "Sapphire"];
var deck_bible = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "Samuel", "Kings", "Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "Thessalonians", "Timothy", "Titus", "Philemon", "Hebrews", "James", "Peter", "John", "Jude", "Revelations"];
var deck_birthstones = ["Garnet", "Amethyst", "Aquamarine", "Diamond", "Emerald", "Pearl", "Ruby", "Peridot", "Sapphire", "Opal", "Topaz", "Turquoise"];
var deck_bones = [["Bones", "Number", "Location"], ["Calcaneus", "2", "Foot"], ["Capitate", "2", "Hand"], ["Carpal", "10", "Hand"], ["Cervical Vertebra|Vertebra", "7", "Torso"], ["Clavicle", "2", "Arm"], ["Coccyx", "1", "Pelvis"], ["Cuboid", "2", "Foot"], ["Distal Phalanx|Phalanx|Phalanges|Distal Phalanges", "20", "Hand/Foot"], ["Ethmoid", "1", "Head"], ["Femur", "2", "Leg"], ["Fibula", "2", "Leg"], ["Frontal", "1", "Head"], ["Gladiolus|Sternum|Breastbone", "1", "Torso"], ["Hamate", "2", "Hand"], ["Hip", "2", "Pelvis"], ["Humerus", "2", "Arm"], ["Hyoid", "1", "Torso"], ["Ilium|Hip", "2", "Pelvis"], ["Incus|Anvil", "2", "Head"], ["Inferior Nasal Concha|Nasal|Inferior Nasal|Turbinate|Turbinal", "2", "Head"], ["Intermediate Cuneiform|Cuneiform", "2", "Foot"], ["Intermediate Phalanx|Phalanx|Phalanges|Intermediate Phalanges|Middle Phalanx|Middle Phalanges", "16", "Hand/Foot"], ["Ischium|Hip", "2", "Pelvis"], ["Lacrimal", "2", "Head"], ["Lateral Cuneiform|Cuneiform", "2", "Foot"], ["Lumbar Vertebra|Vertebra", "5", "Torso"], ["Lunate", "2", "Hand"], ["Malleus|Hammer", "2", "Head"], ["Mandible", "1", "Head"], ["Manubrium|Sternum|Breastbone", "1", "Torso"], ["Maxilla|Maxiallary", "2", "Head"], ["Medial Cuneiform|Cuneiform", "2", "Foot"], ["Metacarpal", "10", "Hand"], ["Metatarsal", "10", "Foot"], ["Nasal", "2", "Head"], ["Navicular", "2", "Foot"], ["Occipital", "1", "Head"], ["Palatine", "2", "Head"], ["Parietal", "2", "Head"], ["Patella", "2", "Leg"], ["Pisiform", "2", "Hand"], ["Proximal Phalanx|Phalanx|Phalanges|Proximal Phalanges", "20", "Hand/Foot"], ["Pubis|Hip", "2", "Pelvis"], ["Radius", "2", "Arm"], ["Rib", "24", "Torso"], ["Sacrum", "1", "Pelvis"], ["Scaphoid", "2", "Hand"], ["Scapula|Shoulder Blade", "2", "Arm"], ["Sphenoid", "1", "Head"], ["Stapes|Stirrup", "2", "Head"], ["Sternum|Breastbone", "1", "Torso"], ["Talus", "2", "Foot"], ["Temporal", "2", "Head"], ["Thoracic Vertebra|Vertebra", "12", "Torso"], ["Tibia", "2", "Leg"], ["Trapezium", "2", "Hand"], ["Trapezoid", "2", "Hand"], ["Triquetral|Triquetrum|Pyramidal", "2", "Hand"], ["Ulna", "2", "Leg"], ["Vomer", "1", "Head"], ["Xiphoid Process|Sternum|Breastbone", "1", "Torso"], ["Zygomatic", "2", "Head"]];
var deck_capitals_us = ["Albany", "Annapolis", "Atlanta", "Augusta", "Austin", "Baton Rouge", "Bismarck", "Boise", "Boston", "Carson City", "Charleston", "Cheyenne", "Columbia", "Columbus", "Concord", "Denver", "Des Moines", "Dover", "Frankfort", "Harrisburg", "Hartford", "Helena", "Honolulu", "Indianapolis", "Jackson", "Jefferson City", "Juneau", "Lansing", "Lincoln", "Little Rock", "Madison", "Montgomery", "Montpelier", "Nashville", "Oklahoma City", "Olympia", "Phoenix", "Pierre", "Providence", "Raleigh", "Richmond", "Sacramento", "Salem", "Salt Lake City", "Santa Fe", "Springfield", "St Paul", "Tallahassee", "Topeka", "Trenton"];
var deck_capitals = ["Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Algiers", "Amman", "Amsterdam", "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Ashgabat", "Asmara", "Astana", "Asuncion", "Athens", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul", "Basseterre", "Beijing", "Beirut", "Belgrade", "Belmopan", "Berlin", "Bern", "Bishkek", "Bissau", "Bogota", "Brasilia", "Bratislava", "Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Bujumbura", "Cairo", "Canberra", "Caracas", "Castries", "Chisinau", "Conakry", "Copenagen", "Dakar", "Damascus", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Dublin", "Dushanbe", "East Jerusalem", "Freetown", "Funafuti", "Gaborone", "Georgetown", "Guatemala City", "Hanoi", "Harare", "Havana", "Helsinki", "Honiara", "Islamabad", "Italian", "Jakarta", "Jerusalem", "Juba", "Kabul", "Kampala", "Kathmandu", "Khartoum", "Kiev", "Kigali", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur", "Kuwait City", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lomé", "London", "Luanda", "Lusaka", "Luxembourg", "Madrid", "Majuro", "Malabo", "Male", "Managua", "Manama", "Manila", "Maputo", "Maseru", "Mbabane", "Ngerulmud", "Mexico City", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Moroni", "Moscow", "Muscat", "Nairobi", "Nassau", "Naypyidaw", "NDjamena", "New Delhi", "Niamey", "Nicosia", "Nouakchott", "Nukualofa", "Oslo", "Ottawa", "Ouagadougou", "Palikir", "Panama City", "Paramaribo", "Paris", "Phnom Penh", "Podgorica", "Port Louis", "Port Moresby", "Port of Spain", "Port Vila", "Port au Prince", "Porto Novo", "Prague", "Praia", "Pretoria", "Pristina", "Pyongyang", "Quito", "Rabat", "Reykjavik", "Riga", "Riyadh", "Roseau", "San Jose", "San Marino", "San Salvador", "Sanaa", "Santiago", "Santo Domingo", "Sao Tome", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "Sri Jayawardenapura Kotte", "St Georges", "St Johns", "Stockholm", "Sucre", "Suva", "Taipei", "Tallinn", "Tarawa", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran", "Thimphu", "Tirana", "Tokyo", "Tripoli", "Tunis", "Ulaanbaatar", "Vaduz", "Valletta", "Vatican City", "Victoria", "Vienna", "Vientiane", "Vilnius", "Warsaw", "Washington DC", "Wellington", "Windhoek", "Yamoussoukro", "Yaounde", "Yaren", "Yerevan", "Zagreb"];
var deck_cocktails = [["Cocktails-IBA", "Base", "Ingredient 2", "Ingredient 3", "Type", "Category"], ["Alexander", "Cognac", "Crème de cacao", "Cream", "After Dinner", "Unforgettables"], ["Americano", "Campari", "Red vermouth", "Soda water", "Before Dinner", "Unforgettables"], ["Angel Face", "Calvados", "Gin", "Apricot brandy", "All Day", "Unforgettables"], ["Aviation", "Gin", "Maraschino", "Lemon juice", "All Day", "Unforgettables"], ["Bacardi", "Rum", "Lime juice", "Grenadine", "Before Dinner", "Unforgettables"], ["Between the Sheets", "Cognac", "White rum", "Triple sec", "All Day", "Unforgettables"], ["Casino", "Gin", "Maraschino", "Orange bitters", "All Day", "Unforgettables"], ["Clover Club", "Gin", "Raspberry syrup", "Lemon juice", "All Day", "Unforgettables"], ["Daiquiri", "White rum", "Lime juice", "Simple syrup", "Before Dinner", "Unforgettables"], ["Derby", "Gin", "Peach bitters", "Mint leafs", "All Day", "Unforgettables"], ["Dry Martini", "Gin", "Dry vermouth", "N/A", "Before Dinner", "Unforgettables"], ["Gin Fizz", "Gin", "Soda water", "Lemon juice", "Longdrink", "Unforgettables"], ["John Collins", "Gin", "Soda water", "Lemon juice", "Longdrink", "Unforgettables"], ["Manhattan", "Rye whiskey", "Red vermouth", "Angostura bitters", "Before Dinner", "Unforgettables"], ["Mary Pickford", "White rum", "Pineapple juice", "Maraschino", "All Day", "Unforgettables"], ["Monkey Gland", "Gin", "Orange juice", "Absinth", "All Day", "Unforgettables"], ["Negroni", "Gin", "Campari", "Sweet red vermouth", "Before Dinner", "Unforgettables"], ["Old Fashioned", "Rye whiskey", "Angostura bitters", "Sugar cube", "Before Dinner", "Unforgettables"], ["Paradise", "Gin", "Apricot brandy", "Orange juice", "All Day", "Unforgettables"], ["Planters Punch", "Dark rum", "Orange juice", "Pineapple juice", "Longdrink", "Unforgettables"], ["Porto Flip", "Brandy", "Red port", "Egg yolk", "After Dinner", "Unforgettables"], ["Ramos Gin Fizz", "Gin", "Cream", "Sugar syrup", "Longdrink", "Unforgettables"], ["Rusty Nail", "Scotch whisky", "Drambuie", "N/A", "After Dinner", "Unforgettables"], ["Sazerac", "Cognac", "Absinthe", "Sugar cube", "After Dinner", "Unforgettables"], ["Screwdriver", "Vodka", "Orange juice", "N/A", "All Day", "Unforgettables"], ["Sidecar", "Cognac", "Triple sec", "Lemon juice", "All Day", "Unforgettables"], ["Stinger", "Cognac", "Crème de menthe", "N/A", "After Dinner", "Unforgettables"], ["Tuxedo", "Gin", "Dry vermouth", "Orange bitters", "All Day", "Unforgettables"], ["Whiskey Sour", "Bourbon whiskey", "Lemon juice", "Sugar syrup", "Before Dinner", "Unforgettables"], ["White Lady", "Gin", "Triple sec", "Lemon juice", "All Day", "Unforgettables"], ["Bellini", "Prosecco", "Peach puree", "N/A", "Sparkling", "Contemporary Classics"], ["Black Russian", "Vodka", "Coffee liqueur", "N/A", "After Dinner", "Contemporary Classics"], ["Bloody Mary", "Vodka", "Tomato juice", "Celery", "Longdrink", "Contemporary Classics"], ["Caipirinha", "Cachaca", "Lime wedges", "Sugar", "Longdrink", "Contemporary Classics"], ["Champagne Cocktail", "Champagne", "Cognac", "Angostura bitters", "Sparkling", "Contemporary Classics"], ["Cosmopolitan", "Lemon vodka", "Cranberry juice", "Cointreau", "All Day", "Contemporary Classics"], ["Cuba Libre", "White rum", "Cola", "Lime juice", "Longdrink", "Contemporary Classics"], ["French 75", "Champagne", "Gin", "Lemon juice", "Sparkling", "Contemporary Classics"], ["French Connection", "Cognac", "Amaretto", "N/A", "After Dinner", "Contemporary Classics"], ["God Father", "Scotch", "Amaretto", "N/A", "After Dinner", "Contemporary Classics"], ["God Mother", "Vodka", "Amaretto", "N/A", "After Dinner", "Contemporary Classics"], ["Golden Dream", "Galliano", "Triple sec", "Orange juice", "After Dinner", "Contemporary Classics"], ["Grasshopper", "Crème de cacao", "Crème de menthe", "Cream", "After Dinner", "Contemporary Classics"], ["Harvey Wallbanger", "Vodka", "Orange juice", "Galliano", "All Day", "Contemporary Classics"], ["Hemingway Special", "White rum", "Grapefruit juice", "Maraschino", "All Day", "Contemporary Classics"], ["Horses Neck", "Brandy", "Ginger ale", "Angostura bitters", "Longdrink", "Contemporary Classics"], ["Irish Coffee", "Irish whiskey", "Coffee", "Cream", "Hot", "Contemporary Classics"], ["Kir", "Dry white wine", "Crème de cassis", "N/A", "Before Dinner", "Contemporary Classics"], ["Long Island Iced Tea", "Gin", "Tequila", "Vodka", "Longdrink", "Contemporary Classics"], ["Mai Tai", "White rum", "Dark rum", "Orgeat syrup", "Longdrink", "Contemporary Classics"], ["Margarita", "Tequila", "Cointreau", "Lime juice", "All Day", "Contemporary Classics"], ["Mimosa", "Champagne", "Orange juice", "N/A", "Sparkling", "Contemporary Classics"], ["Mint Julep", "Bourbon whiskey", "Mint sprigs", "Powdered sugar", "Longdrink", "Contemporary Classics"], ["Mojito", "White Cuban rum", "Lime juice", "Mint sprigs", "Longdrink", "Contemporary Classics"], ["Moscow Mule", "Vodka", "Ginger beer", "Lime juice", "Longdrink", "Contemporary Classics"], ["Pina Colada", "White rum", "Pineapple juice", "Coconut cream", "Longdrink", "Contemporary Classics"], ["Rose", "Dry vermouth", "Kirsch", "Strawberry syrup", "N/A", "Contemporary Classics"], ["Sea Breeze", "Vodka", "Cranberry juice", "Grapefruit juice", "Longdrink", "Contemporary Classics"], ["Sex on the Beach", "Vodka", "Peach schnapps", "Cranberry juice", "Longdrink", "Contemporary Classics"], ["Singapore Sling", "Gin", "Pineapple juice", "Cherry liqueur", "Longdrink", "Contemporary Classics"], ["Tequila Sunrise", "Tequila", "Orange juice", "Grenadine", "Longdrink", "Contemporary Classics"], ["B52", "Kahlua", "Baileys Irish cream", "Grand marnier", "After Dinner", "New Era Drinks"], ["Barracuda", "Gold rum", "Pineapple juice", "Galliano", "Sparkling", "New Era Drinks"], ["Bramble", "Gin", "Blackberry liqueur", "Lemon juice", "All Day", "New Era Drinks"], ["Dark N Stormy|Dark and Stormy", "Dark rum", "Ginger beer", "N/A", "Longdrink", "New Era Drinks"], ["Dirty Martini", "Vodka", "Dry vermouth", "Olive juice", "Before Dinner", "New Era Drinks"], ["Espresso Martini", "Vodka", "Kahlua", "Espresso", "After Dinner", "New Era Drinks"], ["French Martini", "Vodka", "Raspberry liqueur", "Pineapple juice", "Before Dinner", "New Era Drinks"], ["Kamikaze", "Vodka", "Triple sec", "Lime juice", "All Day", "New Era Drinks"], ["Lemon Drop", "Lemon vodka", "Triple sec", "Lemon juice", "All Day", "New Era Drinks"], ["Pisco Sour", "Pisco", "Lemon juice", "Egg white", "All Day", "New Era Drinks"], ["Russian Spring Punch", "Vodka", "Lemon juice", "Crème de cassis", "Sparkling", "New Era Drinks"], ["Spritz Veneziano", "Prosecco", "Aperol", "Soda water", "Sparkling", "New Era Drinks"], ["Tommys Margarita", "Tequila", "Lime juice", "Agave nectar", "All Day", "New Era Drinks"], ["Vampiro", "Tequila", "Tomato juice", "Orange juice", "N/A", "New Era Drinks"], ["Vesper", "Gin", "Vodka", "Lillet blonde", "Before Dinner", "New Era Drinks"], ["Yellow Bird", "White rum", "Galliano", "Triple sec", "All Day", "New Era Drinks"]];
var deck_constellations = [["Constellations", "Meaning"], ["Andromeda", "Princess"], ["Antlia", "Air Pump"], ["Apus", "Bird of Paradise"], ["Aquarius", "Water Bearer"], ["Aquila", "Eagle"], ["Ara", "Altar"], ["Aries", "Ram"], ["Auriga", "Charioteer"], ["Bootes", "Herdsman"], ["Caelum", "Chisel"], ["Camelopardalis", "Giraffe"], ["Cancer", "Crab"], ["Canes Venatici", "Dogs"], ["Canis Major", "Dog"], ["Canis Minor", "Dog"], ["Capricornus", "Sea Goat"], ["Carina", "Keel"], ["Cassiopeia", "Queen"], ["Centaurus", "Centaur"], ["Cepheus", "King"], ["Cetus", "Whale"], ["Chamaeleon", "Lizard"], ["Circinus", "Compass"], ["Columba", "Dove"], ["Coma Berenices", "Hair"], ["Corona Australis", "Crown"], ["Corona Borealis", "Crown"], ["Corvus", "Crow"], ["Crater", "Cup"], ["Crux", "Cross"], ["Cygnus", "Swan"], ["Delphinus", "Dolphin"], ["Dorado", "Swordfish"], ["Draco", "Dragon"], ["Equuleus", "Horse"], ["Eridanus", "River"], ["Fornax", "Furnace"], ["Gemini", "Twins"], ["Grus", "Crane"], ["Hercules", "Demigod"], ["Horologium", "Clock"], ["Hydra", "Sea Serpent"], ["Hydrus", "Water Snake"], ["Indus", "Indian"], ["Lacerta", "Lizard"], ["Leo", "Lion"], ["Leo Minor", "Lion"], ["Lepus", "Hare"], ["Libra", "Scales"], ["Lupus", "Wolf"], ["Lynx", "Cat"], ["Lyra", "Harp"], ["Mensa", "Mountain"], ["Microscopium", "Microscope"], ["Monoceros", "Unicorn"], ["Musca", "Fly"], ["Norma", "Level"], ["Octans", "Octant"], ["Ophiuchus", "Serpent Holder"], ["Orion", "Hunter"], ["Pavo", "Peacock"], ["Pegasus", "Winged Horse"], ["Perseus", "Hero"], ["Phoenix", "Bird"], ["Pictor", "Easel"], ["Pisces", "Fish"], ["Piscis Austrinus", "Fish"], ["Puppis", "Stern"], ["Pyxis", "Compass"], ["Reticulum", "Net"], ["Sagitta", "Arrow"], ["Sagittarius", "Archer"], ["Scorpius", "Scorpion"], ["Sculptor", "Tools"], ["Scutum", "Shield"], ["Serpens", "Serpent"], ["Sextans", "Sextant"], ["Taurus", "Bull"], ["Telescopium", "Telescope"], ["Triangulum", "Triangle"], ["Triangulum Australe", "Triangle"], ["Tucana", "Toucan"], ["Ursa Major", "Bear"], ["Ursa Minor", "Bear"], ["Vela", "Sail"], ["Virgo", "Virgin"], ["Volans", "Flying Fish"], ["Vulpecula", "Fox"]];
var deck_countries = [["Country", "Continent", "Currency", "Capital"], ["Afghanistan", "Asia", "Afghani", "Kabul"], ["Albania", "Europe", "Lek", "Tirana"], ["Algeria", "Africa", "Dinar", "Algiers"], ["Andorra", "Europe", "Euro", "Andorra la Vella"], ["Angola", "Africa", "Kwanza", "Luanda"], ["Antigua and Barbuda", "N. America", "Dollar", "St. John's"], ["Argentina", "S. America", "Peso", "Buenos Aires"], ["Armenia", "Asia", "Dram", "Yerevan"], ["Australia", "Oceania", "Dollar", "Canberra"], ["Austria", "Europe", "Euro", "Vienna"], ["Azerbaijan", "Asia", "Manat", "Baku"], ["Bahamas", "N. America", "Dollar", "Nassau"], ["Bahrain", "Asia", "Dinar", "Manama"], ["Bangladesh", "Asia", "Taka", "Dhaka"], ["Barbados", "N. America", "Dollar", "Bridgetown"], ["Belarus", "Europe", "Ruble", "Minsk"], ["Belgium", "Europe", "Euro", "Brussels"], ["Belize", "N. America", "Dollar", "Belmopan"], ["Benin", "Africa", "Franc", "Porto Novo"], ["Bhutan", "Asia", "Ngultrum", "Thimphu"], ["Bolivia", "S. America", "Boliviano", "Sucre"], ["Bosnia and Herzegovina", "Europe", "Mark", "Sarajevo"], ["Botswana", "Africa", "Pula", "Gaborone"], ["Brazil", "S. America", "Real", "Brasilia"], ["Brunei", "Asia", "Dollar", "Bandar Seri Begawan"], ["Bulgaria", "Europe", "Lev", "Sofia"], ["Burkina Faso", "Africa", "Franc", "Ouagadougou"], ["Burundi", "Africa", "Franc", "Bujumbura"], ["Cambodia", "Asia", "Riel", "Phnom Penh"], ["Cameroon", "Africa", "Franc", "Yaounde"], ["Canada", "N. America", "Dollar", "Ottawa"], ["Cape Verde", "Africa", "Escudo", "Praia"], ["Central African Republic|CAR", "Africa", "Franc", "Bangui"], ["Chad", "Africa", "Franc", "N'Djamena"], ["Chile", "S. America", "Peso", "Santiago"], ["China", "Asia", "Yuan", "Beijing"], ["Colombia", "S. America", "Peso", "Bogota"], ["Comoros", "Africa", "Franc", "Moroni"], ["Costa Rica", "N. America", "Colon", "San Jose"], ["Croatia", "Europe", "Kuna", "Zagreb"], ["Cuba", "N. America", "Peso", "Havana"], ["Cyprus", "Europe", "Pound", "Nicosia"], ["Czech Republic", "Europe", "Koruna", "Prague"], ["Democratic Republic of the Congo|DRC", "Africa", "Franc", "Kinshasa"], ["Denmark", "Europe", "Krone", "Copenhagen"], ["Djibouti", "Africa", "Franc", "Djibouti"], ["Dominica", "N. America", "Dollar", "Roseau"], ["Dominican Republic", "N. America", "Peso", "Santo Domingo"], ["Ecuador", "S. America", "Dollar", "Quito"], ["Egypt", "Africa", "Pound", "Cairo"], ["El Salvador", "N. America", "Colon", "San Salvador"], ["Equatorial Guinea", "Africa", "Franc", "Malabo"], ["Eritrea", "Africa", "Nakfa", "Asmara"], ["Estonia", "Europe", "Euro", "Tallinn"], ["Ethiopia", "Africa", "Birr", "Addis Ababa"], ["Fiji", "Oceania", "Dollar", "Suva"], ["Finland", "Europe", "Euro", "Helsinki"], ["France", "Europe", "Euro", "Paris"], ["Gabon", "Africa", "Franc", "Libreville"], ["Gambia", "Africa", "Dalasi", "Banjul"], ["Georgia", "Asia", "Lari", "Tbilisi"], ["Germany", "Europe", "Euro", "Berlin"], ["Ghana", "Africa", "Cedi", "Accra"], ["Grenada", "N. America", "Dollar", "St. George's"], ["Greece", "Europe", "Euro", "Athens"], ["Guatemala", "N. America", "Quetzal", "Guatemala City"], ["Guinea", "Africa", "Franc", "Conakry"], ["Guinea Bissau", "Africa", "Peso", "Bissau"], ["Guyana", "S. America", "Dollar", "Georgetown"], ["Haiti", "N. America", "Gourde", "Port-au-Prince"], ["Honduras", "N. America", "Lempira", "Tegucigalpa"], ["Hungary", "Europe", "Forint", "Budapest"], ["Iceland", "Europe", "Krona", "Reykjaik"], ["India", "Asia", "Rupee", "New Delhi"], ["Indonesia", "Asia", "Rupiah", "Jakarta"], ["Iran", "Asia", "Rial", "Tehran"], ["Iraq", "Asia", "Dinar", "Baghdad"], ["Ireland", "Europe", "Euro", "Dublin"], ["Israel", "Asia", "Shekel", "Jerusalem"], ["Italy", "Europe", "Euro", "Rome"], ["Ivory Coast|Cote dIvoire", "Africa", "Franc", "Yamoussoukro"], ["Jamaica", "N. America", "Dollar", "Kingston"], ["Japan", "Asia", "Yen", "Tokyo"], ["Jordan", "Asia", "Dinar", "Amman"], ["Kazakhstan", "Asia", "Tenge", "Astana"], ["Kenya", "Africa", "Shilling", "Nairobi"], ["Kiribati", "Oceania", "Dollar", "Tarawa"], ["Kosovo", "Europe", "Euro", "Pristina"], ["Kuwait", "Asia", "Dinar", "Kuwait City"], ["Kyrgyzstan", "Asia", "Som", "Bishkek"], ["Laos", "Asia", "Kip", "Vientiane"], ["Latvia", "Europe", "Euro", "Riga"], ["Lebanon", "Asia", "Pound", "Beirut"], ["Lesotho", "Africa", "Loti", "Maseru"], ["Liberia", "Africa", "Dollar", "Monrovia"], ["Libya", "Africa", "Dinar", "Tripoli"], ["Liechtenstein", "Europe", "Franc", "Vaduz"], ["Lithuania", "Europe", "Litas", "Vilnius"], ["Luxembourg", "Europe", "Euro", "Luxembourg"], ["Macedonia", "Europe", "Denar", "Skopje"], ["Madagascar", "Africa", "Ariary", "Antananarivo"], ["Malawi", "Africa", "Kwacha", "Lilongwe"], ["Malaysia", "Asia", "Ringgit", "Kuala Lumpur"], ["Maldives", "Asia", "Rufiyaa", "Male"], ["Mali", "Africa", "Franc", "Bamako"], ["Malta", "Europe", "Euro", "Valletta"], ["Marshall Islands", "Oceania", "Dollar", "Majuro"], ["Mauritania", "Africa", "Ouguiya", "Nouakchott"], ["Mauritius", "Africa", "Rupee", "Port Louis"], ["Mexico", "N. America", "Peso", "Mexico City"], ["Micronesia|Federated States of Micronesia", "Oceania", "Dollar", "Palikir"], ["Moldova", "Europe", "Leu", "Chisinau"], ["Monaco", "Europe", "Euro", "Monaco"], ["Mongolia", "Asia", "Tugrik", "Ulaanbaatar"], ["Montenegro", "Europe", "Euro", "Podgorica"], ["Morocco", "Africa", "Dirham", "Rabat"], ["Mozambique", "Africa", "Metical", "Maputo"], ["Myanmar|Burma", "As", "Kyat", "Naypyidaw"], ["Namibia", "Africa", "Dollar", "Windhoek"], ["Nauru", "Oceania", "Dollar", "Yaren"], ["Nepal", "Asia", "Rupee", "Kathmandu"], ["Netherlands", "Europe", "Euro", "Amsterdam"], ["New Zealand", "Oceania", "Dollar", "Wellington"], ["Nicaragua", "N. America", "Oro", "Managua"], ["Niger", "Africa", "Franc", "Niamey"], ["Nigeria", "Africa", "Naira", "Abuja"], ["North Korea", "Asia", "Won", "Pyongyang"], ["Norway", "Europe", "Krone", "Oslo"], ["Oman", "Asia", "Rial", "Muscat"], ["Pakistan", "Asia", "Rupee", "Islamabad"], ["Palau", "Oceania", "Dollar", "Melekeok"], ["Palestine", "Asia", "Shekel", "East Jerusalem"], ["Panama", "N. America", "Balboa", "Panama City"], ["Papua New Guinea", "Oceania", "Kina", "Port Moresby"], ["Paraguay", "S. America", "Guarani", "Asuncion"], ["Peru", "S. America", "Sol", "Lima"], ["Philippines", "Asia", "Peso", "Manila"], ["Poland", "Europe", "Zloty", "Warsaw"], ["Portugal", "Europe", "Euro", "Lisbon"], ["Qatar", "Asia", "Rial", "Doha"], ["Republic of the Congo", "Africa", "Franc", "Brazzaville"], ["Romania", "Europe", "Reu", "Bucharest"], ["Russia", "Europe", "Ruble", "Moscow"], ["Rwanda", "Africa", "Franc", "Kigali"], ["Saint Kitts and Nevis", "N. America", "Dollar", "Basseterre"], ["Saint Lucia", "N. America", "Dollar", "Castries"], ["Saint Vincent and the Grenadines", "N. America", "Dollar", "Kingstown"], ["Samoa", "Oceania", "Tala", "Apia"], ["San Marino", "Europe", "Euro", "San Marino"], ["Sao Tome and Principe", "Africa", "Dobra", "Sao Tome"], ["Saudi Arabia", "Asia", "Riyal", "Riyadh"], ["Senegal", "Africa", "Franc", "Dakar"], ["Serbia", "Europe", "Dinar", "Belgrade"], ["Seychelles", "Africa", "Rupee", "Victoria"], ["Sierra Leone", "Africa", "Leone", "Freetown"], ["Singapore", "Asia", "Dollar", "Singapore"], ["Slovakia", "Europe", "Euro", "Bratislava"], ["Slovenia", "Europe", "Euro", "Ljubljana"], ["Solomon Islands", "Oceania", "Dollar", "Honiara"], ["Somalia", "Africa", "Shilling", "Mogadishu"], ["South Africa", "Africa", "Rand", "Pretoria"], ["South Korea", "Asia", "Won", "Seoul"], ["South Sudan", "Africa", "Pound", "Juba"], ["Spain", "Europe", "Euro", "Madrid"], ["Sri Lanka", "Asia", "Rupee", "Sri Jayawardenapura Kotte"], ["Sudan", "Africa", "Pound", "Khartoum"], ["Suriname", "S. America", "Dollar", "Paramaribo"], ["Swaziland", "Africa", "Lilangeni", "Mbabane"], ["Sweden", "Europe", "Krona", "Stockholm"], ["Switzerland", "Europe", "Franc", "Bern"], ["Syria", "Asia", "Pound", "Damascus"], ["Taiwan", "Asia", "Dollar", "Taipei"], ["Tajikistan", "Asia", "Somoni", "Dushanbe"], ["Tanzania", "Africa", "Shilling", "Dodoma"], ["Thailand", "Asia", "Baht", "Bangkok"], ["Timor Leste|East Timor", "Oceania", "Dollar", "Dili"], ["Togo", "Africa", "Franc", "Lome"], ["Tonga", "Oceania", "Pa'anga", "Nukualofa"], ["Trinidad and Tobago", "N. America", "Dollar", "Port of Spain"], ["Tunisia", "Africa", "Dinar", "Tunis"], ["Turkey", "Asia", "Lira", "Ankara"], ["Turkmenistan", "Asia", "Manat", "Ashgabat"], ["Tuvalu", "Oceania", "Dollar", "Funafuti"], ["Uganda", "Africa", "Shilling", "Kampala"], ["Ukraine", "Europe", "Hryvnia", "Kiev"], ["United Arab Emirates|UAE", "Asia", "Dirham", "Abu Dhabi"], ["United Kingdom|UK", "Europe", "Pound", "London"], ["United States|USA", "N. America", "Dollar", "Washington D.C."], ["Uruguay", "S. America", "Peso", "Montevideo"], ["Uzbekistan", "Asia", "Sum", "Tashkent"], ["Vanuatu", "Oceania", "Vatu", "Port Vila"], ["Vatican City", "Europe", "Euro", "Vatican City"], ["Venezuela", "S. America", "Bolivar", "Caracas"], ["Vietnam", "Asia", "Dong", "Hanoi"], ["Yemen", "Asia", "Rial", "Sana'a"], ["Zambia", "Africa", "Kwacha", "Lusaka"], ["Zimbabwe", "Africa", "Dollar", "Harare"]];
var deck_crayola = [["Crayola Colors", "Box Size Debut", "RGB"], ["Almond", "120", "239-219-197"], ["Antique Brass|Brass", "120", "205-149-117"], ["Apricot", "24", "253-217-181"], ["Aquamarine", "120", "120-219-226"], ["Asparagus", "64", "135-169-107"], ["Atomic Tangerine|Tangerine", "96", "255-164-116"], ["Banana Mania|Banana", "120", "250-231-181"], ["Beaver", "120", "159-129-112"], ["Bittersweet", "64", "253-124-110"], ["Black", "8", "35-35-35"], ["Blue", "8", "173-173-214"], ["Blue Bell", "120", "25-158-189"], ["Blue Green", "16", "31-117-254"], ["Blue Violet", "16", "115-102-189"], ["Blush", "120", "222-93-131"], ["Brick Red|Brick", "64", "203-65-84"], ["Brown", "8", "180-103-77"], ["Burnt Orange", "64", "255-127-73"], ["Burnt Sienna", "48", "234-126-93"], ["Cadet Blue|Cadet", "32", "176-183-198"], ["Canary", "120", "255-255-159"], ["Caribbean Green", "120", "28-211-162"], ["Carnation Pink|Carnation", "16", "255-170-204"], ["Cerise", "96", "221-68-146"], ["Cerulean", "24", "29-172-214"], ["Chestnut", "32", "188-93-88"], ["Copper", "96", "221-148-117"], ["Cornflower", "48", "154-206-235"], ["Cotton Candy", "120", "255-188-217"], ["Dandelion", "24", "253-219-109"], ["Denim", "96", "43-108-196"], ["Desert Sand|Desert|Sand", "120", "239-205-184"], ["Eggplant", "120", "110-81-96"], ["Electric Lime|Lime", "96", "29-249-20"], ["Fern", "120", "113-188-120"], ["Forest Green|Forest", "64", "109-174-129"], ["Fuchsia", "96", "195-100-197"], ["Fuzzy Wuzzy Brown|Fuzzy Wuzzy|Teddy Bear", "120", "204-102-102"], ["Gold", "64", "231-198-151"], ["Goldenrod", "48", "255-217-117"], ["Granny Smith Apple|Apple|Granny Smith", "48", "168-228-160"], ["Gray|Grey", "24", "149-145-140"], ["Green", "8", "28-172-120"], ["Green Yellow", "24", "240-232-145"], ["Hot Magenta", "96", "255-29-206"], ["Inch Worm|Worm", "96", "178-236-93"], ["Indigo", "24", "93-118-203"], ["Jazzberry Jam|Jam", "96", "202-55-103"], ["Jungle Green|Jungle", "96", "59-176-143"], ["Laser Lemon|Lemon", "96", "253-252-116"], ["Lavender", "48", "252-180-213"], ["Macaroni and Cheese|Cheese", "48", "255-189-136"], ["Magenta", "64", "246-100-175"], ["Mahogany", "48", "205-74-74"], ["Manatee", "120", "151-154-170"], ["Mango Tango|Mango", "96", "255-130-67"], ["Maroon", "96", "200-56-90"], ["Mauvelous|Mauve", "48", "239-152-170"], ["Melon", "32", "253-188-180"], ["Midnight Blue|Midnight", "96", "26-72-118"], ["Mountain Meadow|Meadow", "120", "48-186-143"], ["Navy Blue|Navy", "96", "25-116-210"], ["Neon Carrot|Carrot", "96", "255-163-67"], ["Olive Green|Olive", "48", "186-184-108"], ["Orange", "8", "255-117-56"], ["Orchid", "64", "230-168-215"], ["Outer Space", "120", "65-74-76"], ["Outrageous Orange", "96", "255-110-74"], ["Pacific Blue|Pacific", "64", "28-169-201"], ["Peach", "32", "255-207-171"], ["Periwinkle", "64", "197-208-230"], ["Piggy Pink|Pig", "120", "253-215-228"], ["Pine Green|Pine", "96", "21-128-120"], ["Pink Flamingo|Flamingo", "120", "252-116-253"], ["Pink Sherbet|Sherbet", "120", "247-128-161"], ["Plum", "64", "142-69-133"], ["Purple Heart", "120", "116-66-200"], ["Purple Mountains Majesty", "48", "157-129-186"], ["Purple Pizzazz|Pizzazz", "96", "255-29-206"], ["Radical Red|Radical", "96", "255-73-107"], ["Raw Sienna|Sienna", "48", "214-138-89"], ["Razzle Dazzle Rose|Rose", "96", "255-72-208"], ["Razzmatazz|Raspberry", "96", "227-37-107"], ["Red", "8", "238-32-77"], ["Red Orange", "16", "255-83-73"], ["Red Violet", "16", "192-68-143"], ["Robin Egg Blue|Robin Egg", "64", "31-206-203"], ["Royal Purple|Royal", "96", "120-81-169"], ["Salmon", "48", "255-155-170"], ["Scarlet", "24", "242-40-71"], ["Screamin Green|Screaming Green", "96", "118-255-122"], ["Sea Green", "48", "159-226-191"], ["Sepia", "48", "165-105-79"], ["Shadow", "120", "138-121-93"], ["Shamrock", "96", "69-206-162"], ["Shocking Pink|Shocking", "96", "251-126-253"], ["Silver", "64", "205-197-194"], ["Sky Blue", "32", "128-218-235"], ["Spring Green|Spring", "48", "236-234-190"], ["Sunglow", "96", "255-207-72"], ["Sunset Orange|Sunset", "120", "253-94-83"], ["Tan", "32", "250-167-108"], ["Tickle Me Pink|Tickle Me", "64", "252-137-172"], ["Timberwolf", "32", "219-215-210"], ["Tropical Rain Forest|Tropical", "96", "23-128-109"], ["Tumbleweed", "48", "222-170-136"], ["Turquoise Blue|Turquoise", "64", "119-221-231"], ["Unmellow Yellow|Mellow Yellow", "96", "253-252-116"], ["Violet", "8", "146-110-174"], ["Violet Red", "24", "247-83-148"], ["Vivid Tangerine|Tangerine", "96", "255-160-137"], ["Vivid Violet", "120", "143-80-157"], ["White", "16", "237-237-237"], ["Wild Blue Yonder|Blue Yonder|Yonder", "96", "162-173-208"], ["Wild Strawberry|Strawberry", "64", "255-67-164"], ["Wild Watermelon|Watermelon", "96", "252-108-133"], ["Wisteria", "32", "205-164-222"], ["Yellow", "8", "252-232-131"], ["Yellow Green", "16", "197-227-132"], ["Yellow Orange", "16", "255-182-83"]];
var deck_disney = ["Snow White and the Seven Dwarfs", "Pinocchio", "Fantasia", "Dumbo", "Bambi", "Saludos Amigos", "The Three Caballeros", "Make Mine Music", "Fun and Fancy Free", "Melody Time", "The Adventures of Ichabod and Mr Toad", "Cinderella", "Alice in Wonderland", "Peter Pan", "Lady and the Tramp", "Sleeping Beauty", "One Hundred and One Dalmatians", "The Sword in the Stone", "The Jungle Book", "The Aristocats", "Robin Hood", "The Many Adventures of Winnie the Pooh", "The Rescuers", "The Fox and the Hound", "The Black Cauldron", "The Great Mouse Detective", "Oliver and Company", "The Little Mermaid", "The Rescuers Down Under", "Beauty and the Beast", "Aladdin", "The Lion King", "Pocahontas", "The Hunchback of Notre Dame", "Hercules", "Mulan", "Tarzan", "Fantasia 2000", "Dinosaur", "The Emperors New Groove", "Atlantis", "Lilo and Stitch", "Treasure Planet", "Brother Bear", "Home on the Range", "Chicken Little", "The Wild", "Meet the Robinsons", "Bolt", "The Princess and the Frog", "Tangled", "Winnie the Pooh", "Wreck It Ralph", "Frozen", "Big Hero 6", "Zootopia", "Moana"];
var deck_dow = ["3M", "American Express", "Apple", "Boeing", "Caterpillar", "Chevron", "Cisco Systems", "Coca Cola", "DowDuPont", "ExxonMobil", "General Electric", "Goldman Sachs", "Home Depot", "IBM", "Intel", "Johnson and Johnson", "JPMorgan Chase", "McDonalds", "Merck", "Microsoft", "Nike", "Pfizer", "Procter and Gamble", "Travelers", "United Technologies", "UnitedHealth Group", "Verizon", "Visa", "Walmart", "Walt Disney"];
var deck_elements = ["Actinium", "Aluminium", "Americium", "Antimony", "Argon", "Arsenic", "Astatine", "Barium", "Berkelium", "Beryllium", "Bismuth", "Bohrium", "Boron", "Bromine", "Cadmium", "Caesium", "Calcium", "Californium", "Carbon", "Cerium", "Chlorine", "Chromium", "Cobalt", "Copernicium", "Copper", "Curium", "Darmstadtium", "Dubnium", "Dysprosium", "Einsteinium", "Erbium", "Europium", "Fermium", "Flerovium", "Fluorine", "Francium", "Gadolinium", "Gallium", "Germanium", "Gold", "Hafnium", "Hassium", "Helium", "Holmium", "Hydrogen", "Indium", "Iodine", "Iridium", "Iron", "Krypton", "Lanthanum", "Lawrencium", "Lead", "Lithium", "Livermorium", "Lutetium", "Magnesium", "Manganese", "Meitnerium", "Mendelevium", "Mercury", "Molybdenum", "Moscovium", "Neodymium", "Neon", "Neptunium", "Nickel", "Nihonium", "Niobium", "Nitrogen", "Nobelium", "Oganesson", "Osmium", "Oxygen", "Palladium", "Phosphorus", "Platinum", "Plutonium", "Polonium", "Potassium", "Praseodymium", "Promethium", "Protactinium", "Radium", "Radon", "Rhenium", "Rhodium", "Roentgenium", "Rubidium", "Ruthenium", "Rutherfordium", "Samarium", "Scandium", "Seaborgium", "Selenium", "Silicon", "Silver", "Sodium", "Strontium", "Sulfur", "Tantalum", "Technetium", "Tellurium", "Tennessine", "Terbium", "Thallium", "Thorium", "Thulium", "Tin", "Titanium", "Tungsten", "Uranium", "Vanadium", "Xenon", "Ytterbium", "Yttrium", "Zinc", "Zirconium"];
var deck_emmy_comedy = [["Emmy-Comedy", "Year", "Network"], ["The Red Skelton Show", "1952", "NBC"], ["I Love Lucy", "1953-1954", "CBS"], ["Make Room for Daddy", "1955", "ABC"], ["The Phil Silvers Show", "1956-1958", "CBS"], ["The Jack Benny Program", "1959/1961", "CBS"], ["Art Carney Special", "1960", "NBC"], ["The Bob Newhart Show", "1962", "NBC"], ["The Dick Van Dyke Show", "1963-1964/1966", "CBS"], ["The Monkees", "1967", "NBC"], ["Get Smart", "1968-1969", "NBC"], ["My World and Welcome to It", "1970", "NBC"], ["All in the Family", "1971-1973/1978", "CBS"], ["MASH", "1974", "CBS"], ["The Mary Tyler Moore Show", "1975-1977", "CBS"], ["Taxi", "1979-1981", "ABC"], ["Barney Miller", "1982", "ABC"], ["Cheers", "1983-1984/1989/1991", "NBC"], ["The Cosby Show", "1985", "NBC"], ["The Golden Girls", "1986-1987", "NBC"], ["The Wonder Years", "1988", "ABC"], ["Murphy Brown", "1990/1992", "CBS"], ["Seinfeld", "1993", "NBC"], ["Frasier", "1994-1998", "NBC"], ["Ally McBeal", "1999", "FOX"], ["Will and Grace", "2000", "NBC"], ["Sex and the City", "2001", "HBO"], ["Friends", "2002", "NBC"], ["Everybody Loves Raymond", "2003/2005", "CBS"], ["Arrested Development", "2004", "FOX"], ["The Office", "2006", "NBC"], ["30 Rock", "2007-2009", "NBC"], ["Modern Family", "2010-2014", "ABC"], ["Veep", "2015-2017", "HBO"]];
var deck_emmy_drama = [["Emmy-Drama", "Year", "Network"], ["Pulitzer Prize Playhouse", "1951", "KECA-TV"], ["Studio One", "1952", "CBS"], ["Robert Mongomery Presents", "1953", "NBC"], ["The US Steel Hour", "1954", "ABC"], ["Producers Showcase", "1956", "NBC"], ["Playhouse 90", "1958-1960", "CBS"], ["Gunsmoke", "1958", "CBS"], ["Macbeth", "1961", "NBC"], ["The Defenders", "1962-1964", "CBS"], ["The Fugitive", "1966", "ABC"], ["Mission Impossible", "1967-1968", "CBS"], ["NET Playhouse", "1969", "NETwork"], ["Marcus Welby MD", "1970", "ABC"], ["The Bold Ones", "1971", "NBC"], ["Elizabeth R", "1972", "PBS"], ["The Waltons", "1973", "CBS"], ["Upstairs Downstairs", "1974-1975/1977", "PBS"], ["Police Story", "1976", "NBC"], ["The Rockford Files", "1978", "NBC"], ["Lou Grant", "1979-1980", "CBS"], ["Hill Street Blues", "1981-1984", "NBC"], ["Cagney and Lacey", "1985-1986", "CBS"], ["LA Law", "1987/1989-1991", "NBC"], ["Thirtysomething", "1988", "ABC"], ["Northern Exposure", "1992", "CBS"], ["Picket Fences", "1993-1994", "CBS"], ["NYPD Blue", "1995", "ABC"], ["ER", "1996", "NBC"], ["Law and Order", "1997", "NBC"], ["The Practice", "1998-1999", "ABC"], ["The West Wing", "2000-2003", "NBC"], ["The Sopranos", "2004/2007", "HBO"], ["Lost", "2005", "ABC"], ["24", "2006", "FOX"], ["Mad Men", "2008-2011", "AMC"], ["Homeland", "2012", "Showtime"], ["Breaking Bad", "2013-2014", "AMC"], ["Game of Thrones", "2015-2016", "HBO"], ["The Handmaids Tale", "2017", "Hulu"]];
var deck_gods_greek = ["Zeus", "Hera", "Poseidon", "Demeter", "Athena", "Apollo", "Artemis", "Ares", "Aphrodite", "Hephaestus", "Hermes", "Hestia", "Dionysus"];
var deck_gods_roman = ["Jupiter", "Juno", "Neptune", "Ceres", "Minerva", "Apollo", "Diana", "Mars", "Venus", "Vulcan", "Mercury", "Vesta", "Bacchus"];
var deck_bond = [["James Bond Movies", "Year", "Villain", "Bond Girl", "Actress", "Music", "Director", "Gun/Gadget", "M", "Q"], ["Dr No", "1962", "Dr. Julius No", "Honey Ryder", "Ursula Andress", "John Barry", "Terence Young", "Geiger counter", "Bernard Lee", "Peter Burton"], ["From Russia with Love", "1963", "Col. Rosa Klebb", "Tatiana Romanova", "Daniela Bianchi", "John Barry", "Terence Young", "Weapon briefcase", "Bernard Lee", "Desmond Llewelyn"], ["Goldfinger", "1964", "Auric Goldfinger", "Pussy Galore", "Honor Blackman", "Shirley Bassey", "Guy Hamilton", "Bladed bowler hat", "Bernard Lee", "Desmond Llewelyn"], ["Thunderball", "1965", "Emilio Largo", "Domino Derval", "Claudine Auger", "Tom Jones", "Terence Young", "Jetpack", "Bernard Lee", "Desmond Llewelyn"], ["You Only Live Twice", "1967", "Ernst Blofeld", "Kissy Suzuki", "Mie Hama", "Nancy Sinatra", "Lewis Gilbert", "Volcano hideout", "Bernard Lee", "Desmond Llewelyn"], ["On Her Majestys Secret Service", "1969", "Ernst Blofeld", "Teresa di Vicenzo", "Diana Riggs", "Louis Armstrong", "Peter R. Hunt", "Safecracker", "Bernard Lee", "Desmond Llewelyn"], ["Diamonds Are Forever", "1971", "Ernst Blofeld", "Tiffany Case", "Jill S. John", "Shirley Bassey", "Guy Hamilton", "Slotmachine ring", "Bernard Lee", "Desmond Llewelyn"], ["Live and Let Die", "1973", "Dr. Kananga", "Solitaire", "Jane Seymour", "Paul McCartney", "Guy Hamilton", "Shark gun", "Bernard Lee", "None"], ["The Man with the Golden Gun", "1974", "Francisco Scaramanga", "Mary Goodnight", "Britt Ekland", "Lulu", "Guy Hamilton", "Gold bullets", "Bernard Lee", "Desmond Llewelyn"], ["The Spy Who Loved Me", "1977", "Karl Stromberg", "Anya Amasova", "Barbara Bach", "Carly Simon", "Lewis Gilbert", "Ski pole gun", "Bernard Lee", "Desmond Llewelyn"], ["Moonraker", "1979", "Hugo Drax", "Holly Goodhead", "Lois Chiles", "Shirley Bassey", "Lewis Gilbert", "Metal teeth", "Bernard Lee", "Desmond Llewelyn"], ["For Your Eyes Only", "1981", "Aristotle Kristatos", "Melina Havelock", "Carole Bouquet", "Sheena Easton", "John Glen", "Crossbow", "None", "Desmond Llewelyn"], ["Octopussy", "1983", "Gen. Orlov", "Octopussy", "Maud Adams", "Rita Coolidge", "John Glen", "Crocodile sub", "Robert Brown", "Desmond Llewelyn"], ["Never Say Never Again", "1983", "Maximillian Largo", "Domino Petachi", "Kim Basinger", "Lani Hall", "Irvin Kershner", "Pen gun", "Edward Fox", "Alec McCowen"], ["A View to a Kill", "1985", "Max Zorin", "Stacey Sutton", "Grace Jones", "Duran Duran", "John Glen", "Walking cane", "Robert Brown", "Desmond Llewelyn"], ["The Living Daylights", "1987", "Brad Whitaker", "Kara Milovy", "Maryam d'Abo", "A-ha", "John Glen", "Cello case", "Robert Brown", "Desmond Llewelyn"], ["Licence to Kill", "1989", "Franz Sanchez", "Pam Bouvier", "Carey Lowell", "Gladys Knight", "John Glen", "Explosive toothpaste", "Robert Brown", "Desmond Llewelyn"], ["Goldeneye", "1995", "Alec Trevelyan", "Natalya Simonova", "Famke Janssen", "Tina Turner", "Martin Campbell", "Explosive pen", "Judi Dench", "Desmond Llewelyn"], ["Tomorrow Never Dies", "1997", "Elliot Carver", "Wai Lin", "Michelle Yeoh", "Sheryl Crow", "Roger Spottiswoode", "BMW remote control", "Judi Dench", "Desmond Llewelyn"], ["The World Is Not Enough", "1999", "Renard", "Chistmas Jones", "Denise Richards", "Garbage", "Michael Apted", "Bagpipe flamethrower", "Judi Dench", "Desmond Llewelyn"], ["Die Another Day", "2002", "Gustav Graves", "Jinx Johnson", "Halle Berry", "Madonna", "Lee Tamahori", "Surfboard", "Judi Dench", "John Cleese"], ["Casino Royale", "2006", "Le Chiffre", "Vesper Lynd", "Eva Green", "Chris Cornell", "Martin Campbell", "Explosive keychain", "Judi Dench", "None"], ["Quantum of Solace", "2008", "Dominic Greene", "Camille Montes", "Olga Kurylenko", "Jack White & Alicia Keys", "Marc Forster", "Face compositer", "Judi Dench", "None"], ["Skyfall", "2012", "Raoul Silva", "Eve Moneypenny", "Naomie Harris", "Adele", "Sam Mendes", "Lightbulb bomb", "Ralph Fiennes", "Ben Whishaw"], ["Spectre", "2015", "Franz Oberhauser", "Madeleine Swann", "Lea Seydoux", "Sam Smith", "Sam Mendes", "Dentist drill", "Ralph Fiennes", "Ben Whishaw"]];
var deck_mlb = [["MLB Teams", "League", "Division", "Location", "Stadium"], ["Orioles", "American", "East", "Baltimore", "Camden Yards"], ["Red Sox", "American", "East", "Boston", "Fenway Park"], ["White Sox", "American", "Central", "Chicago", "Guaranteed Rate Field"], ["Indians", "American", "Central", "Cleveland", "Progressive Field"], ["Tigers", "American", "Central", "Detroit", "Comerica Park"], ["Astros", "American", "West", "Houston", "Minute Maid Park"], ["Royals", "American", "Central", "Kansas City", "Kauffman Stadium"], ["Angels", "American", "West", "Los Angeles", "Angel Stadium"], ["Twins", "American", "Central", "Minnesota", "Target Field"], ["Yankees", "American", "East", "New York", "Yankee Stadium"], ["Athletics", "American", "West", "Oakland", "Oakland Coliseum"], ["Mariners", "American", "West", "Seattle", "Safeco Field"], ["Rays", "American", "East", "Tampa Bay", "Tropicana Field"], ["Rangers", "American", "West", "Texas", "Globe Life Park in Arlington"], ["Blue Jays", "American", "East", "Toronto", "Rogers Centre"], ["Diamondbacks", "National", "West", "Arizona", "Chase Field"], ["Braves", "National", "East", "Atlanta", "SunTrust Park"], ["Cubs", "National", "Central", "Chicago", "Wrigley Field"], ["Reds", "National", "Central", "Cincinnati", "Great American Ball Park"], ["Rockies", "National", "West", "Colorado", "Coors Field"], ["Dodgers", "National", "West", "Los Angeles", "Dodger Stadium"], ["Marlins", "National", "East", "Miami", "Marlins Park"], ["Brewers", "National", "Central", "Milwaukee", "Miller Park"], ["Mets", "National", "East", "New York", "Citi Field"], ["Phillies", "National", "East", "Philadelphia", "Citizens Bank Park"], ["Pirates", "National", "Central", "Pittsburgh", "PNC Park"], ["Padres", "National", "West", "San Diego", "Petco Park"], ["Giants", "National", "West", "San Francisco", "AT&T Park"], ["Cardinals", "National", "Central", "St. Louis", "Busch Stadium"], ["Nationals", "National", "East", "Washington", "Nationals Park"]];
var deck_nba = ["Celtics", "Nets", "Knicks", "76ers", "Raptors", "Bulls", "Caveliers", "Pistons", "Pacers", "Bucks", "Hawks", "Hornets", "Heat", "Magic", "Wizards", "Nuggets", "Timberwolves", "Thunder", "Blazers", "Jazz", "Warriors", "Clippers", "Lakers", "Suns", "Kings", "Mavericks", "Rockets", "Grizzlies", "Pelicans", "Spurs"];
var deck_nfl = ["Bills", "Dolphins", "Patriots", "Jets", "Ravens", "Bengals", "Browns", "Steelers", "Texans", "Colts", "Jaguars", "Titans", "Broncos", "Chiefs", "Chargers", "Raiders", "Cowboys", "Giants", "Eagles", "Redskins", "Bears", "Lions", "Packers", "Vikings", "Falcons", "Panthers", "Saints", "Buccaneers", "Cardinals", "Rams", "49ers", "Seahawks"];
var deck_nhl = ["Bruins", "Sabres", "Red Wings", "Panthers", "Canadiens", "Senators", "Lightning", "Maple Leafs", "Hurricans", "Blue Jackets", "Devils", "Islanders", "Rangers", "Flyers", "Penguins", "Capitals", "Blackhawks", "Avalanche", "Stars", "Wild", "Predators", "Blues", "Jets", "Ducks", "Coyotes", "Flames", "Oilers", "Kings", "Sharks", "Canucks", "Knights"];
var deck_novels_time = [["Novels-Time Magazine 100", "Year", "Author"], ["The Adventures of Augie March", "1953", "Saul Bellow"], ["All the Kings Men", "1946", "Robert Penn Warren"], ["American Pastoral", "1997", "Philip Roth"], ["An American Tragedy", "1925", "Theodore Dreiser"], ["Animal Farm", "1946", "George Orwell"], ["Appointment in Samarra", "1934", "John O'Hara"], ["Are You There God Its Me Margaret", "1970", "Judy Blume"], ["The Assistant", "1957", "Bernard Malamud"], ["At Swim Two Birds", "1938", "Flann O'Brien"], ["Atonement", "2002", "Ian McEwan"], ["Beloved", "1987", "Toni Morrison"], ["The Berlin Stories|Goodbye to Berlin|Mr Norris Changes Trains", "1946", "Christopher Isherwood"], ["The Big Sleep", "1939", "Raymond Chandler"], ["The Blind Assassin", "2000", "Margaret Atwood"], ["Blood Meridian", "1986", "Cormac McCarthy"], ["Brideshead Revisited", "1946", "Evelyn Waugh"], ["The Bridge of San Luis Rey", "1927", "Thornton Wilder"], ["Call it Sleep", "1935", "Henry Roth"], ["Catch 22", "1961", "Joseph Heller"], ["The Catcher in the Rye", "1951", "J.D. Salinger"], ["The Chronicles of Narnia", "1950", "C.S. Lewis"], ["A Clockwork Orange", "1963", "Anthony Burgess"], ["The Confessions of Nat Turner", "1967", "William Styron"], ["The Corrections", "2001", "Jonathan Franzen"], ["The Crying of Lot 49", "1966", "Thomas Pynchon"], ["A Dance to the Music of Time", "1951", "Anthony Powell"], ["The Day of the Locust", "1939", "Nathanael West"], ["Death Comes for the Archbishop", "1927", "Willa Cather"], ["A Death in the Family", "1958", "James Agee"], ["The Death of the Heart", "1958", "Elizabeth Bowen"], ["Deliverance", "1970", "James Dickey"], ["Dog Soldiers", "1974", "Robert Stone"], ["Falconer", "1977", "John Cheever"], ["The French Lieutenants Woman", "1969", "John Fowles"], ["Go Tell it on the Mountain", "1953", "James Baldwin"], ["The Golden Notebook", "1962", "Doris Lessing"], ["Gone With the Wind", "1936", "Margaret Mitchell"], ["The Grapes of Wrath", "1939", "John Steinbeck"], ["Gravitys Rainbow", "1973", "Thomas Pynchon"], ["The Great Gatsby", "1925", "F. Scott Fitzgerald"], ["A Handful of Dust", "1934", "Evelyn Waugh"], ["The Heart is a Lonely Hunter", "1940", "Carson McCullers"], ["The Heart of the Matter", "1948", "Graham Greene"], ["Herzog", "1964", "Saul Bellow"], ["A House for Mr Biswas", "1963", "V.S. Naipaul"], ["Housekeeping", "1981", "Marilynne Robinson"], ["I Claudius", "1934", "Robert Graves"], ["Infinite Jest", "1996", "David Foster Wallace"], ["Invisible Man", "1952", "Ralph Ellison"], ["Light in August", "1932", "William Faulkner"], ["Lolita", "1955", "Vladimir Nabokov"], ["Lord of the Flies", "1955", "William Golding"], ["The Lord of the Rings", "1954", "J.R.R. Tolkien"], ["Loving", "1945", "Henry Green"], ["Lucky Jim", "1954", "Kingsley Amis"], ["The Man Who Loved Children", "1940", "Christina Stead"], ["Midnights Children", "1981", "Salman Rushdie"], ["Money", "1984", "Martin Amis"], ["The Moviegoer", "1961", "Walker Percy"], ["Mrs Dalloway", "1925", "Virginia Woolf"], ["Naked Lunch", "1959", "William Burroughs"], ["Native Son", "1940", "Righard Wright"], ["Neuromancer", "1984", "William Gibson"], ["Never Let Me Go", "2005", "Kazuo Ishiguro"], ["1984", "1948", "George Orwell"], ["On the Road", "1957", "Jack Kerouac"], ["One Flew Over the Cuckoos Nest", "1962", "Ken Kesey"], ["The Painted Bird", "1965", "Jerzy Kosinski"], ["Pale Fire", "1962", "Vladimir Nabokov"], ["A Passage to India", "1924", "E.M. Forster"], ["Play It As It Lays", "1970", "Joan Didion"], ["Portnoy's Complaint", "1969", "Philip Roth"], ["Possession", "1990", "A.S. Byatt"], ["The Power and the Glory", "1939", "Graham Greene"], ["The Prime of Miss Jean Brodie", "1961", "Muriel Spark"], ["Rabbit Run", "1960", "John Updike"], ["Ragtime", "1975", "E.L. Doctorow"], ["The Recognitions", "1955", "William Gaddis"], ["Red Harvest", "1929", "Dashiell Hammett"], ["Revolutionary Road", "1961", "Richard Yates"], ["The Sheltering Sky", "1949", "Paul Bowles"], ["Slaughterhouse Five", "1969", "Kurt Vonnegut"], ["Snow Crash", "1992", "Neal Stephenson"], ["The Sot Weed Factor", "1960", "John Barth"], ["The Sound and the Fury", "1929", "William Faulkner"], ["The Sportswriter", "1986", "Richard Ford"], ["The Spy Who Came in from the Cold", "1964", "John le Carre"], ["The Sun Also Rises", "1926", "Ernest Hemingway"], ["Their Eyes Were Watching God", "1937", "Zora Neale Hurston"], ["Things Fall Apart", "1959", "Chinua Achebe"], ["To Kill a Mockingbird", "1960", "Harper Lee"], ["To the Lighthouse", "1927", "Virginia Woolf"], ["Tropic of Cancer", "1934", "Henry Miller"], ["Ubik", "1969", "Philip K. Dick"], ["Under the Net", "1954", "Iris Murdoch"], ["Under the Volcano", "1947", "Malcolm Lowry"], ["Watchmen", "1986", "Alan Moore and Dave Gibbons"], ["White Noise", "1985", "Don DeLillo"], ["White Teeth", "2000", "Zadie Smith"], ["Wide Sargasso Sea", "1966", "Jean Rhys"]];
var deck_olympic_hosts = [["Olympic Host Cities", "Season", "Year", "Country"], ["Albertville", "Winter", "1992", "France"], ["Amsterdam", "Summer", "1928", "Netherlands"], ["Antwerp", "Pre-split", "1920", "Belgium"], ["Athens", "Pre-split/Summer", "1896/2004", "Greece"], ["Atlanta", "Summer", "1996", "USA"], ["Barcelona", "Summer", "1992", "Spain"], ["Beijing", "Summer", "2008", "China"], ["Berlin", "Summer", "1936", "Germany"], ["Calgary", "Winter", "1988", "Canada"], ["Chamonix", "Winter", "1924", "France"], ["Cortina dAmpezzo", "Winter", "1956", "Italy"], ["Garmisch-Partenkirchen", "Winter", "1936", "Germany"], ["Grenoble", "Winter", "1968", "Frane"], ["Helsinki", "Summer", "1952", "Finland"], ["Innsbruck", "Winter", "1964/1976", "Austria"], ["Lake Placid", "Winter", "1932/1980", "USA"], ["Lillehammer", "Winter", "1994", "Norway"], ["London", "Pre-split/Summer", "1908/1948/2012", "UK"], ["Los Angeles", "Summer", "1932/1984", "USA"], ["Melbourne", "Summer", "1956", "Australia"], ["Mexico City", "Summer", "1968", "Mexico"], ["Montreal", "Summer", "1976", "Canada"], ["Moscow", "Summer", "1980", "Russia"], ["Munich", "Summer", "1972", "Germany"], ["Nagano", "Winter", "1998", "Japan"], ["Oslo", "Winter", "1952", "Norway"], ["Paris", "Pre-split/Summer", "1900/1924", "France"], ["Pyeongchang", "Winter", "2018", "South Korea"], ["Rio de Janeiro", "Summer", "2016", "Brazil"], ["Rome", "Summer", "1960", "Italy"], ["Salt Lake City", "Winter", "2002", "USA"], ["Sapporo", "Winter", "1972", "Japan"], ["Sarajevo", "Winter", "1984", "Bosnia and Herzegovnia"], ["Seoul", "Summer", "1988", "South Korea"], ["Sochi", "Winter", "2014", "Russia"], ["Squaw Valley", "Winter", "1960", "USA"], ["St Louis", "Pre-split", "1904", "USA"], ["St Moritz", "Winter", "1928/1948", "Switzerland"], ["Stockholm", "Pre-split", "1912", "Sweden"], ["Sydney", "Summer", "2000", "Austrialia"], ["Tokyo", "Summer", "1964", "Japan"], ["Turin", "Winter", "2006", "Italy"], ["Vancouver", "Winter", "2010", "Canada"]];
var deck_olympic_sports = ["3 on 3 basketball", "Alpine skiing", "Archery", "Artistic", "Athletics", "Badminton", "Baseball", "Basketball", "Beach volleyball", "Biathlon", "BMX freestyle", "BMX racing", "Bobsleigh", "Boxing", "Canoe Slalom", "Canoe Sprint", "Cross country skiing", "Curling", "Diving", "Equestrian dressage", "Equestrian eventing", "Equestrian jumping", "Fencing", "Field hockey", "Figure skating", "Football", "Freestyle skiing", "Freestyle wrestling", "Golf", "Greco Roman wrestling", "Handball", "Ice hockey", "Indoor volleyball", "Judo", "Karate", "Kayak Slalom", "Kayak Sprint", "Luge", "Marathon swimming", "Modern pentathlon", "Mountain biking", "Nordic combined", "Rhythmic", "Road cycling", "Rowing", "Rugby sevens", "Sailing", "Shooting", "Short track speed skating", "Skateboarding", "Skeleton", "Ski jumping", "Snowboarding", "Softball", "Speed skating", "Sport climbing", "Surfing", "Swimming", "Synchronized swimming", "Table tennis", "Taekwondo", "Tennis", "Track cycling", "Trampoline", "Triathlon", "Water polo", "Weightlifting"];
var deck_oscar_picture = ["All About Eve", "All the Kings Men", "All Quiet on the Western Front", "Amadeus", "A Man for All Seasons", "American Beauty", "An American in Paris", "Annie Hall", "The Apartment", "Argo", "Around the World in 80 Days", "The Artist", "A Beautiful Mind", "Ben Hur", "The Best Years of Our Lives", "Birdman", "Braveheart", "The Bridge on the River Kwai", "The Broadway Melody", "Casablanca", "Cavalcade", "Chariots of Fire", "Chicago", "Cimarron", "Crash", "Dances with Wolves", "The Deer Hunter", "The Departed", "Driving Miss Daisy", "The English Patient", "Forrest Gump", "The French Connection", "From Here to Eternity", "Gandhi", "Gentlemans Agreement", "Gigi", "Gladiator", "The Godfather Part II", "The Godfather", "Going My Way", "Gone with the Wind", "Grand Hotel", "The Greatest Show on Earth", "The Great Ziegfeld", "Hamlet", "How Green Was My Valley", "The Hurt Locker", "In the Heat of the Night", "It Happened One Night", "The Kings Speech", "Kramer vs Kramer", "The Last Emperor", "Lawrence of Arabia", "The Life of Emile Zola", "The Lord of the Rings The Return of the King", "The Lost Weekend", "Marty", "Midnight Cowboy", "Million Dollar Baby", "Mrs. Miniver", "Moonlight", "Mutiny on the Bounty", "My Fair Lady", "Oliver", "No Country for Old Men", "One Flew Over the Cuckoos Nest", "On the Waterfront", "Ordinary People", "Out of Africa", "Patton", "Platoon", "Rain Man", "Rebecca", "Rocky", "Schindlers List", "Shakespeare in Love", "The Silence of the Lambs", "Slumdog Millionaire", "The Sound of Music", "Spotlight", "The Sting", "Terms of Endearment", "Titanic", "Tom Jones", "12 Years a Slave", "Unforgiven", "West Side Story", "Wings", "You Cant Take It with You"];
var deck_pixar = [["Pixar Movies", "Year", "Top-Billed Actor"], ["Toy Story", "1995", "Tom Hanks"], ["A Bugs Life", "1998", "Dave Foley"], ["Toy Story 2", "1999", "Tom Hanks"], ["Monsters Inc", "2001", "John Goodman"], ["Finding Nemo", "2003", "Albert Brooks"], ["The Incredibles", "2004", "Craig T. Nelson"], ["Cars", "2006", "Owen Wilson"], ["Ratatouille", "2007", "Patton Oswalt"], ["WALLE", "2008", "Ben Burtt"], ["Up", "2009", "Ed Asner"], ["Toy Story 3", "2010", "Tom Hanks"], ["Cars 2", "2001", "Larry the Cable Guy"], ["Brave", "2012", "Kelly Macdonald"], ["Monsters University", "2013", "Billy Crystal"], ["Inside Out", "2015", "Amy Poehler"], ["The Good Dinosaur", "2015", "Jeffrey Wright"], ["Finding Dory", "2016", "Ellen DeGeneres"], ["Cars 3", "2017", "Owen Wilson"], ["Coco", "2017", "Anthony Gonzalez"]];
var deck_planets = [["Planets & Moons", "Classification", "Orbit Rank", "Orbits"], ["Mercury", "Planet", "1 of 8", "Sun"], ["Venus", "Planet", "2 of 8", "Sun"], ["Earth", "Planet", "3 of 8", "Sun"], ["Mars", "Planet", "4 of 8", "Sun"], ["Jupiter", "Planet", "5 of 8", "Sun"], ["Saturn", "Planet", "6 of 8", "Sun"], ["Uranus", "Planet", "7 of 8", "Sun"], ["Neptune", "Planet", "8 of 8", "Sun"], ["Ceres", "Dwarf Planet", "1 of 5(?)", "Sun"], ["Pluto", "Dwarf Planet", "2 of 5(?)", "Sun"], ["Haumea", "Dwarf Planet", "3 of 5(?)", "Sun"], ["Makemake", "Dwarf Planet", "4 of 5(?)", "Sun"], ["Eris", "Dwarf Planet", "5 of 5(?)", "Sun"], ["Moon", "Moon", "1 of 1", "Earth"], ["Phobos", "Moon", "1 of 2", "Mars"], ["Deimos", "Moon", "2 of 2", "Mars"], ["Ganymede", "Moon", "7 of 69", "Jupiter"], ["Callisto", "Moon", "8 of 69", "Jupiter"], ["Io", "Moon", "5 of 69", "Jupiter"], ["Europa", "Moon", "6 of 69", "Jupiter"], ["Titan", "Moon", "22 of 62", "Saturn"], ["Rhea", "Moon", "21 of 62", "Saturn"], ["Iapetus", "Moon", "24 of 62", "Saturn"], ["Dione", "Moon", "18 of 62", "Saturn"], ["Tethys", "Moon", "15 of 62", "Saturn"], ["Enceladus", "Moon", "14 of 62", "Saturn"], ["Mimas", "Moon", "10 of 62", "Saturn"], ["Hyperion", "Moon", "23 of 62", "Saturn"], ["Phoebe", "Moon", "27 of 62", "Saturn"], ["Titania", "Moon", "17 of 27", "Uranus"], ["Oberon", "Moon", "18 of 27", "Uranus"], ["Umbriel", "Moon", "16 of 27", "Uranus"], ["Ariel", "Moon", "15 of 27", "Uranus"], ["Miranda", "Moon", "14 of 27", "Uranus"], ["Triton", "Moon", "8 of 14", "Neptune"], ["Proteus", "Moon", "7 of 14", "Neptune"], ["Nereid", "Moon", "9 of 14", "Neptune"], ["Charon", "Moon", "1 of 5", "Pluto"], ["Nix", "Moon", "3 of 5", "Pluto"], ["Hydra", "Moon", "5 of 5", "Pluto"], ["Kerberos", "Moon", "4 of 5", "Pluto"], ["Styx", "Moon", "2 of 5", "Pluto"], ["Hiiaka", "Moon", "2 of 2", "Haumea"], ["Namaka", "Moon", "1 of 2", "Haumea"], ["Dysnomia", "Moon", "1 of 1", "Eris"]];
var deck_epl = ["Arsenal", "Bournemouth", "Brighton & Hove Albion", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Huddersfield Town", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle United", "Southhampton", "Stoke City", "Swansea City", "Tottenham Hotspur", "Watford", "West Bromwich Albion", "West Ham United"];
var deck_presidents = [["Presidents-US", "1st Year in Office", "First Name"], ["Adams", "1797", "John"], ["Adams", "1825", "John"], ["Arthur", "1881", "Chester"], ["Buchanan", "1857", "James"], ["Bush", "1989", "George"], ["Bush", "2001", "George"], ["Carter", "1977", "Jimmy"], ["Cleveland", "1885", "Grover"], ["Clinton", "1993", "Bill"], ["Coolidge", "1923", "Calvin"], ["Eisenhower", "1953", "Dwight"], ["Fillmore", "1850", "Millard"], ["Ford", "1974", "Gerald"], ["Garfield", "1881", "James"], ["Grant", "1869", "Ulysses"], ["Harding", "1921", "Warren"], ["Harrison", "1889", "Benjamin"], ["Harrison", "1841", "William"], ["Hayes", "1877", "Rutherford"], ["Hoover", "1929", "Herbert"], ["Jackson", "1829", "Andrew"], ["Jefferson", "1801", "Thomas"], ["Johnson", "1865", "Andrew"], ["Johnson", "1963", "Lyndon"], ["Kennedy", "1961", "John"], ["Lincoln", "1861", "Abraham"], ["Madison", "1809", "James"], ["McKinley", "1897", "William"], ["Monroe", "1817", "James"], ["Nixon", "1969", "Richard"], ["Obama", "2009", "Barack"], ["Pierce", "1853", "Franklin"], ["Reagan", "1981", "Ronald"], ["Roosevelt", "1933", "Franklin"], ["Roosevelt", "1901", "Theodore"], ["Taft", "1909", "William"], ["Taylor", "1849", "Zachary"], ["Truman", "1945", "Harry"], ["Trump", "2017", "Donald"], ["Tyler", "1841", "John"], ["Van Buren", "1837", "Martin"], ["Washington", "1789", "George"], ["Wilson", "1913", "Woodrow"]];
var deck_rivers = ["Amazon", "Nile", "Yangtze", "Mississippi", "Yenisei", "Yellow", "Ob", "Parana", "Congo", "Amur", "Lena", "Mekong", "Mackenzie", "Niger", "Brahmaputra", "Murray", "Tocantins", "Volga", "Indus", "Shatt al Arab", "Madeira", "Purus", "Yukon", "Sao Francisco", "Syr Darya", "Salween", "Saint Lawrence", "Rio Grande", "Lower Tunguska", "Danube"];
var deck_shakespeare = [["Shakespeare Plays", "Genre", "Year", "Character", "Quote"], ["Alls Well That Ends Well", "Comedy", "1602", "Bertram", "Love all, trust a few, do wrong to none"], ["Antony and Cleopatra", "Tragedy", "1606", "Octavius", "In time we hate that which we often fear"], ["As You Like It", "Comedy", "1599", "Rosalind", "All the world's a stage"], ["The Comedy of Errors", "Comedy", "1589", "Antipholus", "When fowls have no feathers and fish have no fin"], ["Coriolanus", "Tragedy", "1607", "Caius Marcius", "Nature teaches beasts to know their friends"], ["Cymbeline", "Comedy", "1609", "Imogen", "Hang there like a fruit, my soul, till the tree die"], ["Hamlet", "Tragedy", "1600", "Ophelia", "To be or not to be"], ["Henry IV Part I|Henry IV", "History", "1597", "Falstaff", "The better part of valour is discretion"], ["Henry IV Part II|Henry IV", "History", "1597", "Falstaff", "Uneasy lies the head that wears a crown"], ["Henry V", "History", "1598", "Bardolph", "Once more unto the breach"], ["Henry VI Part I|Henry VI", "History", "1591", "Humphrey", "Delays have dangerous ends"], ["Henry VI Part II|Henry VI", "History", "1591", "Humphrey", "The first thing we do, let's kill all the lawyers"], ["Henry VI Part III|Henry VI", "History", "1591", "Richard Plantagenet", "Suspicion always haunts the guilty mind"], ["Henry VIII", "History", "1612", "Wolsey", "Men's evil manners live in brass; their virtues we write in water"], ["Julius Caesar", "Tragedy", "1599", "Brutus", "Friends, Romans, countrymen"], ["King John", "History", "1596", "Eleanor", "Be great in act, as you have been in thought"], ["King Lear", "Tragedy", "1605", "Cordelia", "Sharper than a serpent's tooth it is to have a thankless child"], ["Loves Labours Lost|Love Labors Lost|Loves Labour Lost|Loves Labor Lost", "Comedy", "1594", "Ferdinand", "Beauty is bought by judgement of the eye"], ["Macbeth", "Tragedy", "1605", "Duncan", "Out, out damn spot"], ["Measure for Measure", "Comedy", "1604", "Angelo", "Some rise by sin, and some by virtue fall"], ["Merchant of Venice", "Comedy", "1596", "Shylock", "If you prick us, do we not bleed?"], ["Merry Wives of Windsor", "Comedy", "1600", "Falstaff", "The world's mine oyster"], ["Midsummer Nights Dream", "Comedy", "1595", "Oberon", "Lord, what fools these mortals be"], ["Much Ado About Nothing", "Comedy", "1598", "Beatrice", "Let me be that I am and seek not to alter me"], ["Othello", "Tragedy", "1604", "Iago", "Jealousy, It is the green-eyed monster"], ["Pericles", "Comedy", "1608", "Marina", "Few love to hear the sins they love to act"], ["Richard II", "History", "1595", "John of Gaunt", "I wasted time, and now doth time waste me"], ["Richard III", "History", "1592", "Queen Margaret", "My kingdom for a horse"], ["Romeo and Juliet", "Tragedy", "1594", "Mercutio", "A rose by any other name would smell as sweet"], ["Taming of the Shrew", "Comedy", "1593", "Katherina", "If I be waspish, best beware my sting"], ["Tempest", "Comedy", "1611", "Prospero", "We are such stuff as dreams are made on"], ["Timon of Athens", "Tragedy", "1607", "Alcibiades", "We have seen better days"], ["Titus Andronicus", "Tragedy", "1593", "Tamora", "Vengeance is in my heart, death in my hand"], ["Troilus and Cressida", "Comedy", "1601", "Agamemnon", "The common curse of mankind - folly and ignorance"], ["Twelfth Night", "Comedy", "1599", "Malvolio", "Some have greatness thrust upon them"], ["Two Gentleman of Verona", "Comedy", "1594", "Valentine", "They do not love that do not show their love"], ["The Two Noble Kinsmen", "Tragedy", "1613", "Palamon", "This world's a city full of straying streets"], ["The Winters Tale", "Comedy", "1610", "Leontes", "Exit, pursued by a bear"]];
var deck_sherlock = ["A Scandal in Bohemia", "The Redheaded League", "A Case of Identity", "The Boscombe Valley Mystery", "The Five Orange Pips", "The Man with the Twisted Lip", "The Blue Carbuncle", "The Speckled Band", "The Engineers Thumb", "The Noble Bachelor", "The Beryl Coronet", "The Copper Beeches", "Silver Blaze", "The Cardboard Box", "The Yellow Face", "The Stockbrokers Clerk", "The Gloria Scott", "The Musgrave Ritual", "The Reigate Puzzle", "The Crooked Man", "The Resident Patient", "The Greek Interpreter", "The Naval Treaty", "The Final Problem", "The Empty House", "The Norwood Builder", "The Solitary Cyclist", "The Priory School", "Black Peter", "Charles August Milverton", "The Six Napoleons", "The Three Students", "The Golden Pince Nez", "The Missing Three Quarter", "The Abbey Grange", "The Second Stain", "Wisteria Lodge", "The Red Circle", "The Bruce-Partington Plans", "The Dying Detective", "The Disappearance of Lady Frances Carfax", "The Devils Foot", "His Last Bow", "The Mazarin Stone", "The Problem of Thor Bridge", "The Creeping Man", "The Sussex Vampire", "The Three Garridebs", "The Illustrious Client", "The Three Gables", "The Blanched Soldier", "The Lion's Mane", "The Retired Colourman", "The Veiled Lodger", "Shoscombe Old Place", "A Study in Scarlet", "The Sign of the Four", "The Hound of the Baskervilles", "The Valley of Fear"];
var deck_si_prefixes = ["Yotta", "Zetta", "Exa", "Peta", "Tera", "Giga", "Mega", "Kilo", "Hecto", "Deca", "Deci", "Centi", "Milli", "Micro", "Nano", "Pico", "Femto", "Atto", "Zepto", "Yocto"];
var deck_states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
var deck_tony_musical = ["Kiss Me Kate", "South Pacific", "Guys and Dolls", "The King and I", "Wonderful Town", "Kismet", "The Pajama Game", "Damn Yankees", "My Fair Lady", "The Music Man", "Redhead", "The Sound of Music", "Bye Bye Birdie", "How to Succeed in Business Without Really Trying", "A Funny Thing Happened on the Way to the Forum", "Hello Dolly", "Fiddler on the Roof", "Man of La Mancha", "Cabaret", "Hallelujah Baby", "1776", "Applause", "Company", "Two Gentlemen of Verona", "A Little Night Music", "Raisin", "The Wiz", "A Chorus Line", "Annie", "Aint Misbehavin", "Sweeney Todd", "Evita", "42nd Street", "Nine", "Cats", "La Cage aux Folles", "Big River", "The Mystery of Edwin Drood", "Les Miserables", "The Phantom of the Opera", "Jerome Robbins Broadway", "City of Angels", "The Will Rogers Follies", "Crazy for You", "Kiss of the Spider Woman", "Passion", "Sunset Boulevard", "Rent", "Titanic", "The Lion King", "Fosse", "Contact", "The Producers", "Thoroughly Modern Millie", "Hairspray", "Avenue Q", "Spamalot", "Jersey Boys", "Spring Awakening", "In the Heights", "Billy Elliot", "Memphis", "The Book of Mormon", "Once", "Kinky Boots", "A Gentlemans Guide to Love and Murder", "Fun Home", "Hamilton", "Dear Evan Hansen"];
var deck_zodiac_c = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
var deck_zodiac_g = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

// This function runs at startup.
function MemorizerSetup() {


    // Create a deck of decks! With labels
    var deckCount = 0;
    //    deckArray[deckCount++] = new DeckObj(deck_afi_movies);
    deckArray[deckCount++] = new DeckObj(deck_alphabet_g);
    deckArray[deckCount++] = new DeckObj(deck_alphabet_p);
    //    deckArray[deckCount++] = new DeckObj(deck_anniversary);
    //    deckArray[deckCount++] = new DeckObj(deck_bible);
    //    deckArray[deckCount++] = new DeckObj(deck_birthstones);
    deckArray[deckCount++] = new DeckObj(deck_bones);
    //    deckArray[deckCount++] = new DeckObj(deck_capitals_us);
    //    deckArray[deckCount++] = new DeckObj(deck_capitals);
    deckArray[deckCount++] = new DeckObj(deck_cocktails);
    deckArray[deckCount++] = new DeckObj(deck_constellations);
    deckArray[deckCount++] = new DeckObj(deck_countries);
    deckArray[deckCount++] = new DeckObj(deck_crayola);
    //    deckArray[deckCount++] = new DeckObj(deck_disney);
    //    deckArray[deckCount++] = new DeckObj(deck_dow);
    //    deckArray[deckCount++] = new DeckObj(deck_elements);
    deckArray[deckCount++] = new DeckObj(deck_emmy_comedy);
    deckArray[deckCount++] = new DeckObj(deck_emmy_drama);
    //    deckArray[deckCount++] = new DeckObj(deck_gods_greek);
    //    deckArray[deckCount++] = new DeckObj(deck_gods_roman);
    deckArray[deckCount++] = new DeckObj(deck_bond);
    deckArray[deckCount++] = new DeckObj(deck_mlb);
    //    deckArray[deckCount++] = new DeckObj(deck_nba);
    //    deckArray[deckCount++] = new DeckObj(deck_nfl);
    //    deckArray[deckCount++] = new DeckObj(deck_nhl);
    deckArray[deckCount++] = new DeckObj(deck_novels_time);
    deckArray[deckCount++] = new DeckObj(deck_olympic_hosts);
    //    deckArray[deckCount++] = new DeckObj(deck_olympic_sports);
    //    deckArray[deckCount++] = new DeckObj(deck_oscar_picture);
    deckArray[deckCount++] = new DeckObj(deck_pixar);
    deckArray[deckCount++] = new DeckObj(deck_planets);
    //    deckArray[deckCount++] = new DeckObj(deck_epl);
    deckArray[deckCount++] = new DeckObj(deck_presidents);
    //    deckArray[deckCount++] = new DeckObj(deck_rivers);
    deckArray[deckCount++] = new DeckObj(deck_shakespeare);
    //    deckArray[deckCount++] = new DeckObj(deck_sherlock");
    //    deckArray[deckCount++] = new DeckObj(deck_si_prefixes);
    //    deckArray[deckCount++] = new DeckObj(deck_states);
    //    deckArray[deckCount++] = new DeckObj(deck_tony_musical);
    //    deckArray[deckCount++] = new DeckObj(deck_zodiac_c);
    //    deckArray[deckCount++] = new DeckObj(deck_zodiac_g);

    // Get the dropdowns
    var topicDropdown = document.getElementById("topic_dropdown");
    var countDropdown = document.getElementById("count_dropdown");
    var hintDropdown = document.getElementById("hint_dropdown");

    // Fill the category dropdown
    var selected_id = 0;
    for (var i = deckArray.length - 1; i >= 0; i--) {
        var option = document.createElement('option');
        option.text = deckArray[i].labels.aText;
        option.value = i;
        option.style.background = "palegreen";
        topicDropdown.add(option, 0);
    }

    // Set the defaults (category, count, etc.)
    for (var i = 0; i < topicDropdown.options.length; i++) {
        if (topicDropdown.options[i].text == "Countries") {
            topicDropdown.options[i].selected = true;
        }
    }
    for (var i = 0; i < countDropdown.options.length; i++) {
        if (countDropdown.options[i].text.localeCompare("All") == 0) {
            countDropdown.options[i].selected = true;
        }
    }
    for (var i = 0; i < hintDropdown.options.length; i++) {
        if (hintDropdown.options[i].text.localeCompare("Clue-Random") == 0) {
            hintDropdown.options[i].selected = true;
        }
    }

    // Trigger the first round
    NewRound();
}

var deckArray = new Array();
var answerArray = new Array();

var comboScore = 0;

// Main clue object
function ClueObj(clueText) {
    this.cText = clueText;
    this.cDisplay = false;
}

// Main item object
function ItemObj(iList) {
    this.aText = iList[0];
    this.dText = "?";
    this.solved = false;
    this.clues = new Array();

    // Fill in clues
    this.clues = new Array();
    for (var i = 1; i < iList.length; i++) {
        var newClue = new ClueObj(iList[i]);
        this.clues.push(newClue);
    }

    // Check if any clues are turned on.
    this.cluesOn = function () {
        for (var j = 0; j < this.clues.length; j++) {
            if (this.clues[j].cDisplay) {
                return true;
            }
        }
        return false;
    };

    // Reset all the data
    this.resetData = function () {
        this.dText = "?";
        this.solved = false;
        for (var j = 0; j < this.clues.length; j++) {
            this.clues[j].cDisplay = false;
        }
    };
}

// Main deck object
function DeckObj(deck) {
    this.iList = new Array();
    this.solved = false;
    this.bookmark = -1;

    for (var i = 0; i < deck.length; i++) {
        if (i == 0) {
            // The first set is the labels for the list
            this.labels = new ItemObj(deck[i]);
        } else {
            // Each other set represents an item in the list
            this.iList.push(new ItemObj(deck[i]));
        }
    }

    // Shuffle the items in the deck randomly
    this.shuffleDeck = function () {
        var deckSize = this.iList.length;
        for (var j = 0; j < deckSize; j++) {
            var randnum = Math.floor(Math.random() * deckSize);
            var temp = this.iList[j];
            this.iList[j] = this.iList[randnum];
            this.iList[randnum] = temp;
        }
        this.bookmark = 0;
    };

    // Make sure the bookmark into the deck's items is value.
    // Shuffle the deck and reset the bookmark to the beginning if not.
    this.checkBookmark = function () {
        if (this.bookmark.value < 0 || this.bookmark.value >= this.iList.length) {
            this.shuffleDeck();
        }
    };

    // Get the next item in the deck according to the bookmark.
    this.getNextItem = function () {
        this.checkBookmark();

        var nextItem = this.iList[this.bookmark];
        this.bookmark++;

        nextItem.resetData();

        return nextItem;
    };
}








function NewRound() {

    answerArray.length = 0; // Reset answer array

    // Get the selected category
    var topicDropdown = document.getElementById("topic_dropdown");
    var topicIndex = topicDropdown.options[topicDropdown.selectedIndex].value;

    // Get the letter to start with if any
    var letterTextbox = document.getElementById("letter_option");
    var letterInput = letterTextbox.value;
    var letterChoice = "";
    var useLetter = false;
    if (letterInput.length > 0) {
        useLetter = true;
        letterChoice = letterInput.charAt(0).toLocaleLowerCase();
    }

    // Get the card mode (1, several, all, or multiple sets of cards)
    var countDropdown = document.getElementById("count_dropdown");
    var cardMode = countDropdown.options[countDropdown.selectedIndex].value;

    // Setup which categories we will draw answers from
    var topicCount = 1;
    var indexArray;
    if (cardMode >= 0) {
        // Use only cards in the selected category
        indexArray = new Array();
        indexArray[0] = topicIndex;
    } else if (cardMode < 0) {
        // Use cards from multiple random categories
        topicCount = -cardMode;
        indexArray = getRandomizedIndexArray(deckArray.length);
    }





    // Loop through categories in this round
    for (i = 0; i < deckArray.length; i++) {
        var currentTopic = indexArray[i];

        // Reset data
        var currentDeck = deckArray[currentTopic];
        currentDeck.solved = false;

        // Shuffle the deck
        currentDeck.shuffleDeck();

        // Get the number of cards we will include from this category
        var cardCount = 1;
        if (cardMode <= 0) {
            // All the cards in this category
            cardCount = currentDeck.iList.length;
        } else {
            // Only some of the cards in this category (based on the mode)
            cardCount = cardMode;
        }

        var newDeck = new DeckObj(new Array([[]]));
        newDeck.labels = currentDeck.labels;
        newDeck.labels.resetData();

        // Loop through items in this category
        for (var j = 0; j < currentDeck.iList.length; j++) {
            var currentAnswer = currentDeck.getNextItem();

            // Get the default text of the current item
            var answerText = currentAnswer.aText.split("|")[0];

            var addAnswer = false;
            if (useLetter) {
                // Only include answers that start with the letter_choice
                var firstLetter = GetFirstLetter(answerText);
                if (letterChoice.localeCompare(firstLetter) == 0) {
                    addAnswer = true;
                }
            } else {
                // Include all answers
                addAnswer = true;
            }

            if (addAnswer) {
                newDeck.iList.push(currentAnswer);
            }

            // Exit early once we've hit the required number
            if (newDeck.iList.length == cardCount) {
                break;
            }
        }

        // Only add this new answer deck if there was at least one item added to it
        if (newDeck.iList.length > 0) {
            answerArray.push(newDeck);
        }

        // If we've added the correct number of categories, we can quit.
        if (answerArray.length == topicCount) {
            break;
        }
    }


    //document.getElementById("demo").innerHTML = "Debug Msg: " + debug_text;

    // Based on the difficulty mode, provide free hints.
    var difficultyDropdown = document.getElementById("difficulty_dropdown");
    var difficultyMode = difficultyDropdown.options[difficultyDropdown.selectedIndex].value;
    var bonusHintAvailable = true;
    if (difficultyMode < 2) {
        bonusHintAvailable = NewHintByMode(0); // Easy and Medium get asterisks for free
    }
    if (difficultyMode < 1 && bonusHintAvailable) {
        NewHint();  // Easy also gets a free hint, unless it they already got a built-in one.
    }


    UpdateDisplay();

    ResetCursor();
}



function BleepOutAnswer(displayText, answerText, showLetters) {

    if (showLetters > 0 && displayText.charAt(0).localeCompare("*") == 0) {
        // Check to see if we should also show bonus letters (The, An, A)
        showLetters = parseInt(showLetters) + GetFreeLetters(answerText);
    }

    var newText = "";
    var lettersRevealed = 0;
    for (var k = 0; k < answerText.length; k++) {
        var answerChar = answerText.charAt(k);
        var displayChar = displayText.charAt(k);
        if (!IsAlphaNumeric(answerChar)) {
            // Always display non-alphanumeric as themselves
            newText = newText + answerChar;
        } else if (displayChar.localeCompare("*") == 0 && lettersRevealed < showLetters) {
            // If it is a bleeped letter, reveal it if within the hint system
            newText = newText + answerChar;
            lettersRevealed++;
        } else {
            // Otherwise, bleep it out
            if (displayText.search("[?]") == 0) {
                newText = newText + "*";
            } else {
                newText = newText + displayText.charAt(k);
            }
        }
    }

    return newText;
}

function NewHint() {
    // Get the hint mode
    var hintDropdown = document.getElementById("hint_dropdown");
    var hintMode = hintDropdown.options[hintDropdown.selectedIndex].value;

    NewHintByMode(hintMode);
}

function NewHintByMode(hintMode) {
    // Hint Modes
    // 0 = Letter-Ordered
    // 1 = Letter-Random
    // 2 = Clue-Ordered
    // 3 = Clue-Random
    // 4 = Either-Ordered
    // 5 = Either-Random

    var originalHintMode = hintMode;
    var bonusHintAvailable = true;

    for (var i = 0; i < answerArray.length; i++) {

        if (originalHintMode == 4) {
            // Hint mode = Either-Ordered
            if (Math.random() < 0.5) {
                hintMode = 0;
            } else {
                hintMode = 2;
            }
        } else if (originalHintMode == 5) {
            // Hint mode = Either-Random
            if (Math.random() < 0.5) {
                hintMode = 1;
            } else {
                hintMode = 3;
            }
        }

        // Handle clue-type hint modes. Select which clue to show.
        var newClueIndex = -1;
        if (hintMode == 2 || hintMode == 3) {
            var labelItem = answerArray[i].labels;
            var indexArray = getRandomizedIndexArray(labelItem.clues.length);
            for (var k = 0; k < labelItem.clues.length; k++) {
                var clueIndex = k; // Hint mode = Next Clue
                if (hintMode == 3) {
                    // Hint mode = Random Clue
                    clueIndex = indexArray[k];
                }
                if (!labelItem.clues[clueIndex].cDisplay) {
                    newClueIndex = clueIndex;
                    labelItem.clues[newClueIndex].cDisplay = true;
                    break;
                }
            }
        }



        // Loop through the items in this list.
        for (var j = 0; j < answerArray[i].iList.length; j++) {

            var currentItem = answerArray[i].iList[j];

            if (hintMode == 0 || hintMode == 1) {
                var firstLetterHint = (currentItem.dText.search("[?]") == 0);

                if (firstLetterHint || hintMode == 0) {
                    // Hint mode = Ordered Letter
                    var answerText = currentItem.aText.split("|")[0];
                    currentItem.dText = BleepOutAnswer(currentItem.dText, answerText, 1);

                    if (currentItem.dText.search("[*]") == 0) {
                        var letterTextbox = document.getElementById("letter_option");
                        var letterInput = letterTextbox.value;
                        if (letterInput.length > 0) {
                            // Reveal the 1st letter if it is already known
                            currentItem.dText = BleepOutAnswer(currentItem.dText, answerText, 1);
                            bonusHintAvailable = false;
                        }
                    }
                } else if (hintMode == 1) {
                    // Hint mode = Random Letter
                    var indexArray = getRandomizedIndexArray(currentItem.dText.length);
                    for (var k = 0; k < currentItem.dText.length; k++) {
                        var charIndex = indexArray[k];
                        var oldChar = currentItem.dText.charAt(charIndex);
                        if (oldChar.localeCompare("*") == 0) {
                            var newText = "";
                            for (var m = 0; m < currentItem.dText.length; m++) {
                                if (m == charIndex) {
                                    newText = newText + currentItem.aText.charAt(m);
                                } else {
                                    newText = newText + currentItem.dText.charAt(m);
                                }
                            }
                            currentItem.dText = newText;
                            break;
                        }
                    }
                }


            } else if (newClueIndex >= 0) {
                // Activate a new clue if the clue index was valid.
                currentItem.clues[newClueIndex].cDisplay = true;
            }
        }
    }

    UpdateDisplay();

    // Reset the combo.
    comboScore = 0;
    UpdateCombo();

    ResetCursor();

    return bonusHintAvailable;
}



function UpdateDisplay() {

    // Figure out the longest category to dimension the hint table
    var longest_category = 0;
    for (var i = 0; i < answerArray.length; i++) {
        if (answerArray[i].iList.length > longest_category) {
            longest_category = answerArray[i].iList.length;
        }
    }

    var displayText = "<table>";

    ////////////////////////
    // Display the labels //
    ////////////////////////
    displayText = displayText + "<tr>";
    for (var j = 0; j < answerArray.length; j++) {
        // Topic label
        displayText = displayText + "<td>";

        var labelItem = answerArray[j].labels;
        //document.getElementById("demo").innerHTML = "Debug Msg: " + debug_text;
        displayText = displayText + labelItem.aText.fontcolor("red");


        // Clue labels
        if (labelItem.cluesOn()) {
            var clueArray = new Array();
            for (var i = 0; i < labelItem.clues.length; i++) {
                if (labelItem.clues[i].cDisplay) {
                    clueArray.push(labelItem.clues[i].cText);
                }
            }
            displayText = displayText + CreateParenthetical(clueArray).fontcolor("red");
        }

        displayText = displayText + "</td>";
    }
    displayText = displayText + "</tr>";

    ///////////////////////
    // Display the clues //
    ///////////////////////

    // Loop through the rows (items in categories)
    for (var k = 0; k < longest_category; k++) {
        displayText = displayText + "<tr>";

        // Loop through the columns (categories)
        for (var j = 0; j < answerArray.length; j++) {

            displayText = displayText + "<td>";

            if (k < answerArray[j].iList.length) {

                var currentItem = answerArray[j].iList[k];

                if (currentItem.solved) {
                    // Display solved text
                    displayText = displayText + currentItem.aText.fontcolor("green");
                } else {
                    // Display unsolved text
                    displayText = displayText + currentItem.dText;

                    if (currentItem.cluesOn()) {
                        var clueArray = new Array();
                        for (var i = 0; i < currentItem.clues.length; i++) {
                            if (currentItem.clues[i].cDisplay) {
                                clueArray.push(currentItem.clues[i].cText);
                            }
                        }
                        displayText = displayText + CreateParenthetical(clueArray);
                    }

                }
            }

            displayText = displayText + "</td>";
        }
        displayText = displayText + "</tr>";
    }
    displayText = displayText + "</table>";

    //var full_text = "Clue(s):<br />" + displayText;
    document.getElementById("display_area").innerHTML = displayText;

    //alert ("Exit Update Display");
}

function CreateParenthetical(textArray) {
    if (textArray.length == 0) {
        return "";
    }

    var parenthical = " (";
    for (var i = 0; i < textArray.length; i++) {
        parenthical = parenthical + textArray[i];
        if (i < textArray.length - 1) {
            parenthical = parenthical + "; ";
        }
    }
    parenthical = parenthical + ")";
    return parenthical;
}


function GetFreeLetters(str) {
    var l_str = str.toLocaleLowerCase();
    var free_letters = 0;
    if (l_str.search("the ") == 0) {
        free_letters = 3;
    } else if (l_str.search("an ") == 0) {
        free_letters = 2;
    } else if (l_str.search("a ") == 0) {
        free_letters = 1;
    }
    return free_letters;
}

function GetFirstLetter(str) {
    var l_str = str.toLocaleLowerCase();
    if (l_str.search("the ") == 0 && l_str.length >= 5) {
        return l_str.charAt(4);
    } else if (l_str.search("an ") == 0 && l_str.length >= 4) {
        return l_str.charAt(3);
    } else if (l_str.search("a ") == 0 && l_str.length >= 3) {
        return l_str.charAt(2);
    } else if (l_str.length > 0) {
        return l_str.charAt(0);
    }
    return "";
}

function IsAlphaNumeric(str) {
    return str.length === 1 && str.match(/[a-z0-9]/i);
}

function ScrubText(str) {

    // Replace ampersands with the word "and"
    str = str.replace("&", "and");

    // Skip leading The/An/A
    var start_index = GetFreeLetters(str);

    // Remove anything other than letters from a text
    var str_scrub = "";
    for (var i = start_index; i < str.length; i++) {
        if (IsAlphaNumeric(str.charAt(i))) {
            str_scrub = str_scrub + str.charAt(i);
        }
    }
    return str_scrub;
}

function CompareTexts(userText, answerText) {

    // Scrub out anything other than letters and then compare them lowercase
    var user_scrub = ScrubText(userText);
    var answer_scrub = ScrubText(answerText);

    return (user_scrub.toLocaleLowerCase().localeCompare(answer_scrub.toLocaleLowerCase()) == 0);
}

function CheckAnswerWix(event) {
    //alert ("The new content: " + event.target.value);
    CheckAnswer(event.target);
}

function CheckAnswerYaldex() {
    //alert ("The new content: " + event.target.value);
    var userInput = document.getElementById("answer_input");
    CheckAnswer(userInput);
}

function CheckAnswer(textObj) {

    var userText = textObj.value;

    //var x = document.getElementById("answer_input").value;
    //document.getElementById("demo").innerHTML = "Debug Msg: " + debug_text;

    var updateNeeded = false;
    for (var k = 0; k < answerArray.length; k++) {
        for (var j = 0; j < answerArray[k].iList.length; j++) {

            // Check to see if this answer hasn't yet been guessed
            if (!answerArray[k].iList[j].solved && !answerArray[k].iList[j].isLabel) {

                var spellingVariants = answerArray[k].iList[j].aText.split("|");

                // Loop through the spelling variants
                for (var i = 0; i < spellingVariants.length; i++) {

                    var currentAnswer = spellingVariants[i];

                    if (CompareTexts(userText, currentAnswer)) {
                        // Correct answer entered
                        answerArray[k].iList[j].solved = true;
                        answerArray[k].iList[j].dText = answerArray[k].iList[j].aText;

                        updateNeeded = true;
                        break;
                    }
                }
            }
        }
    }

    if (updateNeeded) {
        textObj.value = "";

        // Check whether the user has completed this quiz.
        CheckComplete();

        // Up the combo score
        comboScore++;
        UpdateCombo();

        // Update the display
        UpdateDisplay();
    }
}




function CheckComplete() {

    var missingTopic = 0;

    // Loop through the topics in this round to see if they are all complete
    for (var k = 0; k < answerArray.length; k++) {

        // Loop through the items in this topic to see if they are all complete
        var missingItem = 0;
        for (var j = 0; j < answerArray[k].iList.length; j++) {
            if (!answerArray[k].iList[j].solved) {
                missingItem++;
            }
        }

        if (missingItem == 0) {
            // Mark this topic as complete
            answerArray[k].solved = true;
        } else {
            missingTopic++;
        }
    }

    // If all answers are correct, generate new questions
    if (missingTopic == 0) {
        //NewRound();
    }
}

function UpdateCombo() {
    document.getElementById("Combo").innerHTML = "Combo: " + comboScore;
}

function ResetCursor() {
    //document.getElementById("answer_input").focus();
}

function getRandomizedIndexArray(arrayLength) {
    var indexArray = new Array();
    for (var i = 0; i < arrayLength; i++) {
        indexArray[i] = i;
    }
    indexArray.sort(function (a, b) { return 0.5 - Math.random(); });
    return indexArray;
}

// This function disables hitting Enter in a textbox from reloading the page.
function NoEnter() {
    return !(window.event && window.event.keyCode == 13);
}