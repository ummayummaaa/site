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

const articles = {
  fever: {
    sources: [
      ["NHS — fever in adults", "https://www.nhs.uk/symptoms/fever-in-adults/"],
      ["NHS — fever in children", "https://www.nhs.uk/symptoms/fever-in-children/"]
    ],
    en: {
      title: "Fever in adults and children while in Greece",
      intro: "A temperature of 38°C or above is usually considered a fever. Most cases can be managed initially with fluids, rest and observation.",
      sections: [
        ["What to do now", [
          "Rest, drink regularly and monitor the temperature and general condition.",
          "If normally safe, use paracetamol or ibuprofen according to the pack. Never give aspirin to anyone under 16."
        ]],
        ["Arrange medical advice", [
          "Seek advice if an adult is worsening or not improving.",
          "A baby under 3 months with 38°C or more, or a baby aged 3–6 months with 39°C or more, needs prompt assessment.",
          "Get help for fever lasting 5 days, dehydration, a concerning rash or unusual drowsiness."
        ]],
        ["Avoid", [
          "Do not start antibiotics without a medical assessment.",
          "Do not alternate fever medicines in children unless a clinician tells you to.",
          "Do not use cold baths or sponging to force a child’s temperature down."
        ]]
      ]
    },
    el: {
      title: "Πυρετός σε ενήλικες και παιδιά κατά την παραμονή στην Ελλάδα",
      intro: "Θερμοκρασία 38°C ή υψηλότερη θεωρείται συνήθως πυρετός. Πολλά περιστατικά αντιμετωπίζονται αρχικά με υγρά, ανάπαυση και παρακολούθηση.",
      sections: [
        ["Τι να κάνετε τώρα", [
          "Ξεκουραστείτε, πίνετε τακτικά υγρά και παρακολουθείτε τη θερμοκρασία και τη γενική κατάσταση.",
          "Εφόσον είναι ασφαλές, χρησιμοποιήστε παρακεταμόλη ή ιβουπροφαίνη σύμφωνα με τη συσκευασία. Ποτέ ασπιρίνη κάτω των 16 ετών."
        ]],
        ["Πότε χρειάζεται ιατρική συμβουλή", [
          "Ζητήστε βοήθεια εάν ένας ενήλικας επιδεινώνεται ή δεν βελτιώνεται.",
          "Βρέφος κάτω των 3 μηνών με 38°C ή περισσότερο, ή 3–6 μηνών με 39°C ή περισσότερο, χρειάζεται άμεση εκτίμηση.",
          "Ζητήστε βοήθεια για πυρετό 5 ημερών, αφυδάτωση, ανησυχητικό εξάνθημα ή ασυνήθιστη υπνηλία."
        ]],
        ["Τι να αποφεύγετε", [
          "Μην αρχίζετε αντιβίωση χωρίς ιατρική εκτίμηση.",
          "Μην εναλλάσσετε αντιπυρετικά στα παιδιά χωρίς οδηγία επαγγελματία υγείας.",
          "Μην χρησιμοποιείτε κρύο μπάνιο ή σφουγγάρισμα για να μειώσετε απότομα τη θερμοκρασία."
        ]]
      ]
    },
    ru: {
      title: "Температура у взрослых и детей во время пребывания в Греции",
      intro: "Температура 38°C и выше обычно считается лихорадкой. Во многих случаях сначала достаточно питья, отдыха и наблюдения.",
      sections: [
        ["Что делать сейчас", [
          "Отдыхайте, регулярно пейте и следите за температурой и общим состоянием.",
          "Если вам разрешены эти препараты, используйте парацетамол или ибупрофен по инструкции. Не давайте аспирин детям младше 16 лет."
        ]],
        ["Когда обратиться к врачу", [
          "Обратитесь за помощью, если взрослому становится хуже или улучшения нет.",
          "Ребёнок младше 3 месяцев с температурой 38°C и выше или 3–6 месяцев с 39°C и выше нуждается в срочном осмотре.",
          "Нужен осмотр при температуре 5 дней, обезвоживании, тревожной сыпи или необычной сонливости."
        ]],
        ["Чего избегать", [
          "Не начинайте антибиотики без осмотра врача.",
          "Не чередуйте жаропонижающие у детей без рекомендации специалиста.",
          "Не используйте холодную ванну или обтирание для резкого снижения температуры."
        ]]
      ]
    }
  },

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
  },

  diarrhoea: {
    sources: [
      ["CDC — travelers’ diarrhea", "https://wwwnc.cdc.gov/travel/page/travelers-diarrhea"],
      ["NHS — dehydration", "https://www.nhs.uk/conditions/dehydration/"]
    ],
    en: {
      title: "Diarrhoea during travel in Greece: what to do",
      intro: "The main immediate risk is dehydration. Most mild episodes improve with fluids and rest, but some symptoms need medical assessment.",
      sections: [
        ["Replace fluids", [
          "Take frequent small sips of safe water; use oral rehydration solution from a pharmacy if losses are significant.",
          "Continue light food as tolerated and wash hands carefully."
        ]],
        ["Avoid self-treatment risks", [
          "Do not take antibiotics unless prescribed for this episode.",
          "Do not use loperamide when there is blood in the stool or high fever, and seek advice before giving it to a child."
        ]],
        ["When to seek help", [
          "Get prompt care for blood in stool, high fever, severe abdominal pain, persistent vomiting or inability to drink.",
          "Seek urgent help for very little urine, persistent dizziness, fast breathing, confusion or unusual drowsiness."
        ]]
      ]
    },
    el: {
      title: "Διάρροια στο ταξίδι στην Ελλάδα: τι να κάνετε",
      intro: "Ο βασικός άμεσος κίνδυνος είναι η αφυδάτωση. Τα ήπια επεισόδια συχνά βελτιώνονται με υγρά και ανάπαυση, αλλά ορισμένα συμπτώματα χρειάζονται εκτίμηση.",
      sections: [
        ["Αναπλήρωση υγρών", [
          "Πίνετε συχνά μικρές γουλιές ασφαλούς νερού· χρησιμοποιήστε διάλυμα ενυδάτωσης από φαρμακείο όταν οι απώλειες είναι σημαντικές.",
          "Συνεχίστε ελαφριά τροφή εφόσον είναι ανεκτή και πλένετε προσεκτικά τα χέρια."
        ]],
        ["Αποφύγετε επικίνδυνη αυτοθεραπεία", [
          "Μην παίρνετε αντιβίωση εάν δεν έχει συνταγογραφηθεί για αυτό το επεισόδιο.",
          "Μην χρησιμοποιείτε λοπεραμίδη με αίμα στα κόπρανα ή υψηλό πυρετό και ζητήστε συμβουλή πριν τη χορήγηση σε παιδί."
        ]],
        ["Πότε χρειάζεται βοήθεια", [
          "Ζητήστε άμεση φροντίδα για αίμα, υψηλό πυρετό, έντονο κοιλιακό πόνο, επίμονο έμετο ή αδυναμία λήψης υγρών.",
          "Ζητήστε επείγουσα βοήθεια για πολύ λίγα ούρα, επίμονη ζάλη, γρήγορη αναπνοή, σύγχυση ή ασυνήθιστη υπνηλία."
        ]]
      ]
    },
    ru: {
      title: "Диарея во время поездки в Грецию: что делать",
      intro: "Главный ближайший риск — обезвоживание. Лёгкие случаи часто проходят при достаточном питье и отдыхе, но некоторые симптомы требуют осмотра.",
      sections: [
        ["Восполняйте жидкость", [
          "Часто пейте небольшими глотками безопасную воду; при значительных потерях используйте раствор для регидратации из аптеки.",
          "Ешьте лёгкую пищу по переносимости и тщательно мойте руки."
        ]],
        ["Избегайте рискованного самолечения", [
          "Не принимайте антибиотики без назначения для этого эпизода.",
          "Не используйте лоперамид при крови в стуле или высокой температуре; перед применением у ребёнка посоветуйтесь с врачом."
        ]],
        ["Когда обратиться за помощью", [
          "Нужен срочный осмотр при крови в стуле, высокой температуре, сильной боли в животе, постоянной рвоте или невозможности пить.",
          "Экстренная помощь нужна при резком уменьшении мочи, постоянном головокружении, частом дыхании, спутанности или необычной сонливости."
        ]]
      ]
    }
  },

  hospital: {
    sources: [
      ["Greek Civil Protection — 112", "https://civilprotection.gov.gr/en/112"],
      ["Greek Ministry of Health — hospitals on duty", "https://www.moh.gov.gr/articles/citizen/efhmeries-nosokomeiwn/"]
    ],
    en: {
      title: "When to go to hospital in Greece",
      intro: "For life-threatening symptoms, call 112 or 166. For other urgent problems, check which hospital and specialty are on duty before travelling.",
      sections: [
        ["Call 112 now", [
          "Loss of consciousness, severe breathing difficulty, heavy chest pressure, suspected stroke or a seizure that is not stopping.",
          "Severe bleeding, a serious allergic reaction, major trauma, drowning or serious burns."
        ]],
        ["Seek urgent assessment today", [
          "Severe or rapidly worsening pain, dehydration, persistent vomiting, acute abdominal pain or a significant injury.",
          "High fever with a concerning rash, confusion, neck stiffness or marked deterioration."
        ]],
        ["Before you travel", [
          "Check the on-duty hospital and specialty; emergency coverage in Athens rotates.",
          "Bring identification, insurance details, a medicine list and relevant medical reports if available."
        ]]
      ]
    },
    el: {
      title: "Πότε χρειάζεται νοσοκομείο στην Ελλάδα",
      intro: "Για απειλητικά για τη ζωή συμπτώματα καλέστε 112 ή 166. Για άλλα επείγοντα προβλήματα ελέγξτε ποιο νοσοκομείο και ποια ειδικότητα εφημερεύουν.",
      sections: [
        ["Καλέστε τώρα 112", [
          "Απώλεια συνείδησης, σοβαρή δυσκολία στην αναπνοή, έντονη πίεση στο στήθος, πιθανό εγκεφαλικό ή κρίση που δεν σταματά.",
          "Σοβαρή αιμορραγία, βαριά αλλεργική αντίδραση, μεγάλο τραύμα, πνιγμός ή σοβαρό έγκαυμα."
        ]],
        ["Ζητήστε επείγουσα εκτίμηση σήμερα", [
          "Έντονος ή γρήγορα επιδεινούμενος πόνος, αφυδάτωση, επίμονος έμετος, οξύ κοιλιακό άλγος ή σημαντικός τραυματισμός.",
          "Υψηλός πυρετός με ανησυχητικό εξάνθημα, σύγχυση, αυχενική δυσκαμψία ή σημαντική επιδείνωση."
        ]],
        ["Πριν μεταβείτε", [
          "Ελέγξτε το εφημερεύον νοσοκομείο και την ειδικότητα· οι εφημερίες στην Αθήνα εναλλάσσονται.",
          "Πάρτε ταυτότητα, στοιχεία ασφάλισης, λίστα φαρμάκων και διαθέσιμες ιατρικές γνωματεύσεις."
        ]]
      ]
    },
    ru: {
      title: "Когда нужно ехать в больницу в Греции",
      intro: "При угрозе жизни звоните 112 или 166. В других срочных ситуациях заранее проверьте, какая больница и нужное отделение дежурят.",
      sections: [
        ["Немедленно звоните 112", [
          "Потеря сознания, тяжёлое нарушение дыхания, сильное давление в груди, признаки инсульта или не прекращающийся приступ судорог.",
          "Сильное кровотечение, тяжёлая аллергическая реакция, серьёзная травма, утопление или обширный ожог."
        ]],
        ["Срочный осмотр сегодня", [
          "Сильная или быстро нарастающая боль, обезвоживание, постоянная рвота, острая боль в животе или значительная травма.",
          "Высокая температура с тревожной сыпью, спутанностью, ригидностью шеи или резким ухудшением."
        ]],
        ["Перед поездкой", [
          "Проверьте дежурную больницу и специальность: график экстренных отделений в Афинах меняется.",
          "Возьмите документ, данные страховки, список лекарств и имеющиеся медицинские заключения."
        ]]
      ]
    }
  },

  "sea-urchin": {
    sources: [
      ["NHS — jellyfish and other sea creature stings", "https://www.nhs.uk/conditions/jellyfish-and-other-sea-creature-stings/"],
      ["MSD Manual — sea urchin stings", "https://www.msdmanuals.com/home/injuries-and-poisoning/bites-and-stings/sea-urchin-stings"]
    ],
    en: {
      title: "What to do after stepping on a sea urchin",
      intro: "Sea urchin spines are brittle and can break under the skin. Basic first aid can reduce pain, but deep or retained fragments may need medical removal.",
      sections: [
        ["What to do now", ["Leave the water, avoid putting weight on the injured foot and rinse away sand with clean water.", "Soak the area in very warm water that does not burn the skin for about 30 minutes; this may ease pain.", "If a spine is clearly superficial and easy to grasp, gently remove it with clean tweezers. Stop if it breaks or is deeply embedded."]],
        ["What to avoid", ["Do not dig into the skin, cut the wound or force out deep fragments yourself.", "Do not walk barefoot on the injured foot, and keep the wound clean and uncovered until assessed.", "Do not assume every dark mark is a retained spine; bruising or pigment can look similar."]],
        ["When to seek medical care", ["Arrange assessment for deep or numerous spines, a fragment near a joint, severe or persistent pain, numbness, or difficulty walking.", "Seek care if redness, swelling, warmth, pus or fever develops, and ask whether your tetanus vaccination is up to date.", "Call 112 for difficulty breathing, fainting or a rapidly developing severe reaction."]]
      ]
    },
    el: {
      title: "Τι να κάνετε αν πατήσετε αχινό",
      intro: "Τα αγκάθια του αχινού είναι εύθραυστα και μπορεί να σπάσουν μέσα στο δέρμα. Οι πρώτες βοήθειες μειώνουν τον πόνο, αλλά βαθιά ή παραμένοντα τμήματα μπορεί να χρειάζονται ιατρική αφαίρεση.",
      sections: [
        ["Τι να κάνετε τώρα", ["Βγείτε από το νερό, μην πατάτε το τραυματισμένο πόδι και ξεπλύνετε την άμμο με καθαρό νερό.", "Βυθίστε την περιοχή σε πολύ ζεστό νερό που δεν καίει το δέρμα για περίπου 30 λεπτά· μπορεί να μειώσει τον πόνο.", "Αν ένα αγκάθι είναι καθαρά επιφανειακό και πιάνεται εύκολα, αφαιρέστε το απαλά με καθαρό τσιμπιδάκι. Σταματήστε αν σπάσει ή είναι βαθιά."]],
        ["Τι να αποφεύγετε", ["Μην σκαλίζετε το δέρμα, μην κόβετε το τραύμα και μην προσπαθείτε να βγάλετε μόνοι σας βαθιά τμήματα.", "Μην περπατάτε ξυπόλυτοι με το τραυματισμένο πόδι και κρατήστε το τραύμα καθαρό.", "Μην θεωρείτε ότι κάθε σκούρο σημάδι είναι αγκάθι· μπορεί να είναι μελανιά ή χρωστική."]],
        ["Πότε χρειάζεται ιατρός", ["Χρειάζεται εκτίμηση για βαθιά ή πολλά αγκάθια, τμήμα κοντά σε άρθρωση, έντονο ή επίμονο πόνο, μούδιασμα ή δυσκολία στο βάδισμα.", "Ζητήστε βοήθεια αν εμφανιστούν ερυθρότητα, πρήξιμο, θερμότητα, πύον ή πυρετός και ελέγξτε αν το αντιτετανικό εμβόλιο είναι ενημερωμένο.", "Καλέστε 112 για δυσκολία στην αναπνοή, λιποθυμία ή ταχεία σοβαρή αντίδραση."]]
      ]
    },
    ru: {
      title: "Что делать, если наступили на морского ежа",
      intro: "Иглы морского ежа хрупкие и могут ломаться под кожей. Первая помощь уменьшает боль, но глубокие или оставшиеся фрагменты иногда должен удалить врач.",
      sections: [
        ["Что делать сразу", ["Выйдите из воды, не наступайте на повреждённую ногу и смойте песок чистой водой.", "Погрузите место травмы примерно на 30 минут в очень тёплую воду, которая не обжигает кожу: это может уменьшить боль.", "Если игла явно поверхностная и её легко захватить, осторожно удалите её чистым пинцетом. Остановитесь, если она ломается или сидит глубоко."]],
        ["Чего не делать", ["Не расковыривайте кожу, не разрезайте рану и не пытайтесь самостоятельно достать глубокие фрагменты.", "Не ходите босиком на повреждённой стопе; держите рану чистой.", "Не считайте каждую тёмную точку оставшейся иглой: так может выглядеть синяк или пигмент."]],
        ["Когда нужен врач", ["Нужен осмотр при глубоких или многочисленных иглах, фрагменте рядом с суставом, сильной или сохраняющейся боли, онемении или трудностях при ходьбе.", "Обратитесь к врачу при нарастающем покраснении, отёке, жаре кожи, гное или температуре и уточните актуальность прививки от столбняка.", "При затруднённом дыхании, обмороке или быстро нарастающей тяжёлой реакции звоните 112."]]
      ]
    }
  },

  jellyfish: {
    sources: [
      ["NHS — jellyfish and other sea creature stings", "https://www.nhs.uk/conditions/jellyfish-and-other-sea-creature-stings/"],
      ["CDC Yellow Book — marine envenomations", "https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/poisonings-envenomations-and-toxic-exposures-during-travel.html"]
    ],
    en: {
      title: "What to do after a jellyfish sting",
      intro: "Most jellyfish stings cause local pain and a raised rash. First-aid advice can vary by species, so ask a lifeguard or local clinician when available.",
      sections: [
        ["What to do now", ["Leave the water calmly. Rinse the area with plenty of seawater, not fresh water.", "Remove visible tentacles with tweezers or the edge of a plastic card; do not touch them with bare hands or rub the skin.", "Soak the area in very warm water that does not burn the skin for about 20–30 minutes. Use paracetamol or ibuprofen only if normally safe for you."]],
        ["What to avoid", ["Do not rinse with fresh water, rub the area or apply urine or alcohol.", "Do not use vinegar unless a local lifeguard or clinician recommends it for the species involved; it can worsen stinging-cell discharge in some species.", "Do not return to the water while you feel unwell or while warning signs are developing."]],
        ["When to get help", ["Call 112 for difficulty breathing, chest pain, fainting, seizures, repeated vomiting or severe widespread swelling.", "Get prompt medical advice for a sting near the eye, mouth or throat, severe pain that is not settling, or extensive skin involvement.", "Arrange review if redness or swelling keeps increasing, fever develops or the wound is not improving."]]
      ]
    },
    el: {
      title: "Τι να κάνετε μετά από τσίμπημα μέδουσας",
      intro: "Τα περισσότερα τσιμπήματα προκαλούν τοπικό πόνο και ανάγλυφο εξάνθημα. Οι πρώτες βοήθειες διαφέρουν ανά είδος, οπότε ζητήστε βοήθεια από ναυαγοσώστη ή τοπικό ιατρό όταν είναι διαθέσιμοι.",
      sections: [
        ["Τι να κάνετε τώρα", ["Βγείτε ήρεμα από το νερό. Ξεπλύνετε με άφθονο θαλασσινό νερό, όχι γλυκό.", "Αφαιρέστε ορατά πλοκάμια με τσιμπιδάκι ή την άκρη πλαστικής κάρτας· μην τα αγγίζετε με γυμνά χέρια και μην τρίβετε το δέρμα.", "Βυθίστε την περιοχή σε πολύ ζεστό νερό που δεν καίει για περίπου 20–30 λεπτά. Πάρτε παρακεταμόλη ή ιβουπροφαίνη μόνο αν είναι ασφαλή για εσάς."]],
        ["Τι να αποφεύγετε", ["Μην ξεπλύνετε με γλυκό νερό, μην τρίβετε και μην εφαρμόζετε ούρα ή οινόπνευμα.", "Μην χρησιμοποιείτε ξίδι εκτός αν το συστήσει ναυαγοσώστης ή ιατρός για το συγκεκριμένο είδος· σε ορισμένα είδη μπορεί να ενεργοποιήσει περισσότερα κνιδοκύτταρα.", "Μην επιστρέψετε στο νερό όσο αισθάνεστε αδιαθεσία ή εμφανίζονται ανησυχητικά σημεία."]],
        ["Πότε χρειάζεται βοήθεια", ["Καλέστε 112 για δυσκολία στην αναπνοή, πόνο στο στήθος, λιποθυμία, σπασμούς, επανειλημμένο έμετο ή σοβαρό γενικευμένο πρήξιμο.", "Ζητήστε άμεσα ιατρική συμβουλή για τσίμπημα κοντά σε μάτι, στόμα ή λαιμό, έντονο πόνο που δεν υποχωρεί ή μεγάλη έκταση δέρματος.", "Χρειάζεται εκτίμηση αν αυξάνεται η ερυθρότητα ή το πρήξιμο, εμφανιστεί πυρετός ή η περιοχή δεν βελτιώνεται."]]
      ]
    },
    ru: {
      title: "Что делать, если ужалила медуза",
      intro: "Чаще всего ожог медузы вызывает местную боль и полосы сыпи. Первая помощь может зависеть от вида, поэтому по возможности обратитесь к спасателю или местному врачу.",
      sections: [
        ["Что делать сразу", ["Спокойно выйдите из воды. Обильно промойте место морской, а не пресной водой.", "Удалите видимые щупальца пинцетом или краем пластиковой карты; не касайтесь их голыми руками и не растирайте кожу.", "Погрузите место ожога на 20–30 минут в очень тёплую воду, которая не обжигает. Парацетамол или ибупрофен допустимы только если они вам обычно разрешены."]],
        ["Чего не делать", ["Не промывайте пресной водой, не трите кожу и не наносите мочу или спирт.", "Не используйте уксус без рекомендации местного спасателя или врача: у некоторых видов он может усилить выброс яда из стрекательных клеток.", "Не возвращайтесь в воду, пока самочувствие не нормализовалось и не исключены опасные симптомы."]],
        ["Когда нужна помощь", ["При затруднённом дыхании, боли в груди, обмороке, судорогах, повторной рвоте или выраженном распространённом отёке звоните 112.", "Срочно обратитесь за помощью при ожоге около глаза, рта или горла, сильной неутихающей боли или поражении большой площади кожи.", "Нужен осмотр, если покраснение или отёк нарастают, появляется температура или кожа не заживает."]]
      ]
    }
  },

  insurance: {
    sources: [
      ["European Commission — EHIC in Greece", "https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/european-health-insurance-card/how-use-card/greece-european-health-insurance-card_en"],
      ["Your Europe — temporary health cover", "https://europa.eu/youreurope/citizens/health/unplanned-healthcare/temporary-stays/index_en.htm"]
    ],
    en: {
      title: "Using travel health insurance in Greece",
      intro: "Coverage depends on your policy, the provider and whether care is public or private. Confirm the rules early and keep every document.",
      sections: [
        ["Before treatment", [
          "Call the insurer’s assistance line and ask whether pre-authorisation or a specific clinic is required.",
          "Show your passport, policy details and EHIC if you have one."
        ]],
        ["EHIC and private care", [
          "EHIC supports medically necessary state healthcare under the same conditions as locally insured patients.",
          "EHIC is not a replacement for travel insurance and does not cover private care or repatriation."
        ]],
        ["Keep for your claim", [
          "Keep official invoices, payment receipts, medical reports, prescriptions and test results.",
          "Ask the provider to stamp or sign documents and contact your insurer before leaving if possible."
        ]]
      ]
    },
    el: {
      title: "Χρήση ταξιδιωτικής ασφάλισης υγείας στην Ελλάδα",
      intro: "Η κάλυψη εξαρτάται από το συμβόλαιο, τον πάροχο και αν η φροντίδα είναι δημόσια ή ιδιωτική. Επιβεβαιώστε τους όρους και κρατήστε όλα τα έγγραφα.",
      sections: [
        ["Πριν από τη θεραπεία", [
          "Καλέστε τη γραμμή βοήθειας της ασφάλειας και ρωτήστε αν χρειάζεται προέγκριση ή συγκεκριμένη κλινική.",
          "Δείξτε διαβατήριο, στοιχεία συμβολαίου και Ευρωπαϊκή Κάρτα Ασφάλισης Ασθενείας εάν διαθέτετε."
        ]],
        ["ΕΚΑΑ και ιδιωτική φροντίδα", [
          "Η ΕΚΑΑ καλύπτει ιατρικά αναγκαία δημόσια φροντίδα με τους ίδιους όρους που ισχύουν για τους ασφαλισμένους στην Ελλάδα.",
          "Δεν αντικαθιστά την ταξιδιωτική ασφάλιση και δεν καλύπτει ιδιωτική φροντίδα ή επαναπατρισμό."
        ]],
        ["Έγγραφα για αποζημίωση", [
          "Κρατήστε επίσημα τιμολόγια, αποδείξεις, ιατρικές γνωματεύσεις, συνταγές και αποτελέσματα εξετάσεων.",
          "Ζητήστε υπογραφή ή σφραγίδα και επικοινωνήστε με την ασφάλεια πριν φύγετε, εάν είναι δυνατό."
        ]]
      ]
    },
    ru: {
      title: "Как пользоваться туристической медицинской страховкой в Греции",
      intro: "Покрытие зависит от полиса, клиники и того, является помощь государственной или частной. Заранее уточните правила и сохраняйте документы.",
      sections: [
        ["До получения помощи", [
          "Позвоните в сервисную службу страховщика и уточните, нужна ли предварительная авторизация или определённая клиника.",
          "Предъявите паспорт, данные полиса и EHIC, если она у вас есть."
        ]],
        ["EHIC и частная помощь", [
          "EHIC даёт доступ к необходимой государственной помощи на тех же условиях, что и для застрахованных в Греции.",
          "EHIC не заменяет туристическую страховку и не покрывает частную помощь или репатриацию."
        ]],
        ["Документы для возмещения", [
          "Сохраните официальные счета, чеки, медицинские заключения, рецепты и результаты исследований.",
          "Попросите поставить подпись или печать и по возможности свяжитесь со страховщиком до ухода из клиники."
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
const article = articles[topic] || articles.fever;
const element = (id) => document.getElementById(id);

function setLanguage(lang) {
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
