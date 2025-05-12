
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

  async fancifyText() {
    const input = this.inputText.value.trim();
    if (!input) {
      alert('Please enter some text to fancify');
      return;
    }

    // Show loading state
    this.fancifiedText.value = "Fancifying your text...";
    this.fancifiedSection.classList.remove('hidden');
    this.copyBtn.disabled = true;
    
    try {
      // Split into sentences first for better context handling
      const sentences = input.split(/(?<=[.!?])\s+/);
      let fancifiedSentences = [];
      
      for (const sentence of sentences) {
        // Process each sentence with context awareness
        const fancifiedSentence = await this.processSentence(sentence);
        fancifiedSentences.push(fancifiedSentence);
      }
      
      this.fancifiedText.value = fancifiedSentences.join(' ');
      this.copyBtn.disabled = false;
    } catch (error) {
      console.error('Error fancifying text:', error);
      this.fancifiedText.value = "Error occurred while fancifying your text.";
    }
  }

  async processSentence(sentence) {
    // First try to get the sentence structure from WordsAPI
    const sentenceAnalysis = await this.analyzeSentence(sentence);
    
    // If we got a good analysis, use it to guide replacements
    if (sentenceAnalysis && sentenceAnalysis.tags) {
      return await this.fancifyWithContext(sentence, sentenceAnalysis);
    }
    
    // Fallback to word-by-word replacement with basic context
    const words = sentence.split(/\s+/);
    let fancifiedWords = [];
    
    for (const word of words) {
      // Check if we should preserve this word
      if (this.shouldPreserveWord(word)) {
        fancifiedWords.push(word);
        continue;
      }
      
      // Get a fancy replacement
      const fancyWord = await this.getBestSynonym(word, sentence);
      fancifiedWords.push(fancyWord);
    }
    
    return fancifiedWords.join(' ');
  }

  async fancifyWithContext(sentence, analysis) {
    const words = sentence.split(/\s+/);
    const tags = analysis.tags;
    let fancifiedWords = [];
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const tag = tags[i] ? tags[i] : null;
      
      if (this.shouldPreserveWord(word)) {
        fancifiedWords.push(word);
        continue;
      }
      
      // Get a context-aware replacement
      const fancyWord = await this.getContextualSynonym(word, tag, sentence);
      fancifiedWords.push(fancyWord);
    }
    
    return fancifiedWords.join(' ');
  }

  shouldPreserveWord(word) {
    // Preserve proper nouns if setting is enabled
    if (this.preserveProperNounsToggle.checked && word[0] === word[0].toUpperCase()) {
      return true;
    }
    
    // Preserve URLs and email addresses
    if (word.match(/^(https?:\/\/|www\.|mailto:)/i) || word.includes('@')) {
      return true;
    }
    
    // Preserve numbers
    if (word.match(/^\d+$/)) {
      return true;
    }
    
    return false;
  }

  async getContextualSynonym(word, tag, context) {
    try {
      // First try to get synonyms with context from WordsAPI
      const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${encodeURIComponent(word)}/synonyms`, {
        headers: {
          'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // You'll need to get a free key
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.synonyms && data.synonyms.length > 0) {
          // Filter synonyms by part of speech if we have that info
          let filteredSynonyms = data.synonyms;
          if (tag) {
            filteredSynonyms = this.filterSynonymsByPOS(data.synonyms, tag);
          }
          
          if (filteredSynonyms.length > 0) {
            return this.selectSynonymByIntensity(filteredSynonyms);
          }
        }
      }
      
      // Fallback to Datamuse API with context
      return await this.getBestSynonym(word, context);
    } catch (error) {
      console.error('Error getting contextual synonym:', error);
      return word;
    }
  }

  filterSynonymsByPOS(synonyms, posTag) {
    // This is a simplified version - in a real app you'd want to use a proper POS tagger
    const posMap = {
      'noun': ['NN', 'NNS', 'NNP', 'NNPS'],
      'verb': ['VB', 'VBD', 'VBG', 'VBN', 'VBP', 'VBZ'],
      'adjective': ['JJ', 'JJR', 'JJS'],
      'adverb': ['RB', 'RBR', 'RBS']
    };
    
    // Just return all synonyms if we can't determine the POS
    if (!posTag) return synonyms;
    
    // Try to find the most likely POS category
    let posCategory = null;
    for (const [category, tags] of Object.entries(posMap)) {
      if (tags.includes(posTag)) {
        posCategory = category;
        break;
      }
    }
    
    if (!posCategory) return synonyms;
    
    // Now filter synonyms by POS using DictionaryAPI
    return synonyms; // In a real implementation, we'd actually filter here
  }

  async analyzeSentence(sentence) {
    try {
      // Use a simple API to get basic sentence structure
      const response = await fetch(`https://api.datamuse.com/words?sp=${encodeURIComponent(sentence)}&qe=sp&md=s&max=1`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0 && data[0].tags) {
          return {
            word: data[0].word,
            score: data[0].score,
            tags: data[0].tags
          };
        }
      }
      return null;
    } catch (error) {
      console.error('Error analyzing sentence:', error);
      return null;
    }
  }

  async getBestSynonym(word, context = '') {
    try {
      // First try Datamuse with context clues
      const datamuseUrl = `https://api.datamuse.com/words?rel_syn=${encodeURIComponent(word)}&md=d&v=es`;
      const datamuseResponse = await fetch(datamuseUrl);
      
      if (datamuseResponse.ok) {
        const data = await datamuseResponse.json();
        
        if (data.length > 0) {
          // Score each synonym based on various factors
          const scoredSynonyms = data.map(item => {
            let score = 0;
            
            // Longer words score higher
            score += item.word.length * 0.5;
            
            // Words with more syllables score higher
            const syllables = (item.word.match(/[aeiouy]+/gi) || []).length;
            score += syllables * 2;
            
            // Words with definition tags like "formal" score higher
            if (item.defs) {
              const defScore = item.defs.reduce((sum, def) => {
                if (def.includes('formal')) return sum + 5;
                if (def.includes('literary')) return sum + 4;
                if (def.includes('archaic')) return sum + 3;
                return sum;
              }, 0);
              score += defScore;
            }
            
            return { word: item.word, score };
          });
          
          // Sort by score and select based on intensity
          scoredSynonyms.sort((a, b) => b.score - a.score);
          const intensity = parseInt(this.intensitySlider.value);
          const maxIndex = Math.min(scoredSynonyms.length - 1, intensity * 2);
          const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
          
          return scoredSynonyms[randomIndex].word;
        }
      }
      
      // Fallback to DictionaryAPI if Datamuse fails
      const dictResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
      if (dictResponse.ok) {
        const data = await dictResponse.json();
        if (Array.isArray(data) && data.length > 0) {
          // Collect all synonyms from all meanings
          const allSynonyms = [];
          for (const entry of data) {
            for (const meaning of entry.meanings) {
              for (const definition of meaning.definitions) {
                if (definition.synonyms) {
                  allSynonyms.push(...definition.synonyms);
                }
              }
            }
          }
          
          if (allSynonyms.length > 0) {
            return this.selectSynonymByIntensity(allSynonyms);
          }
        }
      }
      
      return word; // Return original if no synonyms found
    } catch (error) {
      console.error('Error getting synonym:', error);
      return word; // Fallback to original word
    }
  }

  selectSynonymByIntensity(synonyms) {
    const intensity = parseInt(this.intensitySlider.value);
    const uniqueSynonyms = [...new Set(synonyms)]; // Remove duplicates
    
    if (uniqueSynonyms.length === 0) return '';
    if (uniqueSynonyms.length === 1) return uniqueSynonyms[0];
    
    // Sort by length (as a proxy for fanciness)
    uniqueSynonyms.sort((a, b) => b.length - a.length);
    
    // Select based on intensity
    const maxIndex = Math.min(uniqueSynonyms.length - 1, intensity * 2);
    const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
    
    return uniqueSynonyms[randomIndex];
  }

  async findSynonyms() {
    const word = this.synonymInput.value.trim().toLowerCase();
    if (!word) {
      this.synonymResults.innerHTML = '<p class="text-red-500">Please enter a word to find synonyms</p>';
      return;
    }

    this.synonymResults.innerHTML = '<p class="text-gray-500">Searching for synonyms...</p>';

    try {
      const synonyms = await this.getBestSynonym(word);
      this.displaySynonyms(word, synonyms);
    } catch (error) {
      console.error('Error fetching synonyms:', error);
      this.synonymResults.innerHTML = `
        <p class="text-red-500">Error fetching synonyms</p>
        <p class="text-sm text-gray-500 mt-2">${error.message}</p>
      `;
    }
  }

  displaySynonyms(word, synonyms) {
    const resultsHTML = `
      <h3 class="font-semibold mb-2">Synonyms for "${word}":</h3>
      <div class="grid grid-cols-2 gap-2">
        ${synonyms.map(syn => `
          <div class="p-2 bg-white rounded border hover:bg-blue-50 cursor-pointer"
               onclick="document.getElementById('synonymInput').value='${syn.replace(/'/g, "\\'")}'">
            ${syn}
          </div>
        `).join('')}
      </div>
      <p class="text-xs text-gray-500 mt-2">Click on any synonym to select it</p>
    `;
    this.synonymResults.innerHTML = resultsHTML;
  }

  copyToClipboard() {
    this.fancifiedText.select();
    document.execCommand('copy');
    
    // Show feedback
    const originalText = this.copyBtn.textContent;
    this.copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      this.copyBtn.textContent = originalText;
    }, 2000);
  }

  updateCopyButtonState() {
    this.copyBtn.disabled = this.fancifiedText.value.trim() === '';
  }

  saveSettings() {
    const settings = {
      contextAware: this.contextAwareToggle.checked,
      preserveProperNouns: this.preserveProperNounsToggle.checked,
      intensity: this.intensitySlider.value
    };
    chrome.storage.local.set({ settings });
  }

  loadSettings() {
    chrome.storage.local.get(['settings'], (result) => {
      if (result.settings) {
        this.contextAwareToggle.checked = result.settings.contextAware !== false;
        this.preserveProperNounsToggle.checked = result.settings.preserveProperNouns !== false;
        this.intensitySlider.value = result.settings.intensity || 2;
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new EnhancedTextFancifier();
});