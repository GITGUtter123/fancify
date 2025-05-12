// Comprehensive word replacements with multiple alternatives
const fancyReplacements = {
  // Basic conversational words
  'for': ['for the purpose of', 'with the intent of', 'in consideration of', 'in the service of', 'with regard to', 'in the interest of'],
  'do': ['execute', 'perform', 'undertake', 'actualize', 'effectuate', 'implement', 'accomplish', 'consummate'],
  'make': ['generate', 'create', 'produce', 'fabricate', 'construct', 'formulate', 'engender', 'synthesize', 'manifest'],
  'get': ['obtain', 'acquire', 'procure', 'secure', 'attain', 'garner', 'requisition', 'appropriate'],
  'use': ['utilize', 'employ', 'leverage', 'implement', 'apply', 'exercise', 'avail oneself of', 'exploit', 'harness'],
  'help': ['facilitate', 'assist', 'aid', 'support', 'enable', 'accommodate', 'bolster', 'foster', 'expedite'],
  
  // Descriptive adjectives
  'big': ['substantial', 'significant', 'considerable', 'mammoth', 'colossal', 'gargantuan', 'voluminous', 'immense', 'monumental'],
  'small': ['diminutive', 'minimal', 'compact', 'petite', 'microscopic', 'infinitesimal', 'minuscule', 'meager', 'negligible'],
  'good': ['exceptional', 'outstanding', 'superior', 'exemplary', 'stellar', 'superlative', 'magnificent', 'impeccable', 'exquisite'],
  'bad': ['suboptimal', 'inferior', 'deficient', 'inadequate', 'problematic', 'detrimental', 'deleterious', 'pernicious', 'egregious'],
  'happy': ['elated', 'jubilant', 'ecstatic', 'euphoric', 'blissful', 'exhilarated', 'rapturous', 'enraptured', 'effervescent'],
  'sad': ['melancholic', 'despondent', 'somber', 'dejected', 'disconsolate', 'lugubrious', 'dolorous', 'forlorn', 'morose'],
  'great': ['exceptional', 'remarkable', 'extraordinary', 'phenomenal', 'magnificent', 'superlative', 'transcendent', 'consummate', 'unparalleled'],
  'nice': ['delightful', 'pleasing', 'gratifying', 'agreeable', 'amiable', 'congenial', 'commendable', 'splendid', 'exquisite'],
  'new': ['novel', 'innovative', 'unprecedented', 'groundbreaking', 'pioneering', 'avant-garde', 'cutting-edge', 'state-of-the-art', 'revolutionary'],
  'old': ['antiquated', 'archaic', 'primordial', 'primeval', 'venerable', 'seasoned', 'time-honored', 'long-established', 'ancient'],
  'beautiful': ['resplendent', 'exquisite', 'captivating', 'sublime', 'pulchritudinous', 'magnificent', 'enchanting', 'alluring', 'ravishing'],
  'ugly': ['aesthetically challenged', 'visually discordant', 'unappealing', 'unsightly', 'grotesque', 'repugnant', 'abhorrent', 'malformed', 'hideous'],
  'hard': ['arduous', 'laborious', 'strenuous', 'demanding', 'rigorous', 'formidable', 'taxing', 'grueling', 'onerous'],
  'easy': ['effortless', 'facile', 'undemanding', 'straightforward', 'uncomplicated', 'elementary', 'unencumbered', 'manageable', 'simplistic'],
  'fast': ['expeditious', 'accelerated', 'rapid', 'fleet', 'swift', 'meteoric', 'instantaneous', 'breakneck', 'supersonic'],
  'slow': ['deliberate', 'measured', 'unhurried', 'leisurely', 'methodical', 'protracted', 'gradual', 'languorous', 'dilatory'],
  'hot': ['torrid', 'sweltering', 'scorching', 'sizzling', 'scalding', 'blistering', 'sultry', 'incandescent', 'baking'],
  'cold': ['frigid', 'glacial', 'gelid', 'arctic', 'chilling', 'frosty', 'wintry', 'polar', 'hyperborean'],

  // Colors
  'red': ['crimson', 'scarlet', 'vermilion', 'carmine', 'ruby', 'cerise', 'cardinal', 'burgundy', 'maroon'],
  'blue': ['azure', 'cerulean', 'sapphire', 'cobalt', 'indigo', 'ultramarine', 'turquoise', 'aquamarine', 'teal'],
  'green': ['emerald', 'jade', 'moss', 'verdant', 'chartreuse', 'olive', 'viridian', 'forest', 'sage'],
  'yellow': ['golden', 'amber', 'flaxen', 'saffron', 'topaz', 'ochre', 'tawny', 'maize', 'blonde'],
  'black': ['ebony', 'obsidian', 'onyx', 'jet', 'charcoal', 'pitch', 'sable', 'raven', 'midnight'],
  'white': ['alabaster', 'ivory', 'pearl', 'porcelain', 'cream', 'vanilla', 'bone', 'chalk', 'eggshell'],
  
  // Action verbs
  'look': ['observe', 'examine', 'scrutinize', 'inspect', 'contemplate', 'survey', 'reconnoiter', 'reconnoitre', 'regard'],
  'see': ['perceive', 'discern', 'comprehend', 'visualize', 'recognize', 'descry', 'distinguish', 'behold', 'glimpse'],
  'go': ['proceed', 'traverse', 'advance', 'progress', 'navigate', 'journey', 'embark', 'peregrinate', 'venture'],
  'run': ['expedite', 'sprint', 'dash', 'race', 'propel', 'hasten', 'accelerate', 'scamper', 'gallop'],
  'walk': ['perambulate', 'stroll', 'ambulate', 'saunter', 'wander', 'promenade', 'stride', 'traipse', 'meander'],
  'jump': ['leap', 'bound', 'vault', 'spring', 'hurdle', 'catapult', 'propel', 'lunge', 'soar'],
  'sit': ['recline', 'repose', 'rest', 'position oneself', 'settle', 'perch', 'be seated', 'ensconce', 'lounge'],
  'stand': ['arise', 'erect oneself', 'position vertically', 'rise', 'elevate', 'straighten', 'upright oneself', 'assume a standing position', 'elevate oneself'],
  'write': ['compose', 'inscribe', 'document', 'transcribe', 'record', 'chronicle', 'author', 'scribe', 'pen'],
  'read': ['peruse', 'scrutinize', 'study', 'examine', 'review', 'digest', 'pore over', 'scan', 'absorb'],
  'cook': ['prepare', 'concoct', 'formulate', 'synthesize', 'create culinary delights', 'culinarily craft', 'gastro-engineer', 'chef', 'devise'],
  'clean': ['sanitize', 'purify', 'disinfect', 'sterilize', 'immaculate', 'decontaminate', 'cleanse', 'eradicate impurities', 'purge'],
  'move': ['transport', 'relocate', 'reposition', 'transfer', 'translocate', 'displace', 'shift', 'convey', 'migrate'],
  'stop': ['cease', 'desist', 'discontinue', 'terminate', 'conclude', 'halt', 'arrest', 'suspend', 'abort'],
  'start': ['commence', 'initiate', 'inaugurate', 'launch', 'instigate', 'originate', 'embark upon', 'establish', 'conceive'],
  'finish': ['conclude', 'complete', 'culminate', 'consummate', 'finalize', 'terminate', 'accomplish', 'achieve closure', 'perfect'],
  'find': ['discover', 'unearth', 'ascertain', 'identify', 'locate', 'detect', 'discern', 'uncover', 'encounter'],
  'lose': ['misplace', 'forfeit', 'relinquish', 'surrender', 'be deprived of', 'become divested of', 'part with', 'be dispossessed of', 'be bereft of'],
  'buy': ['purchase', 'acquire', 'procure', 'obtain commercial rights to', 'invest in', 'secure ownership of', 'transact for', 'pay remuneration for', 'trade currency for'],
  'sell': ['vend', 'market', 'trade', 'exchange for currency', 'retail', 'merchandise', 'liquidate', 'distribute commercially', 'dispose of commercially'],
  
  // Consumption words
  'eat': ['consume', 'ingest', 'devour', 'partake', 'masticate', 'dine upon', 'feast upon', 'indulge in', 'digest'],
  'drink': ['imbibe', 'consume', 'quaff', 'gulp', 'libate', 'sip', 'swallow', 'quench', 'hydrate with'],
  'taste': ['savor', 'experience gustatorily', 'perceive flavors of', 'sample', 'detect the essence of', 'discern the flavor of', 'palate', 'appreciate the nuances of', 'relish'],
  'swallow': ['ingest', 'consume', 'down', 'gulp', 'absorb', 'internalize', 'accept', 'incorporate', 'assimilate'],
  'chew': ['masticate', 'grind', 'pulverize', 'macerate', 'triturate', 'comminute', 'process orally', 'gnaw upon', 'break down'],
  
  // Communication words
  'say': ['articulate', 'express', 'communicate', 'vocalize', 'proclaim', 'pronounce', 'enunciate', 'verbalize', 'declare'],
  'tell': ['communicate', 'inform', 'divulge', 'disclose', 'convey', 'recount', 'relate', 'narrate', 'impart'],
  'think': ['contemplate', 'ponder', 'ruminate', 'deliberate', 'cogitate', 'meditate', 'muse', 'reflect', 'cerebrate'],
  'talk': ['converse', 'discourse', 'communicate verbally', 'engage in dialogue', 'hold forth', 'articulate thoughts', 'exchange words', 'verbal exchange', 'parley'],
  'speak': ['articulate', 'vocalize', 'orate', 'discourse', 'verbalize', 'express verbally', 'declaim', 'give voice to', 'pontificate'],
  'listen': ['attend aurally', 'harken', 'give ear to', 'pay auditory attention', 'hearken', 'be attentive to', 'give heed to', 'lend an ear to', 'perceive aurally'],
  'hear': ['perceive aurally', 'detect acoustically', 'register sonically', 'aurally process', 'discern audibly', 'receive aurally', 'aurally witness', 'sense through auditory means', 'capture sound waves'],
  'shout': ['exclaim vociferously', 'vociferate', 'bellow', 'declaim loudly', 'project vocally', 'proclaim at high volume', 'holler', 'ejaculate loudly', 'roar'],
  'whisper': ['murmur', 'speak sotto voce', 'utter under one\'s breath', 'speak in hushed tones', 'communicate softly', 'breathe words', 'susurrate', 'voice quietly', 'articulate discreetly'],
  
  // Emotional and mental states
  'know': ['comprehend', 'understand', 'discern', 'apprehend', 'recognize', 'cognize', 'be cognizant of', 'fathom', 'grasp'],
  'want': ['desire', 'crave', 'yearn', 'aspire', 'long', 'covet', 'wish', 'hanker', 'pine for'],
  'like': ['appreciate', 'admire', 'enjoy', 'relish', 'adore', 'favor', 'be partial to', 'be fond of', 'hold in esteem'],
  'love': ['adore', 'cherish', 'venerate', 'idolize', 'revere', 'worship', 'be enamored with', 'be infatuated with', 'hold in high regard'],
  'hate': ['despise', 'loathe', 'abhor', 'detest', 'execrate', 'revile', 'abominate', 'hold in contempt', 'be repulsed by'],
  'fear': ['dread', 'be apprehensive of', 'be intimidated by', 'regard with trepidation', 'be alarmed by', 'be terrified of', 'experience anxiety regarding', 'recoil from', 'quail before'],
  'worry': ['fret', 'be anxious', 'be concerned', 'agonize', 'be perturbed', 'be disquieted', 'be troubled', 'be distressed', 'be apprehensive'],
  'confuse': ['perplex', 'bewilder', 'mystify', 'discombobulate', 'obfuscate', 'disorient', 'befuddle', 'flummox', 'confound'],
  'remember': ['recollect', 'recall', 'reminisce about', 'retain in memory', 'bring to mind', 'summon to memory', 'hold in remembrance', 'bear in mind', 'be mindful of'],
  'forget': ['fail to recall', 'lose memory of', 'be amnesic about', 'be oblivious to', 'disregard', 'overlook', 'neglect to remember', 'let slip from memory', 'be unmindful of'],
  'believe': ['accept as true', 'give credence to', 'credit', 'trust', 'place faith in', 'be convinced of', 'subscribe to', 'give credence to', 'have confidence in'],
  'doubt': ['question', 'be skeptical of', 'mistrust', 'be dubious about', 'harbor reservations about', 'be uncertain about', 'be incredulous of', 'hesitate to accept', 'regard with suspicion'],
  
  // Intellectual words
  'ask': ['inquire', 'query', 'interrogate', 'probe', 'question', 'solicit information', 'seek clarification', 'request information', 'propound'],
  'answer': ['respond', 'reply', 'retort', 'counter', 'rebut', 'provide feedback', 'address', 'satisfy', 'resolve'],
  'solve': ['resolve', 'decipher', 'unravel', 'decode', 'figure out', 'fathom', 'explicate', 'demystify', 'elucidate'],
  'learn': ['acquire knowledge of', 'become informed about', 'gain understanding of', 'assimilate information regarding', 'familiarize oneself with', 'be instructed in', 'study', 'master', 'absorb'],
  'teach': ['instruct', 'educate', 'enlighten', 'illuminate', 'indoctrinate', 'impart knowledge to', 'tutor', 'edify', 'didactically convey'],
  'explain': ['elucidate', 'explicate', 'expound', 'delineate', 'clarify', 'illuminate', 'elaborate', 'expatiate', 'interpret'],
  'analyze': ['scrutinize', 'examine', 'investigate', 'dissect', 'deconstruct', 'study', 'explore', 'inquire into', 'anatomize'],
  'decide': ['determine', 'resolve', 'conclude', 'settle upon', 'make up one\'s mind', 'elect', 'opt', 'adjudicate', 'judge'],
  'guess': ['conjecture', 'speculate', 'hypothesize', 'postulate', 'surmise', 'presume', 'theorize', 'venture an opinion', 'infer'],
  
  // Work and effort
  'work': ['endeavor', 'labor', 'toil', 'strive', 'exert', 'function', 'operate', 'perform', 'undertake'],
  'play': ['engage in recreational activities', 'frolic', 'cavort', 'disport', 'revel', 'amuse oneself', 'divert oneself', 'participate in leisure activities', 'recreate'],
  'try': ['attempt', 'endeavor', 'strive', 'undertake', 'venture', 'seek', 'pursue', 'make an effort', 'undertake to'],
  'succeed': ['flourish', 'prosper', 'thrive', 'triumph', 'prevail', 'accomplish', 'achieve', 'attain', 'realize'],
  'fail': ['fall short', 'be unsuccessful', 'be ineffectual', 'be inadequate', 'come to naught', 'flounder', 'falter', 'prove deficient', 'miscarry'],
  'build': ['construct', 'erect', 'fabricate', 'assemble', 'create', 'establish', 'found', 'engineer', 'architect'],
  'create': ['originate', 'generate', 'produce', 'fashion', 'formulate', 'devise', 'design', 'establish', 'bring into being'],
  'destroy': ['demolish', 'annihilate', 'obliterate', 'decimate', 'eradicate', 'devastate', 'raze', 'exterminate', 'extirpate'],
  'fix': ['repair', 'remedy', 'rectify', 'correct', 'amend', 'rehabilitate', 'restore', 'mend', 'ameliorate'],
  'break': ['fracture', 'shatter', 'rupture', 'fragment', 'splinter', 'disintegrate', 'rend', 'sever', 'crack'],
  
  // Time and sequence
  'now': ['presently', 'currently', 'at this juncture', 'at this moment', 'at the present time', 'contemporaneously', 'at this interval', 'instantaneously', 'hic et nunc'],
  'later': ['subsequently', 'afterward', 'thereafter', 'in due course', 'at a subsequent time', 'in the fullness of time', 'hereafter', 'eventually', 'at a future point'],
  'before': ['previously', 'prior to', 'antecedent to', 'in advance of', 'preliminarily', 'heretofore', 'precedent to', 'anterior to', 'preceding'],
  'after': ['following', 'subsequent to', 'succeeding', 'in the wake of', 'ensuing', 'posterior to', 'consecutively', 'thereupon', 'afterwards'],
  'always': ['perpetually', 'continually', 'invariably', 'unfailingly', 'incessantly', 'eternally', 'ceaselessly', 'persistently', 'enduringly'],
  'never': ['at no time', 'on no occasion', 'under no circumstances', 'not ever', 'not once', 'by no means', 'nary a time', 'not in any instance', 'not at all'],
  'sometimes': ['occasionally', 'periodically', 'intermittently', 'at times', 'now and then', 'sporadically', 'at intervals', 'from time to time', 'on occasion'],
  
  // Advanced additions
  'very': ['immensely', 'exceptionally', 'remarkably', 'tremendously', 'extraordinarily', 'eminently', 'exceedingly', 'surpassingly', 'supremely'],
  'really': ['genuinely', 'profoundly', 'absolutely', 'categorically', 'unequivocally', 'indubitably', 'veritably', 'authentically', 'legitimately'],
  'thing': ['entity', 'phenomenon', 'construct', 'mechanism', 'manifestation', 'artifact', 'object', 'item', 'element'],
  'problem': ['challenge', 'impediment', 'obstacle', 'predicament', 'conundrum', 'quandary', 'complication', 'dilemma', 'enigma'],
  'idea': ['concept', 'notion', 'hypothesis', 'postulation', 'proposition', 'theory', 'conjecture', 'supposition', 'abstraction'],
  'change': ['transform', 'modify', 'alter', 'transmute', 'revolutionize', 'metamorphose', 'evolve', 'transfigure', 'remodel'],
  'important': ['crucial', 'paramount', 'essential', 'fundamental', 'pivotal', 'significant', 'consequential', 'momentous', 'critical'],
  'understand': ['comprehend', 'grasp', 'discern', 'perceive', 'apprehend', 'fathom', 'assimilate', 'digest', 'interpret'],
  'maybe': ['perhaps', 'perchance', 'possibly', 'conceivably', 'feasibly', 'presumably', 'plausibly', 'hypothetically', 'speculatively'],
  'here': ['at this location', 'in this vicinity', 'at this juncture', 'in this locale', 'at this site', 'in this position', 'at this point', 'in this place', 'herein'],
  'there': ['at that location', 'in that vicinity', 'at that juncture', 'in that locale', 'at that site', 'in that position', 'at that point', 'in that place', 'therein'],
  'because': ['on account of', 'by virtue of', 'by reason of', 'owing to', 'as a consequence of', 'as a result of', 'in light of', 'in view of', 'due to the fact that'],
  'if': ['provided that', 'assuming that', 'on the condition that', 'in the event that', 'contingent on', 'subject to', 'presuming that', 'granting that', 'supposing that'],
  'but': ['however', 'nevertheless', 'notwithstanding', 'albeit', 'despite this', 'in spite of this', 'on the other hand', 'conversely', 'on the contrary'],
  'and': ['furthermore', 'moreover', 'additionally', 'in addition', 'supplementally'],
  'or': ['alternatively', 'otherwise', 'conversely', 'either', 'as another option', 'as a substitute', 'in the alternative', 'as a different possibility', 'as another choice'],
  'not': ['by no means', 'under no circumstances', 'in no way', 'to no extent', 'nowise', 'nary', 'hardly', 'scarcely', 'barely'],
  'for example': ['to illustrate', 'for instance', 'by way of example', 'as a case in point', 'as an illustration', 'exempli gratia', 'to demonstrate', 'as evidence', 'to exemplify'],
  
  // General improvement phrases
  'in conclusion': ['to culminate', 'as a final observation', 'to recapitulate', 'ultimately', 'to synthesize the aforementioned', 'in summation', 'as a final consideration', 'to encapsulate', 'as a closing remark'],
  'i think': ['i postulate', 'i hypothesize', 'i conjecture', 'i theorize', 'i surmise', 'i posit', 'i propound', 'i presume', 'i deduce'],
  'in my opinion': ['from my perspective', 'according to my analysis', 'as I perceive it', 'in my estimation', 'from my vantage point', 'as I conceptualize it', 'in my reasoned judgment', 'as I discern', 'following my evaluation'],
  'also': ['furthermore', 'moreover', 'additionally', 'in addition', 'likewise', 'similarly', 'correspondingly', 'complementarily', 'analogously'],
    // Technology terms
  'computer': ['computational device', 'electronic brain', 'data processor', 'digital apparatus', 'silicon-based intelligence', 'automated reasoning machine', 'cybernetic system', 'algorithmic engine', 'information processing unit'],
  'phone': ['mobile communication device', 'cellular apparatus', 'telephonic instrument', 'smart device', 'pocket computer', 'wireless communicator', 'personal digital assistant', 'handheld terminal', 'portable transceiver'],
  'internet': ['world wide web', 'cyberspace', 'digital network', 'information superhighway', 'global communications infrastructure', 'online ecosystem', 'virtual domain', 'interconnected data matrix', 'electronic information exchange'],
  'app': ['application software', 'digital tool', 'programmatic interface', 'software utility', 'mobile platform', 'computerized solution', 'automated assistant', 'electronic facilitator', 'technological implement'],
  'website': ['digital portal', 'online platform', 'web presence', 'virtual destination', 'internet location', 'cyber establishment', 'electronic brochure', 'networked information resource', 'interactive site'],

  // Business terms
  'meeting': ['strategic conclave', 'collaborative session', 'executive symposium', 'business assembly', 'professional congregation', 'corporate gathering', 'organizational dialogue', 'managerial roundtable', 'administrative council'],
  'money': ['financial resources', 'monetary assets', 'pecuniary means', 'economic capital', 'fiscal liquidity', 'currency reserves', 'wealth accumulation', 'specie', 'legal tender'],
  'business': ['commercial enterprise', 'corporate entity', 'economic venture', 'professional undertaking', 'industrial concern', 'mercantile operation', 'trade establishment', 'market participant', 'for-profit organization'],
  'work': ['professional endeavor', 'occupational pursuit', 'vocational activity', 'career-related duties', 'employment obligations', 'job functions', 'productive labor', 'remunerative work', 'economic contribution'],
  'job': ['professional position', 'occupational role', 'vocational appointment', 'career placement', 'employment situation', 'work assignment', 'paid engagement', 'livelihood', 'means of subsistence'],

  // Academic terms
  'study': ['academic pursuit', 'scholarly investigation', 'educational research', 'intellectual examination', 'systematic learning', 'cognitive exploration', 'knowledge acquisition', 'pedagogical analysis', 'erudite inquiry'],
  'school': ['educational institution', 'academic establishment', 'learning center', 'pedagogical facility', 'knowledge repository', 'scholastic environment', 'instructional complex', 'didactic organization', 'alma mater'],
  'teacher': ['educator', 'pedagogue', 'instructor', 'knowledge facilitator', 'academic mentor', 'scholastic guide', 'didactic professional', 'tutor', 'professor'],
  'student': ['learner', 'pupil', 'scholar', 'academic apprentice', 'knowledge seeker', 'educational participant', 'trainee', 'disciple', 'protégé'],
  'test': ['academic assessment', 'evaluation instrument', 'knowledge measurement', 'cognitive examination', 'scholastic appraisal', 'educational benchmark', 'qualification procedure', 'proficiency gauge', 'didactic verification'],

  // Nature terms
  'tree': ['arboreal specimen', 'woody perennial', 'photosynthetic organism', 'forest constituent', 'botanical entity', 'ligneous plant', 'foliage-bearing structure', 'natural canopy provider', 'carbon-sequestering lifeform'],
  'flower': ['botanical blossom', 'floral specimen', 'reproductive structure', 'petal-bearing organism', 'horticultural display', 'aesthetic inflorescence', 'nectar-producing entity', 'pollinator attractor', 'botanical ornament'],
  'water': ['aqueous solution', 'hydrogen hydroxide', 'life-sustaining liquid', 'hydrological resource', 'potable fluid', 'universal solvent', 'precipitation accumulation', 'molecular H2O', 'natural hydrant'],
  'sun': ['solar entity', 'stellar body', 'celestial luminary', 'astronomical furnace', 'heliospheric center', 'photosynthetic energy source', 'daylight provider', 'solar system anchor', 'thermonuclear orb'],
  'moon': ['lunar satellite', 'celestial companion', 'nocturnal illuminator', 'orbital body', 'tidal influencer', 'selenological object', 'natural satellite', 'nighttime beacon', 'Earth\'s cosmic partner'],

  // Transportation terms
  'car': ['automobile', 'motor vehicle', 'personal conveyance', 'road transport', 'four-wheeled transport', 'passenger vehicle', 'automotive machine', 'self-propelled carriage', 'internal combustion chariot'],
  'bike': ['bicycle', 'two-wheeled vehicle', 'pedal-powered transport', 'human-powered conveyance', 'velocipede', 'cycling apparatus', 'non-motorized transit', 'ecofriendly mobility solution', 'manual locomotion device'],
  'train': ['rail transport', 'locomotive conveyance', 'mass transit system', 'railway vehicle', 'iron horse', 'rolling stock', 'track-based transport', 'commuter line', 'intercity connector'],
  'plane': ['aircraft', 'aerial vehicle', 'flying machine', 'aviation transport', 'aerodynamic conveyance', 'winged vessel', 'airborne carrier', 'jet-powered vehicle', 'atmospheric navigator'],
  'boat': ['watercraft', 'marine vessel', 'aquatic transport', 'floating conveyance', 'nautical vehicle', 'hydrodynamic platform', 'seafaring craft', 'wave-traversing device', 'liquid-surface navigator'],

  // Body parts
  'head': ['cranial region', 'cephalic extremity', 'anatomical apex', 'cognitive center', 'facial platform', 'sensory hub', 'cerebral housing', 'bodily command center', 'supreme anatomical structure'],
  'hand': ['manual extremity', 'prehensile appendage', 'digital manipulator', 'tactile organ', 'manual interface', 'gestural communicator', 'grasping mechanism', 'manual dexterity provider', 'physical interaction tool'],
  'eye': ['ocular organ', 'visual apparatus', 'sensory orb', 'optical instrument', 'sight mechanism', 'vision provider', 'corneal structure', 'retinal processor', 'pupillary window'],
  'heart': ['cardiac organ', 'circulatory pump', 'vital core', 'hemodynamic engine', 'life-sustaining muscle', 'cardiovascular center', 'pulsating vessel', 'emotional epicenter', 'rhythmic life-giver'],
  'foot': ['pedal extremity', 'locomotor appendage', 'ambulatory platform', 'supportive structure', 'mobility enabler', 'ground contact point', 'stabilizing mechanism', 'walking implement', 'anatomical foundation'],
  // Academic terms
  'study': ['academic pursuit', 'scholarly investigation', 'educational research', 'intellectual examination', 'systematic learning', 'cognitive exploration', 'knowledge acquisition', 'pedagogical analysis', 'erudite inquiry'],
  'school': ['educational institution', 'academic establishment', 'learning center', 'pedagogical facility', 'knowledge repository', 'scholastic environment', 'instructional complex', 'didactic organization', 'alma mater'],
  'teacher': ['educator', 'pedagogue', 'instructor', 'knowledge facilitator', 'academic mentor', 'scholastic guide', 'didactic professional', 'tutor', 'professor'],
  'student': ['learner', 'pupil', 'scholar', 'academic apprentice', 'knowledge seeker', 'educational participant', 'trainee', 'disciple', 'protégé'],
  'test': ['academic assessment', 'evaluation instrument', 'knowledge measurement', 'cognitive examination', 'scholastic appraisal', 'educational benchmark', 'qualification procedure', 'proficiency gauge', 'didactic verification'],
  'compare': ['juxtapose', 'contrast', 'correlate', 'analogize', 'draw parallels between', 'evaluate comparatively', 'collate', 'assess in relation to', 'scrutinize the similarities of'],
};
const phraseReplacements = {
  'for example': ['to illustrate', 'for instance', 'by way of example', 'as a case in point', 'as an illustration'],
  'in conclusion': ['to culminate', 'as a final observation', 'to recapitulate', 'ultimately', 'to synthesize the aforementioned'],
  'i think': ['i postulate', 'i hypothesize', 'i conjecture', 'i theorize', 'i surmise'],
  'in my opinion': ['from my perspective', 'according to my analysis', 'as I perceive it', 'in my estimation', 'from my vantage point'],
  'as well as': ['in addition to', 'alongside', 'coupled with', 'together with', 'in conjunction with'],
  'due to': ['attributable to', 'resulting from', 'stemming from', 'on account of', 'as a consequence of'],
  'in order to': ['with the objective of', 'for the purpose of', 'with the aim of', 'with the intention of', 'to facilitate'],
  'such as': ['including but not limited to', 'for instance', 'as exemplified by', 'like', 'particularly'],
  'a lot of': ['a substantial quantity of', 'a significant number of', 'an abundance of', 'a plethora of', 'a considerable amount of'],
  'take into account': ['consider', 'factor in', 'acknowledge', 'recognize', 'be mindful of'],
  'in spite of': ['notwithstanding', 'despite', 'regardless of', 'even with', 'in the face of']
};

// Context-specific replacements
const contextReplacements = {
  // Words that should be replaced differently based on their part of speech
  'work': {
    'verb': ['labor', 'toil', 'function', 'operate', 'exert oneself'],
    'noun': ['occupation', 'profession', 'vocation', 'employment', 'career']
  },
  'light': {
    'adjective': ['lightweight', 'insubstantial', 'delicate', 'gossamer', 'ethereal'],
    'noun': ['illumination', 'luminescence', 'radiance', 'glow', 'brilliance']
  },
  'right': {
    'adjective': ['correct', 'accurate', 'precise', 'exact', 'flawless'],
    'noun': ['entitlement', 'privilege', 'prerogative', 'claim', 'due'],
    'direction': ['rightward', 'starboard', 'eastward', 'clockwise', 'dextral']
  },
  'have': ['possess', 'retain', 'maintain', 'bear', 'hold', 'own', 'command', 'occupy', 'comprise'],
  'take': ['appropriate', 'seize', 'confiscate', 'commandeer', 'annex', 'usurp', 'arrogate', 'assume', 'preempt'],
  'give': ['bestow', 'confer', 'donate', 'impart', 'dispense', 'allocate', 'bequeath', 'endow', 'furnish'],
  'keep': ['preserve', 'retain', 'conserve', 'maintain', 'safeguard', 'uphold', 'sustain', 'perpetuate', 'hoard'],
  'let': ['permit', 'authorize', 'sanction', 'enable', 'empower', 'accredit', 'license', 'vouchsafe', 'countenance'],
  'put': ['position', 'place', 'deposit', 'install', 'situate', 'locate', 'station', 'arrange', 'dispose'],
  'set': ['establish', 'institute', 'inaugurate', 'found', 'initiate', 'organize', 'configure', 'determine', 'fix'],
  'send': ['dispatch', 'transmit', 'forward', 'convey', 'remit', 'ship', 'export', 'consign', 'route'],
  'show': ['demonstrate', 'exhibit', 'manifest', 'reveal', 'display', 'illustrate', 'present', 'unveil', 'expose'],
  'leave': ['depart', 'vacate', 'abandon', 'relinquish', 'forsake', 'evacuate', 'withdraw', 'desert', 'cede'],

  // --- Descriptive Adjectives ---
  'smart': ['astute', 'perceptive', 'discerning', 'sagacious', 'judicious', 'shrewd', 'ingenious', 'erudite', 'sapient'],
  'dumb': ['inane', 'vacuous', 'obtuse', 'witless', 'unintelligent', 'dull-witted', 'moronic', 'idiotic', 'fatuous'],
  'funny': ['hilarious', 'comical', 'ludicrous', 'farcical', 'droll', 'mirthful', 'jocular', 'waggish', 'side-splitting'],
  'serious': ['grave', 'solemn', 'earnest', 'staid', 'sober', 'sedate', 'austere', 'pensive', 'thoughtful'],
  'loud': ['boisterous', 'clamorous', 'vociferous', 'raucous', 'strident', 'deafening', 'thunderous', 'piercing', 'earsplitting'],
  'quiet': ['hushed', 'muted', 'subdued', 'noiseless', 'soundless', 'tranquil', 'peaceful', 'serene', 'reticent'],
  'bright': ['luminous', 'radiant', 'incandescent', 'brilliant', 'dazzling', 'vivid', 'resplendent', 'effulgent', 'beaming'],
  'dark': ['tenebrous', 'umbrous', 'crepuscular', 'stygian', 'lightless', 'unilluminated', 'sunless', 'murky', 'obscure'],
  'rich': ['affluent', 'opulent', 'prosperous', 'moneyed', 'wealthy', 'plutocratic', 'flush', 'well-heeled', 'privileged'],
  'poor': ['impoverished', 'indigent', 'destitute', 'penurious', 'impecunious', 'needy', 'underprivileged', 'deprived', 'penniless'],

  // --- Emotions ---
  'angry': ['irate', 'incensed', 'livid', 'apoplectic', 'wrathful', 'enraged', 'furious', 'infuriated', 'choleric'],
  'excited': ['thrilled', 'elated', 'exhilarated', 'electrified', 'animated', 'enthused', 'agog', 'pumped', 'stoked'],
  'bored': ['ennuied', 'listless', 'apathetic', 'uninterested', 'weary', 'jaded', 'blasé', 'spiritless', 'unstimulated'],
  'tired': ['fatigued', 'exhausted', 'weary', 'spent', 'drained', 'enervated', 'lethargic', 'debilitated', 'worn-out'],
  'surprised': ['astonished', 'flabbergasted', 'dumbfounded', 'stupefied', 'thunderstruck', 'gobsmacked', 'nonplussed', 'agog', 'startled'],
  'scared': ['terrified', 'petrified', 'horror-stricken', 'panic-stricken', 'apprehensive', 'trepidatious', 'fearful', 'alarmed', 'unnerved'],
  'calm': ['placid', 'composed', 'unruffled', 'imperturbable', 'collected', 'tranquil', 'sedate', 'serene', 'unflappable'],
  'confident': ['self-assured', 'poised', 'self-possessed', 'unwavering', 'assertive', 'self-confident', 'bold', 'dauntless', 'sanguine'],
  'shy': ['timid', 'bashful', 'diffident', 'reticent', 'introverted', 'reserved', 'self-effacing', 'mousy', 'unassuming'],

  // --- Technology ---
  'code': ['algorithm', 'script', 'program', 'source', 'syntax', 'logic', 'instructions', 'computations', 'automation'],
  'data': ['information', 'metrics', 'statistics', 'quantitative facts', 'digital assets', 'records', 'intelligence', 'evidence', 'input'],
  'server': ['host', 'node', 'mainframe', 'computational hub', 'data center', 'cloud instance', 'backend system', 'processing unit', 'digital host'],
  'network': ['infrastructure', 'grid', 'system', 'web', 'matrix', 'interconnection', 'communication framework', 'digital ecosystem', 'mesh'],
  'device': ['apparatus', 'gadget', 'instrument', 'tool', 'implement', 'mechanism', 'contraption', 'widget', 'unit'],
  'password': ['credentials', 'authentication string', 'access code', 'security key', 'passphrase', 'cipher', 'verification token', 'digital key', 'secret phrase'],
  'update': ['upgrade', 'refresh', 'modernize', 'revamp', 'overhaul', 'renovate', 'amend', 'enhance', 'patch'],
  'download': ['retrieve', 'acquire digitally', 'transfer', 'obtain', 'extract', 'pull', 'import', 'save locally', 'cache'],
  'upload': ['transmit', 'dispatch', 'relay', 'export', 'push', 'send', 'share', 'commit', 'deposit'],
  'stream': ['transmit live', 'broadcast', 'webcast', 'telecast', 'disseminate', 'relay', 'feed', 'channel', 'pipe'],

  // --- Business/Work ---
  'meeting': ['conclave', 'summit', 'forum', 'assembly', 'convocation', 'rendezvous', 'consultation', 'synod', 'tête-à-tête'],
  'deadline': ['time constraint', 'cutoff', 'target date', 'milestone', 'deliverable', 'due date', 'expiration', 'zero hour', 'timeframe'],
  'salary': ['remuneration', 'compensation', 'emolument', 'stipend', 'pay', 'earnings', 'wages', 'income', 'honorarium'],
  'promotion': ['advancement', 'elevation', 'preferment', 'upgrading', 'aggrandizement', 'exaltation', 'escalation', 'boost', 'raise'],
  'resume': ['curriculum vitae', 'professional dossier', 'qualifications summary', 'career profile', 'bio-data', 'work history', 'credentials', 'vita', 'professional synopsis'],
  'interview': ['audition', 'evaluation', 'examination', 'inquisition', 'screening', 'viva voce', 'oral assessment', 'Q&A session', 'cross-examination'],
  'office': ['workplace', 'headquarters', 'bureau', 'establishment', 'administrative center', 'corporate hub', 'command center', 'base of operations', 'professional environs'],
  'colleague': ['associate', 'coworker', 'compeer', 'confrère', 'workmate', 'teammate', 'collaborator', 'partner', 'ally'],
  'client': ['patron', 'customer', 'consumer', 'purchaser', 'account', 'end-user', 'stakeholder', 'constituent', 'beneficiary'],
  'project': ['undertaking', 'venture', 'enterprise', 'initiative', 'campaign', 'assignment', 'endeavor', 'operation', 'scheme'],

  // --- Academic ---
  'homework': ['assignment', 'coursework', 'study task', 'academic exercise', 'lesson', 'preparatory work', 'scholarly duty', 'pedagogical task', 'didactic labor'],
  'research': ['investigation', 'inquiry', 'exploration', 'study', 'examination', 'probing', 'fact-finding', 'analysis', 'scrutiny'],
  'essay': ['dissertation', 'composition', 'treatise', 'exposition', 'discourse', 'paper', 'thesis', 'monograph', 'disquisition'],
  'exam': ['assessment', 'evaluation', 'appraisal', 'test', 'audit', 'review', 'scrutiny', 'inspection', 'analysis'],
  'grade': ['mark', 'score', 'rating', 'evaluation', 'assessment', 'standing', 'ranking', 'classification', 'designation'],
  'lecture': ['address', 'discourse', 'oration', 'dissertation', 'homily', 'sermon', 'declamation', 'harangue', 'exposition'],
  'professor': ['academician', 'scholar', 'pedagogue', 'lecturer', 'instructor', 'educator', 'don', 'fellow', 'regius professor'],
  'library': ['athenaeum', 'repository', 'archive', 'study hall', 'learning center', 'book depository', 'resource center', 'information hub', 'scriptorium'],
  'campus': ['university grounds', 'academic precinct', 'institutional setting', 'scholastic environment', 'educational compound', 'quadrangle', 'alma mater', 'ivory tower', 'academic village'],
  'degree': ['qualification', 'certification', 'diploma', 'credential', 'accreditation', 'title', 'honor', 'academic honor', 'baccalaureate'],

  // --- Food ---
  'eat': ['consume', 'ingest', 'devour', 'partake of', 'masticate', 'feast upon', 'break bread', 'nourish oneself', 'dine'],
  'drink': ['imbibe', 'quaff', 'sip', 'gulp', 'swallow', 'down', 'partake of', 'refresh oneself', 'hydrate'],
  'cook': ['prepare', 'concoct', 'whip up', 'fabricate', 'fashion', 'brew', 'simmer', 'sear', 'braise'],
  'taste': ['savor', 'sample', 'relish', 'experience', 'discern', 'detect', 'appreciate', 'evaluate', 'palate'],
  'hungry': ['famished', 'ravenous', 'starving', 'peckish', 'voracious', 'esurient', 'insatiable', 'hollow', 'empty'],
  'thirsty': ['parched', 'dehydrated', 'dry-mouthed', 'arid', 'athirst', 'craving', 'parching', 'droughty', 'waterless'],
  'sweet': ['saccharine', 'honeyed', 'cloying', 'toothsome', 'dulcet', 'candied', 'nectarous', 'ambrosial', 'treacly'],
  'salty': ['briny', 'brackish', 'saline', 'piquant', 'tangy', 'flavorful', 'seasoned', 'savory', 'maritime'],
  'spicy': ['piquant', 'zesty', 'peppery', 'fiery', 'hot', 'aromatic', 'pungent', 'tangy', 'flavorful'],
  'bland': ['insipid', 'vapid', 'tasteless', 'flavorless', 'unseasoned', 'neutral', 'mild', 'uninteresting', 'weak'],

  // --- Nature ---
  'tree': ['arbor', 'sapling', 'timber', 'hardwood', 'softwood', 'conifer', 'deciduous', 'evergreen', 'specimen'],
  'flower': ['blossom', 'bloom', 'floret', 'petal', 'inflorescence', 'corolla', 'efflorescence', 'posy', 'bouquet'],
  'water': ['aqua', 'H2O', 'liquid', 'rain', 'precipitation', 'droplet', 'moisture', 'hydration', 'dew'],
  'sun': ['sol', 'daystar', 'helios', 'orb', 'luminary', 'celestial body', 'star', 'solar disk', 'phoebus'],
  'moon': ['luna', 'selene', 'satellite', 'orb', 'crescent', 'gibbous', 'waxing', 'waning', 'lunar body'],
  'star': ['celestial body', 'luminary', 'twinkler', 'heavenly body', 'constellation', 'astral body', 'cosmic entity', 'stellar object', 'fixed star'],
  'sky': ['firmament', 'heavens', 'celestial sphere', 'ether', 'vault', 'welkin', 'empyrean', 'atmosphere', 'aerosphere'],
  'cloud': ['cumulus', 'stratus', 'cirrus', 'nimbus', 'vapor', 'mist', 'haze', 'fog', 'nebula'],
  'rain': ['precipitation', 'downpour', 'deluge', 'drizzle', 'shower', 'rainfall', 'mist', 'sprinkle', 'cloudburst'],
  'wind': ['breeze', 'gust', 'gale', 'zephyr', 'draft', 'current', 'tempest', 'whirlwind', 'squall'],

  // --- Time ---
  'time': ['duration', 'period', 'interval', 'span', 'epoch', 'era', 'moment', 'juncture', 'occasion'],
  'day': ['sunrise to sunset', '24-hour period', 'diurnal cycle', 'calendar day', 'daylight hours', 'working day', 'solar day', 'date', 'sidereal day'],
  'night': ['nocturnal period', 'darkness', 'nighttime', 'evening', 'late hours', 'midnight hours', 'wee hours', 'nocturne', 'twilight'],
  'year': ['twelve months', 'calendar year', 'annual cycle', 'fiscal year', 'solar year', 'annum', 'revolution', 'orbit', 'seasonal cycle'],
  'hour': ['60 minutes', 'temporal unit', 'clock time', 'segment of day', 'measure of duration', 'chronological division', 'moment', 'interval'],
  'minute': ['60 seconds', 'brief time', 'moment', 'instant', 'short period', 'fleeting time', 'jiffy', 'twinkling', 'breath'],
  'second': ['chronon', 'moment', 'flash', 'instant', 'split second', 'blink of an eye', 'jiffy', 'nanosecond', 'heartbeat'],
  'past': ['bygone', 'former', 'previous', 'ancient', 'historical', 'prior', 'preceding', 'foregone', 'antiquated'],
  'present': ['current', 'contemporary', 'existing', 'now', 'immediate', 'ongoing', 'extant', 'up-to-date', 'modern'],
  'future': ['forthcoming', 'approaching', 'impending', 'prospective', 'subsequent', 'ensuing', 'later', 'eventual', 'destiny'],

  // --- Travel ---
  'travel': ['journey', 'voyage', 'expedition', 'odyssey', 'pilgrimage', 'trek', 'peregrination', 'excursion', 'jaunt'],
  'fly': ['aviate', 'soar', 'glide', 'hover', 'wing', 'take flight', 'jet', 'airlift', 'helicopter'],
  'drive': ['motor', 'cruise', 'steer', 'navigate', 'pilot', 'operate', 'chauffeur', 'convey', 'transport'],
  'ride': ['cycle', 'mount', 'commute', 'journey', 'travel', 'hitch', 'board', 'embark', 'tour'],
  'walk': ['stroll', 'amble', 'saunter', 'perambulate', 'hike', 'trek', 'march', 'stride', 'promenade'],
  'run': ['sprint', 'dash', 'race', 'scamper', 'gallop', 'hasten', 'scurry', 'bolt', 'scuttle'],
  'swim': ['paddle', 'dive', 'float', 'freestyle', 'breaststroke', 'backstroke', 'splash', 'wade', 'submerge'],
  'sail': ['navigate', 'voyage', 'cruise', 'yacht', 'boat', 'skim', 'drift', 'coast', 'glide'],
  'explore': ['investigate', 'scout', 'reconnoiter', 'probe', 'survey', 'inspect', 'delve', 'research', 'adventure'],
  'visit': ['sojourn', 'stop by', 'call on', 'drop in', 'attend', 'frequent', 'tour', 'inspect', 'holiday'],

  // --- Body Parts ---
  'head': ['cranium', 'pate', 'noggin', 'crown', 'bean', 'dome', 'noodle', 'skull', 'thinker'],
  'eye': ['orb', 'peeper', 'oculus', 'optic', 'globe', 'lamp', 'eyeball', 'sight organ', 'visual apparatus'],
  'hand': ['palm', 'mitt', 'paw', 'appendage', 'extremity', 'grasper', 'manipulator', 'holder', 'gripper'],
  'foot': ['tootsie', 'hoof', 'paw', 'sole', 'pedal extremity', 'trotter', 'dogs', 'lower limb', 'stomper'],
  'heart': ['ticker', 'pump', 'cardiac muscle', 'core', 'center', 'bosom', 'breast', 'soul', 'vital organ'],
  'brain': ['cerebrum', 'gray matter', 'thinker', 'noodle', 'encephalon', 'intellect', 'mental capacity', 'wits', 'mind'],
  'mouth': ['oral cavity', 'maw', 'gob', 'yap', 'kisser', 'pie hole', 'trap', 'chops', 'jaws'],
  'nose': ['snout', 'proboscis', 'beak', 'schnoz', 'nostrils', 'olfactory organ', 'smeller', 'honker', 'conk'],
  'ear': ['auricle', 'auditory organ', 'hearing apparatus', 'lobe', 'shell', 'listener', 'sound catcher', 'acoustic sensor', 'drum'],
  'hair': ['locks', 'tresses', 'mane', 'follicles', 'strands', 'coiffure', 'curls', 'shag', 'bangs'],

  // --- Clothing ---
  'shirt': ['blouse', 'top', 'tee', 'button-down', 'polo', 'tunic', 'chemise', 'jersey', 'guernsey'],
  'pants': ['trousers', 'slacks', 'breeches', 'jeans', 'khakis', 'leggings', 'chinos', 'denim', 'britches'],
  'shoes': ['footwear', 'sneakers', 'loafers', 'boots', 'sandals', 'oxfords', 'moccasins', 'galoshes', 'slippers'],
  'hat': ['cap', 'headgear', 'chapeau', 'bonnet', 'beanie', 'fedora', 'beret', 'sombrero', 'trilby'],
  'jacket': ['coat', 'blazer', 'windbreaker', 'parka', 'anorak', 'overcoat', 'shell', 'wrapper', 'outerwear'],
  'dress': ['gown', 'frock', 'shift', 'robe', 'ensemble', 'outfit', 'garment', 'apparel', 'attire'],
  'socks': ['hosiery', 'stockings', 'tights', 'footlets', 'anklets', 'knee-highs', 'legwear', 'toe covers', 'foot coverings'],
  'gloves': ['mittens', 'gauntlets', 'handwear', 'coverings', 'fingerless', 'palms', 'grips', 'protectors', 'mitts'],
  'scarf': ['muffler', 'shawl', 'wrap', 'stole', 'pashmina', 'neckwear', 'kerchief', 'boa', 'ascot'],
  'jewelry': ['ornaments', 'adornments', 'trinkets', 'baubles', 'bijouterie', 'gems', 'accessories', 'finery', 'regalia'],

  // --- Home ---
  'house': ['residence', 'domicile', 'abode', 'dwelling', 'habitation', 'home', 'quarters', 'lodging', 'homestead'],
  'room': ['chamber', 'compartment', 'space', 'enclosure', 'area', 'cell', 'cubicle', 'salon', 'parlor'],
  'bed': ['berth', 'bunk', 'cot', 'pallet', 'mattress', 'futon', 'hammock', 'resting place', 'sleeping quarters'],
  'table': ['desk', 'counter', 'stand', 'board', 'surface', 'console', 'worktop', 'altar', 'platform'],
  'chair': ['seat', 'stool', 'bench', 'throne', 'recliner', 'rocking chair', 'armchair', 'settee', 'perch'],
  'window': ['casement', 'pane', 'aperture', 'opening', 'porthole', 'skylight', 'fenestration', 'bay window', 'oriel'],
  'door': ['portal', 'entryway', 'gate', 'hatch', 'threshold', 'access point', 'egress', 'ingress', 'exit'],
  'kitchen': ['galley', 'cookhouse', 'scullery', 'pantry', 'food prep area', 'culinary space', 'mess', 'cuisine center', 'hearth'],
  'bathroom': ['lavatory', 'washroom', 'restroom', 'toilet', 'WC', 'powder room', 'latrine', 'facilities', 'commode'],
  'garden': ['yard', 'plot', 'patch', 'allotment', 'green space', 'horticultural area', 'backyard', 'orchard', 'vegetable patch'],

  // --- Animals ---
  'dog': ['canine', 'hound', 'pooch', 'mutt', 'pup', 'doggie', 'cur', 'mongrel', 'fido'],
  'cat': ['feline', 'kitty', 'pussycat', 'tabby', 'tom', 'mouser', 'kitten', 'moggy', 'felis catus'],
  'bird': ['avian', 'fowl', 'songbird', 'raptor', 'feathered friend', 'winged creature', 'flyer', 'nestling', 'tweeter'],
  'fish': ['aquatic creature', 'finny friend', 'swimmer', 'scaly denizen', 'marine life', 'schooler', 'gilled animal', 'piscine', 'aquatic vertebrate'],
  'horse': ['equine', 'steed', 'mare', 'stallion', 'gelding', 'foal', 'colt', 'filly', 'courser'],
  'cow': ['bovine', 'heifer', 'bull', 'ox', 'calf', 'milker', 'beast', 'ruminant', 'herbivore'],
  'pig': ['swine', 'hog', 'sow', 'boar', 'piglet', 'porker', 'oinker', 'trotter', 'grunter'],
  'sheep': ['ovine', 'ewe', 'ram', 'lamb', 'woolly', 'flock member', 'herbivore', 'grazier', 'bleater'],
  'chicken': ['poultry', 'hen', 'rooster', 'chick', 'biddy', 'layer', 'broiler', 'fryer', 'clucker'],
  'rabbit': ['bunny', 'hare', 'coney', 'lapin', 'cottontail', 'warrener', 'hoppy', 'leporid', 'burrower'],

  // --- Sports ---
  'game': ['match', 'contest', 'competition', 'tournament', 'meet', 'event', 'showdown', 'clash', 'bout'],
  'play': ['participate', 'compete', 'engage', 'perform', 'recreate', 'amuse', 'divert', 'frolic', 'sport'],
  'win': ['triumph', 'prevail', 'conquer', 'succeed', 'dominate', 'vanquish', 'overcome', 'best', 'outplay'],
  'lose': ['fail', 'succumb', 'forfeit', 'yield', 'capitulate', 'fall short', 'be defeated', 'come up short', 'be bested'],
  'team': ['squad', 'crew', 'unit', 'lineup', 'roster', 'side', 'club', 'franchise', 'organization'],
  'score': ['points', 'tally', 'mark', 'result', 'count', 'total', 'sum', 'accumulation', 'account'],
  'ball': ['sphere', 'orb', 'globe', 'spheroid', 'pellet', 'projectile', 'missile', 'shot', 'round'],
  'goal': ['objective', 'aim', 'target', 'purpose', 'intention', 'ambition', 'aspiration', 'end', 'destination'],
  'race': ['contest', 'dash', 'sprint', 'marathon', 'run', 'competition', 'rally', 'derby', 'heat'],
  'swim': ['freestyle', 'breaststroke', 'backstroke', 'butterfly', 'dive', 'paddle', 'float', 'splash', 'wade'],

  // --- Technology ---
  'computer': ['processor', 'machine', 'device', 'system', 'unit', 'mainframe', 'workstation', 'terminal', 'PC'],
  'phone': ['cellular', 'mobile', 'handset', 'device', 'smartphone', 'telephone', 'communicator', 'pocket computer', 'iPhone'],
  'internet': ['web', 'cyberspace', 'online', 'network', 'cloud', 'digital realm', 'information superhighway', 'world wide web', 'the net'],
  'app': ['application', 'program', 'software', 'utility', 'tool', 'platform', 'service', 'interface', 'solution'],
  'website': ['site', 'page', 'portal', 'destination', 'URL', 'domain', 'web presence', 'online location', 'digital property'],
  'video': ['film', 'clip', 'recording', 'footage', 'visual', 'movie', 'animation', 'stream', 'broadcast'],
  'photo': ['picture', 'image', 'snapshot', 'shot', 'print', 'portrait', 'still', 'capture', 'frame'],
  'music': ['audio', 'tune', 'song', 'melody', 'harmony', 'composition', 'track', 'recording', 'sound'],
  'email': ['electronic mail', 'message', 'correspondence', 'communication', 'note', 'dispatch', 'memo', 'letter', 'e-communication'],
  'social media': ['platform', 'network', 'community', 'forum', 'space', 'channel', 'outlet', 'medium', 'interactive media'],

  // --- Weather ---
  'weather': ['climate', 'elements', 'conditions', 'atmosphere', 'meteorology', 'forecast', 'temperature', 'environment', 'sky'],
  'sunny': ['bright', 'clear', 'radiant', 'shining', 'luminous', 'brilliant', 'glowing', 'beaming', 'scorching'],
  'rainy': ['wet', 'drizzly', 'showery', 'pouring', 'damp', 'misty', 'soggy', 'precipitating', 'stormy'],
  'cloudy': ['overcast', 'grey', 'dim', 'dull', 'hazy', 'foggy', 'murky', 'veiled', 'shadowed'],
  'windy': ['breezy', 'gusty', 'blustery', 'tempestuous', 'turbulent', 'stormy', 'howling', 'whistling', 'roaring'],
  'snowy': ['flurrying', 'blizzardy', 'frosty', 'icy', 'wintry', 'freezing', 'glacial', 'arctic', 'sleet'],
  'hot': ['scorching', 'sweltering', 'boiling', 'sizzling', 'blistering', 'roasting', 'torrid', 'searing', 'burning'],
  'cold': ['chilly', 'freezing', 'frigid', 'icy', 'frosty', 'nippy', 'bitter', 'polar', 'arctic'],
  'storm': ['tempest', 'gale', 'hurricane', 'typhoon', 'tornado', 'cyclone', 'squall', 'thunderstorm', 'monsoon'],
  'fog': ['mist', 'haze', 'smog', 'vapor', 'cloud', 'brume', 'steam', 'film', 'obscurity'],

  // --- Colors ---
  'color': ['hue', 'shade', 'tint', 'tone', 'pigment', 'chroma', 'dye', 'coloration', 'spectrum'],
  'red': ['scarlet', 'crimson', 'ruby', 'vermilion', 'cherry', 'brick', 'blood', 'rose', 'garnet'],
  'blue': ['azure', 'cerulean', 'sapphire', 'navy', 'cobalt', 'teal', 'indigo', 'royal', 'sky'],
  'green': ['emerald', 'jade', 'olive', 'lime', 'forest', 'mint', 'sea', 'grass', 'kelly'],
  'yellow': ['gold', 'lemon', 'amber', 'mustard', 'canary', 'maize', 'daffodil', 'sunflower', 'butter'],
  'orange': ['tangerine', 'peach', 'apricot', 'pumpkin', 'carrot', 'rust', 'bronze', 'copper', 'amber'],
  'purple': ['violet', 'lavender', 'lilac', 'plum', 'mauve', 'grape', 'eggplant', 'amethyst', 'magenta'],
  'pink': ['rose', 'salmon', 'fuchsia', 'bubblegum', 'blush', 'coral', 'hot pink', 'peony', 'watermelon'],
  'brown': ['tan', 'beige', 'chocolate', 'coffee', 'caramel', 'hazel', 'chestnut', 'mahogany', 'walnut'],
  'black': ['ebony', 'onyx', 'charcoal', 'jet', 'ink', 'raven', 'midnight', 'shadow', 'pitch'],

  // --- Family ---
  'family': ['kin', 'relatives', 'clan', 'household', 'tribe', 'lineage', 'ancestry', 'descendants', 'bloodline'],
  'mother': ['mom', 'mama', 'mommy', 'ma', 'matriarch', 'parent', 'guardian', 'caregiver', 'progenitor'],
  'father': ['dad', 'daddy', 'papa', 'pa', 'patriarch', 'parent', 'guardian', 'caregiver', 'progenitor'],
  'son': ['boy', 'child', 'offspring', 'heir', 'descendant', 'scion', 'junior', 'progeny', 'successor'],
  'daughter': ['girl', 'child', 'offspring', 'heir', 'descendant', 'scion', 'junior', 'progeny', 'successor'],
  'brother': ['sibling', 'kin', 'relative', 'blood', 'comrade', 'confidant', 'ally', 'friend', 'associate'],
  'sister': ['sibling', 'kin', 'relative', 'blood', 'comrade', 'confidant', 'ally', 'friend', 'associate'],
  'grandparent': ['elder', 'ancestor', 'forebear', 'patriarch', 'matriarch', 'senior', 'forerunner', 'predecessor', 'progenitor'],
  'aunt': ['relative', 'kin', 'family', 'matron', 'guardian', 'caregiver', 'mentor', 'confidant', 'supporter'],
  'uncle': ['relative', 'kin', 'family', 'patron', 'guardian', 'caregiver', 'mentor', 'confidant', 'supporter'],

  // --- Money ---
  'money': ['currency', 'cash', 'funds', 'capital', 'wealth', 'finance', 'resources', 'dough', 'bread'],
  'rich': ['wealthy', 'affluent', 'prosperous', 'opulent', 'moneyed', 'well-off', 'loaded', 'flush', 'privileged'],
  'poor': ['needy', 'impoverished', 'destitute', 'indigent', 'penniless', 'broke', 'underprivileged', 'deprived', 'disadvantaged'],
  'buy': ['purchase', 'acquire', 'procure', 'obtain', 'secure', 'invest in', 'shop', 'pay for', 'trade for'],
  'sell': ['vend', 'market', 'trade', 'merchandise', 'auction', 'liquidate', 'peddle', 'hawk', 'barter'],
  'pay': ['compensate', 'remunerate', 'reimburse', 'settle', 'disburse', 'fork over', 'shell out', 'ante up', 'foot the bill'],
  'cost': ['price', 'expense', 'charge', 'fee', 'rate', 'valuation', 'toll', 'tariff', 'expenditure'],
  'save': ['conserve', 'preserve', 'hoard', 'accumulate', 'set aside', 'reserve', 'stash', 'amass', 'economize'],
  'spend': ['expend', 'disburse', 'outlay', 'consume', 'squander', 'invest', 'allocate', 'lavish', 'fork out'],
  'price': ['cost', 'value', 'rate', 'charge', 'fee', 'expense', 'tariff', 'toll', 'valuation'],

  // --- Health ---
  'health': ['wellness', 'fitness', 'vigor', 'soundness', 'wholeness', 'robustness', 'hardiness', 'stamina', 'vitality'],
  'sick': ['ill', 'unwell', 'ailing', 'indisposed', 'infirm', 'diseased', 'afflicted', 'queasy', 'under the weather'],
  'doctor': ['physician', 'medic', 'clinician', 'practitioner', 'surgeon', 'healer', 'GP', 'specialist', 'MD'],
  'hospital': ['medical center', 'clinic', 'infirmary', 'sanatorium', 'ward', 'institution', 'facility', 'health center', 'treatment center'],
  'medicine': ['remedy', 'cure', 'treatment', 'drug', 'pharmaceutical', 'medication', 'prescription', 'elixir', 'panacea'],
  'pain': ['ache', 'discomfort', 'suffering', 'agony', 'distress', 'torment', 'soreness', 'throb', 'pang'],
  'exercise': ['workout', 'training', 'physical activity', 'aerobics', 'calisthenics', 'fitness', 'conditioning', 'drill', 'movement'],
  'diet': ['nutrition', 'regimen', 'eating plan', 'food intake', 'nourishment', 'meal plan', 'consumption', 'fueling', 'sustenance'],
  'sleep': ['slumber', 'rest', 'repose', 'nap', 'doze', 'snooze', 'drowse', 'siesta', 'hibernation'],
  'stress': ['tension', 'pressure', 'strain', 'anxiety', 'worry', 'nervousness', 'unease', 'apprehension', 'disquiet'],

  // --- Arts ---
  'art': ['creation', 'expression', 'craft', 'work', 'piece', 'composition', 'design', 'masterpiece', 'opus'],
  'music': ['melody', 'harmony', 'tune', 'song', 'composition', 'arrangement', 'score', 'symphony', 'concerto'],
  'dance': ['movement', 'choreography', 'performance', 'routine', 'steps', 'motion', 'ballet', 'terpsichore', 'expression'],
  'paint': ['color', 'brush', 'depict', 'render', 'illustrate', 'portray', 'daub', 'splash', 'decorate'],
  'draw': ['sketch', 'illustrate', 'delineate', 'trace', 'outline', 'render', 'depict', 'design', 'map'],
  'write': ['compose', 'pen', 'draft', 'author', 'scribble', 'jot', 'record', 'transcribe', 'inscribe'],
  'read': ['peruse', 'scan', 'study', 'examine', 'devour', 'browse', 'skim', 'pore over', 'digest'],
  'act': ['perform', 'play', 'portray', 'enact', 'impersonate', 'mimic', 'simulate', 'pretend', 'represent'],
  'film': ['movie', 'picture', 'motion picture', 'cinema', 'feature', 'flick', 'production', 'shoot', 'video'],
  'photo': ['photograph', 'snapshot', 'picture', 'image', 'shot', 'print', 'portrait', 'still', 'capture'],

  // --- Science ---
  'science': ['knowledge', 'study', 'discipline', 'field', 'research', 'inquiry', 'investigation', 'experimentation', 'analysis'],
  'experiment': ['test', 'trial', 'investigation', 'study', 'research', 'examination', 'demonstration', 'procedure', 'analysis'],
  'research': ['investigation', 'study', 'exploration', 'inquiry', 'examination', 'probing', 'fact-finding', 'analysis', 'scrutiny'],
  'theory': ['hypothesis', 'concept', 'idea', 'postulate', 'supposition', 'proposition', 'thesis', 'assumption', 'conjecture'],
  'discover': ['find', 'uncover', 'reveal', 'identify', 'detect', 'ascertain', 'determine', 'observe', 'notice'],
  'invent': ['create', 'devise', 'conceive', 'formulate', 'design', 'originate', 'pioneer', 'develop', 'fabricate'],
  'observe': ['watch', 'notice', 'perceive', 'detect', 'witness', 'monitor', 'survey', 'scrutinize', 'examine'],
  'analyze': ['examine', 'study', 'investigate', 'scrutinize', 'dissect', 'evaluate', 'interpret', 'break down', 'assess'],
  'measure': ['quantify', 'gauge', 'assess', 'calculate', 'determine', 'evaluate', 'appraise', 'estimate', 'compute'],
  'test': ['examine', 'evaluate', 'assess', 'try', 'experiment', 'probe', 'verify', 'validate', 'check'],

  // --- Math ---
  'math': ['mathematics', 'arithmetic', 'calculation', 'computation', 'numbers', 'figures', 'sums', 'algebra', 'geometry'],
  'number': ['digit', 'numeral', 'figure', 'integer', 'quantity', 'amount', 'sum', 'total', 'count'],
  'add': ['sum', 'total', 'combine', 'accumulate', 'tally', 'count', 'append', 'augment', 'increase'],
  'subtract': ['deduct', 'remove', 'withdraw', 'take away', 'decrease', 'diminish', 'lessen', 'reduce', 'discount'],
  'multiply': ['times', 'product', 'increase', 'expand', 'augment', 'compound', 'reproduce', 'propagate', 'amplify'],
  'divide': ['split', 'separate', 'partition', 'share', 'apportion', 'allocate', 'distribute', 'fractionate', 'segment'],
  'equal': ['equivalent', 'identical', 'same', 'tantamount', 'commensurate', 'proportionate', 'alike', 'uniform', 'even'],
  'count': ['enumerate', 'tally', 'number', 'reckon', 'calculate', 'compute', 'add up', 'sum', 'total'],
  'measure': ['quantify', 'gauge', 'assess', 'calculate', 'determine', 'evaluate', 'appraise', 'estimate', 'compute'],
  'solve': ['resolve', 'figure out', 'work out', 'decipher', 'unravel', 'decode', 'crack', 'determine', 'answer'],

  // --- Geography ---
  'earth': ['globe', 'planet', 'world', 'terra', 'Gaia', 'biosphere', 'ecosphere', 'orb', 'cosmic body'],
  'land': ['ground', 'soil', 'earth', 'terrain', 'turf', 'real estate', 'property', 'acreage', 'domain'],
  'water': ['aqua', 'H2O', 'liquid', 'rain', 'precipitation', 'droplet', 'moisture', 'hydration', 'dew'],
  'mountain': ['peak', 'summit', 'elevation', 'height', 'ridge', 'alp', 'pinnacle', 'mount', 'prominence'],
  'river': ['stream', 'waterway', 'brook', 'creek', 'tributary', 'current', 'flow', 'channel', 'estuary'],
  'ocean': ['sea', 'deep', 'brine', 'main', 'waters', 'the drink', 'abyss', 'pelagic zone', 'marine'],
  'forest': ['woods', 'jungle', 'grove', 'copse', 'timberland', 'woodland', 'thicket', 'stand', 'arboretum'],
  'desert': ['wasteland', 'wilderness', 'barrens', 'dunes', 'sands', 'arid zone', 'xeric', 'outback', 'sahara'],
  'city': ['metropolis', 'urban center', 'municipality', 'town', 'borough', 'conurbation', 'megacity', 'cosmopolis', 'capital'],
  'country': ['nation', 'state', 'land', 'realm', 'kingdom', 'republic', 'territory', 'homeland', 'fatherland'],

  // --- Transportation ---
  'car': ['automobile', 'vehicle', 'motorcar', 'sedan', 'coupe', 'wagon', 'convertible', 'SUV', 'roadster'],
  'bus': ['coach', 'omnibus', 'transit', 'shuttle', 'motorcoach', 'minibus', 'double-decker', 'people mover', 'public transport'],
  'train': ['railroad', 'locomotive', 'metro', 'subway', 'express', 'commuter', 'light rail', 'monorail', 'bullet train'],
  'plane': ['aircraft', 'airplane', 'jet', 'airliner', 'aeroplane', 'flying machine', 'helicopter', 'chopper', 'whirlybird'],
  'ship': ['vessel', 'boat', 'yacht', 'liner', 'tanker', 'freighter', 'cruiser', 'craft', 'watercraft'],
  'bike': ['bicycle', 'cycle', 'two-wheeler', 'velocipede', 'pedal bike', 'mountain bike', 'road bike', 'tandem', 'fixie'],
  'walk': ['stroll', 'amble', 'saunter', 'perambulate', 'hike', 'trek', 'march', 'stride', 'promenade'],
  'drive': ['motor', 'cruise', 'steer', 'navigate', 'pilot', 'operate', 'chauffeur', 'convey', 'transport'],
  'fly': ['aviate', 'soar', 'glide', 'hover', 'wing', 'take flight', 'jet', 'airlift', 'helicopter'],
  'travel': ['journey', 'voyage', 'expedition', 'odyssey', 'pilgrimage', 'trek', 'peregrination', 'excursion', 'jaunt'],

  // --- Holidays ---
  'holiday': ['vacation', 'break', 'getaway', 'trip', 'sojourn', 'furlough', 'recess', 'respite', 'time off'],
  'Christmas': ['Yuletide', 'Noel', 'Xmas', 'festive season', 'Christmastime', 'Nativity', 'Advent', 'winter holiday', 'season of giving'],
  'Easter': ['Pascha', 'Resurrection Sunday', 'spring festival', 'holy day', 'feast day', 'Lenten season', 'egg hunt', 'rebirth', 'renewal'],
  'Halloween': ['All Hallows\' Eve', 'Samhain', 'spooky season', 'trick-or-treat', 'haunting', 'ghouls night', 'pumpkin fest', 'costume party', 'fright night'],
  'Thanksgiving': ['harvest festival', 'gratitude day', 'turkey day', 'feast', 'blessing', 'appreciation', 'family gathering', 'autumn celebration', 'giving thanks'],
  'New Year': ['January 1st', 'Auld Lang Syne', 'fresh start', 'ball drop', 'countdown', 'resolution time', 'calendar turnover', 'midnight celebration', 'year\'s beginning'],
  'birthday': ['anniversary', 'natal day', 'celebration', 'special day', 'name day', 'milestone', 'commemoration', 'red-letter day', 'personal holiday'],
  'party': ['celebration', 'gathering', 'soiree', 'festivity', 'shindig', 'bash', 'get-together', 'revelry', 'function'],
  'gift': ['present', 'offering', 'donation', 'contribution', 'token', 'souvenir', 'memento', 'keepsake', 'favor'],
  'celebrate': ['commemorate', 'observe', 'honor', 'mark', 'recognize', 'salute', 'toast', 'rejoice', 'fete'],

  // --- Politics ---
  'government': ['administration', 'regime', 'authority', 'leadership', 'establishment', 'regimen', 'jurisdiction', 'governance', 'rule'],
  'president': ['leader', 'chief executive', 'commander-in-chief', 'head of state', 'premier', 'chairperson', 'principal', 'director', 'governor'],
  'law': ['statute', 'regulation', 'rule', 'decree', 'ordinance', 'act', 'bill', 'legislation', 'code'],
  'vote': ['ballot', 'poll', 'election', 'referendum', 'plebiscite', 'suffrage', 'choice', 'selection', 'decision'],
  'country': ['nation', 'state', 'land', 'realm', 'kingdom', 'republic', 'territory', 'homeland', 'fatherland'],
  'war': ['conflict', 'battle', 'combat', 'fighting', 'hostilities', 'campaign', 'crusade', 'struggle', 'clash'],
  'peace': ['tranquility', 'harmony', 'accord', 'concord', 'amity', 'ceasefire', 'armistice', 'reconciliation', 'serenity'],
  'rights': ['privileges', 'entitlements', 'freedoms', 'liberties', 'immunities', 'prerogatives', 'claims', 'powers', 'authorizations'],
  'tax': ['levy', 'duty', 'tariff', 'toll', 'impost', 'assessment', 'contribution', 'tribute', 'excise'],
  'leader': ['chief', 'head', 'director', 'commander', 'supervisor', 'manager', 'administrator', 'governor', 'ruler'],

  // --- Religion ---
  'God': ['deity', 'divinity', 'creator', 'almighty', 'lord', 'supreme being', 'higher power', 'omnipotent', 'eternal'],
  'church': ['temple', 'cathedral', 'chapel', 'sanctuary', 'house of worship', 'basilica', 'abbey', 'shrine', 'mosque'],
  'pray': ['worship', 'invoke', 'supplicate', 'beseech', 'entreat', 'implore', 'petition', 'commune', 'meditate'],
  'faith': ['belief', 'trust', 'confidence', 'conviction', 'creed', 'doctrine', 'religion', 'devotion', 'piety'],
  'soul': ['spirit', 'essence', 'being', 'core', 'psyche', 'inner self', 'consciousness', 'vital force', 'life force'],
  'heaven': ['paradise', 'eternity', 'afterlife', 'kingdom come', 'glory', 'bliss', 'nirvana', 'utopia', 'eden'],
  'hell': ['underworld', 'inferno', 'abyss', 'perdition', 'hades', 'netherworld', 'purgatory', 'damnation', 'torment'],
  'angel': ['messenger', 'seraph', 'cherub', 'spirit', 'guardian', 'celestial being', 'divine agent', 'heavenly host', 'archangel'],
  'devil': ['satan', 'lucifer', 'beelzebub', 'demon', 'fiend', 'evil one', 'antichrist', 'tempter', 'adversary'],
  'bible': ['scripture', 'holy writ', 'word of God', 'gospel', 'testament', 'sacred text', 'good book', 'canon', 'torah'],

  // --- Military ---
  'army': ['military', 'troops', 'forces', 'soldiers', 'legion', 'brigade', 'battalion', 'regiment', 'garrison'],
  'war': ['conflict', 'battle', 'combat', 'fighting', 'hostilities', 'campaign', 'crusade', 'struggle', 'clash'],
  'soldier': ['warrior', 'fighter', 'trooper', 'combatant', 'serviceman', 'private', 'grunt', 'infantryman', 'marine'],
  'gun': ['firearm', 'weapon', 'pistol', 'rifle', 'revolver', 'shotgun', 'artillery', 'cannon', 'musket'],
  'battle': ['fight', 'engagement', 'skirmish', 'clash', 'conflict', 'encounter', 'duel', 'melee', 'contest'],
  'enemy': ['foe', 'adversary', 'opponent', 'antagonist', 'rival', 'competitor', 'nemesis', 'combatant', 'hostile'],
  'attack': ['assault', 'strike', 'raid', 'offensive', 'charge', 'onslaught', 'invasion', 'blitz', 'ambush'],
  'defend': ['protect', 'guard', 'shield', 'secure', 'safeguard', 'fortify', 'preserve', 'support', 'uphold'],
  'victory': ['triumph', 'success', 'conquest', 'win', 'achievement', 'domination', 'ascendancy', 'supremacy', 'conquest'],
  'defeat': ['loss', 'failure', 'rout', 'overthrow', 'conquest', 'subjugation', 'collapse', 'downfall', 'ruin'],

  // --- Legal ---
  'law': ['statute', 'regulation', 'rule', 'decree', 'ordinance', 'act', 'bill', 'legislation', 'code'],
  'court': ['tribunal', 'forum', 'bench', 'judiciary', 'chamber', 'session', 'hearing', 'venue', 'justice'],
  'judge': ['magistrate', 'justice', 'arbiter', 'adjudicator', 'referee', 'umpire', 'mediator', 'overseer', 'moderator'],
  'jury': ['panel', 'tribunal', 'board', 'committee', 'council', 'assembly', 'commission', 'adjudicators', 'peers'],
  'trial': ['hearing', 'proceeding', 'case', 'litigation', 'inquest', 'examination', 'inquiry', 'test', 'contest'],
  'crime': ['offense', 'violation', 'transgression', 'misdemeanor', 'felony', 'wrongdoing', 'misconduct', 'delinquency', 'sin'],
  'guilty': ['culpable', 'responsible', 'accountable', 'blameworthy', 'convicted', 'condemned', 'reprehensible', 'sinful', 'wicked'],
  'innocent': ['blameless', 'guiltless', 'faultless', 'pure', 'virtuous', 'untainted', 'irreproachable', 'spotless', 'sinless'],
  'witness': ['observer', 'bystander', 'spectator', 'onlooker', 'testifier', 'eyewitness', 'attestor', 'deponent', 'corroborator'],
  'evidence': ['proof', 'testimony', 'confirmation', 'verification', 'substantiation', 'corroboration', 'demonstration', 'indication', 'clue'],

  // --- Shopping ---
  'buy': ['purchase', 'acquire', 'procure', 'obtain', 'secure', 'invest in', 'shop', 'pay for', 'trade for'],
  'sell': ['vend', 'market', 'trade', 'merchandise', 'auction', 'liquidate', 'peddle', 'hawk', 'barter'],
  'shop': ['store', 'boutique', 'emporium', 'market', 'outlet', 'mart', 'establishment', 'retailer', 'merchant'],
  'price': ['cost', 'value', 'rate', 'charge', 'fee', 'expense', 'tariff', 'toll', 'valuation'],
  'discount': ['reduction', 'deduction', 'rebate', 'allowance', 'concession', 'markdown', 'saving', 'cut', 'deal'],
  'deal': ['bargain', 'agreement', 'transaction', 'arrangement', 'pact', 'contract', 'understanding', 'compromise', 'settlement'],
  'pay': ['compensate', 'remunerate', 'reimburse', 'settle', 'disburse', 'fork over', 'shell out', 'ante up', 'foot the bill'],
  'credit': ['loan', 'advance', 'borrowing', 'trust', 'deferred payment', 'installment', 'charge', 'account', 'leverage'],
  'cash': ['money', 'currency', 'bills', 'notes', 'legal tender', 'specie', 'change', 'loot', 'dough'],
  'return': ['give back', 'restore', 'replace', 'refund', 'reimburse', 'revert', 'retreat', 'go back', 'come back'],

  // --- Relationships ---
  'friend': ['companion', 'ally', 'confidant', 'comrade', 'pal', 'buddy', 'chum', 'mate', 'acquaintance'],
  'love': ['affection', 'adoration', 'devotion', 'fondness', 'passion', 'infatuation', 'ardor', 'attachment', 'cherish'],
  'hate': ['despise', 'loathe', 'detest', 'abhor', 'scorn', 'disdain', 'abominate', 'execrate', 'revile'],
  'marry': ['wed', 'unite', 'join', 'espouse', 'tie the knot', 'pledge', 'commit', 'bond', 'conjoin'],
  'divorce': ['separate', 'split', 'dissolve', 'annul', 'part', 'disunite', 'sever', 'break up', 'estrange'],
  'family': ['kin', 'relatives', 'clan', 'household', 'tribe', 'lineage', 'ancestry', 'descendants', 'bloodline'],
  'parent': ['guardian', 'caregiver', 'progenitor', 'mother/father', 'ancestor', 'forebear', 'predecessor', 'elder', 'senior'],
  'child': ['offspring', 'progeny', 'descendant', 'youngster', 'minor', 'juvenile', 'kid', 'toddler', 'infant'],
  'partner': ['associate', 'colleague', 'companion', 'ally', 'collaborator', 'teammate', 'spouse', 'significant other', 'mate'],
  'breakup': ['separation', 'split', 'parting', 'divorce', 'estrangement', 'rift', 'schism', 'disunion', 'dissolution'],

  // --- Education ---
  'learn': ['study', 'acquire', 'absorb', 'assimilate', 'grasp', 'master', 'comprehend', 'digest', 'internalize'],
  'teach': ['instruct', 'educate', 'tutor', 'coach', 'mentor', 'guide', 'enlighten', 'indoctrinate', 'school'],
  'school': ['academy', 'institution', 'college', 'university', 'seminary', 'conservatory', 'lyceum', 'alma mater', 'establishment'],
  'class': ['lesson', 'session', 'lecture', 'seminar', 'workshop', 'tutorial', 'course', 'instruction', 'period'],
  'student': ['pupil', 'learner', 'scholar', 'apprentice', 'disciple', 'trainee', 'undergraduate', 'cadet', 'novice'],
  'teacher': ['instructor', 'educator', 'professor', 'mentor', 'tutor', 'pedagogue', 'guide', 'lecturer', 'guru'],
  'book': ['tome', 'volume', 'publication', 'manual', 'text', 'novel', 'treatise', 'opus', 'work'],
  'read': ['peruse', 'scan', 'study', 'examine', 'devour', 'browse', 'skim', 'pore over', 'digest'],
  'write': ['compose', 'pen', 'draft', 'author', 'scribble', 'jot', 'record', 'transcribe', 'inscribe'],
  'test': ['exam', 'quiz', 'assessment', 'evaluation', 'appraisal', 'measurement', 'trial', 'check', 'inquisition'],

  // --- Communication ---
  'talk': ['speak', 'converse', 'discuss', 'chat', 'communicate', 'dialogue', 'confer', 'parley', 'negotiate'],
  'say': ['state', 'declare', 'announce', 'pronounce', 'utter', 'express', 'voice', 'articulate', 'enunciate'],
  'tell': ['inform', 'notify', 'apprise', 'advise', 'relate', 'narrate', 'report', 'disclose', 'reveal'],
  'ask': ['inquire', 'question', 'query', 'interrogate', 'quiz', 'probe', 'examine', 'request', 'solicit'],
  'answer': ['respond', 'reply', 'retort', 'acknowledge', 'counter', 'rejoin', 'react', 'return', 'reciprocate'],
  'explain': ['clarify', 'elucidate', 'expound', 'interpret', 'define', 'demonstrate', 'illustrate', 'unfold', 'unravel'],
  'understand': ['comprehend', 'grasp', 'fathom', 'perceive', 'discern', 'apprehend', 'realize', 'recognize', 'know'],
  'listen': ['hear', 'heed', 'attend', 'harken', 'eavesdrop', 'overhear', 'monitor', 'observe', 'pay attention'],
  'call': ['phone', 'ring', 'dial', 'contact', 'reach', 'summon', 'invoke', 'hail', 'buzz'],
  'message': ['communication', 'note', 'memo', 'dispatch', 'letter', 'missive', 'correspondence', 'announcement', 'bulletin'],

  // --- Weather ---
  'sun': ['sol', 'daystar', 'helios', 'orb', 'luminary', 'celestial body', 'star', 'solar disk', 'phoebus'],
  'rain': ['precipitation', 'downpour', 'deluge', 'drizzle', 'shower', 'rainfall', 'mist', 'sprinkle', 'cloudburst'],
  'snow': ['flurry', 'blizzard', 'whiteout', 'sleet', 'hail', 'frost', 'ice', 'avalanche', 'powder'],
  'wind': ['breeze', 'gust', 'gale', 'zephyr', 'draft', 'current', 'tempest', 'whirlwind', 'squall'],
  'storm': ['tempest', 'gale', 'hurricane', 'typhoon', 'tornado', 'cyclone', 'squall', 'thunderstorm', 'monsoon'],
  'cloud': ['cumulus', 'stratus', 'cirrus', 'nimbus', 'vapor', 'mist', 'haze', 'fog', 'nebula'],
  'hot': ['scorching', 'sweltering', 'boiling', 'sizzling', 'blistering', 'roasting', 'torrid', 'searing', 'burning'],
  'cold': ['chilly', 'freezing', 'frigid', 'icy', 'frosty', 'nippy', 'bitter', 'polar', 'arctic'],
  'warm': ['tepid', 'lukewarm', 'balmy', 'mild', 'temperate', 'pleasant', 'agreeable', 'genial', 'summery'],
  'dry': ['arid', 'parched', 'dehydrated', 'desiccated', 'thirsty', 'waterless', 'rainless', 'barren', 'droughty'],

  // --- Nature ---
  'tree': ['arbor', 'sapling', 'timber', 'hardwood', 'softwood', 'conifer', 'deciduous', 'evergreen', 'specimen'],
  'flower': ['blossom', 'bloom', 'floret', 'petal', 'inflorescence', 'corolla', 'efflorescence', 'posy', 'bouquet'],
  'water': ['aqua', 'H2O', 'liquid', 'rain', 'precipitation', 'droplet', 'moisture', 'hydration', 'dew'],
  'mountain': ['peak', 'summit', 'elevation', 'height', 'ridge', 'alp', 'pinnacle', 'mount', 'prominence'],
  'river': ['stream', 'waterway', 'brook', 'creek', 'tributary', 'current', 'flow', 'channel', 'estuary'],
  'ocean': ['sea', 'deep', 'brine', 'main', 'waters', 'the drink', 'abyss', 'pelagic zone', 'marine'],
  'forest': ['woods', 'jungle', 'grove', 'copse', 'timberland', 'woodland', 'thicket', 'stand', 'arboretum'],
  'desert': ['wasteland', 'wilderness', 'barrens', 'dunes', 'sands', 'arid zone', 'xeric', 'outback', 'sahara'],
  'sky': ['firmament', 'heavens', 'celestial sphere', 'ether', 'vault', 'welkin', 'empyrean', 'atmosphere', 'aerosphere'],
  'earth': ['globe', 'planet', 'world', 'terra', 'Gaia', 'biosphere', 'ecosphere', 'orb', 'cosmic body'],

  // --- Body Parts ---
  'head': ['cranium', 'pate', 'noggin', 'crown', 'bean', 'dome', 'noodle', 'skull', 'thinker'],
  'eye': ['orb', 'peeper', 'oculus', 'optic', 'globe', 'lamp', 'eyeball', 'sight organ', 'visual apparatus'],
  'hand': ['palm', 'mitt', 'paw', 'appendage', 'extremity', 'grasper', 'manipulator', 'holder', 'gripper'],
  'foot': ['tootsie', 'hoof', 'paw', 'sole', 'pedal extremity', 'trotter', 'dogs', 'lower limb', 'stomper'],
  'heart': ['ticker', 'pump', 'cardiac muscle', 'core', 'center', 'bosom', 'breast', 'soul', 'vital organ'],
  'brain': ['cerebrum', 'gray matter', 'thinker', 'noodle', 'encephalon', 'intellect', 'mental capacity', 'wits', 'mind'],
  'mouth': ['oral cavity', 'maw', 'gob', 'yap', 'kisser', 'pie hole', 'trap', 'chops', 'jaws'],
  'nose': ['snout', 'proboscis', 'beak', 'schnoz', 'nostrils', 'olfactory organ', 'smeller', 'honker', 'conk'],
  'ear': ['auricle', 'auditory organ', 'hearing apparatus', 'lobe', 'shell', 'listener', 'sound catcher', 'acoustic sensor', 'drum'],
  'hair': ['locks', 'tresses', 'mane', 'follicles', 'strands', 'coiffure', 'curls', 'shag', 'bangs'],

  // --- Clothing ---
  'shirt': ['blouse', 'top', 'tee', 'button-down', 'polo', 'tunic', 'chemise', 'jersey', 'guernsey'],
  'pants': ['trousers', 'slacks', 'breeches', 'jeans', 'khakis', 'leggings', 'chinos', 'denim', 'britches'],
  'shoes': ['footwear', 'sneakers', 'loafers', 'boots', 'sandals', 'oxfords', 'moccasins', 'galoshes', 'slippers'],
  'hat': ['cap', 'headgear', 'chapeau', 'bonnet', 'beanie', 'fedora', 'beret', 'sombrero', 'trilby'],
  'jacket': ['coat', 'blazer', 'windbreaker', 'parka', 'anorak', 'overcoat', 'shell', 'wrapper', 'outerwear'],
  'dress': ['gown', 'frock', 'shift', 'robe', 'ensemble', 'outfit', 'garment', 'apparel', 'attire'],
  'socks': ['hosiery', 'stockings', 'tights', 'footlets', 'anklets', 'knee-highs', 'legwear', 'toe covers', 'foot coverings'],
  'gloves': ['mittens', 'gauntlets', 'handwear', 'coverings', 'fingerless', 'palms', 'grips', 'protectors', 'mitts'],
  'scarf': ['muffler', 'shawl', 'wrap', 'stole', 'pashmina', 'neckwear', 'kerchief', 'boa', 'ascot'],
  'jewelry': ['ornaments', 'adornments', 'trinkets', 'baubles', 'bijouterie', 'gems', 'accessories', 'finery', 'regalia'],

  // --- Home ---
  'house': ['residence', 'domicile', 'abode', 'dwelling', 'habitation', 'home', 'quarters', 'lodging', 'homestead'],
  'room': ['chamber', 'compartment', 'space', 'enclosure', 'area', 'cell', 'cubicle', 'salon', 'parlor'],
  'bed': ['berth', 'bunk', 'cot', 'pallet', 'mattress', 'futon', 'hammock', 'resting place', 'sleeping quarters'],
  'table': ['desk', 'counter', 'stand', 'board', 'surface', 'console', 'worktop', 'altar', 'platform'],
  'chair': ['seat', 'stool', 'bench', 'throne', 'recliner', 'rocking chair', 'armchair', 'settee', 'perch'],
  'window': ['casement', 'pane', 'aperture', 'opening', 'porthole', 'skylight', 'fenestration', 'bay window', 'oriel'],
  'door': ['portal', 'entryway', 'gate', 'hatch', 'threshold', 'access point', 'egress', 'ingress', 'exit'],

};

// Words to avoid replacing in certain contexts (e.g., technical terms, proper nouns)
const preserveInContext = [
  // Technical terms
  'API', 'HTTP', 'CSS', 'HTML', 'JavaScript', 'JSON', 'SQL', 'XML',
  // Common proper nouns
  'Google', 'Facebook', 'Twitter', 'Microsoft', 'Apple',
  // Days and months
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

// Emoji fancification for additional whimsy
const emojiReplacements = {
  'happy': ['😄', '🎉', '✨', '🌟', '😊'],
  'sad': ['😢', '💔', '🌧️', '😭', '🥺'],
  'love': ['❤️', '💖', '💕', '🥰', '💓'],
  'good': ['👍', '🏆', '🌈', '💯', '✅'],
  'bad': ['👎', '❌', '🚫', '💩', '😖']
};

class EnhancedTextFancifier {
  constructor() {
    this.initializeElements();
    this.bindEvents();
    this.loadSettings();
    this.currentTab = 'fancify';
  }

  initializeElements() {
    this.inputText = document.getElementById('inputText');
    this.fancifyBtn = document.getElementById('fancifyBtn');
    this.copyBtn = document.getElementById('copyBtn');
    this.fancifiedText = document.getElementById('fancifiedText');
    this.fancifiedSection = document.getElementById('fancifiedSection');
    this.intensitySlider = document.getElementById('intensitySlider');
    this.contextAwareToggle = document.getElementById('contextAwareToggle');
    this.preserveProperNounsToggle = document.getElementById('preserveProperNounsToggle');
    
    // Synonym finder elements
    this.fancifyTab = document.getElementById('fancifyTab');
    this.synonymTab = document.getElementById('synonymTab');
    this.fancifySection = document.getElementById('fancifySection');
    this.synonymSection = document.getElementById('synonymSection');
    this.synonymInput = document.getElementById('synonymInput');
    this.findSynonymsBtn = document.getElementById('findSynonymsBtn');
    this.synonymResults = document.getElementById('synonymResults');
  }

  bindEvents() {
    this.fancifyBtn.addEventListener('click', () => this.fancifyText());
    this.copyBtn.addEventListener('click', () => this.copyToClipboard());
    this.inputText.addEventListener('input', () => this.updateCopyButtonState());
    this.contextAwareToggle?.addEventListener('change', () => this.saveSettings());
    this.preserveProperNounsToggle?.addEventListener('change', () => this.saveSettings());
    this.intensitySlider.addEventListener('change', () => this.saveSettings());
    
    // Synonym finder events
    this.fancifyTab.addEventListener('click', () => this.switchTab('fancify'));
    this.synonymTab.addEventListener('click', () => this.switchTab('synonym'));
    this.findSynonymsBtn.addEventListener('click', () => this.findSynonyms());
    this.synonymInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.findSynonyms();
    });
  }

  switchTab(tab) {
    this.currentTab = tab;
    if (tab === 'fancify') {
      this.fancifyTab.classList.add('active');
      this.synonymTab.classList.remove('active');
      this.fancifySection.classList.remove('hidden');
      this.synonymSection.classList.add('hidden');
    } else {
      this.fancifyTab.classList.remove('active');
      this.synonymTab.classList.add('active');
      this.fancifySection.classList.add('hidden');
      this.synonymSection.classList.remove('hidden');
    }
  }

  findSynonyms() {
    const word = this.synonymInput.value.trim().toLowerCase();
    if (!word) {
      this.synonymResults.innerHTML = '<p class="text-red-500">Please enter a word to find synonyms</p>';
      return;
    }

    const synonyms = [];
    
    if (fancyReplacements[word]) {
      synonyms.push(...fancyReplacements[word]);
    }
    
    for (const [phrase, alternatives] of Object.entries(phraseReplacements)) {
      if (phrase.toLowerCase() === word) {
        synonyms.push(...alternatives);
      }
    }
    
    for (const [contextWord, contexts] of Object.entries(contextReplacements)) {
      if (contextWord.toLowerCase() === word) {
        for (const contextSynonyms of Object.values(contexts)) {
          synonyms.push(...contextSynonyms);
        }
      }
    }

    if (synonyms.length > 0) {
      const uniqueSynonyms = [...new Set(synonyms)];
      
      const resultsHTML = `
        <h3 class="font-semibold mb-2">Synonyms for "${word}":</h3>
        <div class="grid grid-cols-2 gap-2">
          ${uniqueSynonyms.map(syn => `
            <div class="p-2 bg-white rounded border hover:bg-blue-50 cursor-pointer"
                 onclick="document.getElementById('synonymInput').value='${syn}'">
              ${syn}
            </div>
          `).join('')}
        </div>c
      `;
      this.synonymResults.innerHTML = resultsHTML;
    } else {
      this.synonymResults.innerHTML = `
        <p class="text-red-500">No synonyms found for "${word}" in our database.</p>
        <p class="text-sm text-gray-500 mt-2">Try a different word or check your spelling.</p>
      `;
    }
  }

  loadSettings() {
    chrome.storage.sync.get(
      {
        intensity: 2,
        contextAware: true,
        preserveProperNouns: true
      },
      (items) => {
        this.intensitySlider.value = items.intensity;
        if (this.contextAwareToggle) this.contextAwareToggle.checked = items.contextAware;
        if (this.preserveProperNounsToggle) this.preserveProperNounsToggle.checked = items.preserveProperNouns;
      }
    );
  }

  saveSettings() {
    chrome.storage.sync.set({
      intensity: parseInt(this.intensitySlider.value),
      contextAware: this.contextAwareToggle?.checked ?? true,
      preserveProperNouns: this.preserveProperNounsToggle?.checked ?? true
    });
  }

  updateCopyButtonState() {
    this.copyBtn.disabled = !this.fancifiedText.value.trim();
  }

  getRandomAlternative(alternatives) {
    return alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  detectPartOfSpeech(word, prevWord, nextWord) {
    if (['a', 'an', 'the'].includes(prevWord?.toLowerCase())) {
      return 'noun';
    }
    
    if (['i', 'you', 'he', 'she', 'we', 'they'].includes(prevWord?.toLowerCase())) {
      return 'verb';
    }
    
    if (['is', 'are', 'was', 'were', 'seems', 'looks', 'feels', 'very'].includes(prevWord?.toLowerCase())) {
      return 'adjective';
    }
    
    if (['turn', 'go', 'move', 'point', 'look', 'face', 'heading'].includes(prevWord?.toLowerCase())) {
      return 'direction';
    }
    
    return 'unknown';
  }

  isProperNoun(word) {
    return (
      word.length > 1 && 
      word[0] === word[0].toUpperCase() && 
      word[1] === word[1].toLowerCase()
    );
  }

  isInPreserveList(word) {
    return preserveInContext.some(term => 
      term.toLowerCase() === word.toLowerCase()
    );
  }

  replacePhrase(text, intensity) {
    for (const [phrase, alternatives] of Object.entries(phraseReplacements)) {
      const phraseRegex = new RegExp(`\\b${phrase}\\b`, 'gi');
      text = text.replace(phraseRegex, () => {
        return this.getRandomAlternative(alternatives);
      });
    }
    return text;
  }

  fancifyText() {
    const intensity = parseInt(this.intensitySlider.value);
    const contextAware = this.contextAwareToggle?.checked ?? true;
    const preserveProperNouns = this.preserveProperNounsToggle?.checked ?? true;
    
    let modifiedText = this.inputText.value;
    
    modifiedText = this.replacePhrase(modifiedText, intensity);
    
    const words = modifiedText.split(/(\s+|\b)/);
    
    if (contextAware) {
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const trimmedWord = word.trim();
        
        if (!trimmedWord || /\s/.test(trimmedWord) || /[^\w]/.test(trimmedWord)) continue;
        
        if (preserveProperNouns && this.isProperNoun(trimmedWord) && !this.isFirstWordInSentence(words, i)) continue;
        
        if (this.isInPreserveList(trimmedWord)) continue;
        
        const lowerWord = trimmedWord.toLowerCase();
        
        if (contextReplacements[lowerWord]) {
          const pos = this.detectPartOfSpeech(trimmedWord, words[i-2], words[i+2]);
          const contextAlternatives = contextReplacements[lowerWord][pos] || 
                                     contextReplacements[lowerWord]['noun'];
          
          if (contextAlternatives) {
            words[i] = this.replaceWordWithAlternative(trimmedWord, contextAlternatives, intensity);
            continue;
          }
        }
        
        if (fancyReplacements[lowerWord]) {
          words[i] = this.replaceWordWithAlternative(trimmedWord, fancyReplacements[lowerWord], intensity);
        }
      }
      
      modifiedText = words.join('');
    } else {
      Object.entries(fancyReplacements).forEach(([original, alternatives]) => {
        const wordRegex = new RegExp(`\\b${original}\\b`, 'gi');
        
        modifiedText = modifiedText.replace(wordRegex, (match) => {
          if (preserveProperNouns && this.isProperNoun(match)) return match;
          
          if (this.isInPreserveList(match)) return match;
          
          const replacement = this.getRandomAlternative(alternatives);
          
          return match[0] === match[0].toUpperCase() 
            ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
            : replacement;
        });
      });
    }
    
    if (intensity === 3) {
      Object.entries(emojiReplacements).forEach(([word, emojis]) => {
        const wordRegex = new RegExp(`\\b${word}\\b`, 'gi');
        modifiedText = modifiedText.replace(wordRegex, (match) => {
          return `${match} ${this.getRandomAlternative(emojis)}`;
        });
      });
    }
    
    this.fancifiedText.value = modifiedText;
    this.fancifiedSection.classList.remove('hidden');
    this.copyBtn.disabled = false;
  }
  
  isFirstWordInSentence(words, index) {
    for (let i = index - 1; i >= 0; i--) {
      const prevWord = words[i].trim();
      if (prevWord) {
        return /[.!?]$/.test(prevWord);
      }
    }
    return true;
  }
  
  replaceWordWithAlternative(word, alternatives, intensity) {
    const replacementCount = intensity === 1 ? 1 : (intensity === 2 ? Math.ceil(alternatives.length / 2) : alternatives.length);
    
    const selectedAlternatives = alternatives
      .sort(() => 0.5 - Math.random())
      .slice(0, replacementCount);
    
    const replacement = this.getRandomAlternative(selectedAlternatives);
    
    return word[0] === word[0].toUpperCase() 
      ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
      : replacement;
  }

  copyToClipboard() {
    this.fancifiedText.select();
    document.execCommand('copy');
    
    this.copyBtn.textContent = 'Copied!';
    this.copyBtn.classList.remove('bg-green-500');
    this.copyBtn.classList.add('bg-purple-500');
    
    setTimeout(() => {
      this.copyBtn.textContent = 'Copy Fancified Text';
      this.copyBtn.classList.remove('bg-purple-500');
      this.copyBtn.classList.add('bg-green-500');
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new EnhancedTextFancifier();
});