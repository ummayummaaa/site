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
      ["CDC — swimmer’s ear", "https://www.cdc.gov/healthy-swimming/prevention/preventing-swimmers-ear.html"]
    ],
    en: {
      title: "Ear pain while travelling in Greece: what to do",
      intro: "Ear pain after swimming or a flight can have several causes. These steps may help until you are examined by a doctor.",
      sections: [
        ["What you can do now", [
          "Keep the ear dry and pause swimming.",
          "If normally safe, use paracetamol or ibuprofen exactly as directed on the pack.",
          "A warm cloth held against the ear may ease discomfort."
        ]],
        ["What to avoid", [
          "Do not put cotton buds, fingers or other objects into the ear.",
          "Do not try to remove earwax yourself.",
          "Do not use ear drops without advice if there is discharge, an ear tube or a possible perforated eardrum."
        ]],
        ["When to seek medical help", [
          "Arrange prompt assessment for discharge, swelling around the ear, hearing change, high fever or feeling very unwell.",
          "See a doctor if pain is severe, worsening or not improving within 2–3 days."
        ]]
      ]
    },
    el: {
      title: "Πόνος στο αυτί στις διακοπές στην Ελλάδα: τι να κάνετε",
      intro: "Ο πόνος μετά από κολύμβηση ή πτήση μπορεί να έχει διάφορες αιτίες. Τα παρακάτω μέτρα μπορούν να βοηθήσουν μέχρι την εξέταση από ιατρό.",
      sections: [
        ["Τι μπορείτε να κάνετε τώρα", [
          "Κρατήστε το αυτί στεγνό και αποφύγετε προσωρινά την κολύμβηση.",
          "Εφόσον είναι ασφαλές, πάρτε παρακεταμόλη ή ιβουπροφαίνη ακριβώς σύμφωνα με τη συσκευασία.",
          "Μια ζεστή κομπρέσα μπορεί να ανακουφίσει την ενόχληση."
        ]],
        ["Τι να αποφεύγετε", [
          "Μην βάζετε μπατονέτες, δάχτυλα ή άλλα αντικείμενα στο αυτί.",
          "Μην προσπαθείτε να αφαιρέσετε μόνοι σας το κερί.",
          "Μην χρησιμοποιείτε σταγόνες χωρίς συμβουλή εάν υπάρχει έκκριση, σωληνάκι αερισμού ή πιθανή διάτρηση τυμπάνου."
        ]],
        ["Πότε χρειάζεται ιατρική βοήθεια", [
          "Ζητήστε άμεση εκτίμηση για έκκριση, πρήξιμο, αλλαγή ακοής, υψηλό πυρετό ή έντονη αδιαθεσία.",
          "Επισκεφθείτε ιατρό εάν ο πόνος είναι έντονος, επιδεινώνεται ή δεν βελτιώνεται σε 2–3 ημέρες."
        ]]
      ]
    },
    ru: {
      title: "Боль в ухе во время отдыха в Греции: что делать",
      intro: "Боль после купания или перелёта может иметь разные причины. Эти меры помогут до осмотра врача.",
      sections: [
        ["Что можно сделать сейчас", [
          "Держите ухо сухим и временно откажитесь от купания.",
          "Если препараты вам разрешены, примите парацетамол или ибупрофен строго по инструкции.",
          "Тёплый компресс может уменьшить дискомфорт."
        ]],
        ["Чего следует избегать", [
          "Не вставляйте в ухо ватные палочки, пальцы или другие предметы.",
          "Не пытайтесь самостоятельно удалить ушную серу.",
          "Не используйте капли без рекомендации при выделениях, шунте или возможном повреждении барабанной перепонки."
        ]],
        ["Когда нужна медицинская помощь", [
          "Нужен срочный осмотр при выделениях, отёке, изменении слуха, высокой температуре или выраженном ухудшении самочувствия.",
          "Обратитесь к врачу, если боль сильная, нарастает или не уменьшается за 2–3 дня."
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
  element("eyebrow").textContent = labels.eyebrow;
  element("article-title").textContent = content.title;
  element("article-intro").textContent = content.intro;
  element("emergency-title").textContent = labels.emergencyTitle;
  element("emergency-text").textContent = labels.emergencyText;
  element("call-doctor").textContent = labels.callDoctor;
  element("pharmacy-link").textContent = labels.pharmacy;
  element("emergency-link").textContent = labels.emergency;
  element("medical-note").textContent = labels.note;
  element("sources-title").textContent = labels.sources;

  const grid = element("content-grid");
  grid.replaceChildren();
  content.sections.forEach(([title, items]) => {
    const block = document.createElement("section");
    block.className = "content-block";
    const heading = document.createElement("h2");
    heading.textContent = title;
    const list = document.createElement("ul");
    items.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      list.append(item);
    });
    block.append(heading, list);
    grid.append(block);
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
