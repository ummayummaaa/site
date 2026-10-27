const ui = {
  en: {
    doctorName: "Ioannis Kotidis",
    doctorTitle: "Medical doctor",
    call: "Call now",
    back: "← Back to useful information",
    eyebrow: "Practical health guide for Greece",
    emergencyTitle: "Emergency medical care in Greece",
    emergencyText: "For a life-threatening emergency, call 112 or 166 immediately.",
    callDoctor: "Call the doctor",
    pharmacy: "Find an on-duty pharmacy",
    emergency: "Emergency: 112",
    note: "This general information does not replace a medical examination. Follow medicine labels and consider your personal contraindications.",
    sources: "Patient information sources"
  },
  el: {
    doctorName: "Ιωάννης Κοτίδης",
    doctorTitle: "Ιατρός",
    call: "Καλέστε τώρα",
    back: "← Επιστροφή στις χρήσιμες πληροφορίες",
    eyebrow: "Πρακτικός οδηγός υγείας για την Ελλάδα",
    emergencyTitle: "Επείγουσα ιατρική βοήθεια στην Ελλάδα",
    emergencyText: "Σε απειλητικό για τη ζωή περιστατικό, καλέστε αμέσως 112 ή 166.",
    callDoctor: "Καλέστε τον ιατρό",
    pharmacy: "Βρείτε εφημερεύον φαρμακείο",
    emergency: "Επείγον: 112",
    note: "Αυτές οι γενικές πληροφορίες δεν αντικαθιστούν την ιατρική εξέταση. Ακολουθείτε τις οδηγίες των φαρμάκων και λαμβάνετε υπόψη τις προσωπικές αντενδείξεις.",
    sources: "Πηγές ενημέρωσης ασθενών"
  },
  ru: {
    doctorName: "Иоаннис Котидис",
    doctorTitle: "Врач-терапевт",
    call: "Позвонить",
    back: "← Вернуться к полезной информации",
    eyebrow: "Практическая медицинская памятка для Греции",
    emergencyTitle: "Экстренная медицинская помощь в Греции",
    emergencyText: "При угрозе жизни немедленно звоните 112 или 166.",
    callDoctor: "Позвонить врачу",
    pharmacy: "Найти дежурную аптеку",
    emergency: "Экстренно: 112",
    note: "Эта общая информация не заменяет медицинский осмотр. Соблюдайте инструкции к лекарствам и учитывайте личные противопоказания.",
    sources: "Источники информации для пациентов"
  }
};

// Unpublished article sources are preserved under _drafts/before-article-hide-20261027/.
const articles = {
  ear: {
    sources: [
      ["NHS — earache", "https://www.nhs.uk/symptoms/earache/"],
      ["CDC — swimmer’s ear", "https://www.cdc.gov/healthy-swimming/prevention/preventing-swimmers-ear.html"],
      ["NHS — perforated eardrum", "https://www.nhs.uk/conditions/perforated-eardrum/"],
      ["Mayo Clinic — airplane ear", "https://www.mayoclinic.org/diseases-conditions/airplane-ear/symptoms-causes/syc-20351701"]
    ],
    media: {
      hero: "../assets/ear-examination-v1.jpg",
      inline: "../assets/ear-anatomy-v1.jpg"
    },
    en: {
      title: "Ear pain while travelling: causes, diagnosis and treatment",
      intro: "Ear pain is a symptom rather than a single disease. During a holiday it often appears after swimming, a respiratory infection or a flight, but the correct treatment depends on which part of the ear is affected.",
      heroAlt: "A doctor examining a patient’s ear with an otoscope",
      heroCaption: "An otoscope examination helps distinguish problems of the ear canal from conditions behind the eardrum.",
      inlineAlt: "Medical illustration of the outer, middle and inner ear",
      inlineCaption: "The outer ear canal, eardrum, middle ear and Eustachian tube can produce similar pain for different reasons.",
      sections: [
        ["What ear pain means", [
          "Pain may begin in the outer ear canal, the middle ear behind the eardrum or nearby structures such as the throat, teeth and jaw. This is why symptoms alone do not always identify the cause.",
          "Many mild episodes improve within a few days, but discharge, hearing loss, marked swelling or severe pain require earlier assessment.",
          "Children may show ear pain by crying, irritability, disturbed sleep, reduced feeding or repeatedly touching the ear."
        ]],
        ["Common forms and causes", [
          "Swimmer’s ear, or otitis externa, is inflammation or infection of the ear canal. It commonly follows retained water or injury from cotton buds and often hurts when the outer ear or tragus is touched.",
          "Middle-ear infection, or otitis media, is more common in children and may follow a cold. Pain can occur with fever, pressure, reduced hearing or fluid behind the eardrum.",
          "Airplane ear is pressure-related barotrauma during take-off, landing or diving. It usually causes fullness, popping, muffled hearing and discomfort; severe cases can injure the eardrum.",
          "Other possibilities include compacted earwax, a perforated eardrum, a foreign object, dental disease, tonsillitis or pain from the jaw joint."
        ]],
        ["Symptoms that give useful clues", [
          "Itching, canal redness, discharge and pain when the outer ear is moved suggest an outer-ear problem, especially after swimming.",
          "Fever, recent cold symptoms and deep pressure-like pain can occur with a middle-ear infection. A sudden release of pain followed by fluid may indicate a perforation.",
          "Fullness or muffled hearing immediately after a flight is typical of barotrauma. Vertigo, bleeding or major hearing loss is not a routine ‘blocked ear’ and needs assessment.",
          "Toothache, pain on chewing or swallowing, and a normal-looking ear may point to a source outside the ear."
        ]],
        ["How a doctor makes the diagnosis", [
          "The doctor asks about swimming, flights, respiratory symptoms, injury, previous ear surgery or tubes, discharge, fever, dizziness and hearing change.",
          "The outer ear and canal are examined, then an otoscope is used to assess wax, swelling, discharge and the appearance and integrity of the eardrum.",
          "The throat, nose, jaw and teeth may also be checked. Hearing tests, tympanometry or specialist ENT assessment are reserved for persistent, severe or uncertain cases.",
          "A swab or imaging is not routinely needed for uncomplicated earache, but may be considered for recurrent infection, complications or failure to improve."
        ]],
        ["Treatment depends on the cause", [
          "Outer-ear infection is commonly treated with prescription ear drops. The canal must be kept dry, and marked swelling may require cleaning or a small wick placed by a clinician.",
          "Many middle-ear infections improve without antibiotics. A clinician decides whether observation, pain control or antibiotics are appropriate based on age, examination and severity.",
          "Pressure-related pain usually improves with swallowing, yawning and time. Persistent symptoms, severe hearing loss, vertigo or bleeding need medical review.",
          "Wax, foreign objects and perforations require different management. Ear drops that are safe for one condition may be unsuitable when the eardrum is perforated."
        ]],
        ["What you can do before an examination", [
          "Keep the ear dry and pause swimming. Dry only the outside gently with a towel; do not push material into the canal.",
          "If normally safe for you, paracetamol or ibuprofen may be used exactly as directed on the pack. Check age limits, allergies, pregnancy and personal contraindications.",
          "A comfortably warm cloth against the ear may ease pain. During flight-related pressure, gentle swallowing, yawning or chewing can help equalise pressure.",
          "For a child, offer fluids and observe alertness, temperature, urine output and whether symptoms are worsening."
        ]],
        ["What not to do", [
          "Do not put cotton buds, fingers, oil, alcohol, hydrogen peroxide or improvised remedies into a painful ear.",
          "Do not attempt to remove deep wax or a foreign object yourself. This can push it further in or injure the canal and eardrum.",
          "Do not start antibiotic tablets or use leftover ear drops without an examination. Avoid drops if there is discharge, an ear tube or possible perforation unless a clinician confirms they are suitable.",
          "Do not forcefully ‘pop’ the ears when pain is severe, and do not continue swimming or diving while symptoms are present."
        ]],
        ["When to seek medical help", [
          "Arrange prompt assessment for fluid, pus or blood from the ear, swelling around the ear, new hearing loss, severe dizziness, high fever or significant deterioration.",
          "Seek urgent care for sudden hearing loss, facial weakness, severe headache, repeated vomiting, a foreign object or trauma to the ear.",
          "A child under 2 years with pain in both ears, or anyone whose pain is severe, worsening or not improving within 2–3 days, should be examined.",
          "Call 112 or 166 for loss of consciousness, breathing difficulty, seizures or another life-threatening emergency."
        ]],
        ["Prevention during travel", [
          "After swimming, tilt each ear downward and dry the outer ear. Ear plugs or a swimming cap may help people who repeatedly develop swimmer’s ear.",
          "Do not remove protective earwax with cotton buds. Ask a clinician before using drying drops, especially with tubes, previous surgery, discharge or a perforated eardrum.",
          "During take-off and landing, stay awake, swallow or yawn regularly and consider filtered earplugs. Infants can feed or use a pacifier while upright.",
          "If possible, discuss flying or diving with a clinician when you have an acute ear infection, severe nasal congestion or recent ear surgery."
        ]]
      ]
    },
    el: {
      title: "Πόνος στο αυτί στο ταξίδι: αιτίες, διάγνωση και θεραπεία",
      intro: "Ο πόνος στο αυτί είναι σύμπτωμα και όχι μία συγκεκριμένη νόσος. Στις διακοπές εμφανίζεται συχνά μετά από κολύμβηση, λοίμωξη του αναπνευστικού ή πτήση, αλλά η σωστή θεραπεία εξαρτάται από το τμήμα του αυτιού που έχει επηρεαστεί.",
      heroAlt: "Ιατρός εξετάζει το αυτί ασθενούς με ωτοσκόπιο",
      heroCaption: "Η ωτοσκόπηση βοηθά να διακριθούν τα προβλήματα του ακουστικού πόρου από τις παθήσεις πίσω από το τύμπανο.",
      inlineAlt: "Ιατρική απεικόνιση του έξω, μέσου και έσω αυτιού",
      inlineCaption: "Ο έξω ακουστικός πόρος, το τύμπανο, το μέσο αυτί και η ευσταχιανή σάλπιγγα μπορεί να προκαλούν παρόμοιο πόνο για διαφορετικούς λόγους.",
      sections: [
        ["Τι σημαίνει ο πόνος στο αυτί", [
          "Ο πόνος μπορεί να προέρχεται από τον έξω ακουστικό πόρο, το μέσο αυτί πίσω από το τύμπανο ή από γειτονικές περιοχές όπως ο λαιμός, τα δόντια και η γνάθος.",
          "Πολλά ήπια επεισόδια βελτιώνονται σε λίγες ημέρες, αλλά έκκριση, απώλεια ακοής, έντονο πρήξιμο ή σοβαρός πόνος χρειάζονται νωρίτερα εκτίμηση.",
          "Στα παιδιά ο πόνος μπορεί να εκδηλώνεται με κλάμα, ευερεθιστότητα, διαταραχή ύπνου, μειωμένη σίτιση ή συχνό άγγιγμα του αυτιού."
        ]],
        ["Συχνές μορφές και αιτίες", [
          "Η εξωτερική ωτίτιδα είναι φλεγμονή ή λοίμωξη του ακουστικού πόρου, συχνά μετά από παραμονή νερού ή τραυματισμό με μπατονέτα. Συνήθως πονά όταν αγγίζεται το πτερύγιο ή ο τράγος.",
          "Η μέση ωτίτιδα είναι συχνότερη στα παιδιά και μπορεί να ακολουθεί κρυολόγημα. Προκαλεί πόνο, πυρετό, πίεση, μειωμένη ακοή ή υγρό πίσω από το τύμπανο.",
          "Το βαρότραυμα της πτήσης ή της κατάδυσης προκαλεί βούλωμα, κρότους, υπόκωφη ακοή και πόνο λόγω διαφοράς πίεσης.",
          "Άλλες αιτίες είναι η κυψελίδα, η διάτρηση τυμπάνου, ξένο σώμα, οδοντικό πρόβλημα, αμυγδαλίτιδα ή πόνος από την κροταφογναθική άρθρωση."
        ]],
        ["Συμπτώματα που δίνουν ενδείξεις", [
          "Κνησμός, ερυθρότητα, έκκριση και πόνος με κίνηση του εξωτερικού αυτιού υποδηλώνουν συχνά εξωτερική ωτίτιδα, ιδιαίτερα μετά από κολύμβηση.",
          "Πυρετός, πρόσφατο κρυολόγημα και βαθύς πιεστικός πόνος μπορεί να συνοδεύουν μέση ωτίτιδα. Ξαφνική ανακούφιση και υγρό μπορεί να υποδηλώνουν διάτρηση.",
          "Βούλωμα μετά την πτήση είναι τυπικό βαροτραύματος. Ίλιγγος, αίμα ή σημαντική απώλεια ακοής χρειάζονται εξέταση.",
          "Πονόδοντος, πόνος στη μάσηση ή την κατάποση με φυσιολογικό αυτί μπορεί να δείχνουν άλλη προέλευση."
        ]],
        ["Πώς γίνεται η διάγνωση", [
          "Ο ιατρός ρωτά για κολύμβηση, πτήση, κρυολόγημα, τραυματισμό, προηγούμενη επέμβαση ή σωληνάκια, έκκριση, πυρετό, ζάλη και αλλαγή ακοής.",
          "Εξετάζονται το πτερύγιο και ο πόρος και με ωτοσκόπιο αξιολογούνται κυψελίδα, οίδημα, έκκριση και η ακεραιότητα του τυμπάνου.",
          "Μπορεί να εξεταστούν λαιμός, μύτη, γνάθος και δόντια. Ακοόγραμμα, τυμπανομέτρηση ή ΩΡΛ εκτίμηση χρειάζονται σε επίμονα ή ασαφή περιστατικά.",
          "Καλλιέργεια ή απεικόνιση δεν απαιτούνται συνήθως σε απλή ωταλγία, αλλά μπορεί να χρειαστούν σε επιπλοκές ή αποτυχία θεραπείας."
        ]],
        ["Η θεραπεία εξαρτάται από την αιτία", [
          "Η εξωτερική ωτίτιδα αντιμετωπίζεται συνήθως με συνταγογραφούμενες σταγόνες και διατήρηση του πόρου στεγνού. Έντονο οίδημα μπορεί να απαιτήσει καθαρισμό ή ειδικό φυτίλι.",
          "Πολλές μέσες ωτίτιδες βελτιώνονται χωρίς αντιβιοτικά. Ο ιατρός επιλέγει παρακολούθηση, αναλγησία ή αντιβίωση ανάλογα με ηλικία, εξέταση και βαρύτητα.",
          "Το βαρότραυμα συχνά υποχωρεί με κατάποση, χασμουρητό και χρόνο. Επίμονα συμπτώματα, έντονη βαρηκοΐα, ίλιγγος ή αίμα χρειάζονται έλεγχο.",
          "Η κυψελίδα, τα ξένα σώματα και η διάτρηση απαιτούν διαφορετική αντιμετώπιση. Σταγόνες κατάλληλες για μία πάθηση μπορεί να είναι ακατάλληλες σε διάτρηση."
        ]],
        ["Τι μπορείτε να κάνετε πριν την εξέταση", [
          "Κρατήστε το αυτί στεγνό και σταματήστε προσωρινά την κολύμβηση. Στεγνώστε απαλά μόνο το εξωτερικό μέρος.",
          "Εφόσον είναι ασφαλή για εσάς, χρησιμοποιήστε παρακεταμόλη ή ιβουπροφαίνη ακριβώς σύμφωνα με τη συσκευασία και τις προσωπικές αντενδείξεις.",
          "Μια άνετα ζεστή κομπρέσα μπορεί να ανακουφίσει. Για πίεση στην πτήση βοηθούν ήπια κατάποση, χασμουρητό ή μάσηση.",
          "Σε παιδί δώστε υγρά και παρακολουθήστε εγρήγορση, θερμοκρασία, ούρηση και τυχόν επιδείνωση."
        ]],
        ["Τι να μην κάνετε", [
          "Μην βάζετε μπατονέτες, δάχτυλα, λάδι, οινόπνευμα, οξυζενέ ή αυτοσχέδια σκευάσματα στο αυτί.",
          "Μην αφαιρείτε βαθιά κυψελίδα ή ξένο σώμα μόνοι σας, γιατί μπορεί να τραυματίσετε τον πόρο ή το τύμπανο.",
          "Μην αρχίζετε αντιβίωση ή παλιές σταγόνες χωρίς εξέταση. Αποφύγετε σταγόνες με έκκριση, σωληνάκι ή πιθανή διάτρηση χωρίς ιατρική οδηγία.",
          "Μην πιέζετε βίαια για να ‘ξεβουλώσει’ το αυτί και μην συνεχίζετε κολύμβηση ή κατάδυση με συμπτώματα."
        ]],
        ["Πότε χρειάζεται ιατρική βοήθεια", [
          "Ζητήστε γρήγορη εκτίμηση για υγρό, πύον ή αίμα, πρήξιμο γύρω από το αυτί, νέα βαρηκοΐα, έντονη ζάλη, υψηλό πυρετό ή σημαντική επιδείνωση.",
          "Επείγει η εξέταση για αιφνίδια απώλεια ακοής, αδυναμία προσώπου, σοβαρό πονοκέφαλο, επανειλημμένους εμέτους, ξένο σώμα ή τραυματισμό.",
          "Παιδί κάτω των 2 ετών με πόνο και στα δύο αυτιά, ή οποιοσδήποτε με έντονο, επιδεινούμενο πόνο ή χωρίς βελτίωση σε 2–3 ημέρες, πρέπει να εξεταστεί.",
          "Καλέστε 112 ή 166 για απώλεια συνείδησης, δυσκολία στην αναπνοή, σπασμούς ή άλλο απειλητικό περιστατικό."
        ]],
        ["Πρόληψη στο ταξίδι", [
          "Μετά το μπάνιο γείρετε κάθε αυτί προς τα κάτω και στεγνώστε το εξωτερικά. Ωτοασπίδες ή σκουφάκι βοηθούν όσους παθαίνουν συχνά εξωτερική ωτίτιδα.",
          "Μην αφαιρείτε την προστατευτική κυψελίδα με μπατονέτες. Ρωτήστε ιατρό πριν από στεγνωτικές σταγόνες, ιδίως με σωληνάκια, επέμβαση, έκκριση ή διάτρηση.",
          "Σε απογείωση και προσγείωση μείνετε ξύπνιοι, καταπίνετε ή χασμουριέστε και εξετάστε ειδικές ωτοασπίδες. Τα βρέφη μπορούν να πίνουν ή να χρησιμοποιούν πιπίλα όρθια.",
          "Αν είναι δυνατόν, συμβουλευτείτε ιατρό πριν από πτήση ή κατάδυση με οξεία ωτίτιδα, έντονη ρινική συμφόρηση ή πρόσφατη επέμβαση αυτιού."
        ]]
      ]
    },
    ru: {
      title: "Боль в ухе во время путешествия: причины, диагностика и лечение",
      intro: "Во время отпуска ухо может заболеть после купания, простуды или перелёта. Важно понять наиболее вероятную причину: от неё зависит, что можно сделать самостоятельно и когда уже нужна помощь врача.",
      heroAlt: "Врач осматривает ухо пациента с помощью отоскопа",
      heroCaption: "Осмотр отоскопом помогает отличить заболевание слухового прохода от изменений за барабанной перепонкой.",
      inlineAlt: "Медицинская иллюстрация наружного, среднего и внутреннего уха",
      inlineCaption: "Боль может быть связана со слуховым проходом, барабанной перепонкой, средним ухом или евстахиевой трубой.",
      sections: [
        ["Почему может болеть ухо", [
          "Боль возникает не только при воспалении самого уха. Иногда она отдаёт из горла, зубов или челюстного сустава, поэтому по ощущениям точную причину определить бывает сложно.",
          "Если боль умеренная и других жалоб нет, состояние нередко улучшается за несколько дней. Но при выделениях из уха, снижении слуха, заметном отёке или сильной боли лучше обратиться к врачу раньше.",
          "У маленького ребёнка боль в ухе иногда проявляется только раздражительностью, беспокойным сном, отказом от еды или тем, что он часто трогает больное ухо."
        ]],
        ["Основные формы и причины", [
          "Наружный отит, или «ухо пловца», — это воспаление кожи слухового прохода. Оно часто начинается после купания, особенно если в ухе осталась вода, а также после чистки ватной палочкой или другого повреждения кожи.",
          "Средний отит — воспаление за барабанной перепонкой. Он особенно часто встречается у детей и нередко развивается после насморка или простуды. Может появиться боль, температура, чувство давления и снижение слуха.",
          "При взлёте, посадке самолёта или погружении под воду давление снаружи и в среднем ухе может не успеть выровняться. Возникают заложенность, щелчки, приглушение слуха и боль — это называют баротравмой.",
          "Ухо также может болеть из-за серной пробки, повреждения барабанной перепонки, инородного тела, воспаления горла, проблем с зубами или челюстным суставом."
        ]],
        ["Симптомы, которые помогают сориентироваться", [
          "Осторожно нажмите на козелок — небольшой хрящевой выступ перед входом в слуховой проход, — затем слегка потяните и пошевелите ушную раковину. Если от этого боль заметно усиливается, возможен наружный отит, особенно после купания.",
          "Для среднего отита характерны боль, чувство давления или заложенности, температура и ухудшение слуха. Если боль внезапно уменьшилась, но из уха потекла жидкость, могла повредиться барабанная перепонка.",
          "Заложенность и приглушённый слух сразу после полёта обычно связаны с перепадом давления. Сильное головокружение, кровь из уха или резкое снижение слуха требуют осмотра.",
          "Если боль усиливается при жевании или глотании, одновременно болит зуб или горло, а само ухо выглядит нормально, источник боли может находиться вне уха."
        ]],
        ["Как врач устанавливает диагноз", [
          "Сначала врач уточняет, когда появилась боль и что ей предшествовало: купание, перелёт, простуда, травма или чистка уха. Важно рассказать о выделениях, температуре, головокружении и изменении слуха.",
          "Затем врач осматривает ушную раковину и слуховой проход, а с помощью отоскопа проверяет барабанную перепонку. Так можно увидеть отёк, воспаление, серную пробку, выделения или повреждение перепонки.",
          "При необходимости осматривают нос, горло, зубы и челюстной сустав. Если слух заметно снизился, жалобы сохраняются или диагноз неясен, может понадобиться аудиометрия, тимпанометрия или консультация ЛОР-врача.",
          "Мазки, рентген или другие исследования при обычной боли в ухе чаще всего не нужны. Их назначают при затяжном течении, повторных воспалениях или подозрении на осложнения."
        ]],
        ["Лечение зависит от причины", [
          "Если боль умеренная, держите ухо сухим, временно не плавайте и не трогайте слуховой проход. Для облегчения боли можно принять парацетамол или ибупрофен по инструкции, если они вам не противопоказаны. Не выбирайте ушные капли самостоятельно: при выделениях из уха или повреждённой барабанной перепонке некоторые средства использовать нельзя.",
          "Средний отит не всегда требует антибиотиков. Тактика зависит от возраста, температуры, выраженности боли и картины при осмотре барабанной перепонки. Врач может рекомендовать наблюдение, обезболивание или антибактериальное лечение.",
          "Лёгкая баротравма обычно проходит самостоятельно. Помогают глотательные движения и зевание. Если боль не проходит, резко снизился слух, появилось головокружение или кровь из уха, нужен осмотр.",
          "Серную пробку, инородное тело и повреждение барабанной перепонки лечат по-разному. Поэтому не стоит выбирать капли самостоятельно: средство, подходящее при одном заболевании, может быть опасно при другом."
        ]],
        ["Что можно сделать самостоятельно", [
          "Пока ухо болит, держите его сухим и не купайтесь. После душа промокните полотенцем только ушную раковину, не пытаясь вытереть слуховой проход изнутри.",
          "Для уменьшения боли можно принять парацетамол или ибупрофен по инструкции, если эти препараты вам не противопоказаны. Учитывайте возраст, беременность, аллергию и хронические заболевания.",
          "Умеренно тёплый компресс иногда уменьшает неприятные ощущения. При заложенности после полёта попробуйте несколько раз спокойно сглотнуть, зевнуть или пожевать жевательную резинку.",
          "Если заболел ребёнок, предлагайте ему пить, измеряйте температуру и наблюдайте за общим состоянием. Выраженная вялость, отказ от питья или быстрое ухудшение требуют медицинской помощи."
        ]],
        ["Чего делать нельзя", [
          "Не чистите больное ухо ватными палочками и не засовывайте внутрь пальцы или другие предметы. Не капайте масло, спирт, перекись водорода и домашние растворы.",
          "Не пытайтесь самостоятельно достать серную пробку или инородное тело: их легко протолкнуть глубже и повредить слуховой проход или барабанную перепонку.",
          "Не используйте антибиотики и капли, оставшиеся после прошлого лечения. Если из уха есть выделения, установлена вентиляционная трубка или возможна перфорация, любые капли применяют только по назначению врача.",
          "Не продувайте ухо через силу, если это вызывает боль. До выздоровления откажитесь от плавания и ныряния."
        ]],
        ["Когда обращаться за медицинской помощью", [
          "Обратитесь к врачу в ближайшее время, если из уха появились жидкость, гной или кровь, возник отёк вокруг уха, ухудшился слух, поднялась высокая температура или состояние заметно ухудшается.",
          "Срочная помощь нужна при внезапной потере слуха, слабости мышц лица, сильном головокружении, повторной рвоте, травме уха или инородном теле в слуховом проходе.",
          "Ребёнка младше двух лет с болью в обоих ушах следует показать врачу. Осмотр также нужен, если боль сильная, нарастает или не уменьшается в течение двух-трёх дней.",
          "При потере сознания, затруднённом дыхании, судорогах или другой угрозе жизни звоните 112 или 166."
        ]],
        ["Как предупредить «ухо пловца»", [
          "Сразу после купания наклоните голову ухом вниз и дайте воде свободно вытечь. Можно осторожно потянуть ушную раковину в разные стороны — это помогает воде выйти из слухового прохода.",
          "Промокните ухо полотенцем только снаружи. Если ощущение воды сохраняется, можно подсушить ухо феном на самой слабой скорости и минимальном нагреве, держа его на расстоянии не менее 20–30 сантиметров.",
          "Не чистите уши ватными палочками и не пытайтесь полностью удалить серу: она защищает кожу слухового прохода от воды и микробов.",
          "Если наружный отит повторяется, используйте во время плавания плотно прилегающую шапочку, беруши или индивидуальные вкладыши. После каждого использования промывайте и хорошо высушивайте их.",
          "Не применяйте спиртовые, уксусные или другие «сушащие» капли, если из уха есть выделения, установлена вентиляционная трубка, была операция или возможно повреждение барабанной перепонки. В этих случаях средство лучше заранее согласовать с врачом."
        ]]
      ]
    }
  }
};

const earSectionTitles = {
  en: ["Otitis externa: swimmer’s ear", "Otitis media: middle-ear infection", "Ear barotrauma after flying or diving", "Other causes of ear pain"],
  el: ["Εξωτερική ωτίτιδα: το αυτί του κολυμβητή", "Μέση ωτίτιδα: λοίμωξη του μέσου αυτιού", "Βαρότραυμα μετά από πτήση ή κατάδυση", "Άλλες αιτίες πόνου στο αυτί"],
  ru: ["Наружный отит: «ухо пловца»", "Средний отит", "Баротравма после перелёта или погружения", "Другие причины боли в ухе"]
};

Object.keys(earSectionTitles).forEach((lang) => {
  const original = articles.ear[lang].sections;
  const forms = original[1][1];
  const clues = original[2][1];
  const diagnosis = original[3];
  const treatments = original[4][1];

  articles.ear[lang].sections = [
    original[0],
    [earSectionTitles[lang][0], [forms[0], clues[0], treatments[0]]],
    [earSectionTitles[lang][1], [forms[1], clues[1], treatments[1]]],
    [earSectionTitles[lang][2], [forms[2], clues[2], treatments[2]]],
    [earSectionTitles[lang][3], [forms[3], clues[3], treatments[3]]],
    diagnosis,
    ...original.slice(5)
  ];
});

const topic = new URLSearchParams(window.location.search).get("topic");
const article = topic === "ear" ? articles.ear : null;
if (!article) window.location.replace("./");
const element = (id) => document.getElementById(id);

function setLanguage(lang) {
  if (!article) return;
  const safeLang = ui[lang] ? lang : "en";
  const labels = ui[safeLang];
  const content = article[safeLang];

  document.documentElement.lang = safeLang;
  document.title = `${content.title} — Ioannis Kotidis`;
  localStorage.setItem("siteLanguage", safeLang);

  element("doctor-name").textContent = labels.doctorName;
  element("doctor-title").textContent = labels.doctorTitle;
  element("header-call").textContent = labels.call;
  element("back-link").textContent = labels.back;
  element("article-title").textContent = content.title;
  element("article-intro").textContent = content.intro;

  const shell = document.querySelector(".article-shell");
  const heroMedia = element("hero-media");
  const hasMedia = Boolean(article.media && content.heroAlt);
  shell.classList.toggle("long-form", hasMedia);
  heroMedia.hidden = !hasMedia;
  if (hasMedia) {
    element("hero-image").src = article.media.hero;
    element("hero-image").alt = content.heroAlt;
    element("hero-caption").textContent = content.heroCaption;
  }
  element("emergency-title").textContent = labels.emergencyTitle;
  element("emergency-text").textContent = labels.emergencyText;
  element("call-doctor").textContent = labels.callDoctor;
  element("pharmacy-link").textContent = labels.pharmacy;
  element("emergency-link").textContent = labels.emergency;
  element("medical-note").textContent = labels.note;
  element("sources-title").textContent = labels.sources;

  const grid = element("content-grid");
  grid.replaceChildren();
  content.sections.forEach(([title, items], sectionIndex) => {
    const block = document.createElement("section");
    block.className = "content-block";
    const heading = document.createElement("h2");
    heading.textContent = title;
    const contentWrapper = document.createElement(hasMedia ? "div" : "ul");
    contentWrapper.className = hasMedia ? "prose-section" : "";
    items.forEach((text) => {
      const item = document.createElement(hasMedia ? "p" : "li");
      item.textContent = text;
      contentWrapper.append(item);
    });
    block.append(heading, contentWrapper);
    grid.append(block);

    if (hasMedia && sectionIndex === 3) {
      const figure = document.createElement("figure");
      figure.className = "article-media inline-media";
      const image = document.createElement("img");
      image.src = article.media.inline;
      image.alt = content.inlineAlt;
      const caption = document.createElement("figcaption");
      caption.textContent = content.inlineCaption;
      figure.append(image, caption);
      grid.append(figure);
    }
  });

  const sources = element("source-links");
  sources.replaceChildren();
  article.sources.forEach(([label, href]) => {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = `${label} ↗`;
    sources.append(link);
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === safeLang);
  });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

element("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("siteLanguage") || "en");

