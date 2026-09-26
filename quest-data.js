const QUEST_DATA = [
  {
    "name": "\"Brave Northerly Wind\"",
    "region": "Other",
    "thaiName": "\"ลมเหนือแสนกล้าหาญ\""
  },
  {
    "name": "\"Eye of Watatsumi\"",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "\"Fang of Watatsumi\"",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "\"Fin of Watatsumi\"",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "\"Flying Hatter\"",
    "region": "Other",
    "thaiName": "\"ช่างทำหมวกลอยฟ้า\""
  },
  {
    "name": "\"Good Shelf\"",
    "region": "Other",
    "thaiName": "\"ชั้นวางอย่างดี\""
  },
  {
    "name": "\"Heart of Watatsumi\"",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "\"Hello,\" \"Thank You,\" and the Final \"Goodbye\"",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "\"Hey, This Isn't Pumpkin Soup...\"",
    "region": "Fontaine",
    "thaiName": "\"นี่ไม่ใช่ซุปฟักทองสักหน่อย...\""
  },
  {
    "name": "\"Outlander Brigade!\"",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "\"Owl Musician\"",
    "region": "Other",
    "thaiName": "\"นักดนตรีนกฮูก\""
  },
  {
    "name": "\"Quiet, please, this is a library!\"",
    "region": "Mondstadt",
    "thaiName": "ห้ามส่งเสียงในห้องสมุดนะ!"
  },
  {
    "name": "\"Tail of Watatsumi\"",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "\"That Guy\"'s Scheme",
    "region": "Mondstadt",
    "thaiName": "แผนการของ \"สุภาพบุรุษท่านนั้น\""
  },
  {
    "name": "\"That Incident From Twenty Years Ago\"",
    "region": "Sumeru",
    "thaiName": "\"เรื่องเมื่อยี่สิบปีก่อน\""
  },
  {
    "name": "\"The Falcon's Hunt\"",
    "region": "Sumeru",
    "thaiName": "\"การล่าของเหยี่ยว\""
  },
  {
    "name": "\"The Seventh Samurai\"",
    "region": "Inazuma",
    "thaiName": "\"ซามูไรคนที่เจ็ด\""
  },
  {
    "name": "\"Vibro-Crystals, It's Always Vibro-Crystals\"",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "...What Do Adventurers Do Again?",
    "region": "Liyue",
    "thaiName": "นักผจญภัย...ควรจะทำอะไร?"
  },
  {
    "name": "A \"Battlefield\" Feast After Work",
    "region": "Mondstadt",
    "thaiName": "มื้อใหญ่ใน \"สนามรบ\" ตอนเลิกงาน"
  },
  {
    "name": "A Brief History of Rocks",
    "region": "Natlan",
    "thaiName": "หินที่แตกสลายและอดีตที่ผ่านมา"
  },
  {
    "name": "A Certain Notice",
    "region": "Fontaine",
    "thaiName": "ประกาศฉบับหนึ่ง"
  },
  {
    "name": "A Certain Stamp",
    "region": "Fontaine",
    "thaiName": "ตราประทับอันหนึ่ง"
  },
  {
    "name": "A Certain Trifle",
    "region": "Fontaine",
    "thaiName": "เรื่องเล็ก ๆ เรื่องหนึ่ง"
  },
  {
    "name": "A Chat in the Snowy Mountains",
    "region": "Dragonspine",
    "thaiName": "สนทนากลางภูเขาหิมะ"
  },
  {
    "name": "A Child Wandering the World",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "A Clash Between the First and the Latest!",
    "region": "Fontaine",
    "thaiName": "การต่อสู้ครั้งแรกสุดและใหม่ล่าสุด!"
  },
  {
    "name": "A Cliff-Side Hero's Past",
    "region": "Liyue",
    "thaiName": "อดีตของผู้กล้าเหนือยอดผา"
  },
  {
    "name": "A Company Vanishing Into the Deep",
    "region": "Liyue",
    "thaiName": "กองร้อยหายลับที่หุบเหวลึก"
  },
  {
    "name": "A Day the Grand Temple Inscribed with Ages",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "A Defensive Strategy",
    "region": "Liyue",
    "thaiName": "แผนการป้องกัน"
  },
  {
    "name": "A Delicacy for Nara",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "A Dish Beyond Mortal Ken",
    "region": "Liyue",
    "thaiName": "อาหารที่ไม่มีในโลกนี้"
  },
  {
    "name": "A Dry Well Doth Not Reflect the Stars",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "A Feast for the Senses",
    "region": "Natlan",
    "thaiName": "แสงสีเสียงระเบิดเจิดจ้า"
  },
  {
    "name": "A Festive First Adventure",
    "region": "Liyue",
    "thaiName": "ประสบการณ์การผจญภัยครั้งแรกอันแสนสบาย"
  },
  {
    "name": "A Few Words in the Foreground",
    "region": "Liyue",
    "thaiName": "คำพูดสองสามคำก่อนเข้าฉาก"
  },
  {
    "name": "A Fine Opportunity?",
    "region": "Mondstadt",
    "thaiName": "โอกาสที่ฟ้าประทาน?"
  },
  {
    "name": "A Fontainian Message",
    "region": "Fontaine",
    "thaiName": "ข่าวสารจาก Fontaine"
  },
  {
    "name": "A Garden Gathering",
    "region": "Fontaine",
    "thaiName": "สังสรรค์ในสวน"
  },
  {
    "name": "A Gift From Her",
    "region": "Other",
    "thaiName": "ของขวัญจากเธอ"
  },
  {
    "name": "A Gift From the Sea Spirits",
    "region": "Fontaine",
    "thaiName": "ของขวัญจากเหล่าภูตแห่งทะเล"
  },
  {
    "name": "A Gift From Yae Publishing House",
    "region": "Inazuma",
    "thaiName": "ของขวัญจากสำนักพิมพ์ Yae"
  },
  {
    "name": "A Gift of Memories",
    "region": "Other",
    "thaiName": "ของขวัญที่หยุดความทรงจำไว้"
  },
  {
    "name": "A Gifted Rose: Ballad of Days Gone By",
    "region": "Sumeru",
    "thaiName": "กุหลาบแด่ใครบางคน: บทเพลงจากอดีต"
  },
  {
    "name": "A Gifted Rose: Can Stones Bloom",
    "region": "Sumeru",
    "thaiName": "กุหลาบแด่ใครบางคน: ก้อนหินผลิดอกได้หรือไม่"
  },
  {
    "name": "A Gifted Rose: Long Day Ahead",
    "region": "Sumeru",
    "thaiName": "กุหลาบแด่ใครบางคน: วิธีพ้นผ่านเวลาอันยาวนาน"
  },
  {
    "name": "A Gifted Rose: Prickly as Thorns",
    "region": "Sumeru",
    "thaiName": "กุหลาบแด่ใครบางคน: ทิ่มแทงดั่งหนามแหลม"
  },
  {
    "name": "A Gifted Rose: Some People Never Fade Away",
    "region": "Sumeru",
    "thaiName": "กุหลาบแด่ใครบางคน: ผู้ที่เคยเอาชนะการจากไป"
  },
  {
    "name": "A Glimpse Into the Pale Night",
    "region": "Enkanomiya",
    "thaiName": "มองเข้าไปในราตรีสีขาว"
  },
  {
    "name": "A Great Heart Fettered by Slender Chains",
    "region": "Other",
    "thaiName": "หัวใจอันยิ่งใหญ่ที่ถูกโซ่ตรวนเปราะบางพันธนาการ"
  },
  {
    "name": "A Grueling Combat Simulation",
    "region": "Other",
    "thaiName": "การจำลองสถานการณ์รบอันดุเดือด"
  },
  {
    "name": "A Guest From Liyue",
    "region": "Mondstadt",
    "thaiName": "แขกจาก Liyue"
  },
  {
    "name": "A Hero's Approval!",
    "region": "Natlan",
    "thaiName": "การรับรองจากผู้กล้า!"
  },
  {
    "name": "A Honest Promotion",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "A Knight's Guide to Surveying",
    "region": "Mondstadt",
    "thaiName": "บทเรียนการทำแผนที่ของอัศวิน"
  },
  {
    "name": "A Lady's Invitation",
    "region": "Fontaine",
    "thaiName": "คำเชิญของสุภาพสตรี"
  },
  {
    "name": "A Land Entombed",
    "region": "Dragonspine",
    "thaiName": "ดินแดนที่ปกคลุมไปด้วยหิมะ"
  },
  {
    "name": "A Letter",
    "region": "Fontaine",
    "thaiName": "จดหมายฉบับหนึ่ง"
  },
  {
    "name": "A Letter From Zapolyarny Palace",
    "region": "Other",
    "thaiName": "จดหมายจากพระราชวัง Zapolyarny"
  },
  {
    "name": "A Librarian's Long and Carefree Vacation",
    "region": "Sumeru",
    "thaiName": "วันหยุดยาวหย่อนใจของบรรณารักษ์"
  },
  {
    "name": "A Lighthearted Feast of Magic!",
    "region": "Natlan",
    "thaiName": "เวทแห่งความอร่อย ที่อร่อยได้แบบไม่รู้สึกผิด!"
  },
  {
    "name": "A Little Game",
    "region": "Liyue",
    "thaiName": "มาเล่นกัน"
  },
  {
    "name": "A Lone Ship In Guyun",
    "region": "Liyue",
    "thaiName": "เรือโดดเดี่ยวใน Guyun"
  },
  {
    "name": "A Meeting of \"Puppets\"",
    "region": "Sumeru",
    "thaiName": "การพบกันของ \"หุ่นเชิด\""
  },
  {
    "name": "A Message From the Junior",
    "region": "Dragonspine",
    "thaiName": "การแบ่งปันจากรุ่นน้อง"
  },
  {
    "name": "A Misplaced Conch",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "A Muddy Bizarre Adventure (Part 1)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "A Muddy Bizarre Adventure (Part 2)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "A Mysterious Loss",
    "region": "Mondstadt",
    "thaiName": "ของลึกลับที่หายไป"
  },
  {
    "name": "A Mysterious Outsourced Contract",
    "region": "Other",
    "thaiName": "สัญญารับจ้างภายนอกลึกลับ"
  },
  {
    "name": "A New Day at the Lil' Fungi Playground",
    "region": "Sumeru",
    "thaiName": "สวนสนุก Fungus ตัวน้อย เตรียมเปิดให้บริการ"
  },
  {
    "name": "A Not-So-Distant Farewell",
    "region": "Fontaine",
    "thaiName": "การจากลาที่ไม่ยาวไกล"
  },
  {
    "name": "A Particularly Particular Author",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "A Prayer for Rain on the Fecund Land",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "A Promise to Share Our Tips...",
    "region": "Other",
    "thaiName": "ข้อตกลงในการแบ่งปันเคล็ดลับ..."
  },
  {
    "name": "A Proposition Beyond Refutation",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "A Provisional Arrangement",
    "region": "Liyue",
    "thaiName": "ปฏิบัติการชั่วคราว"
  },
  {
    "name": "A Quiet Day in Liyue Harbor",
    "region": "Liyue",
    "thaiName": "วันที่แสนสงบสุขในท่าเรือ Liyue"
  },
  {
    "name": "A Robust Theoretical Discussion",
    "region": "Fontaine",
    "thaiName": "ทฤษฎีเปิดฉากที่ดุเดือด"
  },
  {
    "name": "A Saurian Lover's Ordinary Days",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "A Saurian Returns to the Nest",
    "region": "Natlan",
    "thaiName": "Saurian คืนรัง"
  },
  {
    "name": "A Scrollbound Skirmish",
    "region": "Natlan",
    "thaiName": "การท้าทายบนม้วนหนังสือ"
  },
  {
    "name": "A Short Encounter with a Rare Bird",
    "region": "Sumeru",
    "thaiName": "การเผชิญหน้าชั่วครู่กับนกหายาก"
  },
  {
    "name": "A Small Overture",
    "region": "Other",
    "thaiName": "ความพยายามเล็ก ๆ"
  },
  {
    "name": "A Small Token",
    "region": "Natlan",
    "thaiName": "น้ำใจเล็ก ๆ น้อย ๆ"
  },
  {
    "name": "A Small Venture",
    "region": "Other",
    "thaiName": "ธุรกิจเล็ก ๆ"
  },
  {
    "name": "A Special Blend, A Timeless Masterpiece",
    "region": "Mondstadt",
    "thaiName": "ผลงานชิ้นเอกสูตรพิเศษ สู่เมนูสุดคลาสสิก"
  },
  {
    "name": "A Special Selection",
    "region": "Other",
    "thaiName": "การคัดเลือกพิเศษ"
  },
  {
    "name": "A Splash of Color on the Plate!",
    "region": "Natlan",
    "thaiName": "สีสันตระการตาอยู่บนจาน!"
  },
  {
    "name": "A Sprout Without a Gardener",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "A Starry Night, as Remembered",
    "region": "Other",
    "thaiName": "ดั่งเงาดวงดาราในวันเก่า"
  },
  {
    "name": "A Story for You",
    "region": "Inazuma",
    "thaiName": "\"เรื่องนี้มอบให้เธอ\""
  },
  {
    "name": "A Strange Story in Konda",
    "region": "Inazuma",
    "thaiName": "เรื่องราวแห่ง Konda"
  },
  {
    "name": "A Style-Fusion Symposium",
    "region": "Natlan",
    "thaiName": "การคิดแบบผสมผสานสไตล์"
  },
  {
    "name": "A Superstar... In the Aquarium?",
    "region": "Fontaine",
    "thaiName": "ดารา... ในตู้ปลา?"
  },
  {
    "name": "A Surprise From a Fellow Comics Fan",
    "region": "Dragonspine",
    "thaiName": "เซอร์ไพรส์จากเพื่อนผู้รักในการ์ตูน"
  },
  {
    "name": "A Taste Beyond Time",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "A Teapot to Call Home: Part I",
    "region": "Liyue",
    "thaiName": "กาหยกแสนละมุน-1"
  },
  {
    "name": "A Teapot to Call Home: Part II",
    "region": "Liyue",
    "thaiName": "กาหยกแสนละมุน-2"
  },
  {
    "name": "A Thread of Dawn-Light",
    "region": "Other",
    "thaiName": "ลำแสงแห่งรุ่งอรุณ"
  },
  {
    "name": "A Time-Tested Friendship",
    "region": "Fontaine",
    "thaiName": "มิตรภาพแสนยาวนาน"
  },
  {
    "name": "A Timeless Classic",
    "region": "Mondstadt",
    "thaiName": "เกมสุดคลาสสิก"
  },
  {
    "name": "A Toast Beneath the Moon",
    "region": "Other",
    "thaiName": "ดื่มด่ำใต้แสงจันทร์"
  },
  {
    "name": "A Toast Beneath the Moon (Part 2)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "A Tour of Wonders",
    "region": "Mondstadt",
    "thaiName": "เส้นทางมหัศจรรย์"
  },
  {
    "name": "A Trip Through Fog and Wind",
    "region": "Other",
    "thaiName": "การเดินทางของหมอกและสายลม"
  },
  {
    "name": "A Very Festive Problem",
    "region": "Liyue",
    "thaiName": "ปัญหาเล็กน้อยในช่วงเทศกาล"
  },
  {
    "name": "A Very Fishy Encounter",
    "region": "Fontaine",
    "thaiName": "เจอปลาต่างถิ่นอีกแล้ว?"
  },
  {
    "name": "A Visitor From Westward Realms",
    "region": "Liyue",
    "thaiName": "แขกผู้มาเยือนจากดินแดนทางตะวันตก"
  },
  {
    "name": "A Visitor From Westward Realms: The Flavor of Freedom",
    "region": "Mondstadt",
    "thaiName": "แขกผู้มาเยือนจากดินแดนทางตะวันตก - รสชาติของอิสรภาพ"
  },
  {
    "name": "A Wangshan Walk to Remember",
    "region": "Liyue",
    "thaiName": "การเดินทางสู่ Wangshan ที่โซซัดโซเซ"
  },
  {
    "name": "A Warm Promise",
    "region": "Other",
    "thaiName": "คำสัญญาที่หยุดความอบอุ่นเอาไว้"
  },
  {
    "name": "A Warning From the Wrathful Fish!",
    "region": "Fontaine",
    "thaiName": "คำเตือนของปลาฉุนเฉียว!"
  },
  {
    "name": "A Whole New Craftshop",
    "region": "Other",
    "thaiName": "สร้างเวิร์กชอปใหม่"
  },
  {
    "name": "A Window Into the World",
    "region": "Other",
    "thaiName": "ทอดสายตามองผ่านหน้าต่างแห่งโลก"
  },
  {
    "name": "A-Toymaking We Shall Go",
    "region": "Inazuma",
    "thaiName": "เข้าสู่ตลาดของเล่น"
  },
  {
    "name": "A-Toymaking We Shall Go: Core Propulsion",
    "region": "Inazuma",
    "thaiName": "บุกเข้าตลาดของเล่น: พลังขับเคลื่อนหลัก"
  },
  {
    "name": "A-Toymaking We Shall Go: Energy Storage",
    "region": "Inazuma",
    "thaiName": "บุกเข้าตลาดของเล่น: ที่จัดเก็บพลังงาน"
  },
  {
    "name": "A-Toymaking We Shall Go: Mass Production",
    "region": "Inazuma",
    "thaiName": "บุกเข้าตลาดของเล่น: ผลิตล็อตใหญ่"
  },
  {
    "name": "About That Time We Saved the Tanuki Photo Board",
    "region": "Inazuma",
    "thaiName": "เกี่ยวกับการช่วยเหลือกระดานภาพทานูกิ"
  },
  {
    "name": "Academic Exchange",
    "region": "Liyue",
    "thaiName": "ไปมาหาสู่ทางวิชาการ"
  },
  {
    "name": "Across the Wilderness (Quest)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Adeptus's Gift",
    "region": "Liyue",
    "thaiName": "ของขวัญจากเซียน"
  },
  {
    "name": "Adventure in the Land of Mists",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Adventure Rank Ascension 1",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Adventure Rank Ascension 2",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Adventure Rank Ascension 3",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Adventure Rank Ascension 4",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Adventure Takes Courage! (World Quest)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Adventurers in Windblume",
    "region": "Dragonspine",
    "thaiName": "ดอกไม้สายลมกับนักผจญภัย"
  },
  {
    "name": "Adventurers of Teyvat: Grand Showdown!",
    "region": "Other",
    "thaiName": "ศึกชิงชัย! การประลองของเหล่านักผจญภัยทั่วดินแดน!"
  },
  {
    "name": "Afratu's Dilemma",
    "region": "Sumeru",
    "thaiName": "ความสับสนของ Afratu"
  },
  {
    "name": "After the Storm",
    "region": "Mondstadt",
    "thaiName": "สมบัติหลังสายลม"
  },
  {
    "name": "Ah, Fresh Meat!",
    "region": "Dragonspine",
    "thaiName": "อ่า เนื้อสด ๆ!"
  },
  {
    "name": "Akitsu Yuugei",
    "region": "Inazuma",
    "thaiName": "Akitsu Yuugei"
  },
  {
    "name": "Alan Smithee, Author of Fischl",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Alan Smithee, Author of Fischl: Epilogue",
    "region": "Liyue",
    "thaiName": "Alan Smithee ผู้เขียนของ Fischl บทส่งท้าย"
  },
  {
    "name": "Alfred's Bouquet",
    "region": "Mondstadt",
    "thaiName": "ช่อดอกไม้ของ Alfred"
  },
  {
    "name": "All Good Reunions Follow a Search",
    "region": "Natlan",
    "thaiName": "การพบพานมักจะมาหลังจากการค้นหา"
  },
  {
    "name": "All's Well That Ends Well (Quest)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Allan's Dilemma",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Almighty Arataki Extraordinary and Exhilarating Extreme Beetle Brawl!",
    "region": "Inazuma",
    "thaiName": "อภิมหาศึกประลองสุดยอดจ้าวแมลงแห่ง Arataki"
  },
  {
    "name": "Amir's Raw Meat Commission",
    "region": "Sumeru",
    "thaiName": "การสรรหา Raw Meat ของ Amir"
  },
  {
    "name": "An Abundant Estimation",
    "region": "Sumeru",
    "thaiName": "งบประมาณ \"อื้อซ่า\""
  },
  {
    "name": "An Actor... In the Aquarium?",
    "region": "Fontaine",
    "thaiName": "นักแสดง... ในตู้ปลา?"
  },
  {
    "name": "An Adeptal Summons",
    "region": "Liyue",
    "thaiName": "ถวายแด่เซียน"
  },
  {
    "name": "An Adventurer's Woes",
    "region": "Other",
    "thaiName": "ความกังวลของนักผจญภัย"
  },
  {
    "name": "An Air Race and an Alibi",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "An Ancient Sacrifice of Sacred Brocade",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "An Ark That Used to Be a Soul",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "An Artist Adrift (Part 1)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "An Artist Adrift (Part 2)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "An Artist Adrift (Part 3)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "An Expected Lie",
    "region": "Fontaine",
    "thaiName": "คำโกหกที่คาดการณ์ไว้"
  },
  {
    "name": "An Expected Plan",
    "region": "Fontaine",
    "thaiName": "แผนการหนึ่งที่วาดหวังไว้"
  },
  {
    "name": "An Eye for an Eye",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "An Instant of Intoxication, A Meeting by Moonlight",
    "region": "Fontaine",
    "thaiName": "มึนเมาชั่วพริบตา นัดพบใต้แสงจันทร์"
  },
  {
    "name": "An Introduction to Indoor Archaeology",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "An Invasion on Hold",
    "region": "Fontaine",
    "thaiName": "ยับยั้งการบุกรุกของสิ่งมีชีวิตไว้ได้ชั่วคราว..."
  },
  {
    "name": "An Invitation From the Spark Knight",
    "region": "Dragonspine",
    "thaiName": "คำเชิญจากอัศวินดอกไม้เพลิง"
  },
  {
    "name": "An Island Without Thieves",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "An Odd Textual Mystery",
    "region": "Sumeru",
    "thaiName": "เมฆฉงนในหนังสือลับ"
  },
  {
    "name": "An Ode to Yonder City",
    "region": "Liyue",
    "thaiName": "บทกวีอุทิศแด่เมืองนี้"
  },
  {
    "name": "An Omen of Annihilation and the Final Entreaty",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "An Unwavering Culinary Dream (Quest)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Ancient Wind",
    "region": "Dragonspine",
    "thaiName": ""
  },
  {
    "name": "And This Treasure Goes To...",
    "region": "Liyue",
    "thaiName": "Lingju มีสมบัติให้ผู้ใด"
  },
  {
    "name": "Animal Research: Capybaras",
    "region": "Other",
    "thaiName": "สำรวจสัตว์ - Capybara"
  },
  {
    "name": "Animal Research: Chic Badgers",
    "region": "Other",
    "thaiName": "สำรวจสัตว์ - แบดเจอร์สุดเก๋"
  },
  {
    "name": "Animal Research: Frostfin Whales",
    "region": "Other",
    "thaiName": "สำรวจสัตว์ - วาฬฟินหิมะ"
  },
  {
    "name": "Animal Research: Golden Loaches",
    "region": "Other",
    "thaiName": "สำรวจสัตว์ - Golden Loach"
  },
  {
    "name": "Ann's Story",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Ann, Mary-Ann, and Marionette",
    "region": "Fontaine",
    "thaiName": "Ann กับ Mary-Ann และ Marionette"
  },
  {
    "name": "Anomaly: Inazuma",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Anomaly: Liyue",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Anomaly: Mondstadt",
    "region": "Dragonspine",
    "thaiName": ""
  },
  {
    "name": "Anomaly: Natlan",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Anomaly: Snezhnaya",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Anomaly: Sumeru",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Another Home There May Yet Be",
    "region": "Sumeru",
    "thaiName": "หากยังมีบ้านอยู่อีกแห่ง"
  },
  {
    "name": "Another Horizon of Adventure",
    "region": "Fontaine",
    "thaiName": "การผจญภัยนั้นก็ต้องมุ่งสู่แดนไกล"
  },
  {
    "name": "Another Horizon of Adventure (Snezhnaya)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Answer Me This, Outlander",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Answer Whose Summoning?",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Antigonus",
    "region": "Enkanomiya",
    "thaiName": "Antigonus"
  },
  {
    "name": "Antiquity Hunt",
    "region": "Sumeru",
    "thaiName": "ขุดค้นทางโบราณคดี"
  },
  {
    "name": "Antiquity Hunt: Conclusion",
    "region": "Sumeru",
    "thaiName": "ขุดค้นทางโบราณคดี - ส่งท้าย"
  },
  {
    "name": "Any Unsolved Mysteries?",
    "region": "Other",
    "thaiName": "ปริศนาที่หลงเหลืออยู่?"
  },
  {
    "name": "Aphid Treasure",
    "region": "Natlan",
    "thaiName": "สมบัติแห่งเพลี้ย"
  },
  {
    "name": "Aqueous Tidemarks",
    "region": "Fontaine",
    "thaiName": "ร่องรอยแห่งคลื่นน้ำ"
  },
  {
    "name": "Aragaru's Drawing",
    "region": "Sumeru",
    "thaiName": "ภาพเขียนของ Aragaru"
  },
  {
    "name": "Aranaga's Memory",
    "region": "Sumeru",
    "thaiName": "ความทรงจำของ Aranaga"
  },
  {
    "name": "Aranakin's Old Friend",
    "region": "Sumeru",
    "thaiName": "เพื่อนเก่าของ Aranakin"
  },
  {
    "name": "Arataki Blazing Armor Beetle Battle Boot Camp!",
    "region": "Liyue",
    "thaiName": "การฝึกฝนประลองแมลงชุดเกราะ Arataki อันยิ่งใหญ่!"
  },
  {
    "name": "Arayesh's Jam",
    "region": "Sumeru",
    "thaiName": "การสรรหา Jam ของ Arayesh"
  },
  {
    "name": "Aren't Finches the Cutest?",
    "region": "Other",
    "thaiName": "นกกระจอกน่ารักที่สุดใช่มั้ย!"
  },
  {
    "name": "Arina's Nilotpala Lotuses",
    "region": "Sumeru",
    "thaiName": "การสรรหา Nilotpala Lotus ของ Arina"
  },
  {
    "name": "As the Burning Sun Sears Shadows",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "As the Khvarena's Light Shows",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "As the Khvarena's Light Shows: Dukkha",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "As the Khvarena's Light Shows: Nirodha",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "As the Khvarena's Light Shows: Samudaya",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Ascension Challenge I",
    "region": "Mondstadt",
    "thaiName": "เลื่อนขั้นเลเวลผู้เล่น - 1"
  },
  {
    "name": "Ascension Challenge II",
    "region": "Mondstadt",
    "thaiName": "เลื่อนขั้นเลเวลผู้เล่น - 2"
  },
  {
    "name": "Ascension Challenge III",
    "region": "Mondstadt",
    "thaiName": "เลื่อนขั้นเลเวลผู้เล่น - 3"
  },
  {
    "name": "Ascension Challenge IV",
    "region": "Mondstadt",
    "thaiName": "เลื่อนขั้นเลเวลผู้เล่น - 4"
  },
  {
    "name": "Asipattravana Itihasa",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Atop the Floating Snow",
    "region": "Other",
    "thaiName": "เหนือผืนหิมะ"
  },
  {
    "name": "Automaton Attack",
    "region": "Inazuma",
    "thaiName": "ความโกลาหลที่เกิดจากจักรกลอัตโนมัติ"
  },
  {
    "name": "Autonomous Mechanical Energy Source: Conclusion",
    "region": "Inazuma",
    "thaiName": "การวิจัยแหล่งพลังงานจักรกลอัตโนมัติ: บทสรุป"
  },
  {
    "name": "Autonomous Mechanical Energy Source: Live Sample",
    "region": "Inazuma",
    "thaiName": "การวิจัยแหล่งพลังงานจักรกลอัตโนมัติ: ตัวอย่างภาคปฏิบัติ"
  },
  {
    "name": "Autonomous Mechanical Energy Source: Preface",
    "region": "Inazuma",
    "thaiName": "การวิจัยแหล่งพลังงานจักรกลอัตโนมัติ: บทนำ"
  },
  {
    "name": "Avant-Garde Graffiti Visionary!",
    "region": "Natlan",
    "thaiName": "แนวคิดล้ำสมัยและกราฟฟิตี้!"
  },
  {
    "name": "Awaiting the Dawn",
    "region": "Other",
    "thaiName": "เฝ้ารอแสงรุ่งอรุณ"
  },
  {
    "name": "Awaken the Residual Pari in the Fravashi Trees (Asipattravana Swamp)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Awaken the Residual Pari in the Fravashi Trees (East Tunigi Hollow)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Awaken the Residual Pari in the Fravashi Trees (Hangeh Afrasiyab)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Awaken the Residual Pari in the Fravashi Trees (Madinat al-Nuhas)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Awaken the Residual Pari in the Fravashi Trees (North Tunigi Hollow 1)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Awaken the Residual Pari in the Fravashi Trees (North Tunigi Hollow 2)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Awaken the Residual Pari in the Fravashi Trees (North Tunigi Hollow 3)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Awaken the Residual Pari in the Fravashi Trees (Northwest Tunigi Hollow)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Awaken the Residual Pari in the Fravashi Trees (West Temir Mountains 1)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Awaken the Residual Pari in the Fravashi Trees (West Temir Mountains 2)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Awakening's Real Sound",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Back on One's Feet",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Backstage Helpers",
    "region": "Liyue",
    "thaiName": "ผู้อยู่เบื้องหลังฉาก"
  },
  {
    "name": "Backup Plans",
    "region": "Other",
    "thaiName": "แผนสำรอง"
  },
  {
    "name": "Bait Resupply Plan",
    "region": "Inazuma",
    "thaiName": "แผนการเติมเหยื่อ"
  },
  {
    "name": "Bake-Danuki Wanderlust",
    "region": "Other",
    "thaiName": "Bake-Danuki ผู้กระหายการเดินทาง"
  },
  {
    "name": "Ballads of Breeze (Invitation of Windblume)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Ballads of Breeze (Windblume's Breath)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Bantan Sango Case File: Mystery of the Black Shadow",
    "region": "Inazuma",
    "thaiName": "แฟ้มคดีของ Bantan Sango - ปริศนาในเงามืด"
  },
  {
    "name": "Bantan Sango Case File: Recognition",
    "region": "Inazuma",
    "thaiName": "แฟ้มคดีของ Bantan Sango - การยินยอมของมัน"
  },
  {
    "name": "Bantan Sango Case File: Stealthy Trail",
    "region": "Inazuma",
    "thaiName": "แฟ้มคดีของ Bantan Sango - ร่องรอยลึกลับ"
  },
  {
    "name": "Bantan Sango Case File: The Truth (Just About) Comes to Light",
    "region": "Inazuma",
    "thaiName": "แฟ้มคดีของ Bantan Sango - แสงสว่างอันเลือนราง"
  },
  {
    "name": "Battle Beneath the Spirit-Quelling Banner",
    "region": "Liyue",
    "thaiName": "ตำนานธงทิวปราบมาร"
  },
  {
    "name": "Battle of Revenge",
    "region": "Inazuma",
    "thaiName": "การต่อสู้นัดล้างตา"
  },
  {
    "name": "Beat the Clock: 24 Hours",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Behind the Scenes (Event Quest)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Behold the Grandeur, Seize the Splendor",
    "region": "Natlan",
    "thaiName": "เที่ยวชมทิวทัศน์ ค้นหาจุดไฮไลท์"
  },
  {
    "name": "Behold, the Sign Comes Like A Thief...",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Bell Ringing at Dusk",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Beneath the Crystal Rock",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Beneath the Lunar Sea",
    "region": "Other",
    "thaiName": "ใต้ทะเลจันทร์"
  },
  {
    "name": "Betterments in Aquatic Circumstances...",
    "region": "Fontaine",
    "thaiName": "สภาพแหล่งน้ำดีขึ้นแล้ว..."
  },
  {
    "name": "Between Facades and Familiar Faces",
    "region": "Liyue",
    "thaiName": "ท่ามกลางผู้คนรายล้อม"
  },
  {
    "name": "Beverage Shop on the Pier",
    "region": "Liyue",
    "thaiName": "ร้านเครื่องดื่มบนท่าเรือ"
  },
  {
    "name": "Big Badaboom Battle",
    "region": "Other",
    "thaiName": "ศึกสังเวียนเดือด"
  },
  {
    "name": "Big Business",
    "region": "Liyue",
    "thaiName": "การค้าใหญ่"
  },
  {
    "name": "Blackcliff Woes",
    "region": "Liyue",
    "thaiName": "ความยากลำบากแห่ง Blackcliff"
  },
  {
    "name": "Blade Dance's Unexpected End!",
    "region": "Fontaine",
    "thaiName": "ระบำดาบที่จบลงอย่างคาดไม่ถึง!"
  },
  {
    "name": "Blessings of the Frost Moon",
    "region": "Other",
    "thaiName": "คำอธิษฐานจันทราน้ำค้างแข็ง"
  },
  {
    "name": "Blessings of the Frost Moon (Part 2)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Blocked Road",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Blooming Sands",
    "region": "Sumeru",
    "thaiName": "ดอกไม้บนผืนทราย"
  },
  {
    "name": "Blues of the Old World",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Boiling Over!",
    "region": "Sumeru",
    "thaiName": "เดือดพล่านสั่นสะท้าน!"
  },
  {
    "name": "Book in the Woods",
    "region": "Liyue",
    "thaiName": "สมุดเล่มน้อยในป่าใหญ่"
  },
  {
    "name": "Book of Esoteric Revelations",
    "region": "Fontaine",
    "thaiName": "หนังสือวิวรณ์แห่งทะเลลึกลับ"
  },
  {
    "name": "Both Brains and Brawn",
    "region": "Fontaine",
    "thaiName": "หมัดคู่สติปัญญา"
  },
  {
    "name": "Bough Keeper: Dainsleif",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Break the Sword Cemetery Seal",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Breezy Snapshots",
    "region": "Mondstadt",
    "thaiName": "ภาพถ่ายสายลม"
  },
  {
    "name": "Bright Moon, Lantern Glow",
    "region": "Liyue",
    "thaiName": "แสงจันทร์ส่องนำทาง"
  },
  {
    "name": "Brook the Carnivore",
    "region": "Mondstadt",
    "thaiName": "Brook นักกินเนื้อ"
  },
  {
    "name": "Bruneau's Flower Request",
    "region": "Fontaine",
    "thaiName": "คำขอดอกไม้สดของ Bruneau"
  },
  {
    "name": "Bulle Fruit-Hued Interloper!",
    "region": "Mondstadt",
    "thaiName": "แขกไม่ได้รับเชิญสี Bulle Fruit!"
  },
  {
    "name": "Bullseye Balloons (Quest)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Burn the Storehouses and the Stables",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Busy Adventurers' Guild",
    "region": "Mondstadt",
    "thaiName": "กิลด์นักผจญภัยที่วุ่นวาย"
  },
  {
    "name": "Buyer's Guide to the Statue of Her Excellency, the Almighty Narukami Ogosho, God of Thunder",
    "region": "Inazuma",
    "thaiName": "คู่มือผู้ซื้อ \"รูปปั้นท่าน Narukami Ogosho ผู้ยิ่งใหญ่\""
  },
  {
    "name": "By Thy Pale Beams I Solitary Rove",
    "region": "Inazuma",
    "thaiName": "แสงจันทร์ชี้นำทาง"
  },
  {
    "name": "Capturing Light and Shadow",
    "region": "Other",
    "thaiName": "ลายเส้นและแสงเงาที่จับใจฉัน"
  },
  {
    "name": "Cat and Cog",
    "region": "Other",
    "thaiName": "แมวเหมียวกับฟันเฟือง"
  },
  {
    "name": "Chance Commission",
    "region": "Other",
    "thaiName": "คำขอที่ปรากฏโดยบังเอิญ"
  },
  {
    "name": "Changchang's Little Friend",
    "region": "Liyue",
    "thaiName": "เพื่อนตัวน้อยของ Changchang"
  },
  {
    "name": "Charge Forward! Go, Go, Go!",
    "region": "Natlan",
    "thaiName": "ก้าวไปข้างหน้า! ลุย! ลุย!"
  },
  {
    "name": "Charity Event! A Great Success!",
    "region": "Mondstadt",
    "thaiName": "กิจกรรมออกร้านการกุศล! สำเร็จลุล่วง!"
  },
  {
    "name": "Charity Event? Securing Funds?",
    "region": "Mondstadt",
    "thaiName": "กิจกรรมออกร้านการกุศล? ระดมเงินทุน?"
  },
  {
    "name": "Chasm Spelunkers",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Childhood Happiness",
    "region": "Other",
    "thaiName": "ความสุขในวัยเด็ก"
  },
  {
    "name": "Children of the Forest",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Chili Con Cloudy",
    "region": "Liyue",
    "thaiName": "Yunyun กับ Chili"
  },
  {
    "name": "Chisato's Letter",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Chloris' Flora Studies",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Chorus of Solace",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Chubby Crisis",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "City of Chores",
    "region": "Liyue",
    "thaiName": "เรื่องราวในเมืองใหญ่"
  },
  {
    "name": "Clean House",
    "region": "Inazuma",
    "thaiName": "ทำความสะอาดบ้าน"
  },
  {
    "name": "Cleansing Defilement",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Cleanup At Dawn",
    "region": "Mondstadt",
    "thaiName": "ทำความสะอาดโรงกลั่นครั้งใหญ่"
  },
  {
    "name": "Click!",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Clickety Click!",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Collaborative Commission",
    "region": "Other",
    "thaiName": "คำขอความร่วมมือ"
  },
  {
    "name": "Collection of Dragons and Snakes",
    "region": "Enkanomiya",
    "thaiName": "คอลเลกชันของมังกรและงู"
  },
  {
    "name": "Collector of Anemo Sigils",
    "region": "Mondstadt",
    "thaiName": "หญิงสาวผู้สะสม Anemo Sigils"
  },
  {
    "name": "Colors Out of Space",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Come Fly With Me",
    "region": "Natlan",
    "thaiName": "โบยบินไปกับฉัน"
  },
  {
    "name": "Come Play With the Moon",
    "region": "Other",
    "thaiName": "เล่นกับดวงจันทร์"
  },
  {
    "name": "Come Try Genius Invokation TCG!",
    "region": "Mondstadt",
    "thaiName": "มาลองเล่น \"เกมกลเจ็ดอัจฉริยะ\" กันเถอะ"
  },
  {
    "name": "Commanders and Wargames",
    "region": "Liyue",
    "thaiName": "ผู้บัญชาการและเกมสงคราม"
  },
  {
    "name": "Complex Cartography",
    "region": "Sumeru",
    "thaiName": "วิธีสำรวจแผนที่อันซับซ้อน"
  },
  {
    "name": "Concocted Reaction",
    "region": "Sumeru",
    "thaiName": "รูปแบบการตอบสนองต่อยา"
  },
  {
    "name": "Connor's Brew",
    "region": "Mondstadt",
    "thaiName": "การสรรหาวัตถุดิบหมักไวน์ของ Connor"
  },
  {
    "name": "Contingencies",
    "region": "Mondstadt",
    "thaiName": "มาตรการฉุกเฉิน"
  },
  {
    "name": "Contraption-Contrived Cooking Course: Part I",
    "region": "Liyue",
    "thaiName": "เครื่องกลทำอาหาร I"
  },
  {
    "name": "Contraption-Contrived Cooking Course: Part II",
    "region": "Mondstadt",
    "thaiName": "เครื่องกลทำอาหาร II"
  },
  {
    "name": "Contraption-Contrived Cooking Course: Part III",
    "region": "Dragonspine",
    "thaiName": "เครื่องกลทำอาหาร III"
  },
  {
    "name": "Controllable Explosion",
    "region": "Sumeru",
    "thaiName": "ระเบิดที่ควบคุมได้"
  },
  {
    "name": "Cooking, a Pleasant Memory",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Cooking, the Aroma of Homecoming",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Cooking, the Beauty of Sharing",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Cooking, the Flavor of Nature",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Corps of Thirty Recruitment",
    "region": "Sumeru",
    "thaiName": "การรับสมัครของ \"กลุ่มภาคี 30\""
  },
  {
    "name": "Cost-Effective Hook",
    "region": "Sumeru",
    "thaiName": "การตกปลาที่คุ้มค่า"
  },
  {
    "name": "Counterfeit Classics",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Courage Is in the Heart",
    "region": "Sumeru",
    "thaiName": "ความกล้าหาญอยู่ที่ใจ"
  },
  {
    "name": "Covert Investigation, Dirty Money Misdeeds (Part 1)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Covert Investigation, Dirty Money Misdeeds (Part 2)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Covert Investigation, Dirty Money Misdeeds (Part 3)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Crabby Chaos",
    "region": "Fontaine",
    "thaiName": "ความโกลาหลที่เกิดจาก Armored Crab"
  },
  {
    "name": "Crimson Cleansing",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Crisis Management Unit, Fully Operational!",
    "region": "Sumeru",
    "thaiName": "องค์กรต้านภัย พร้อมเต็มอัตรา!"
  },
  {
    "name": "Crisis Relieved! A Happy Memento!",
    "region": "Mondstadt",
    "thaiName": "พ้นวิกฤติแล้ว! บันทึกช่วงเวลาแสนสุข!"
  },
  {
    "name": "Crocs? Water Cannons? It's War!",
    "region": "Other",
    "thaiName": "จระเข้? ปืนน้ำ? การต่อสู้ครั้งใหญ่!"
  },
  {
    "name": "Crossing Unknown Storm Clouds",
    "region": "Inazuma",
    "thaiName": "ฝ่าเมฆฝนฟ้าคะนองที่ไม่รู้จัก"
  },
  {
    "name": "Cupid's Lover",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Custom Gift Envelope No. 1",
    "region": "Liyue",
    "thaiName": "การ์ดอวยพร 1"
  },
  {
    "name": "Custom Gift Envelope No. 2",
    "region": "Liyue",
    "thaiName": "การ์ดอวยพร 2"
  },
  {
    "name": "Custom Gift Envelope No. 3",
    "region": "Liyue",
    "thaiName": "การ์ดอวยพร 3"
  },
  {
    "name": "Custom Gift Envelope No. 4",
    "region": "Liyue",
    "thaiName": "การ์ดอวยพร 4"
  },
  {
    "name": "Custom Gift Envelope No. 5",
    "region": "Liyue",
    "thaiName": "การ์ดอวยพร 5"
  },
  {
    "name": "Custom Gift Envelope No. 6",
    "region": "Liyue",
    "thaiName": "การ์ดอวยพร 6"
  },
  {
    "name": "Custom Gift Envelope No. 7",
    "region": "Liyue",
    "thaiName": "การ์ดอวยพร 7"
  },
  {
    "name": "Daiya's Three-Day Reverie (Quest)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Dance Exchanges — A Beautiful Start",
    "region": "Natlan",
    "thaiName": "การเปิดฉาก \"แลกเปลี่ยนทักษะการเต้น\""
  },
  {
    "name": "Dancin' in the Moonlight",
    "region": "Natlan",
    "thaiName": "เต้นรำในแสงจันทร์"
  },
  {
    "name": "Dandelion, Rose, and Windwheel Aster",
    "region": "Mondstadt",
    "thaiName": "Dandelion, Rose, Windwheel Aster"
  },
  {
    "name": "Danger Lurks Everywhere in Fontaine",
    "region": "Fontaine",
    "thaiName": "นครว่าการ Fontaine ที่เต็มไปด้วยอันตราย"
  },
  {
    "name": "Danger? Keep Away!",
    "region": "Fontaine",
    "thaiName": "อันตราย? โปรดอย่าเข้าใกล้!"
  },
  {
    "name": "Dangerous Cluster",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Date's Challenge",
    "region": "Enkanomiya",
    "thaiName": "การท้าทายของ Date"
  },
  {
    "name": "Daybreak After the Snow",
    "region": "Other",
    "thaiName": "แสงรุ่งอรุณหลังหิมะโปรย"
  },
  {
    "name": "Daydreams Beyond Space and Time",
    "region": "Fontaine",
    "thaiName": "จินตนาการเหนือกาลเวลาและอวกาศ"
  },
  {
    "name": "Delicious Riddle",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Deliciousness Knows No Borders",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Desert's Remembrance",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Determined and Elegant Battle Dance?",
    "region": "Other",
    "thaiName": "ระบำต่อสู้อันมุ่งมั่นและสง่างาม?"
  },
  {
    "name": "Dimming Mushroom's Call for Help",
    "region": "Liyue",
    "thaiName": "เสียงร้องขอความช่วยเหลือจากเห็ดทึมแสง"
  },
  {
    "name": "Disco in Motion, Holiday Emotion!",
    "region": "Natlan",
    "thaiName": "จังหวะสุดคึกคัก วันหยุดกลับมาอีกครั้ง!"
  },
  {
    "name": "Disputes Without Honor and Humanity",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Divine Ingenuity (Quest)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Divine Ingenuity: Collector's Chapter (Quest)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Divine Plant of the Depths",
    "region": "Inazuma",
    "thaiName": "พืชมหัศจรรย์จากห้วงลึกใต้ท้องทะเล"
  },
  {
    "name": "Docked on a Moonlit Night",
    "region": "Mondstadt",
    "thaiName": "คืนแห่งจันทร์ในท่าเทียบเรือ"
  },
  {
    "name": "Dodoco's Boom-Bastic Escapades!",
    "region": "Mondstadt",
    "thaiName": "บันทึกการผจญภัยของ Dodoco ปุ้งปุ้ง!"
  },
  {
    "name": "Don't Let the Colors Escape!",
    "region": "Natlan",
    "thaiName": "เจ้าสีสันตระการตา อย่าหนีนะ!"
  },
  {
    "name": "Down in the Dumps",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Dr. Edith's Transport Request",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Dr. Livingstone's Transport Request",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Drama Phantasmagoria: Tale of the Sword-Wielding Princess!",
    "region": "Other",
    "thaiName": "บทละครแห่ง Phantasmagoria - บันทึกดาบแห่งเจ้าหญิง!"
  },
  {
    "name": "Dreamlike",
    "region": "Inazuma",
    "thaiName": "ราวกับภาพฝัน"
  },
  {
    "name": "Dreams Beneath the Searing Sand",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Dreams in the Gaps",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "Dreams of Bloom (Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Dreams of Sword Art",
    "region": "Inazuma",
    "thaiName": "ความฝันแห่งคมดาบ"
  },
  {
    "name": "Dreamy Paititi",
    "region": "Natlan",
    "thaiName": "Paititi แห่งความฝัน"
  },
  {
    "name": "Dredging the Land",
    "region": "Dragonspine",
    "thaiName": ""
  },
  {
    "name": "Drifting Toward a Promised Sky",
    "region": "Other",
    "thaiName": "พันธสัญญาทะยานขึ้นฟ้า"
  },
  {
    "name": "Drills by Lamplight",
    "region": "Liyue",
    "thaiName": "ประชันใต้แสงไฟ"
  },
  {
    "name": "Dual Evidence",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Dune-Entombed Fecundity: Part I",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Dune-Entombed Fecundity: Part II",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Dune-Entombed Fecundity: Part III",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Dwarkanath's White Iron Chunks",
    "region": "Sumeru",
    "thaiName": "การสรรหา White Iron Chunk ของ Dwarkanath"
  },
  {
    "name": "Echoes of a Forsaken Song",
    "region": "Other",
    "thaiName": "บทเพลงอ้างว้างของผู้ถูกเนรเทศ"
  },
  {
    "name": "Echoes of an Unfinished Past",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Echoes of the Ancient World",
    "region": "Fontaine",
    "thaiName": "เสียงสะท้อนจากอดีตกาล"
  },
  {
    "name": "Eight Locales Over Mountains and Seas (Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Eight Locales Over Mountains and Seas: Blazing Poetry",
    "region": "Liyue",
    "thaiName": "ทริปแห่งขุนเขาและท้องทะเลทั้งแปด: ท่วงทำนองที่แผดเผา"
  },
  {
    "name": "Eight Locales Over Mountains and Seas: One Hundred Sights of Dihua",
    "region": "Liyue",
    "thaiName": "ทริปแห่งขุนเขาและท้องทะเลทั้งแปด: วิวแสนงามแห่งบึงน้ำ"
  },
  {
    "name": "Eight Locales Over Mountains and Seas: Snowswept Fairytale",
    "region": "Dragonspine",
    "thaiName": "ทริปแห่งขุนเขาและท้องทะเลทั้งแปด: เทพนิยายในหิมะขาว"
  },
  {
    "name": "Eight Locales Over Mountains and Seas: Soliloquy of Distant Island Peaks",
    "region": "Liyue",
    "thaiName": "ทริปแห่งขุนเขาและท้องทะเลทั้งแปด: เดียวดายใน Guyun"
  },
  {
    "name": "Eight Locales Over Mountains and Seas: The Wonders of Adeptal Amber",
    "region": "Liyue",
    "thaiName": "ทริปแห่งขุนเขาและท้องทะเลทั้งแปด: ภาษาอันงดงามของภูเขาอำพัน"
  },
  {
    "name": "Eight Locales Over Mountains and Seas: Two Cities' Recommendations",
    "region": "Mondstadt",
    "thaiName": "ทริปแห่งขุนเขาและท้องทะเลทั้งแปด: ของเด็ดแห่งสองดินแดน"
  },
  {
    "name": "Eight Locales Over Mountains and Seas: Wanderer's Appraisal",
    "region": "Mondstadt",
    "thaiName": "ทริปแห่งขุนเขาและท้องทะเลทั้งแปด: ล่องสายลมพเนจร"
  },
  {
    "name": "Elegance? Safety First!",
    "region": "Fontaine",
    "thaiName": "สง่างามเหรอ? ปลอดภัยไว้ก่อน!"
  },
  {
    "name": "Eliminating the Hidden Danger",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Elixirs and Potions",
    "region": "Mondstadt",
    "thaiName": "ยาเม็ดและโพชั่น"
  },
  {
    "name": "Encounter in the Woods",
    "region": "Sumeru",
    "thaiName": "บทเพลงกลางพนาลัย"
  },
  {
    "name": "Encounters Always Happen on a Holiday",
    "region": "Natlan",
    "thaiName": "การพบพานโดยบังเอิญมักเกิดขึ้นในเวลาว่างเสมอ"
  },
  {
    "name": "End of a Leisurely Holiday",
    "region": "Other",
    "thaiName": "ช่วงท้ายของวันหยุดอันแสนสบาย"
  },
  {
    "name": "Endless Research",
    "region": "Liyue",
    "thaiName": "การวิจัยที่ไม่สิ้นสุด"
  },
  {
    "name": "Equivalent Exchange",
    "region": "Mondstadt",
    "thaiName": "การแลกเปลี่ยนที่เท่าเทียม"
  },
  {
    "name": "Eremite Mayhem",
    "region": "Sumeru",
    "thaiName": "ความโกลาหลที่เกิดจากกลุ่ม Eremite"
  },
  {
    "name": "Etienne's Raw Meat Request",
    "region": "Fontaine",
    "thaiName": "คำขอ Raw Meat ของ Etienne"
  },
  {
    "name": "Even Beasts Stumble",
    "region": "Sumeru",
    "thaiName": "สัตว์ยังรู้พลาด"
  },
  {
    "name": "Ever Beneath the Waves",
    "region": "Other",
    "thaiName": "มักอยู่ใต้เกลียวคลื่น"
  },
  {
    "name": "Everlasting as the Moon",
    "region": "Other",
    "thaiName": "ดั่งแสงจันทร์นิรันดร์"
  },
  {
    "name": "Evermotion Mechanical Painting (Quest)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Evermotion Mechanical Painting: Finale",
    "region": "Mondstadt",
    "thaiName": "ภาพเครื่องจักรนิรันดร์: จบ"
  },
  {
    "name": "Evermotion Mechanical Painting: Invoker",
    "region": "Mondstadt",
    "thaiName": "ภาพเครื่องจักรนิรันดร์: บทแห่งเจ็ดอัจฉริยะ"
  },
  {
    "name": "Every Aspect of a Warrior",
    "region": "Natlan",
    "thaiName": "ทุกด้านของนักรบ"
  },
  {
    "name": "Every Day a New Adventure",
    "region": "Mondstadt",
    "thaiName": "ทุกวันคือการผจญภัย"
  },
  {
    "name": "Evil Bares Its Fangs",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Exemplary Adventurer!",
    "region": "Mondstadt",
    "thaiName": "นักผจญภัยต้นแบบ!"
  },
  {
    "name": "Experiment Phase: Uncontrolled Parameters",
    "region": "Liyue",
    "thaiName": "การทดลองที่ไม่อาจควบคุม"
  },
  {
    "name": "Exploding Population",
    "region": "Mondstadt",
    "thaiName": "การระเบิดปลาครั้งใหญ่"
  },
  {
    "name": "Explorer Jack's Dilemma",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Facing Distant Echoes",
    "region": "Inazuma",
    "thaiName": "มุ่งหน้าไปยังเสียงสะท้อนที่อยู่ห่างไกลออกไป"
  },
  {
    "name": "Farewell, Final Saurus Cracker",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Farmland Fugitives",
    "region": "Mondstadt",
    "thaiName": "ผู้ลี้ภัยจากฟาร์ม"
  },
  {
    "name": "Fate of a Fighter",
    "region": "Inazuma",
    "thaiName": "ชะตาของนักสู้"
  },
  {
    "name": "Fatuous Farce (Inazuma)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Fatuous Farce (Sumeru)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Fauna Investigation Special Lecture",
    "region": "Other",
    "thaiName": "บทเรียนพิเศษสำรวจสัตว์"
  },
  {
    "name": "Favonian Goodies",
    "region": "Mondstadt",
    "thaiName": "ร้าน Favonius การกุศลกว่านี้ก็แจกฟรีแล้ว!"
  },
  {
    "name": "Favonian Goodies and Buddies",
    "region": "Mondstadt",
    "thaiName": "ร้านพันธมิตร Favonius แจกฟรีเหอะถ้าจะขนาดนี้!"
  },
  {
    "name": "Fecund Hamper",
    "region": "Mondstadt",
    "thaiName": "กล่องอันอุดมสมบูรณ์"
  },
  {
    "name": "Feeling Like Fish Today!",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Fertilizer... Salesperson?",
    "region": "Inazuma",
    "thaiName": "คนขาย...ปุ๋ย?"
  },
  {
    "name": "Festival Afterword",
    "region": "Inazuma",
    "thaiName": "คุยกันหลังงานเทศกาล"
  },
  {
    "name": "Festival Utsava",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Fieldwise Mastery, Unyielding Progress!",
    "region": "Sumeru",
    "thaiName": "ศูนย์เรียนรู้และปฏิบัติอย่างมั่นคง เตรียมพร้อมลุย!"
  },
  {
    "name": "Fight for Academic Reputation!",
    "region": "Sumeru",
    "thaiName": "สู้เพื่อเกียรติยศของวิชาการ"
  },
  {
    "name": "Filmmaking Notes",
    "region": "Fontaine",
    "thaiName": "จดหมายเหตุการถ่ายทำ"
  },
  {
    "name": "Final Match Concludes, Champion Decided",
    "region": "Other",
    "thaiName": "ปิดฉากการแข่งขัน ตำแหน่งแชมป์ถูกตัดสิน"
  },
  {
    "name": "Final Stanza: The Sanctification of Tao Dou",
    "region": "Liyue",
    "thaiName": "ตอนสุดท้าย: แปดผู้วิเศษชำระตนแห่ง Tao Dou"
  },
  {
    "name": "Finches Are Still the Cutest",
    "region": "Natlan",
    "thaiName": "นกกระจอกยังคงน่ารักที่สุด"
  },
  {
    "name": "Finches Are Still the Cutest!",
    "region": "Fontaine",
    "thaiName": "นกกระจอกยังคงน่ารักที่สุด"
  },
  {
    "name": "Fine Wine From Yesterday",
    "region": "Mondstadt",
    "thaiName": "ไวน์ของวันวาน"
  },
  {
    "name": "Fire and Ice",
    "region": "Other",
    "thaiName": "ไฟและน้ำแข็ง"
  },
  {
    "name": "First Miasmic Contact",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Fisharium Open For Business!",
    "region": "Fontaine",
    "thaiName": "พิพิธภัณฑ์สัตว์น้ำ? เปิดกิจการ!"
  },
  {
    "name": "Fishing For Jade",
    "region": "Liyue",
    "thaiName": "หยกในท้องทะเล"
  },
  {
    "name": "Fishing Game",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Flavor of the Month",
    "region": "Dragonspine",
    "thaiName": "รสชาติแห่ง \"สายลม\""
  },
  {
    "name": "Flighty Flora... and Flora",
    "region": "Mondstadt",
    "thaiName": "ดอกไม้ที่ล่องลอยไปตามลมและ Flora"
  },
  {
    "name": "Floating Jade, Treasure of Chenyu",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Floating Spirits — The Investigation Begins",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Floating Spirits — The Investigation Ends",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Flora Investigation Special Lecture",
    "region": "Other",
    "thaiName": "บทเรียนพิเศษสำรวจพืช"
  },
  {
    "name": "Floral Freefall",
    "region": "Mondstadt",
    "thaiName": "ดอกไม้ในเวหา"
  },
  {
    "name": "Floral Pursuit",
    "region": "Mondstadt",
    "thaiName": "หมื่นวายุคล้อยบุปผา"
  },
  {
    "name": "Flower, Feathers, and Bullets",
    "region": "Fontaine",
    "thaiName": "บุปผาขนนกเคียงหัวกระสุน"
  },
  {
    "name": "Fly High",
    "region": "Liyue",
    "thaiName": "สยายปีกแล้วบิน"
  },
  {
    "name": "Focal Point of Ancient Array (I)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Focal Point of Ancient Array (II)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Focal Point of Ancient Array (III)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Foggy Forest Path (Quest)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Fontaine Research Institute, Stagnating in the Rubble",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Food Matters",
    "region": "Other",
    "thaiName": "เรื่องกินเรื่องใหญ่"
  },
  {
    "name": "For A Better Reunion",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "For a Dream I Tarry",
    "region": "Sumeru",
    "thaiName": "กลิ่นห้วงฝันที่คละคลุ้ง"
  },
  {
    "name": "For a Green Island...",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "For All Children Who Long for Life",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "For an Ice Mirror Fragment",
    "region": "Other",
    "thaiName": "เพื่อตามหาเศษเสี้ยวของกระจกน้ำแข็ง"
  },
  {
    "name": "For Fontaine!",
    "region": "Fontaine",
    "thaiName": "เพื่อ Fontaine!"
  },
  {
    "name": "For Fruits, Seeds, and Trees",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "For Her Judgment Reaches to the Skies...",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "For the Children of the Past",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "For the Future's Sake, Experiment!",
    "region": "Fontaine",
    "thaiName": "การทดลองที่มุ่งสู่อนาคต"
  },
  {
    "name": "For Yesterday and Tomorrow",
    "region": "Fontaine",
    "thaiName": "เพื่ออดีตและวันพรุ่งนี้"
  },
  {
    "name": "Forbidding Doors of Melancholy",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Forest Boar Pauses for the Bloom",
    "region": "Mondstadt",
    "thaiName": "หมูป่าจอมป่วนดอมดมกลิ่นดอกไม้"
  },
  {
    "name": "Forested Snowfield",
    "region": "Other",
    "thaiName": "ทุ่งหิมะในป่าใหญ่"
  },
  {
    "name": "Fortune Plango Vulnera",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Free Verse",
    "region": "Fontaine",
    "thaiName": "บทกวีอิสระอันไร้กฎเกณฑ์"
  },
  {
    "name": "Friend to Animals",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Friends of Fire and Water",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Friends of Moleyvalley",
    "region": "Other",
    "thaiName": "เหล่าสหายแห่งหุบเขา Moley"
  },
  {
    "name": "Friends... In the Aquarium?",
    "region": "Fontaine",
    "thaiName": "เพื่อน ๆ... ในตู้ปลา?"
  },
  {
    "name": "From Outer Lands",
    "region": "Other",
    "thaiName": "มาจากแห่งหนไหน"
  },
  {
    "name": "Fungal Fracas",
    "region": "Sumeru",
    "thaiName": "ความโกลาหลที่เกิดจาก Fungus"
  },
  {
    "name": "Fungi Are Not Tidalga!",
    "region": "Fontaine",
    "thaiName": "Fungus ไม่ใช่ Tidalga นะ!"
  },
  {
    "name": "Furball Fortress's Frightful Fix!",
    "region": "Mondstadt",
    "thaiName": "วิกฤติครั้งใหญ่ใน \"Furball Fortress\"!"
  },
  {
    "name": "Furious Mouth of the Spring",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Galathee's Salt Solicitation",
    "region": "Fontaine",
    "thaiName": "คำขอเกลือของ Galathee"
  },
  {
    "name": "Game of the Rich",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Garcia's Paean",
    "region": "Liyue",
    "thaiName": "บทสรรเสริญของ Garcia"
  },
  {
    "name": "Garcia's Paean: A Gift of Compatibility",
    "region": "Sumeru",
    "thaiName": "บทสรรเสริญของ Garcia - ของขวัญแห่งความเข้ากันได้"
  },
  {
    "name": "Garden Fairies",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Gathering of Stars",
    "region": "Sumeru",
    "thaiName": "การรวมตัวของหมู่ดาว"
  },
  {
    "name": "Gazing Three Thousand Miles Away",
    "region": "Inazuma",
    "thaiName": "เฝ้ามองสามพันลี้"
  },
  {
    "name": "Geri's Gastro-Nostalgia",
    "region": "Liyue",
    "thaiName": "ความทรงจำของอาหาร Mondstadt รสเลิศของ Geri"
  },
  {
    "name": "Gift of the Mirage",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Gifts and Gifts in Return",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Giving Flowers",
    "region": "Sumeru",
    "thaiName": "ให้ดอกไม้"
  },
  {
    "name": "Gliding Challenge: New Heights",
    "region": "Mondstadt",
    "thaiName": "การท้าทายโบยบิน: พลิกโฉมใหม่"
  },
  {
    "name": "Glory's Wish",
    "region": "Mondstadt",
    "thaiName": "ความปรารถนาของ Glory"
  },
  {
    "name": "Go Forth, Golden Whirlwind!",
    "region": "Inazuma",
    "thaiName": "ไปเสียเถอะ! พายุแห่งทองคำ!"
  },
  {
    "name": "Go Go Saurian Expedition!",
    "region": "Natlan",
    "thaiName": "คณะสำรวจ Saurian ออกเดินทาง!"
  },
  {
    "name": "Go to the Institute Dormitories and retrieve the Anchor",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Go to the Institute of Clockwork Applications and retrieve the Anchor",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Goal: Counter the \"Phantom Blubberbeast!\"",
    "region": "Fontaine",
    "thaiName": "เป้าหมาย: ต่อต้าน \"หัวขโมย Blubberbeast\"!"
  },
  {
    "name": "Golden Aqueduct Reconstruction: Part I",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Golden Aqueduct Reconstruction: Part II",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Good as New",
    "region": "Mondstadt",
    "thaiName": "ตกแต่งใหม่เอี่ยม"
  },
  {
    "name": "Good Fortune Shared",
    "region": "Liyue",
    "thaiName": "ร่วมฉลองเรื่องดี ๆ"
  },
  {
    "name": "Good Stuff, but Terrible Taste (Belleau Region)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Good Stuff, but Terrible Taste (Central Beryl Region)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Good Stuff, but Terrible Taste (Court of Fontaine Region)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Good Stuff, but Terrible Taste (Southeast Beryl Region)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Good Stuff, but Terrible Taste (West Beryl Region)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Good Stuff, but Terrible Taste — Continued",
    "region": "Fontaine",
    "thaiName": "ของดี รสนิยมแย่ - ต่อ"
  },
  {
    "name": "Gourmet Supremos, Assemble!",
    "region": "Inazuma",
    "thaiName": "ทีมสุดยอดนักชิม!"
  },
  {
    "name": "Gourmet Supremos: Within Our Duties",
    "region": "Sumeru",
    "thaiName": "ทีมสุดยอดนักชิม - สิ่งที่อยู่ในความรับผิดชอบ"
  },
  {
    "name": "Gradus ad Capitolium",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Great Future Star",
    "region": "Sumeru",
    "thaiName": "สุดยอดดวงดาวแห่งอนาคต"
  },
  {
    "name": "Greetings From the Knights of Favonius",
    "region": "Dragonspine",
    "thaiName": "คำทักทายจากกองอัศวิน"
  },
  {
    "name": "Guardians of the Countryside",
    "region": "Liyue",
    "thaiName": "ผู้ปกป้องนอกเมือง"
  },
  {
    "name": "Guests in Qingce",
    "region": "Liyue",
    "thaiName": "Qingce กับแขกผู้มาเยือน"
  },
  {
    "name": "Hammer and Wrench",
    "region": "Liyue",
    "thaiName": "ประแจกับค้อน"
  },
  {
    "name": "Hanfeng's Iron-Mongering",
    "region": "Liyue",
    "thaiName": "การสรรหา Iron Chunk ของ Hanfeng"
  },
  {
    "name": "Happy Birthday",
    "region": "Fontaine",
    "thaiName": "สุขสันต์วันเกิด"
  },
  {
    "name": "Heart of Amrita",
    "region": "Sumeru",
    "thaiName": "ดวงใจหยาดอมฤต"
  },
  {
    "name": "Heart of the Dice",
    "region": "Mondstadt",
    "thaiName": "ลูกเต๋ากลลับ"
  },
  {
    "name": "Helen's Special Blend",
    "region": "Mondstadt",
    "thaiName": "ชาชุ่มคอสูตรพิเศษของ Helen"
  },
  {
    "name": "Her Past",
    "region": "Other",
    "thaiName": "อดีตของเธอ"
  },
  {
    "name": "Herbalist's Forage",
    "region": "Liyue",
    "thaiName": "การสรรหาสมุนไพรของนักสมุนไพร Gui"
  },
  {
    "name": "Hereafter...",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Hereafter: All is Well",
    "region": "Liyue",
    "thaiName": "เรื่องราวหลังการจากไป: ทุกสิ่งราบรื่น"
  },
  {
    "name": "Hereafter: Return to the Mountains",
    "region": "Liyue",
    "thaiName": "เรื่องราวหลังการจากไป: หวนคืนสู่ขุนเขา"
  },
  {
    "name": "Hereafter: The Trail of Pervases",
    "region": "Liyue",
    "thaiName": "เรื่องราวหลังการจากไป: รอยเท้าของ Pervases"
  },
  {
    "name": "Hidden Mercenaries",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Hilichurl Hullaballoo (Inazuma)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Hilichurl Hullaballoo (Sumeru)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Hilichurl Justice",
    "region": "Dragonspine",
    "thaiName": "ตาม Hilichurl ไป!"
  },
  {
    "name": "Hilichurl Nest",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Hiromi's Watch",
    "region": "Inazuma",
    "thaiName": "ผู้พิทักษ์แห่ง Hiromi"
  },
  {
    "name": "Home Lies Over the Ocean",
    "region": "Inazuma",
    "thaiName": "อีกฟากฝั่งทะเลคือบ้านเกิด"
  },
  {
    "name": "Homecoming's Faint Glow",
    "region": "Other",
    "thaiName": "แสงสลัวแห่งการหวนกลับ"
  },
  {
    "name": "Honorary Knight's Notes on Mixology",
    "region": "Mondstadt",
    "thaiName": "บันทึกศาสตร์การชงเครื่องดื่มของอัศวินผู้มีเกียรติ"
  },
  {
    "name": "Hot in a Flash, or Cold Just as Fast",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "House of the Soulless",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Housein's Harra Fruits",
    "region": "Sumeru",
    "thaiName": "การสรรหา Harra Fruit ของ Housein"
  },
  {
    "name": "Hundred-Pace Hurling Rites",
    "region": "Liyue",
    "thaiName": "ปาลูกศรร้อยก้าว"
  },
  {
    "name": "Hunter on the Snowfields",
    "region": "Other",
    "thaiName": "นักล่าบนทุ่งหิมะ"
  },
  {
    "name": "Hustle and Bustle",
    "region": "Liyue",
    "thaiName": "ผู้คนสัญจรไปมา"
  },
  {
    "name": "Hyakunin Ikki: Golden Whirlwind",
    "region": "Inazuma",
    "thaiName": "\"ร้อยใจรวมเป็นหนึ่ง - พายุแห่งทองคำ\""
  },
  {
    "name": "Hyakunin Ikki: Narukami Arena",
    "region": "Inazuma",
    "thaiName": "\"ร้อยใจรวมเป็นหนึ่ง - เวทีประลอง Narukami\""
  },
  {
    "name": "Hyakunin Ikki: The Greatest Battle",
    "region": "Inazuma",
    "thaiName": "\"ร้อยใจรวมเป็นหนึ่ง: งานประลองสุดแกร่ง\""
  },
  {
    "name": "Hydro Phantasm Havoc",
    "region": "Fontaine",
    "thaiName": "ความโกลาหลที่เกิดจาก Tainted Hydro Phantasm"
  },
  {
    "name": "Hydrological Investigation in The Chasm",
    "region": "Liyue",
    "thaiName": "สำรวจสิ่งแวดล้อมทางน้ำ"
  },
  {
    "name": "Hyperion's Dirge (Quest)",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "I, Researcher",
    "region": "Liyue",
    "thaiName": "ฉัน นักวิชาการ"
  },
  {
    "name": "Icy Harvest",
    "region": "Dragonspine",
    "thaiName": ""
  },
  {
    "name": "Idle Teapot Talk",
    "region": "Other",
    "thaiName": "เรื่องอลเวงในกาน้ำชา"
  },
  {
    "name": "Imaginary Maze of True Heroes",
    "region": "Mondstadt",
    "thaiName": "จินตนาการ! ผู้แข็งแกร่งและเขาวงกต!"
  },
  {
    "name": "Impromptu Poem of the Crimson Dawn",
    "region": "Fontaine",
    "thaiName": "บทกวีทันท่วงทีแห่งรุ่งอรุณ"
  },
  {
    "name": "In Another Land",
    "region": "Inazuma",
    "thaiName": "ในต่างแดน"
  },
  {
    "name": "In Expert Company? (I)",
    "region": "Fontaine",
    "thaiName": "แก๊งสามหน่อ... ตามหาผู้ชี้แนะ - 1"
  },
  {
    "name": "In Expert Company? (II)",
    "region": "Fontaine",
    "thaiName": "แก๊งสามหน่อ... ตามหาผู้ชี้แนะ - 2"
  },
  {
    "name": "In Search of a Hidden Heart",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "In Search of Lost Time",
    "region": "Fontaine",
    "thaiName": "ย้อนรอยอดีต"
  },
  {
    "name": "In Search of Lost Time: North",
    "region": "Fontaine",
    "thaiName": "ย้อนรอยอดีต - เหนือ"
  },
  {
    "name": "In Search of Lost Time: South",
    "region": "Fontaine",
    "thaiName": "ย้อนรอยอดีต - ใต้"
  },
  {
    "name": "In Search of Lost Time: West",
    "region": "Fontaine",
    "thaiName": "ย้อนรอยอดีต - ตะวันตก"
  },
  {
    "name": "In the Aftermath",
    "region": "Mondstadt",
    "thaiName": "เก็บกวาดงานที่เหลือ"
  },
  {
    "name": "In the Mountains",
    "region": "Dragonspine",
    "thaiName": "มอนสเตอร์แห่งภูเขา"
  },
  {
    "name": "In the Tranquility of Cycles",
    "region": "Other",
    "thaiName": "ท่ามกลางความสงบสุขแห่งวัฏจักร"
  },
  {
    "name": "In Truth's Steps",
    "region": "Sumeru",
    "thaiName": "แสวงหาความจริง"
  },
  {
    "name": "Incidents Are Ever Sudden",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Increasing Danger (Random Event)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Initial Facts",
    "region": "Fontaine",
    "thaiName": "ความจริงในตอนต้น"
  },
  {
    "name": "Inspiration Eruption",
    "region": "Liyue",
    "thaiName": "แรงบันดาลใจพรั่งพรู"
  },
  {
    "name": "Intel Quest",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "International Travel Log",
    "region": "Inazuma",
    "thaiName": "บันทึกการเดินทางของนานาประเทศ"
  },
  {
    "name": "Into the Woods",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Investigate the Fatui Camps Marked by Sosi",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Investigator of Ancient Ruins",
    "region": "Natlan",
    "thaiName": "นักสำรวจโบราณสถาน"
  },
  {
    "name": "Invisible Barrier",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Irate Iron Chunk",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Iridescent Cloud-Striding",
    "region": "Liyue",
    "thaiName": "ตามรอยแสงสว่าง"
  },
  {
    "name": "Irodori Poetry: Part I",
    "region": "Inazuma",
    "thaiName": "สะท้อนกวีนิพนธ์แห่ง Sugata no Irodori - 1"
  },
  {
    "name": "Irodori Poetry: Part II",
    "region": "Inazuma",
    "thaiName": "สะท้อนกวีนิพนธ์แห่ง Sugata no Irodori - 2"
  },
  {
    "name": "Irodori Poetry: Part III",
    "region": "Inazuma",
    "thaiName": "สะท้อนกวีนิพนธ์แห่ง Sugata no Irodori - 3"
  },
  {
    "name": "Iron Ingot Meets Ziwei",
    "region": "Liyue",
    "thaiName": "Iron Ingot ได้เจอกับ Ziwei..."
  },
  {
    "name": "Is \"Intensity\" Really the Key?",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Ismenor's Bulle Fruit Bulletin",
    "region": "Fontaine",
    "thaiName": "คำขอ Bulle Fruit ของ Ismenor"
  },
  {
    "name": "Jahan's Sugar",
    "region": "Sumeru",
    "thaiName": "การสรรหาเครื่องปรุงรสของ Jahan"
  },
  {
    "name": "Join the Eremites and Embrace a Wonderful New Life!",
    "region": "Sumeru",
    "thaiName": "เข้าร่วมกลุ่ม Eremite เพื่อชีวิตที่ดีกว่า!"
  },
  {
    "name": "Journey to Tsurumi",
    "region": "Inazuma",
    "thaiName": "การเดินทางสู่เกาะ Tsurumi"
  },
  {
    "name": "Just a 30% Cut!",
    "region": "Fontaine",
    "thaiName": "รายได้? รับแค่ 30%!"
  },
  {
    "name": "Just Like a Snowball",
    "region": "Other",
    "thaiName": "เหมือนลูกบอลหิมะ"
  },
  {
    "name": "Just Like Old Times",
    "region": "Other",
    "thaiName": "เหมือนเช่นวันวาน"
  },
  {
    "name": "Just Wushou Dance!",
    "region": "Liyue",
    "thaiName": "วูซูเท้าไฟ!"
  },
  {
    "name": "Kairagi Chaos",
    "region": "Inazuma",
    "thaiName": "ความโกลาหลที่เกิดจาก Kairagi"
  },
  {
    "name": "Kairagi-Vagrant Pandemonium",
    "region": "Inazuma",
    "thaiName": "ความโกลาหลที่เกิดจาก Vagrant และ Kairagi"
  },
  {
    "name": "Kamla's Berries",
    "region": "Sumeru",
    "thaiName": "การสรรหา Berry ของ Kamla"
  },
  {
    "name": "Kano Nana's Healthy Diet",
    "region": "Inazuma",
    "thaiName": "แผนการกินอาหารเพื่อสุขภาพของ Kano Nana"
  },
  {
    "name": "Kanra's Lovesickness",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Katheryne in Inazuma",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Keeping Wanmin's Patrons Fed",
    "region": "Liyue",
    "thaiName": "ลูกค้าผู้มีอุปการคุณแห่งภัตตาคาร Wanmin"
  },
  {
    "name": "Key Supplies",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Knight of the Realm",
    "region": "Mondstadt",
    "thaiName": "อัศวินแห่ง Mondstadt"
  },
  {
    "name": "Kourosh's Sumeru Roses",
    "region": "Sumeru",
    "thaiName": "การสรรหาดอกไม้สดของ Kourosh"
  },
  {
    "name": "Kozue's Ironwork",
    "region": "Inazuma",
    "thaiName": "การเสาะหา Iron Chunk ของ Kozue"
  },
  {
    "name": "Kunado's Trial",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "Kurious Kamera (Quest)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Lantern of the Wayfarer",
    "region": "Liyue",
    "thaiName": "ใต้โคมจากผู้ลาไกล"
  },
  {
    "name": "Lantern Rite, Big Business?",
    "region": "Liyue",
    "thaiName": "Lantern Rite... การค้าเฟื่องฟู?"
  },
  {
    "name": "Last Ride of the Bugbuster Squad",
    "region": "Natlan",
    "thaiName": "ทีมจับแมลงออกลุยครั้งสุดท้าย"
  },
  {
    "name": "Latecoming Homecoming",
    "region": "Fontaine",
    "thaiName": "การหวนกลับบ้านที่สายไป"
  },
  {
    "name": "Legends of the Stone Lock",
    "region": "Sumeru",
    "thaiName": "ตำนานกลไกผนึกหิน"
  },
  {
    "name": "Leroy: Beautiful Friends",
    "region": "Fontaine",
    "thaiName": "Leroy - เพื่อนแสนสวย"
  },
  {
    "name": "Leroy: Dying Flash",
    "region": "Fontaine",
    "thaiName": "Leroy - แสงสุดท้าย"
  },
  {
    "name": "Leroy: Firing Squad",
    "region": "Fontaine",
    "thaiName": "Leroy - หน่วยพิฆาต"
  },
  {
    "name": "Leroy: Hangman's Noose",
    "region": "Fontaine",
    "thaiName": "Leroy - บ่วงผูกรัด"
  },
  {
    "name": "Leroy: High Noon",
    "region": "Fontaine",
    "thaiName": "Leroy - เที่ยงแล้ว"
  },
  {
    "name": "Leroy: Queen of the Night's Aria",
    "region": "Fontaine",
    "thaiName": "Leroy - บทเพลงราชินีแห่งราตรี"
  },
  {
    "name": "Leroy: Under Guard",
    "region": "Fontaine",
    "thaiName": "Leroy - คุ้มกัน"
  },
  {
    "name": "Let the Bloomflower Trials Begin!",
    "region": "Natlan",
    "thaiName": "งานประลองบุปผาบาน เริ่มขึ้นแล้ว!"
  },
  {
    "name": "Let's Go, Saury-Saury Scout!",
    "region": "Dragonspine",
    "thaiName": "Saurian ด่านหน้า ออกเดินทาง!"
  },
  {
    "name": "Let's Make A Flower Garland!",
    "region": "Liyue",
    "thaiName": "Changchang อยากร้อยมาลัย!"
  },
  {
    "name": "Lianne's Troubles",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Lies and Promises",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Life Flows On (I)",
    "region": "Mondstadt",
    "thaiName": "สายธารแห่งชีวิต (I)"
  },
  {
    "name": "Life Flows On (II)",
    "region": "Other",
    "thaiName": "สายธารแห่งชีวิต (II)"
  },
  {
    "name": "Light the Way of Wishes",
    "region": "Liyue",
    "thaiName": "โคมส่องปรารถนา"
  },
  {
    "name": "Lightcall Resonance",
    "region": "Sumeru",
    "thaiName": "แสงสะท้อนลอยฟ้า"
  },
  {
    "name": "Lightkeepers' Oath",
    "region": "Other",
    "thaiName": "คำสาบานของผู้เฝ้าประภาคาร"
  },
  {
    "name": "Lights, Kamera, Action!",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Like a Labyrinth Imprisons Her Servants",
    "region": "Other",
    "thaiName": "ดั่งเขาวงกตที่กักขังผู้รับใช้ของเธอ"
  },
  {
    "name": "Like a Land Where the Tide's Song Surrounds",
    "region": "Other",
    "thaiName": "ดั่งแดนโอบล้อมบทเพลงแห่งนที"
  },
  {
    "name": "Like a Land Where the Tide's Song Whispers",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Like Seeds on the Wind",
    "region": "Other",
    "thaiName": "ดั่งเมล็ดพันธุ์ที่ลมพัดพามา"
  },
  {
    "name": "Lil' Fungi's Fun-Tastic Fiesta!",
    "region": "Fontaine",
    "thaiName": "Fungus มายามหัศจรรย์!"
  },
  {
    "name": "Limner, Dreamer, and Robotic Dog",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Lingering Malady",
    "region": "Mondstadt",
    "thaiName": "สิ่งที่หลงเหลือหลังพายุสงบ"
  },
  {
    "name": "Lion's Celerity",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Liquidation",
    "region": "Dragonspine",
    "thaiName": ""
  },
  {
    "name": "Little Figure Exorcism",
    "region": "Liyue",
    "thaiName": "วิชาปัดเป่าสิ่งชั่วร้ายของหุ่นหวายตัวน้อย"
  },
  {
    "name": "Little Lantern, Little Wish",
    "region": "Liyue",
    "thaiName": "โคม Xiao กับความหวังเล็ก ๆ น้อย ๆ"
  },
  {
    "name": "Lofty Gourmet",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Long Live Life",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Looming Shadows: Part I",
    "region": "Other",
    "thaiName": "วงล้อมเงามรณะ I"
  },
  {
    "name": "Looming Shadows: Part II",
    "region": "Other",
    "thaiName": "วงล้อมเงามรณะ II"
  },
  {
    "name": "Looming Shadows: Part III",
    "region": "Other",
    "thaiName": "วงล้อมเงามรณะ III"
  },
  {
    "name": "Looming Shadows: Part IV",
    "region": "Other",
    "thaiName": "วงล้อมเงามรณะ IV"
  },
  {
    "name": "Looming Shadows: Part V",
    "region": "Other",
    "thaiName": "วงล้อมเงามรณะ V"
  },
  {
    "name": "Looming Shadows: Part VI",
    "region": "Other",
    "thaiName": "วงล้อมเงามรณะ VI"
  },
  {
    "name": "Lost in a Foreign Land (Quest)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Lost in a Foreign Land: Seeking",
    "region": "Liyue",
    "thaiName": "แขกจากแดนไกลผู้พลัดหลง - แกะรอย"
  },
  {
    "name": "Lost in the Sands",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Lost in the Snow",
    "region": "Dragonspine",
    "thaiName": "หลงทางบนภูเขาหิมะ"
  },
  {
    "name": "Lost in the Woods",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Lotus Eater",
    "region": "Enkanomiya",
    "thaiName": "นักกินดอกบัว"
  },
  {
    "name": "Low-Temperature Warning",
    "region": "Dragonspine",
    "thaiName": "คำเตือนอุณหภูมิต่ำ"
  },
  {
    "name": "Luhua Landscape",
    "region": "Liyue",
    "thaiName": "ทิวทัศน์แห่ง Luhua"
  },
  {
    "name": "Lynn's Troubles",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Make Bright the Arrows, Gather the Shields...",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Manly Jack's Manly Journey of Manliness",
    "region": "Mondstadt",
    "thaiName": "หนทางลูกผู้ชายของ Jack ลูกผู้ชายตัวจริง"
  },
  {
    "name": "Many Hands Make Light Work",
    "region": "Other",
    "thaiName": "คนเยอะยิ่งมีกำลังมาก"
  },
  {
    "name": "Mapping Dreams and Reality",
    "region": "Sumeru",
    "thaiName": "ภาพสะท้อนความฝันและความจริง"
  },
  {
    "name": "Margaret's Troubles",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Mary-Ann's Story",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Master Zhang's Metal Mission",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Matsumoto's Fried Egg Fracas",
    "region": "Inazuma",
    "thaiName": "การเสาะหา Fried Egg ของ Matsumoto"
  },
  {
    "name": "May the Moonlight Connect Us",
    "region": "Other",
    "thaiName": "แสงจันทร์เชื่อมโยงเรา"
  },
  {
    "name": "Meeting New People... and Foiling Some Bandits",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Meka Mess",
    "region": "Fontaine",
    "thaiName": "ความโกลาหลที่เกิดจากกลไกเครื่องลาน"
  },
  {
    "name": "Memories of Gurabad",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Memory of Stone",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Memory's Final Chapter",
    "region": "Sumeru",
    "thaiName": "บทสุดท้ายของความทรงจำ"
  },
  {
    "name": "Mending Painting Prospects",
    "region": "Liyue",
    "thaiName": "ส่องมุมทิวทัศน์"
  },
  {
    "name": "Meteoric Lance",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Mimetic Replication",
    "region": "Sumeru",
    "thaiName": "ทดลองเป็นสิ่งมีชีวิต"
  },
  {
    "name": "Mimi Tomo (Quest)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Mine Craft",
    "region": "Mondstadt",
    "thaiName": "เคล็ดลับการขุดแร่"
  },
  {
    "name": "Mineral Investigation Special Lecture",
    "region": "Other",
    "thaiName": "บทเรียนพิเศษสำรวจแร่"
  },
  {
    "name": "Mineral Research: Icy Pebble",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Mineral Research: Moonfall Silver",
    "region": "Other",
    "thaiName": "สำรวจแร่ - Moonfall Silver"
  },
  {
    "name": "Mineral Research: Pine Amber",
    "region": "Other",
    "thaiName": "สำรวจแร่ - Pine Amber"
  },
  {
    "name": "Mineral Research: Rainbowdrop Crystals",
    "region": "Other",
    "thaiName": "สำรวจแร่ - Rainbowdrop Crystal"
  },
  {
    "name": "Ministry Missions",
    "region": "Liyue",
    "thaiName": "งานของฝ่ายกิจการทั่วไป"
  },
  {
    "name": "Minor Commission",
    "region": "Other",
    "thaiName": "คำขอเล็ก ๆ"
  },
  {
    "name": "Misplaced Creativity",
    "region": "Other",
    "thaiName": "ความคิดสร้างสรรค์ที่พลัดหลง"
  },
  {
    "name": "Molting Season",
    "region": "Natlan",
    "thaiName": "ช่วงเวลาผลัดขน"
  },
  {
    "name": "Moment of Awakening",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Mondstadt and its Archon",
    "region": "Mondstadt",
    "thaiName": "เทพแห่งลมและ Mondstadt"
  },
  {
    "name": "Mondstadters in Liyue",
    "region": "Liyue",
    "thaiName": "ชาว Mondstadt ใน Liyue"
  },
  {
    "name": "Monster Mayhem",
    "region": "Inazuma",
    "thaiName": "ความโกลาหลที่เกิดจากมอนสเตอร์"
  },
  {
    "name": "Monumental Study (Quest)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Moonlight Sonata",
    "region": "Other",
    "thaiName": "โซนาตาแห่งแสงจันทร์"
  },
  {
    "name": "Moonlight Sonata: Lingering Resonance",
    "region": "Other",
    "thaiName": "โซนาตาแห่งแสงจันทร์ - เสียงเพรียกจากอดีต"
  },
  {
    "name": "Moonlit Patrol Exercise (Quest)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Mountain Mixologist",
    "region": "Liyue",
    "thaiName": "มือชงเครื่องดื่มกลางขุนเขา"
  },
  {
    "name": "Mountainous Summons",
    "region": "Mondstadt",
    "thaiName": "เสียงเพรียกจากหุบเขา"
  },
  {
    "name": "Mr. Melancholy",
    "region": "Liyue",
    "thaiName": "ชายหนุ่มผู้ซึมเศร้า"
  },
  {
    "name": "Muirne's Better Butter",
    "region": "Fontaine",
    "thaiName": "คำขอเนยของ Muirne"
  },
  {
    "name": "Murakami's Meal-Making",
    "region": "Inazuma",
    "thaiName": "การสรรหาวัตถุดิบของ Murakami"
  },
  {
    "name": "Muse's Mother",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Mushounin",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Mutual Exchange",
    "region": "Mondstadt",
    "thaiName": "ได้สื่อสารกันหรือไม่?"
  },
  {
    "name": "Mycological Investigation in The Chasm",
    "region": "Liyue",
    "thaiName": "สำรวจเห็ดใน Chasm"
  },
  {
    "name": "Mysterious Fish? A Booming Adventure!",
    "region": "Mondstadt",
    "thaiName": "ปลาลึกลับ? การพบกันโดยบังเอิญที่ตู้มต้าม!"
  },
  {
    "name": "Nahuatzin's Leap",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Nameless Bloodstained Monument",
    "region": "Other",
    "thaiName": "อนุสาวรีย์ผู้ไร้นามอาบเลือด"
  },
  {
    "name": "Narcissus's Waltz",
    "region": "Fontaine",
    "thaiName": "เพลงวอลตซ์แห่ง Narzissenkreuz"
  },
  {
    "name": "Narration Footnotes",
    "region": "Other",
    "thaiName": "หมายเหตุของผู้บรรยาย"
  },
  {
    "name": "Narrow Inquiry",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "Necessary Procedures",
    "region": "Liyue",
    "thaiName": "ขั้นตอนที่จำเป็น"
  },
  {
    "name": "Neko Is a Cat: A \"Good Turn\" Comes Late",
    "region": "Inazuma",
    "thaiName": "Neko คือเจ้าเหมียวน้อย: \"เรื่องดี ๆ\" ที่มาช้าไปหน่อย"
  },
  {
    "name": "Neko Is a Cat: Cat and Stone",
    "region": "Inazuma",
    "thaiName": "Neko คือเจ้าเหมียวน้อย: ก้อนหินและแมวเหมียว"
  },
  {
    "name": "Neko Is a Cat: Ding-a-Ling Metal Ball",
    "region": "Inazuma",
    "thaiName": "Neko คือเจ้าเหมียวน้อย: กระพรวนลูกบอลเหล็ก"
  },
  {
    "name": "Neko Is a Cat: Shrine Canteen",
    "region": "Inazuma",
    "thaiName": "Neko คือเจ้าเหมียวน้อย: โรงอาหารของศาลเจ้า"
  },
  {
    "name": "Neko Is a Cat: Shrine Cleanup",
    "region": "Inazuma",
    "thaiName": "Neko คือเจ้าเหมียวน้อย - การทำความสะอาดศาลเจ้าครั้งใหญ่"
  },
  {
    "name": "Neko Is a Cat: Shrine Recipe",
    "region": "Inazuma",
    "thaiName": "Neko คือเจ้าเหมียวน้อย: สูตรอาหารของศาลเจ้า"
  },
  {
    "name": "Neko Is a Cat: Stone Human's Troubles",
    "region": "Inazuma",
    "thaiName": "Neko คือเจ้าเหมียวน้อย: ความยุ่งยากของก้อนหินและมนุษย์"
  },
  {
    "name": "Neko Is a Cat: The Children",
    "region": "Inazuma",
    "thaiName": "Neko คือเจ้าเหมียวน้อย: เด็ก ๆ ทั้งหลาย"
  },
  {
    "name": "Neko Is a Cat: Wooden Shelf",
    "region": "Inazuma",
    "thaiName": "Neko คือเจ้าเหมียวน้อย: กรอบไม้"
  },
  {
    "name": "New Horizons of Adventure",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "New Idea",
    "region": "Other",
    "thaiName": "แนวคิดใหม่"
  },
  {
    "name": "Newcomers in the Snow",
    "region": "Other",
    "thaiName": "ผู้มาเยือนบนผืนหิมะใหม่"
  },
  {
    "name": "Next Time, On King of Invokations...",
    "region": "Sumeru",
    "thaiName": "[ราชานักอัญเชิญ - ตอนต่อไป! คือ...]"
  },
  {
    "name": "Nine Pillars of Peace",
    "region": "Liyue",
    "thaiName": "เสาแห่งสันติทั้งเก้า"
  },
  {
    "name": "No Honor Among Thieves (Random Event)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "No Restoring This Past Land of Beauty",
    "region": "Liyue",
    "thaiName": "ความสวยงามในอดีตไม่มีวันย้อนคืนกลับมาได้..."
  },
  {
    "name": "Not to be Missed",
    "region": "Mondstadt",
    "thaiName": "ไม่ควรพลาดโอกาส"
  },
  {
    "name": "O Archon, Have I Done Right?",
    "region": "Inazuma",
    "thaiName": "ท่านเทพ ข้าควรจะทำอย่างไรดี?"
  },
  {
    "name": "Octave of the Maushiro",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Of Drink A-Dreaming (Quest)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Of Drink A-Dreaming: Afterword",
    "region": "Mondstadt",
    "thaiName": "จิบแห่งความฝันอันเมามาย - บทส่งท้าย"
  },
  {
    "name": "Old Friends and New Knowledge",
    "region": "Dragonspine",
    "thaiName": ""
  },
  {
    "name": "Old Friends, New Game",
    "region": "Sumeru",
    "thaiName": "เพื่อนเก่ากับเกมใหม่"
  },
  {
    "name": "Old Tastes Die Hard",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Omni-Ubiquity Net (Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "On the Graffiti Road",
    "region": "Natlan",
    "thaiName": "ป้ายบอกทางของถนนกราฟฟิตี้"
  },
  {
    "name": "On the Stage, Behind the Stage",
    "region": "Liyue",
    "thaiName": "ทั้งต่อหน้าและเบื้องหลังเวที"
  },
  {
    "name": "On This Intoxicating Night",
    "region": "Other",
    "thaiName": "ในคืนที่พวกเขาต่างเมามาย"
  },
  {
    "name": "Once, the Sacred Seat of Judgment",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "One Giant Step for Alchemy?",
    "region": "Mondstadt",
    "thaiName": "ก้าวอันยิ่งใหญ่ของการเล่นแร่แปรธาตุ?"
  },
  {
    "name": "One Yet to Take a Bow",
    "region": "Other",
    "thaiName": "ผู้ที่ยังไม่ปิดม่าน"
  },
  {
    "name": "Open Your Heart to Me",
    "region": "Natlan",
    "thaiName": "เปิดใจให้กัน"
  },
  {
    "name": "Origin of the Sequence",
    "region": "Other",
    "thaiName": "จุดเริ่มต้นแห่งลำดับ"
  },
  {
    "name": "Orobashi's Legacy: Part I",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Orobashi's Legacy: Part II",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Orobashi's Legacy: Part III",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Orobashi's Legacy: Part IV",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Orobashi's Legacy: Part V",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Orobashi's Legacy: Prologue",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Our Animal Friends",
    "region": "Liyue",
    "thaiName": "เหล่าผองเพื่อนสัตว์ของเรา"
  },
  {
    "name": "Our Animal Friends: Epilogue",
    "region": "Liyue",
    "thaiName": "เหล่าผองเพื่อนสัตว์ของเรา - บทสรุป"
  },
  {
    "name": "Our Chenyu Vale Trek",
    "region": "Liyue",
    "thaiName": "เส้นทางแห่ง Chenyu"
  },
  {
    "name": "Our Purpose Is in Another Canal",
    "region": "Fontaine",
    "thaiName": "เป้าหมายของเราอยู่อีกท่อหนึ่ง"
  },
  {
    "name": "Outside the Canvas, Inside the Lens (Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Outside the Canvas, Inside the Lens: Dew-Kissed Chapter (Quest)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Outside the Canvas, Inside the Lens: Greenery Chapter (Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Outspoken Linling",
    "region": "Liyue",
    "thaiName": "ความแน่นอนของ Linling"
  },
  {
    "name": "Over the Moon",
    "region": "Inazuma",
    "thaiName": "เหนือแสงแห่งจันทรา"
  },
  {
    "name": "Overstretched",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Paban's Milk Run",
    "region": "Fontaine",
    "thaiName": "คำขอนมของ Paban"
  },
  {
    "name": "Paimon's \"Driyosh\" Way of Solving Problems",
    "region": "Other",
    "thaiName": "การแก้โจทย์ \"Driyosh\" ของ Paimon"
  },
  {
    "name": "Palace of the Vision Serpent",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Pale Fire (Quest)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Paleontological Investigation in The Chasm",
    "region": "Liyue",
    "thaiName": "ตรวจสอบสิ่งมีชีวิตโบราณ"
  },
  {
    "name": "Pallad's Dilemma",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Paper Shadow Ruminations",
    "region": "Liyue",
    "thaiName": "สัมผัสความงามของเงากระดาษ"
  },
  {
    "name": "Parting Arrangement",
    "region": "Sumeru",
    "thaiName": "คำสัญญาของการลาจากชั่วคราว"
  },
  {
    "name": "Peace to the Slumbering",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Peculiar Wonderland (Quest)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Pen Pals, Book Reviews, and the Super Lucky General",
    "region": "Inazuma",
    "thaiName": "เพื่อนทางจดหมาย, ชื่นชมนวนิยายและนายพลผู้โชคดี"
  },
  {
    "name": "Perfect Shot",
    "region": "Liyue",
    "thaiName": "ภาพถ่ายอันสมบูรณ์แบบ"
  },
  {
    "name": "Perils in the Dark",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Peseng's Zaytun Peaches",
    "region": "Sumeru",
    "thaiName": "การสรรหา Zaytun Peach ของ Peseng"
  },
  {
    "name": "Petrifying Gaze",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Phantom Flow: Phantasmal Blade",
    "region": "Inazuma",
    "thaiName": "ห้วงแห่งภาพลวงตา: Phantasmal Blade"
  },
  {
    "name": "Phantom of the Past",
    "region": "Mondstadt",
    "thaiName": "ความลึกลับในห้วงอดีต"
  },
  {
    "name": "Pioneers (Part 1)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Pioneers (Part 2)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Pizza From Another Land",
    "region": "Inazuma",
    "thaiName": "Pizza จากต่างแดน"
  },
  {
    "name": "Plant Research: Frostlamp Flowers",
    "region": "Other",
    "thaiName": "สำรวจพืช - Frostlamp Flower"
  },
  {
    "name": "Plant Research: Nocturnal Blossoms",
    "region": "Other",
    "thaiName": "สำรวจพืช - Nocturnal Blossom"
  },
  {
    "name": "Plant Research: Twinleaf Pitcher Plants",
    "region": "Other",
    "thaiName": "สำรวจพืช - Twinleaf Pitcher Plant"
  },
  {
    "name": "Plant Research: Winter Icelea",
    "region": "Other",
    "thaiName": "สำรวจพืช - Winter Icelea"
  },
  {
    "name": "Playing in the Snow Counts as Training Too!",
    "region": "Dragonspine",
    "thaiName": "เกมกลางหิมะ ก็เป็นการฝึกฝนเช่นกัน!"
  },
  {
    "name": "Popular Entertainment",
    "region": "Fontaine",
    "thaiName": "แนวคิดตอนจบแบบยอดนิยม"
  },
  {
    "name": "Pre-Packaged Solution",
    "region": "Fontaine",
    "thaiName": "วิธีแก้ปัญหาสำเร็จรูป"
  },
  {
    "name": "Pressing Deadlines",
    "region": "Liyue",
    "thaiName": "งานอันแสนยุ่งเหยิง"
  },
  {
    "name": "Prevention Measures",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Priorities First",
    "region": "Other",
    "thaiName": "เรื่องสำคัญต้องมาก่อน"
  },
  {
    "name": "Priorities First: Afterword",
    "region": "Other",
    "thaiName": "เรื่องสำคัญต้องมาก่อน - เรื่องราวภายหลัง"
  },
  {
    "name": "Problem-Sorting Robot",
    "region": "Other",
    "thaiName": "ปัญหาของหุ่นยนต์คัดแยก"
  },
  {
    "name": "Procrustes' Iron Bed",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Project Connectivity",
    "region": "Sumeru",
    "thaiName": "แผนเส้นทางสัญจร"
  },
  {
    "name": "Project Moongazer (Part 1)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Project Moongazer (Part 2)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Promises Remembered as Lanterns Rise",
    "region": "Liyue",
    "thaiName": "สัญญาแห่งวันวานกับเทศกาลที่มาถึง"
  },
  {
    "name": "Proof of Strength",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Provisionally Perpetual Beetle Battle!",
    "region": "Liyue",
    "thaiName": "เส้นทางแห่งการประลองแมลงที่ไม่มีที่สิ้นสุด!"
  },
  {
    "name": "Pruniere's White Iron Impetration",
    "region": "Fontaine",
    "thaiName": "คำขอ White Iron Chunk ของ Pruniere"
  },
  {
    "name": "Pudgy, Squidgy, Yet Not Edible!",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Purbiruni's Commandment",
    "region": "Sumeru",
    "thaiName": "คำสอนแห่ง Purbiruni"
  },
  {
    "name": "Pursuit (Part 1)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Pursuit (Part 2)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Qiaoying of the Sacred Mountain",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Qiaoying, the Village of Many Tales",
    "region": "Liyue",
    "thaiName": "สารพันเรื่องราวของหมู่บ้าน Qiaoying"
  },
  {
    "name": "Qingce's Lanterns",
    "region": "Liyue",
    "thaiName": "โคม Xiao กับ Qingce Village"
  },
  {
    "name": "Question and Answer",
    "region": "Mondstadt",
    "thaiName": "ถามตอบคู่มือแนะนำของกองอัศวิน"
  },
  {
    "name": "Questions and Answers",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Radiant Harvest: Cause and Effect",
    "region": "Fontaine",
    "thaiName": "เก็บเกี่ยวประกายแสง: เหตุและผล"
  },
  {
    "name": "Radiant Harvest: Compensation",
    "region": "Fontaine",
    "thaiName": "เก็บเกี่ยวประกายแสง: ค่าตอบแทน"
  },
  {
    "name": "Radiant Sparks",
    "region": "Liyue",
    "thaiName": "แสงระยิบซิ่งระยับ"
  },
  {
    "name": "Rapid Restitution to the Raging Fish...",
    "region": "Fontaine",
    "thaiName": "ปลาฉุนเฉียวใกล้จะหายแล้ว..."
  },
  {
    "name": "Receiver of Friends From Afar: Part I",
    "region": "Liyue",
    "thaiName": "เพื่อนจากแดนไกล I"
  },
  {
    "name": "Receiver of Friends From Afar: Part II",
    "region": "Liyue",
    "thaiName": "เพื่อนจากแดนไกล II"
  },
  {
    "name": "Receiver of Friends From Afar: Part III",
    "region": "Liyue",
    "thaiName": "เพื่อนจากแดนไกล III"
  },
  {
    "name": "Receiver of Friends From Afar: Part IV",
    "region": "Liyue",
    "thaiName": "เพื่อนจากแดนไกล IV"
  },
  {
    "name": "Recollections of a Fontainian",
    "region": "Sumeru",
    "thaiName": "ความทรงจำของชาว Fontaine คนหนึ่ง"
  },
  {
    "name": "Rejoice With Me, for What Was Lost Is Now Found",
    "region": "Sumeru",
    "thaiName": "ร่วมยินดีกับผู้ที่ได้รับของกลับคืนเถอะ"
  },
  {
    "name": "Relics of Seirai",
    "region": "Inazuma",
    "thaiName": "สมบัติโบราณแห่งเกาะ Seirai"
  },
  {
    "name": "Reminiscence of Seirai",
    "region": "Inazuma",
    "thaiName": "ความทรงจำเก่า ๆ บนเกาะ Seirai"
  },
  {
    "name": "Remnants of the Shadow Realm (Part 1)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Remnants of the Shadow Realm (Part 2)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Remnants of the Shadow Realm (Part 3)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Report the Experimental Data",
    "region": "Sumeru",
    "thaiName": "รายงานข้อมูลการทดลอง"
  },
  {
    "name": "Rescue the Poor Contract Employee!",
    "region": "Fontaine",
    "thaiName": "ช่วยเหลือพนักงานที่น่าสงสาร!"
  },
  {
    "name": "Research Spillover",
    "region": "Other",
    "thaiName": "งานวิจัยที่เอ่อล้น"
  },
  {
    "name": "Return Home, Children of the Desert",
    "region": "Other",
    "thaiName": "กลับบ้านกันเถอะ เหล่าลูกหลานแห่งทะเลทราย"
  },
  {
    "name": "Return of the Jade Chamber?",
    "region": "Liyue",
    "thaiName": "สร้าง Jade Chamber อีกครั้ง?"
  },
  {
    "name": "Return to Sender",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Returning Curios",
    "region": "Other",
    "thaiName": "ห้วงธารสารพันพิศวง"
  },
  {
    "name": "Reunite, My Shroom Buddies!",
    "region": "Sumeru",
    "thaiName": "พบกันอีกครั้ง คู่หู Fungus!"
  },
  {
    "name": "Revelations by Chance",
    "region": "Fontaine",
    "thaiName": "คำพยากรณ์โดยบังเอิญ"
  },
  {
    "name": "Revelations from the Past",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Reverberation of Heroic Spirits",
    "region": "Other",
    "thaiName": "เสียงก้องของวิญญาณนักรบ"
  },
  {
    "name": "Rhythm Ball Revolution!",
    "region": "Natlan",
    "thaiName": "ตีบอลเด้งกระดอน และโยกย้ายตามจังหวะ!"
  },
  {
    "name": "Riddles Awaiting Answers",
    "region": "Fontaine",
    "thaiName": "ปริศนาที่รอการเฉลย"
  },
  {
    "name": "Riku's Eggy Endeavor",
    "region": "Inazuma",
    "thaiName": "การสรรหา Bird Egg ของ Riku"
  },
  {
    "name": "Ripe For Trouble",
    "region": "Natlan",
    "thaiName": "ปัญหาเรื่องการสุกงอม"
  },
  {
    "name": "Risen Moon Chapter",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Rishboland Tiger, Roaaar",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Rite of the Bold",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Road to the Singularity",
    "region": "Fontaine",
    "thaiName": "มุ่งสู่เส้นทางเอกฐาน"
  },
  {
    "name": "Rocking Carriage",
    "region": "Sumeru",
    "thaiName": "เกวียนบุปผาโยกเยก"
  },
  {
    "name": "Rowboat's Wake (Quest)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Royinjan's Chapter: Linga",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Royinjan's Chapter: Yoni",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Ruin Drake Maelstrom (Fontaine)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Ruin Drake Maelstrom (Sumeru)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Sachin's Article",
    "region": "Sumeru",
    "thaiName": "\"ข้อความที่ Sachin ทิ้งเอาไว้\""
  },
  {
    "name": "Sacrificial Offering",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Sakura Arborism",
    "region": "Inazuma",
    "thaiName": "การดูแลซากุระ"
  },
  {
    "name": "Sanden's Resource Request",
    "region": "Inazuma",
    "thaiName": "การสรรหาวัสดุสำหรับทาสีหน้ากากของ Sanden"
  },
  {
    "name": "Saurian Sojourn (Quest)",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Sauro-Vet's Dilemma",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Savior's Wake (Quest)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Says He Who Seeks Stone",
    "region": "Liyue",
    "thaiName": "เรื่องเล่านักสะสมหิน"
  },
  {
    "name": "Scenarios for Study",
    "region": "Liyue",
    "thaiName": "การวิเคราะห์และคาดการณ์"
  },
  {
    "name": "Scenes from Life in Meropide: A Raw Deal",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: An Actor's Training",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: Chit-Chat",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: Dead End",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: Every Debt has a Creditor",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: Fists of Fury",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: Memories",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: Safe Operation",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: The Art of Negotiation",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: Treat the Symptoms",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: Unfinished Task",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scenes from Life in Meropide: Visible Hands",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Scent on the Wind",
    "region": "Mondstadt",
    "thaiName": "รสชาติที่มากับสายลม"
  },
  {
    "name": "Scrolls and Sword Manuals of Guhua",
    "region": "Liyue",
    "thaiName": "คัมภีร์ดาบ Guhua"
  },
  {
    "name": "Sealed Site of Sacrifice",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Search Chronicle: Afterword",
    "region": "Fontaine",
    "thaiName": "บันทึกการตามหา - เรื่องราวภายหลัง"
  },
  {
    "name": "Search Chronicle: Audience with the Solitary King!",
    "region": "Fontaine",
    "thaiName": "บันทึกการตามหา - พานพบราชาผู้โดดเดี่ยว!"
  },
  {
    "name": "Search Chronicle: Burning Up!",
    "region": "Liyue",
    "thaiName": "บันทึกการตามหา - เปลวไฟลุกไหม้แผดเผา!"
  },
  {
    "name": "Search Chronicle: Cold, Round Belly!",
    "region": "Liyue",
    "thaiName": "บันทึกการตามหา - พุงกลมสุดเท่!"
  },
  {
    "name": "Search Chronicle: For Childhood Dreams!",
    "region": "Sumeru",
    "thaiName": "บันทึกการตามหา - เพื่อความฝันวัยเด็ก!"
  },
  {
    "name": "Search for the Lost Monument Fragments",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Search in the Algae Sea (Quest)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Secret Forest Shadow",
    "region": "Mondstadt",
    "thaiName": "เงาลึกลับในป่า"
  },
  {
    "name": "Seeker No Finding",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Seirai Stormchasers: Part I",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Seirai Stormchasers: Part II",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Seirai Stormchasers: Part III",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Seirai Stormchasers: Part IV",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Selling Like Hot Carvings",
    "region": "Sumeru",
    "thaiName": "ไม้แกะสลักยอดนิยม"
  },
  {
    "name": "Semi-Automatic Forging",
    "region": "Fontaine",
    "thaiName": "เครื่องจักรกลตีเหล็กกึ่งอัตโนมัติ"
  },
  {
    "name": "Serendipitous Encounters and a Curious Consensus",
    "region": "Dragonspine",
    "thaiName": "บังเอิญพบพาน ความรู้ใจแสนวิเศษ"
  },
  {
    "name": "Serpent's Heart Inquiry",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "Settling Debts",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Shadow of the Knight's Blade",
    "region": "Sumeru",
    "thaiName": "เงาดาบอัศวิน"
  },
  {
    "name": "Share Not Your Treasures",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Sharpening the Axe Won't Hinder the Work",
    "region": "Mondstadt",
    "thaiName": "การลับขวานไม่ได้กระทบงาน"
  },
  {
    "name": "Shifting Moonlight",
    "region": "Other",
    "thaiName": "แสงจันทร์พันโฉม"
  },
  {
    "name": "Shine On, Pipilpan Idol!",
    "region": "Natlan",
    "thaiName": "เปล่งประกาย! การประกวดไอดอล Pipilpan!"
  },
  {
    "name": "Shrouded Vale, Hidden Hero",
    "region": "Liyue",
    "thaiName": "ซ่อนผู้กล้าในหุบเขาลับ"
  },
  {
    "name": "Shuumatsuban Operations",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Sightlines and Camera Tricks",
    "region": "Fontaine",
    "thaiName": "เส้นเล็งและเวทมุมมอง"
  },
  {
    "name": "Sightseeing With Friends: A Trip to Fontaine",
    "region": "Fontaine",
    "thaiName": "บันทึกการเดินทางของเห็ดมหัศจรรย์: การเดินทางสู่ Fontaine"
  },
  {
    "name": "Sightseeing With Friends: Back to Sumeru",
    "region": "Sumeru",
    "thaiName": "บันทึกการเดินทางของเห็ดมหัศจรรย์: เยือน Sumeru อีกครั้ง"
  },
  {
    "name": "Sightseeing With Friends: Scenic Highlights",
    "region": "Sumeru",
    "thaiName": "บันทึกการเดินทางของเห็ดมหัศจรรย์: ภาพรวมทิวทัศน์"
  },
  {
    "name": "Sightseeing With Friends: Underwater Fun",
    "region": "Fontaine",
    "thaiName": "บันทึกการเดินทางของเห็ดมหัศจรรย์: ท่องโลกใต้น้ำแสนสนุก"
  },
  {
    "name": "Sigil Barrage Kaleidoscope",
    "region": "Liyue",
    "thaiName": "กล้องสลับลายม่านกระสุนยันต์"
  },
  {
    "name": "Silently the Butterfly Crosses the Valley",
    "region": "Liyue",
    "thaiName": "ผีเสื้อสีรุ้งบินผ่านกลางหุบเขา"
  },
  {
    "name": "Simple Chores",
    "region": "Other",
    "thaiName": "งานจิปาถะแสนสบาย"
  },
  {
    "name": "Simulation: Azure Dash",
    "region": "Fontaine",
    "thaiName": "จำลอง! การพุ่งปะทะสีคราม"
  },
  {
    "name": "Simulation: Sweeping the Wilds",
    "region": "Fontaine",
    "thaiName": "จำลอง! การจู่โจมทุ่งกว้าง"
  },
  {
    "name": "Sing, Ho, For the Greatness of Fat!",
    "region": "Natlan",
    "thaiName": "โอ้! ไขมันที่ยิ่งใหญ่!"
  },
  {
    "name": "Sinister Instruction",
    "region": "Inazuma",
    "thaiName": "คำสอนอันชั่วร้าย"
  },
  {
    "name": "Sir Pouncelot Joins the Lot!",
    "region": "Mondstadt",
    "thaiName": "\"Sir Pouncelot\" เข้าทีม!"
  },
  {
    "name": "Six-Fingered José's Dilemma",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Skycastle Saviors",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Slumbering Roots",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Small Jack Frost, Big Problems",
    "region": "Other",
    "thaiName": "ปัญหาใหญ่กับแจ็คฟรอสต์ตัวน้อย"
  },
  {
    "name": "Smiley's Selections",
    "region": "Liyue",
    "thaiName": "การสรรหาวัตถุดิบของ Yanxiao"
  },
  {
    "name": "Snapshots",
    "region": "Liyue",
    "thaiName": "บันทึกภาพถ่าย"
  },
  {
    "name": "Snowy Silhouette: Hope",
    "region": "Dragonspine",
    "thaiName": "เงาร่างกลางหิมะ - ความหวัง"
  },
  {
    "name": "Snowy Silhouette: Reunion",
    "region": "Dragonspine",
    "thaiName": "เงาร่างกลางหิมะ - การพบกันอีกครั้ง"
  },
  {
    "name": "Soheil's Wish",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Solid Ice, Soluble in Wine",
    "region": "Mondstadt",
    "thaiName": "น้ำแข็งที่ละลายในไวน์ได้ง่าย"
  },
  {
    "name": "Solitary Sea-Beast",
    "region": "Inazuma",
    "thaiName": "อสูรทะเลผู้โดดเดี่ยว"
  },
  {
    "name": "Solo Venture",
    "region": "Mondstadt",
    "thaiName": "ตกอยู่ในอันตรายเพียงลำพัง"
  },
  {
    "name": "Someday, We All Must Walk Alone",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Something's Wrong With the Water",
    "region": "Fontaine",
    "thaiName": "สภาพแหล่งน้ำไม่ค่อยดีเหรอ?"
  },
  {
    "name": "Special Friends",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Special Lighting and the Stars of Tomorrow!",
    "region": "Fontaine",
    "thaiName": "เอฟเฟกต์แสงแบบพิเศษ และดวงดาวแห่งวันพรุ่งนี้!"
  },
  {
    "name": "Special Research: Melusine?",
    "region": "Other",
    "thaiName": "สำรวจพิเศษ - เมลูซีน?"
  },
  {
    "name": "Spike Self-Circulation Report: Abstract (Part 1)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Spike Self-Circulation Report: Abstract (Part 2)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Spike Self-Circulation Report: Conclusion (Part 1)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Spike Self-Circulation Report: Conclusion (Part 2)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Spike Self-Circulation Report: Environs Log (Part 1)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Spike Self-Circulation Report: Environs Log (Part 2)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Spike Self-Circulation Report: Experimental Procedure (Part 1)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Spike Self-Circulation Report: Experimental Procedure (Part 2)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Spread Out Less Than An Arcminute!",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Sprouting Seedlings",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Stand by Me (Quest)",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Starry Night Chapter",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Static Views",
    "region": "Sumeru",
    "thaiName": "ทิวทัศน์แสนนิ่งสงบ"
  },
  {
    "name": "Static Views, Part 2",
    "region": "Sumeru",
    "thaiName": "ทิวทัศน์แสนนิ่งสงบ (II)"
  },
  {
    "name": "Steambird Interview",
    "region": "Fontaine",
    "thaiName": "สัมภาษณ์งานกับ \"หนังสือพิมพ์ The Steambird\""
  },
  {
    "name": "Still Mouthwatering!",
    "region": "Fontaine",
    "thaiName": "ยังคงชวนให้น้ำลายสอ!"
  },
  {
    "name": "Stolen, by the Rightful Owner",
    "region": "Liyue",
    "thaiName": "หวนคืนสู่เจ้าของครั้งแล้วครั้งเล่า"
  },
  {
    "name": "Stones, Coconuts, and Saurian Traffickers",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Stories Make the Best Pastries",
    "region": "Fontaine",
    "thaiName": "เรื่องราวคือของว่างยามจิบชาที่ดีที่สุด"
  },
  {
    "name": "Stories of the Past",
    "region": "Fontaine",
    "thaiName": "เรื่องราวในอดีต"
  },
  {
    "name": "Stories to Sate the Glass and Scroll",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Storytelling Method",
    "region": "Inazuma",
    "thaiName": "การสร้างเนื้อเรื่อง"
  },
  {
    "name": "Strange Encounter of the Tete Isle Kind",
    "region": "Natlan",
    "thaiName": "เผชิญหน้า Tete"
  },
  {
    "name": "Strange Mark",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Strange Shifts",
    "region": "Dragonspine",
    "thaiName": ""
  },
  {
    "name": "Strange Stone Chronicle (Part 1)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Strange Stone Chronicle (Part 2)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Strange Stone Chronicle (Part 3)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Strength, Courage, and Trials",
    "region": "Dragonspine",
    "thaiName": "ความแข็งแกร่ง กล้าหาญ และการทดสอบ"
  },
  {
    "name": "Stride on Rainbows, Split the Waves",
    "region": "Natlan",
    "thaiName": "ก้าวย่างบนสายรุ้งทลายเกลียวคลื่น!"
  },
  {
    "name": "Strikers Through the Storm",
    "region": "Natlan",
    "thaiName": "ซุ่มยิงในพายุ"
  },
  {
    "name": "Stronghold Guard: Hoard Guard Unit!",
    "region": "Other",
    "thaiName": "ยามเฝ้าฐานที่มั่น: กองทัพประจำประตู!"
  },
  {
    "name": "Studies in Light and Shadow: A Fontaine of Enchantment (Quest)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Submerged Dragon, Soaring Phoenix",
    "region": "Other",
    "thaiName": "มังกรซ่อนหงส์เหินทะยาน"
  },
  {
    "name": "Summer Gift",
    "region": "Other",
    "thaiName": "ของขวัญแห่งฤดูร้อน"
  },
  {
    "name": "Surreptitious Seven-Star Seal Sundering",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Surrounded by the Aroma of Tea",
    "region": "Mondstadt",
    "thaiName": "กลิ่นชาที่หอมอบอวล"
  },
  {
    "name": "Sylvie's Beryl Conch Commission",
    "region": "Fontaine",
    "thaiName": "คำขอ Beryl Conch ของ Sylvie"
  },
  {
    "name": "Tabletop Adventurer",
    "region": "Fontaine",
    "thaiName": "นักผจญภัยบนโต๊ะ"
  },
  {
    "name": "Tadhla the Falcon",
    "region": "Sumeru",
    "thaiName": "เหยี่ยวนักล่า Tadhla"
  },
  {
    "name": "Tales of Time and Wind",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Tanuki-Bayashi in the Forest",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Target: Master of the Snowy Peaks!",
    "region": "Dragonspine",
    "thaiName": "เป้าหมาย เจ้าแห่งภูเขาหิมะ!"
  },
  {
    "name": "Taste of Happiness",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Tatara Tales (Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Tatara Tales: Data Collection",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Tatara Tales: Final Preparations",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Tatara Tales: Functional Test",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Tatara Tales: Priority Investigation",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Tatara Tales: Process Is Everything",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Tatara Tales: Purification Device",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Tatara Tales: The Last Act",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Tea or Bulle Fruit?",
    "region": "Other",
    "thaiName": "ใบชา หรือ Bulle Fruit?"
  },
  {
    "name": "Tea Party Re-Invitation: Albedo",
    "region": "Dragonspine",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - Albedo"
  },
  {
    "name": "Tea Party Re-Invitation: Arlecchino",
    "region": "Other",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - Arlecchino"
  },
  {
    "name": "Tea Party Re-Invitation: Citlali",
    "region": "Natlan",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - Citlali"
  },
  {
    "name": "Tea Party Re-Invitation: Columbina",
    "region": "Fontaine",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - Columbina"
  },
  {
    "name": "Tea Party Re-Invitation: Furina",
    "region": "Fontaine",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - Furina"
  },
  {
    "name": "Tea Party Re-Invitation: Hat Guy",
    "region": "Sumeru",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - สมหมวก"
  },
  {
    "name": "Tea Party Re-Invitation: House of the Hearth",
    "region": "Fontaine",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - บ้านแสนอบอุ่น"
  },
  {
    "name": "Tea Party Re-Invitation: Lauma",
    "region": "Other",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - Lauma"
  },
  {
    "name": "Tea Party Re-Invitation: Narzissenkreuz Reunion",
    "region": "Fontaine",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - การรวมตัวกันของ Narzissenkreuz"
  },
  {
    "name": "Tea Party Re-Invitation: Nefer",
    "region": "Other",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - Nefer"
  },
  {
    "name": "Tea Party Re-Invitation: Neuvillette",
    "region": "Fontaine",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - Neuvillette"
  },
  {
    "name": "Tea Party Re-Invitation: Tabletop Troupe",
    "region": "Fontaine",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - บอร์ดเกมสวมบทบาท"
  },
  {
    "name": "Tea Party Re-Invitation: Tartaglia",
    "region": "Other",
    "thaiName": "คำเชิญร่วมงานเลี้ยงน้ำชาอีกครั้ง - Tartaglia"
  },
  {
    "name": "Team Rigor, or Team Intuition?",
    "region": "Other",
    "thaiName": "สายหลักการหรือสายสัญชาตญาณ?"
  },
  {
    "name": "Technical Martial Challenge",
    "region": "Other",
    "thaiName": "\"ศึกประลองวิทยายุทธ์คุมสติ\""
  },
  {
    "name": "Tell me, mirror mirror",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Temaria Game",
    "region": "Inazuma",
    "thaiName": "\"Temari Game\""
  },
  {
    "name": "Temple Inquiry",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "Temporary Acclimatization",
    "region": "Liyue",
    "thaiName": "จัดการน้ำและดินได้ชั่วคราว"
  },
  {
    "name": "Tepetlisaurus Hide-and-Seek",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Terminate This Treacherous Transport!",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Text's Coda",
    "region": "Other",
    "thaiName": "บทส่งท้ายเนื้อหา"
  },
  {
    "name": "Thalia and Melpomene",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "That Which Fell From the Sky",
    "region": "Mondstadt",
    "thaiName": "วัตถุลึกลับจากฟ้า"
  },
  {
    "name": "That Which Our Ancestors Entrusted",
    "region": "Inazuma",
    "thaiName": "เรื่องที่บรรพบุรุษฝากฝังเอาไว้"
  },
  {
    "name": "The Adventurers' Guild's Affairs",
    "region": "Liyue",
    "thaiName": "งานทั้งหลายของกิลด์นักผจญภัย"
  },
  {
    "name": "The Almighty Arataki Great and Glorious Drumalong Festival (Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "The Answer of the Lotus Leaves and Forest",
    "region": "Other",
    "thaiName": "คำตอบของใบบัวและผืนป่า"
  },
  {
    "name": "The Arrival of a...!",
    "region": "Fontaine",
    "thaiName": "The Arrival of...!"
  },
  {
    "name": "The Art of Cooking",
    "region": "Mondstadt",
    "thaiName": "เคล็ดลับการปรุงอาหาร"
  },
  {
    "name": "The Art of Horticulture",
    "region": "Inazuma",
    "thaiName": "ศาสตร์แห่งการทำสวน"
  },
  {
    "name": "The Art of the Elegant Blade Dance?",
    "region": "Fontaine",
    "thaiName": "ศิลปะระบำดาบอันงดงาม?"
  },
  {
    "name": "The Artist By the Moon's Side (I)",
    "region": "Other",
    "thaiName": "จิตรกรน้อยเคียงจันทร์ I"
  },
  {
    "name": "The Artist By the Moon's Side (II)",
    "region": "Other",
    "thaiName": "จิตรกรน้อยเคียงจันทร์ II"
  },
  {
    "name": "The Artist By the Moon's Side (III)",
    "region": "Other",
    "thaiName": "จิตรกรน้อยเคียงจันทร์ III"
  },
  {
    "name": "The Artist By the Moon's Side (IV)",
    "region": "Other",
    "thaiName": "จิตรกรน้อยเคียงจันทร์ IV"
  },
  {
    "name": "The Attack of the... Purple Tepetlisaurus?",
    "region": "Natlan",
    "thaiName": "Tepetlisaurus สีม่วง โจมตี?"
  },
  {
    "name": "The Bake-Danukis' Gift",
    "region": "Mondstadt",
    "thaiName": "ของขวัญของ Bake-Danuki"
  },
  {
    "name": "The Beetle Battles Will Never End!",
    "region": "Inazuma",
    "thaiName": "การประลองแมลงไม่รู้จบ!"
  },
  {
    "name": "The Bell of Mourning Echoes",
    "region": "Other",
    "thaiName": "เสียงสะท้อนแห่งระฆังไว้อาลัย"
  },
  {
    "name": "The Black Nacre and the All-Devouring Kraken",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Blessings of The Seven",
    "region": "Mondstadt",
    "thaiName": "พรแห่งเทพทั้งเจ็ด"
  },
  {
    "name": "The Bunkoku Enigma",
    "region": "Enkanomiya",
    "thaiName": "ปริศนา Bunkoku"
  },
  {
    "name": "The Call of Mystical Martial Arts",
    "region": "Mondstadt",
    "thaiName": "เสียงเรียกของศาสตร์การต่อสู้ลับ"
  },
  {
    "name": "The Cannon Has Ears",
    "region": "Fontaine",
    "thaiName": "ปืนใหญ่กำลังฟังอยู่"
  },
  {
    "name": "The Cantankerous Fish Have Their Circumstances?",
    "region": "Fontaine",
    "thaiName": "เบื้องหลังของปลาฉุนเฉียว?"
  },
  {
    "name": "The Case of the Crafting Bench",
    "region": "Natlan",
    "thaiName": "คดีโต๊ะประกอบชิ้นงานพิศวง"
  },
  {
    "name": "The Chasm Charters",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "The Chasm's Bounty",
    "region": "Liyue",
    "thaiName": "ของขวัญจาก Chasm"
  },
  {
    "name": "The Chef's Tale",
    "region": "Other",
    "thaiName": "คำบอกกล่าวของเชฟ"
  },
  {
    "name": "The Chefs From a Foreign Land",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "The Chi of Yore",
    "region": "Liyue",
    "thaiName": "Chi แห่งโบราณกาล"
  },
  {
    "name": "The Children of Vimara Village",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Chosen One's Promise (Quest)",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "The Churlish Chase",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Cliffside Weirdo and a Risky Study?",
    "region": "Sumeru",
    "thaiName": "คนประหลาดริมหน้าผาและการวิจัยที่อันตราย?"
  },
  {
    "name": "The Cloud-Padded Path to the Chiwang Repose",
    "region": "Liyue",
    "thaiName": "ที่อยู่ของมณีราค ผ้าทอร่วงโรยสู่เมฆา"
  },
  {
    "name": "The Commission's Commission",
    "region": "Inazuma",
    "thaiName": "คำขอจากสำนัก Yashiro"
  },
  {
    "name": "The Contestant",
    "region": "Sumeru",
    "thaiName": "\"ผู้เข้าชิงคนนั้นเมื่อปีนั้น\""
  },
  {
    "name": "The Culling of the Worms: Body",
    "region": "Sumeru",
    "thaiName": "ภัยจากหนอนทะเลทราย - เนื้อหาหลัก"
  },
  {
    "name": "The Culling of the Worms: Conclusion",
    "region": "Sumeru",
    "thaiName": "ภัยจากหนอนทะเลทราย - ข้อสรุป"
  },
  {
    "name": "The Culling of the Worms: Demonstration",
    "region": "Sumeru",
    "thaiName": "ภัยจากหนอนทะเลทราย - ข้อพิสูจน์"
  },
  {
    "name": "The Culling of the Worms: Ending",
    "region": "Sumeru",
    "thaiName": "ภัยจากหนอนทะเลทราย - บทสรุป"
  },
  {
    "name": "The Culling of the Worms: Gathering",
    "region": "Sumeru",
    "thaiName": "ภัยจากหนอนทะเลทราย - เก็บรวบรวม"
  },
  {
    "name": "The Culling of the Worms: Introduction",
    "region": "Sumeru",
    "thaiName": "ภัยจากหนอนทะเลทราย - บทนำ"
  },
  {
    "name": "The Culling of the Worms: Presentation",
    "region": "Sumeru",
    "thaiName": "ภัยจากหนอนทะเลทราย - กิตติกรรมประกาศ"
  },
  {
    "name": "The Culling of the Worms: Proposal",
    "region": "Sumeru",
    "thaiName": "ภัยจากหนอนทะเลทราย - หัวข้อ"
  },
  {
    "name": "The Culling of the Worms: Testing",
    "region": "Sumeru",
    "thaiName": "ภัยจากหนอนทะเลทราย - การทดลอง"
  },
  {
    "name": "The Dealing Sands",
    "region": "Liyue",
    "thaiName": "ทรายแห่งพันธสัญญา"
  },
  {
    "name": "The Discarded Insignia",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Disturbance Caused by Theft",
    "region": "Other",
    "thaiName": "ความโกลาหลจากเหตุโจรกรรมสินค้า"
  },
  {
    "name": "The Dust Settles",
    "region": "Other",
    "thaiName": "เมื่อทุกอย่างจบสิ้น"
  },
  {
    "name": "The Emergence of Irate Fish?",
    "region": "Fontaine",
    "thaiName": "มีปลาฉุนเฉียวโผล่มางั้นเหรอ?"
  },
  {
    "name": "The Empty Courtyard",
    "region": "Other",
    "thaiName": "โถงร้างไร้ผู้คน"
  },
  {
    "name": "The End of the Road",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "The Entrance to Tokoyo",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "The Eternal Dream, Ever Lush",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Exile: Blooming",
    "region": "Sumeru",
    "thaiName": "ผู้ถูกเนรเทศ: ผลิดอก"
  },
  {
    "name": "The Exile: Sprouting",
    "region": "Sumeru",
    "thaiName": "ผู้ถูกเนรเทศ: ผลิต้น"
  },
  {
    "name": "The Fallen Falcon",
    "region": "Sumeru",
    "thaiName": "เหยี่ยวนักล่าปีกหัก"
  },
  {
    "name": "The Farmer's Treasure",
    "region": "Inazuma",
    "thaiName": "สมบัติของชาวสวน"
  },
  {
    "name": "The Festering Fang",
    "region": "Dragonspine",
    "thaiName": "คมเขี้ยวแห่ง Festering Desire"
  },
  {
    "name": "The Final Chapter",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Final Judgment",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Final Question",
    "region": "Fontaine",
    "thaiName": "คำถามสุดท้าย"
  },
  {
    "name": "The Final Treasure",
    "region": "Other",
    "thaiName": "สมบัติชิ้นสุดท้าย"
  },
  {
    "name": "The Floral Courtyard: Part I",
    "region": "Inazuma",
    "thaiName": "สวนเงาบุปผา - 1"
  },
  {
    "name": "The Floral Courtyard: Part II",
    "region": "Inazuma",
    "thaiName": "สวนเงาบุปผา - 2"
  },
  {
    "name": "The Floral Courtyard: Part III",
    "region": "Inazuma",
    "thaiName": "สวนเงาบุปผา - 3"
  },
  {
    "name": "The Floral Courtyard: Part IV",
    "region": "Inazuma",
    "thaiName": "สวนเงาบุปผา - 4"
  },
  {
    "name": "The Flowing Primal Flame (Part 1)",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "The Flowing Primal Flame (Part 2)",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "The Flowing Primal Flame (Part 3)",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "The Foolish Fatuus",
    "region": "Sumeru",
    "thaiName": "ป่วนกลุ่ม Fatui"
  },
  {
    "name": "The Forest and the Princess",
    "region": "Other",
    "thaiName": "ผืนป่าและเจ้าหญิง"
  },
  {
    "name": "The Forgotten Lighthouse",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Forsaken Sea of Wisdom",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "The Fountain Flows Again",
    "region": "Fontaine",
    "thaiName": "วันที่น้ำพุกลับมาทำงานอีกครั้ง"
  },
  {
    "name": "The Frozen, Rekindling Land",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "The Gardes' Inventor",
    "region": "Fontaine",
    "thaiName": "นักประดิษฐ์ของกองตำรวจ"
  },
  {
    "name": "The Gift of a Lantern",
    "region": "Liyue",
    "thaiName": "โคมนี้ของใครกัน?"
  },
  {
    "name": "The Gourmet Supremos: Cleanup",
    "region": "Sumeru",
    "thaiName": "ทีมสุดยอดนักชิม - ทิ้งท้าย"
  },
  {
    "name": "The Gourmet Supremos: Of Shrines and Sakura",
    "region": "Inazuma",
    "thaiName": "ทีมสุดยอดนักชิม - ต้นไม้ของศาลเจ้า"
  },
  {
    "name": "The Gourmet Supremos: On the Road",
    "region": "Inazuma",
    "thaiName": "ทีมสุดยอดนักชิม - การตามล่าอาหาร"
  },
  {
    "name": "The Gourmet Supremos: The Deep Divers",
    "region": "Inazuma",
    "thaiName": "ทีมสุดยอดนักชิม - ดำดิ่งลึกลงไป"
  },
  {
    "name": "The Gourmet Supremos: The Importance of Eating Well",
    "region": "Inazuma",
    "thaiName": "ทีมสุดยอดนักชิม - ความสำคัญของการทานให้อิ่ม"
  },
  {
    "name": "The Gourmet Supremos: The Seashore Strider",
    "region": "Inazuma",
    "thaiName": "ทีมสุดยอดนักชิม - ท่องไปตามชายเล"
  },
  {
    "name": "The Great Mage's Journey of Trials",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "The Great Mountain Survey",
    "region": "Dragonspine",
    "thaiName": "การสำรวจภูเขาหิมะสุดยิ่งใหญ่"
  },
  {
    "name": "The Great Mountain Survey II",
    "region": "Dragonspine",
    "thaiName": "การสำรวจภูเขาหิมะอีกครั้ง"
  },
  {
    "name": "The Haunted Pirate Shipwreck",
    "region": "Other",
    "thaiName": "ซากเรือโจรสลัดผีสิง"
  },
  {
    "name": "The Heart of Ouroboros",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "The Heavenly Stone's Debris",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "The Homebound Moon",
    "region": "Other",
    "thaiName": "ดวงจันทร์ที่กลับบ้าน"
  },
  {
    "name": "The Hymn of Tir Yazad (Part 1)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Hymn of Tir Yazad (Part 2)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Illumiscreen: I",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "The Illumiscreen: II",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "The Illumiscreen: III",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "The Illusion's Finishings",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "The Joyous Floating Island",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Last Day of Remuria",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "The Last Night, the First Light",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Last Step of Testing",
    "region": "Other",
    "thaiName": "ขั้นสุดท้ายของการทดลอง"
  },
  {
    "name": "The Last Survivor of Tenochtzitoc",
    "region": "Natlan",
    "thaiName": "ชาว Tenochtzitoc คนสุดท้าย"
  },
  {
    "name": "The Law of Boundaries",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "The Lone Isle Named Night",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "The Lone Phantom Sail",
    "region": "Fontaine",
    "thaiName": "เงาเรือผู้โดดเดี่ยว"
  },
  {
    "name": "The Long-Failed \"Graph Adversarial Technology\"...",
    "region": "Fontaine",
    "thaiName": "\"เทคโนโลยีแบบร่างคู่สี\" ล้มเหลวตั้งแต่แรก..."
  },
  {
    "name": "The Lost Child",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Lost Child's Tale",
    "region": "Other",
    "thaiName": "คำบอกกล่าวของเด็กหลงทาง"
  },
  {
    "name": "The Lost Hilichurl",
    "region": "Mondstadt",
    "thaiName": "Hilichurl ที่หลงหาย"
  },
  {
    "name": "The Lost Palace",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Lotus Leaf and the Champion",
    "region": "Other",
    "thaiName": "ใบบัวและแชมป์"
  },
  {
    "name": "The Man Who Once Lied",
    "region": "Other",
    "thaiName": "ชายผู้เคยโกหก"
  },
  {
    "name": "The Many Matters Learned in One's Travels",
    "region": "Other",
    "thaiName": "ท่องไปในทั่วแดนไกล ฟังเรื่องเล่าในการเดินทาง"
  },
  {
    "name": "The Many Matters of the Moonchase Festival",
    "region": "Liyue",
    "thaiName": "เรื่องต่าง ๆ ของเทศกาล Moonchase"
  },
  {
    "name": "The Millennial Mountains",
    "region": "Liyue",
    "thaiName": "เทือกเขาพันปี"
  },
  {
    "name": "The Mirrors, the Maze, and the Tsar",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Misplaced Photo",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Missing Miner",
    "region": "Liyue",
    "thaiName": "คนงานเหมืองที่หายไป"
  },
  {
    "name": "The Moon Adorning the Night",
    "region": "Other",
    "thaiName": "ดวงจันทร์บนนภาราตรี"
  },
  {
    "name": "The Moon Adorning the Night: The Three Moons",
    "region": "Other",
    "thaiName": "ดวงจันทร์บนท้องฟ้ายามค่ำคืน: จันทราทั้งสาม"
  },
  {
    "name": "The Moon Has Risen",
    "region": "Inazuma",
    "thaiName": "เมื่อดวงจันทร์ทอแสง"
  },
  {
    "name": "The Moon-Bathed Deep (Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "The Moonlit Adeptus's Trail",
    "region": "Liyue",
    "thaiName": "จันทร์ฉายรอยเซียน"
  },
  {
    "name": "The Moonlit Watcher",
    "region": "Other",
    "thaiName": "ผู้พิทักษ์ใต้แสงจันทร์"
  },
  {
    "name": "The Moonlit Watcher (II)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Mystery of Tecoloapan Beach",
    "region": "Natlan",
    "thaiName": "ปริศนาแห่งหาด Tecoloapan"
  },
  {
    "name": "The Narukami Trail",
    "region": "Inazuma",
    "thaiName": "แสวงหา Narukami"
  },
  {
    "name": "The Narzissenkreuz Adventure",
    "region": "Fontaine",
    "thaiName": "\"การผจญภัยแห่ง Narzissenkreuz\""
  },
  {
    "name": "The Ocean Pearl",
    "region": "Liyue",
    "thaiName": "ไข่มุกแห่งท้องทะเล"
  },
  {
    "name": "The Other Side of Isle and Sea",
    "region": "Other",
    "thaiName": "อีกด้านของหมู่เกาะและทะเล"
  },
  {
    "name": "The Other Side of the Sky",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "The Path of Papers",
    "region": "Sumeru",
    "thaiName": "หนทางการร่ำเรียนอันยาวนาน"
  },
  {
    "name": "The Path of the Treasure-Seeker, Part I",
    "region": "Liyue",
    "thaiName": "หนึ่งในเส้นทางของนักล่าสมบัติ"
  },
  {
    "name": "The Path of the Treasure-Seeker... Part II?",
    "region": "Inazuma",
    "thaiName": "วิธีที่สอง... ในเส้นทางของนักล่าสมบัติ"
  },
  {
    "name": "The Peaks and Troughs of Life (Quest)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "The Phaethons' Syrtos",
    "region": "Enkanomiya",
    "thaiName": "ระบำแห่ง Phaethon"
  },
  {
    "name": "The Phantom Toy Master and the Barking Fox",
    "region": "Other",
    "thaiName": "\"ราชาของเล่นมายา\" กับ \"จิ้งจอกน้อยโฮ่โฮ่\""
  },
  {
    "name": "The Power of Research",
    "region": "Other",
    "thaiName": "แรงผลักดันในการวิจัย"
  },
  {
    "name": "The Prey",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "The Price",
    "region": "Sumeru",
    "thaiName": "ราคาที่ต้องจ่าย"
  },
  {
    "name": "The Raven's Legacy",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Recollector's Path (Part 1)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Recollector's Path (Part 2)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Recollector's Path (Part 3)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Recollector's Path (Part 4)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Recollector's Path (Part 5)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Recollector's Path (Part 6)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Red and the Black",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "The Replacement's Secret",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "The Rhythm that Leads to the Gloomy Path",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Rhythm that Nurtures the Sprout",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Rhythm that Reveals the Beastly Trail",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Ritou Road",
    "region": "Inazuma",
    "thaiName": "เส้นทางแห่ง Ritou"
  },
  {
    "name": "The Road Ahead",
    "region": "Natlan",
    "thaiName": "หนทางเบื้องหน้า"
  },
  {
    "name": "The Roaming Abode",
    "region": "Liyue",
    "thaiName": "หมู่บ้านท่องเซียน"
  },
  {
    "name": "The Saga of Mr. Forgetful",
    "region": "Inazuma",
    "thaiName": "ตำนานของนายขี้ลืม"
  },
  {
    "name": "The Sea of Fog and the Rite of the Trees",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "The Secret of Al-Ahmar",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Secret of Nantianmen",
    "region": "Liyue",
    "thaiName": "ปริศนาแห่ง Nantianmen"
  },
  {
    "name": "The Shadow Over Petrichor",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "The Shoemaker's Children Go Barefoot",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Shooting Range and the Deep Shadow Realm",
    "region": "Other",
    "thaiName": "สนามยิงปืนและมิติเงาส่วนลึก"
  },
  {
    "name": "The Siege of Qingce",
    "region": "Liyue",
    "thaiName": "Qingce ที่ถูกล้อม"
  },
  {
    "name": "The Sight of the Divine Emissary",
    "region": "Inazuma",
    "thaiName": "ท่วงท่าของราชทูตแห่งเทพ"
  },
  {
    "name": "The Silent Theater",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Soft Song She Sang",
    "region": "Other",
    "thaiName": "บทเพลงอันอ่อนโยนที่ขับขานแด่เธอ"
  },
  {
    "name": "The Sound of Discord",
    "region": "Mondstadt",
    "thaiName": "ความไม่สอดคล้องในเทศกาล"
  },
  {
    "name": "The Special Support Squad's Tale",
    "region": "Other",
    "thaiName": "คำบอกกล่าวของทีมสนับสนุน"
  },
  {
    "name": "The Splendorous Sky That Day",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Spurious Cannot Be Made Genuine",
    "region": "Other",
    "thaiName": "ของปลอมก็คือของปลอม"
  },
  {
    "name": "The Still Water's Flow",
    "region": "Inazuma",
    "thaiName": "น้ำนิ่งที่ไหลริน"
  },
  {
    "name": "The Stone Beasts, Like Ghouls Seated",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Story of \"the Princess\" and \"the Adventure Team\"",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "The Stress of Changing Careers",
    "region": "Other",
    "thaiName": "การเปลี่ยนอาชีพน่ากังวลเสมอ"
  },
  {
    "name": "The Subterranean Trials of Drake and Serpent",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "The Sun Rises Once More",
    "region": "Other",
    "thaiName": "ดวงอาทิตย์ยังคงขึ้นเหมือนเช่นเคย"
  },
  {
    "name": "The Sun's Gilded Apple",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Sun-Wheel and Mt. Kanna",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "The Sunken Ship Sailed Past, Ringing No Bells",
    "region": "Other",
    "thaiName": "เรืออับปางแล่นผ่าน ไร้ซึ่งเสียงลั่นระฆัง"
  },
  {
    "name": "The Suspicious Hermit",
    "region": "Other",
    "thaiName": "ผู้สันโดษที่ดูไม่ชอบมาพากล"
  },
  {
    "name": "The Tale of the Gate Stone",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Tale-Telling Heart",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Tales Behind the Fan",
    "region": "Liyue",
    "thaiName": "พัดงามใต้ฤดูกาล"
  },
  {
    "name": "The Temple Where Sand Flows Like Tears",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Tester Becomes the Tested",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Three Great Martial Trials",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "The Three Primary Colors of the Solar Corona",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "The Tides Echo Themselves",
    "region": "Other",
    "thaiName": "กระแสคลื่นจากเสียงสะท้อน"
  },
  {
    "name": "The Toy War: An Armistice",
    "region": "Fontaine",
    "thaiName": "สงครามของเล่น: สงบศึก!"
  },
  {
    "name": "The Toy War: Heating Up",
    "region": "Fontaine",
    "thaiName": "สงครามของเล่น: จุดเดือด!"
  },
  {
    "name": "The Toy War: Shots Fired",
    "region": "Fontaine",
    "thaiName": "สงครามของเล่น: เริ่มเกม!"
  },
  {
    "name": "The Trail of Drake and Serpent",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "The Tree who Stands Alone",
    "region": "Liyue",
    "thaiName": "ต้นไม้อันโดดเดี่ยว ไร้ซึ่งป่าให้พักพิง..."
  },
  {
    "name": "The Unappreciated Carving",
    "region": "Sumeru",
    "thaiName": "ไม้แกะสลักที่โดนรังเกียจ"
  },
  {
    "name": "The Unbowed One's Gratitude",
    "region": "Other",
    "thaiName": "คำขอบคุณจากผู้ที่ยังไม่ปิดม่าน"
  },
  {
    "name": "The Underwater Salvage Commandments",
    "region": "Fontaine",
    "thaiName": "การเก็บกู้ในแหล่งน้ำก็มีหลักการด้วยเหรอ?"
  },
  {
    "name": "The Unmanned Vessel (I)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Unmanned Vessel (II)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Unmanned Vessel (III)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "The Vanishing Bounty Target",
    "region": "Other",
    "thaiName": "เป้าหมายค่าหัวที่หายสาบสูญ"
  },
  {
    "name": "The Vishaps Lie Dormant, but the Enigma Lingers Still",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "The Way Into the Mountain",
    "region": "Natlan",
    "thaiName": "เส้นทางสู่บรรพต"
  },
  {
    "name": "The Way of Mutual Aid and Advancement?",
    "region": "Other",
    "thaiName": "เคล็ดลับการเกื้อกูลและ \"การเสริมแกร่ง\"?"
  },
  {
    "name": "The Way of Survival",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "The Wind Has Ceased",
    "region": "Mondstadt",
    "thaiName": "สายลมหยุดแล้ว"
  },
  {
    "name": "The Winding Homeward Way",
    "region": "Other",
    "thaiName": "ทางกลับบ้านที่คดเคี้ยว"
  },
  {
    "name": "The World of Aranara",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "The Yaksha's Wish",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Theater Mechanicus (Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Theater Mechanicus/2021-02-10/Story",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Theater Mechanicus: Stage of Brilliance (Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "There Will Come Soft Rains",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Thesis Proposal: He Shall not Pass",
    "region": "Sumeru",
    "thaiName": "โครงร่างวิทยานิพนธ์ที่ไม่สิ้นสุด"
  },
  {
    "name": "They Who Abandoned the Past",
    "region": "Other",
    "thaiName": "ผู้ที่ทิ้งอดีตไว้เบื้องหลัง"
  },
  {
    "name": "They Who Hear the Sea",
    "region": "Other",
    "thaiName": "ผู้ฟังเสียงแห่งท้องทะเล"
  },
  {
    "name": "Thief-Catcher",
    "region": "Mondstadt",
    "thaiName": "จับโจร"
  },
  {
    "name": "Those Hard-to-Reach Places",
    "region": "Mondstadt",
    "thaiName": "การทำความสะอาดบนที่สูง"
  },
  {
    "name": "Those Strange and Intriguing Questions",
    "region": "Sumeru",
    "thaiName": "คำถามสุดแปลกและชวนให้ขบคิดเหล่านั้น"
  },
  {
    "name": "Thoughts Carried On the Wind",
    "region": "Mondstadt",
    "thaiName": "สายลมแห่งห้วงคำนึง"
  },
  {
    "name": "Threefold Expectations",
    "region": "Liyue",
    "thaiName": "คาดการณ์สามครั้ง"
  },
  {
    "name": "Through the Gates of Ivory",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Through the Looking Glass",
    "region": "Fontaine",
    "thaiName": "ข้ามผ่านกระจกปริศนา"
  },
  {
    "name": "Thus Was the Work Done in Vain",
    "region": "Other",
    "thaiName": "ทุ่มเทเพื่อสิ่งนี้อย่างไร้ประโยชน์"
  },
  {
    "name": "Tianqiu Treasure Trail",
    "region": "Liyue",
    "thaiName": "เบาะแสสมบัติแห่ง Tianqiu"
  },
  {
    "name": "Time and Wind",
    "region": "Mondstadt",
    "thaiName": "กาลเวลาและสายลม"
  },
  {
    "name": "Time Waits For No Man",
    "region": "Mondstadt",
    "thaiName": "เวลาไม่หวนกลับ"
  },
  {
    "name": "Timmie's Wish",
    "region": "Mondstadt",
    "thaiName": "ความปรารถนาของ Timmie"
  },
  {
    "name": "To Each Their Duty",
    "region": "Mondstadt",
    "thaiName": "หน้าที่ของทุกคน"
  },
  {
    "name": "To Gaze Upon the Dreaming Pale Crown",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "To Rest in a Forgotten Field",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "To the Lighthouse",
    "region": "Other",
    "thaiName": "ไปที่ประภาคาร"
  },
  {
    "name": "To the Night, What is the Night's",
    "region": "Natlan",
    "thaiName": "ให้ราตรีหวนคืนสู่ราตรี"
  },
  {
    "name": "To the Sky-Road",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "To the Winds of Freedom",
    "region": "Mondstadt",
    "thaiName": "ถึงสายลมอันแสนอิสระ"
  },
  {
    "name": "To Thee My Tender Grief Confide",
    "region": "Mondstadt",
    "thaiName": "แด่จิตใจที่อ่อนโยน"
  },
  {
    "name": "To Turn Each Sin Against the Sinner",
    "region": "Other",
    "thaiName": "ลงทัณฑ์คนบาปด้วยความผิด"
  },
  {
    "name": "To Wish Upon a Star",
    "region": "Natlan",
    "thaiName": "อธิษฐานกับดวงดาว"
  },
  {
    "name": "Tonight's Hilichurl Menu",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Tons of Tons of Furious Fish...",
    "region": "Fontaine",
    "thaiName": "มีปลาฉุนเฉียวอยู่ไม่น้อยเลย..."
  },
  {
    "name": "Toward Red-Hot Adventure!",
    "region": "Natlan",
    "thaiName": "มุ่งสู่การผจญภัยอันร้อนแรงไปด้วยกัน!"
  },
  {
    "name": "Towards the Lighthouse, or Far Away",
    "region": "Other",
    "thaiName": "มุ่งสู่ประภาคารหรือแดนไกล"
  },
  {
    "name": "Tower of Inversion",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Tracer No Tracing",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Traces of Chroma",
    "region": "Natlan",
    "thaiName": "ร่องรอยกระแสสีสัน"
  },
  {
    "name": "Tracking the Thunder",
    "region": "Inazuma",
    "thaiName": "ตามรอยสายฟ้า"
  },
  {
    "name": "Trails in Tianqiu",
    "region": "Liyue",
    "thaiName": "เส้นทางของเซียนในหุบเขา Tianqiu Valley"
  },
  {
    "name": "Transplanted From \"Yesterday\" to \"Tomorrow\"",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Travelers' Tales: Destiny Drawn",
    "region": "Inazuma",
    "thaiName": "เรื่องราวการเดินทาง: ภาพวาดแห่งโชคชะตา"
  },
  {
    "name": "Travels Are Fuller With Friends",
    "region": "Natlan",
    "thaiName": "เพื่อนพ้องร่วมเดินทาง"
  },
  {
    "name": "Treacherous Light of the Depths",
    "region": "Fontaine",
    "thaiName": "แสงผิดแผกแห่งห้วงลึก"
  },
  {
    "name": "Treasure Clue: Broken Isle",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Treasure Clue: Minacious Isle",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Treasure Clue: Pudding Isle",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Treasure Clue: Twinning Isle",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Treasure Lost, Treasure Found (Part 1)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Treasure Lost, Treasure Found (Part 2)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Treasure of Wisdom: A New Plan",
    "region": "Sumeru",
    "thaiName": "สมบัติแห่งปัญญา: แผนการใหม่"
  },
  {
    "name": "Treasure Voyage",
    "region": "Other",
    "thaiName": "แล่นเรือตามหาสิ่งของ"
  },
  {
    "name": "Treasures and Collectors",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Treasures Beneath the Vines",
    "region": "Sumeru",
    "thaiName": "สมบัติใต้เถาวัลย์"
  },
  {
    "name": "Treasures Under the Sea",
    "region": "Other",
    "thaiName": "สมบัติในน้ำ"
  },
  {
    "name": "Treasures Under the Sea: Epilogue",
    "region": "Fontaine",
    "thaiName": "สมบัติในน้ำ - ตอนจบ"
  },
  {
    "name": "Treatment on the Island",
    "region": "Inazuma",
    "thaiName": "การรักษาบนเกาะ"
  },
  {
    "name": "Trees and Dreams",
    "region": "Sumeru",
    "thaiName": "ห้วงความฝันและต้นไม้"
  },
  {
    "name": "Trembling Earth",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Tricolor File",
    "region": "Enkanomiya",
    "thaiName": "เอกสารสามสี"
  },
  {
    "name": "Trouble With Letters",
    "region": "Liyue",
    "thaiName": "จดหมายที่ส่งยาก"
  },
  {
    "name": "Truly Mouthwatering!",
    "region": "Fontaine",
    "thaiName": "อดน้ำลายสอไปด้วยไม่ได้เลย!"
  },
  {
    "name": "Tumult Subduer",
    "region": "Liyue",
    "thaiName": "ขจัดอันตราย"
  },
  {
    "name": "Tuned to the World's Sounds (Quest)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Twisted Extension",
    "region": "Natlan",
    "thaiName": "การขยายตัวที่บิดเบี้ยว"
  },
  {
    "name": "Unbegun, Unending Story",
    "region": "Mondstadt",
    "thaiName": "เรื่องราวที่ไร้จุดเริ่มต้นและจุดจบ"
  },
  {
    "name": "Underwater Nocturne",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Underwater Restoration in Progress...",
    "region": "Fontaine",
    "thaiName": "กำลังฟื้นฟูแหล่งน้ำ..."
  },
  {
    "name": "Undetected Infiltration",
    "region": "Liyue",
    "thaiName": "แฝงตัวเข้าค่ายศัตรูไม่มีใครรู้"
  },
  {
    "name": "Unexpected Battle",
    "region": "Inazuma",
    "thaiName": "การต่อสู้ที่คาดไม่ถึง"
  },
  {
    "name": "Unexpected Commission",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Unexpected Commission: Epilogue",
    "region": "Mondstadt",
    "thaiName": "คำขอที่คาดไม่ถึง - บทส่งท้าย"
  },
  {
    "name": "Unfinished Story",
    "region": "Fontaine",
    "thaiName": "เรื่องราวที่ยังไม่จบสิ้น"
  },
  {
    "name": "Unlimited Opportunity",
    "region": "Liyue",
    "thaiName": "โอกาสธุรกิจที่ไร้ขีดจำกัด"
  },
  {
    "name": "Unofficial Chronicle of the Desert Pavilion",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Unscrupulous Dealings",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Untainted Autumn Frost",
    "region": "Mondstadt",
    "thaiName": "น้ำค้างที่ไร้ฝุ่นในฤดูใบไม้ร่วง"
  },
  {
    "name": "Until Vana is Healed",
    "region": "Sumeru",
    "thaiName": "จนกระทั่ง \"Vana\" หายป่วย"
  },
  {
    "name": "Unwritten Rules",
    "region": "Other",
    "thaiName": "กฎเกณฑ์ในเงามืด"
  },
  {
    "name": "Upon a Flowery Field of Grass",
    "region": "Fontaine",
    "thaiName": "บนทุ่งหญ้าที่เต็มไปด้วยดอกไม้บาน"
  },
  {
    "name": "Upstream Variations (Quest)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Us... In the Aquarium?",
    "region": "Fontaine",
    "thaiName": "พวกเรา... ที่อยู่ในตู้ปลา?"
  },
  {
    "name": "Vagrant Havoc",
    "region": "Inazuma",
    "thaiName": "ความโกลาหลที่เกิดจาก Vagrant"
  },
  {
    "name": "Vagrants and Scamps",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Valor's Afterglow (Quest)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Valor's Afterglow: Return by Sundown",
    "region": "Liyue",
    "thaiName": "รัศมีอันหาญกล้า - ตะวันลับกลับคืน"
  },
  {
    "name": "Valor's Afterglow: The Faint Light Remembered",
    "region": "Liyue",
    "thaiName": "รัศมีอันหาญกล้า - จดจำไว้ในแสงเลือนราง"
  },
  {
    "name": "Variations on Belyi and Chernyi (Quest)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Variations on Belyi and Chernyi: Schedule",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Varuna Gatha (Quest)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Vaulting the Wall of Morning Mist",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Venture Towards the Moonlight",
    "region": "Other",
    "thaiName": "การผจญภัยสู่แสงจันทร์"
  },
  {
    "name": "Verses and Vistas of Lantern Rite (Part I)",
    "region": "Liyue",
    "thaiName": "บทกวีและภาพวาดของ Lantern Rite (I)"
  },
  {
    "name": "Verses and Vistas of Lantern Rite (Part II)",
    "region": "Liyue",
    "thaiName": "บทกวีและภาพวาดของ Lantern Rite (II)"
  },
  {
    "name": "Versus Mishima Michitoshi",
    "region": "Inazuma",
    "thaiName": "การประลองกับ Mishima Michitoshi"
  },
  {
    "name": "Versus Ookubo Sanzaemon",
    "region": "Inazuma",
    "thaiName": "การประลองกับ Ookubo Sanzaemon"
  },
  {
    "name": "Versus Taroumaru",
    "region": "Inazuma",
    "thaiName": "การประลองกับ Taroumaru"
  },
  {
    "name": "Versus Yasuhiko Tarou",
    "region": "Inazuma",
    "thaiName": "การประลองกับ Yasuhiko Tarou"
  },
  {
    "name": "Vibro-Crystal Projections",
    "region": "Other",
    "thaiName": "การฉายแสงของผลึกสั่นสะเทือน"
  },
  {
    "name": "Vibro-Crystal Reharmonization",
    "region": "Liyue",
    "thaiName": "การส่องแสงอีกครั้งของผลึกสั่นสะเทือน"
  },
  {
    "name": "Vigilance at Sea",
    "region": "Liyue",
    "thaiName": "ลาดตระเวนทางทะเล"
  },
  {
    "name": "Vigorous Brushstrokes",
    "region": "Liyue",
    "thaiName": "พู่กันพลิ้วสะบัดพลัง"
  },
  {
    "name": "Villains",
    "region": "Fontaine",
    "thaiName": "เหล่าวายร้าย"
  },
  {
    "name": "Vimana Agama: Dev Delver Chapter",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Vimana Agama: First Chapter",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Vimana Agama: Jazari's Chapter",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Vimana Agama: Royinjan's Chapter",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Vishaps and Where to Find Them (Quest)",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Visitors From the Stars (Part 1)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Visitors From the Stars (Part 2)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Voyage Prep",
    "region": "Inazuma",
    "thaiName": "เตรียมตัวล่องเรือทางไกล"
  },
  {
    "name": "Waiting For Seeds to Sprout",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Waking from the Great Dream (Quest)",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Wangshu Once Again",
    "region": "Liyue",
    "thaiName": "Wangshu อีกครั้ง"
  },
  {
    "name": "Warden of Konda",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Warrior's Spirit (Event Quest)",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Wayfarer's Whispers",
    "region": "Natlan",
    "thaiName": "เสียงกระซิบของนักเดินทาง"
  },
  {
    "name": "We Meet Again, Cannon...",
    "region": "Fontaine",
    "thaiName": "ปืนใหญ่ เจอปืนใหญ่อีกแล้ว"
  },
  {
    "name": "We'll Dance Together Again!",
    "region": "Natlan",
    "thaiName": "ไว้คราวหน้ามาเต้นกันใหม่!"
  },
  {
    "name": "Weighty Wings",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Welcome to the Adventurers' Guild",
    "region": "Mondstadt",
    "thaiName": "ยินดีต้อนรับสู่กิลด์นักผจญภัย"
  },
  {
    "name": "Well Done! What's the Next Big Plan?",
    "region": "Fontaine",
    "thaiName": "เสร็จสมบูรณ์แล้ว! แผนการใหญ่ต่อไปล่ะ?"
  },
  {
    "name": "Were It So Easy",
    "region": "Fontaine",
    "thaiName": "เรื่องดีมักได้มาไม่ง่าย"
  },
  {
    "name": "When Scholar and Legends Meet",
    "region": "Liyue",
    "thaiName": "ความรู้กับตำนาน"
  },
  {
    "name": "When the Curtains Close",
    "region": "Sumeru",
    "thaiName": "เมื่อม่านปิดฉากลง"
  },
  {
    "name": "When the Trail Goes Cold",
    "region": "Mondstadt",
    "thaiName": "การสำรวจอันหนาวเหน็บ"
  },
  {
    "name": "When They Take Off Their Armor",
    "region": "Mondstadt",
    "thaiName": "เมื่อถอดเกราะออก"
  },
  {
    "name": "When War Songs Rise",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Where Are the Fierce Creatures?",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Where Does the Moon Hide?",
    "region": "Other",
    "thaiName": "ดวงจันทร์ซ่อนอยู่ที่ไหน"
  },
  {
    "name": "Where His Life Lies",
    "region": "Fontaine",
    "thaiName": "ชีวิตของเขาอยู่ที่นั่น"
  },
  {
    "name": "Where Once Force Was Reversed",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Where Once There Was a Calculation Array",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Where Once There Were Arms Aplenty",
    "region": "Natlan",
    "thaiName": ""
  },
  {
    "name": "Where the Dandelions Find Rest",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Where the Future Stars Fall",
    "region": "Sumeru",
    "thaiName": "สถานที่ซึ่งดวงดาวแห่งอนาคตร่วงหล่น"
  },
  {
    "name": "Where the Light Wanes",
    "region": "Liyue",
    "thaiName": "ณ จุดที่แสงไฟสลัว"
  },
  {
    "name": "Where the Treasure Dwells",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Where the White Dove Rests",
    "region": "Other",
    "thaiName": "ที่พักพิงของพิราบขาว"
  },
  {
    "name": "Wherefore Did the Spiritstone Descend?",
    "region": "Liyue",
    "thaiName": ""
  },
  {
    "name": "Whisper Beneath the Waves",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Whispers by the Hearth",
    "region": "Fontaine",
    "thaiName": "เสียงกระซิบข้างเตาผิง"
  },
  {
    "name": "Whither Shall a Member of a \"Secret Organization\" Go?",
    "region": "Natlan",
    "thaiName": "สมาชิกของ \"องค์กรลับ\" จะไปที่แห่งไหน"
  },
  {
    "name": "Who Wields the Wild Wind?",
    "region": "Other",
    "thaiName": "ผู้บันดาลให้เกิดพายุ"
  },
  {
    "name": "Why Did a Member of a \"Secret Organization\" Come Here?",
    "region": "Natlan",
    "thaiName": "ทำไมสมาชิกของ \"องค์กรลับ\" ถึงมาที่นี่ล่ะ?"
  },
  {
    "name": "Will of Stone",
    "region": "Liyue",
    "thaiName": "ความหมายของหิน"
  },
  {
    "name": "Wilting Weeping Willow",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Wind-Stirred Ripples",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Windblume Research Report",
    "region": "Mondstadt",
    "thaiName": "รายงานการวิจัยเทศกาล Windblume"
  },
  {
    "name": "Windblumes and Snowflakes",
    "region": "Mondstadt",
    "thaiName": "ดอกไม้สายลมกับเกล็ดหิมะ"
  },
  {
    "name": "Windbrew",
    "region": "Mondstadt",
    "thaiName": "เครื่องดื่มที่มีรสชาติของ \"สายลม\""
  },
  {
    "name": "Windrise, Windfall",
    "region": "Mondstadt",
    "thaiName": "ลมเพลมพัด"
  },
  {
    "name": "Winds Beneath the Tower of Silence",
    "region": "Mondstadt",
    "thaiName": "ทิศทางลมใต้ประภาคารอันเงียบสงัด"
  },
  {
    "name": "Windswept Domain",
    "region": "Liyue",
    "thaiName": "สายลมแห่งดันเจี้ยน"
  },
  {
    "name": "Windtrace (Quest)",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Windtrace (Quest) 2022-12-23",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Wisdom Has Built Her House, She Has Hewn Out Her Seven Pillars",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Wisdom of Ancient Civilizations",
    "region": "Mondstadt",
    "thaiName": "ภูมิปัญญาของอารยธรรมโบราณ"
  },
  {
    "name": "Wish-Fulfilling Treasure Hunt",
    "region": "Fontaine",
    "thaiName": "การเดินทางล่าสมบัติดั่งปรารถนา"
  },
  {
    "name": "Wishes Contended, Fortunes Won",
    "region": "Liyue",
    "thaiName": "ศึกสีสันสมปรารถนา"
  },
  {
    "name": "Wishing Wonderful Wishes",
    "region": "Liyue",
    "thaiName": "อธิษฐานเพื่อสิริมงคล"
  },
  {
    "name": "Witch's Chatter",
    "region": "Other",
    "thaiName": "เรื่องเล่าจากแม่มด"
  },
  {
    "name": "Witch's Homework: The Role of a Guide...?",
    "region": "Mondstadt",
    "thaiName": "แบบฝึกหัดของแม่มด: หน้าที่ของผู้นำทาง...?"
  },
  {
    "name": "Witch's Lodge (Quest)",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Witch's Revelation: Duty's Instruction",
    "region": "Fontaine",
    "thaiName": "คำพยากรณ์ของแม่มด - ว่าด้วยเรื่องหน้าที่"
  },
  {
    "name": "Witch's Revelation: Great Youkai's Instruction",
    "region": "Fontaine",
    "thaiName": "คำพยากรณ์ของแม่มด - ว่าด้วยเรื่องโยไกผู้ยิ่งใหญ่"
  },
  {
    "name": "Witch's Revelation: Instruction Beyond Dreams",
    "region": "Fontaine",
    "thaiName": "คำพยากรณ์ของแม่มด - ว่าด้วยเรื่องนอกความฝัน"
  },
  {
    "name": "Witch's Revelation: Instruction of Curious Form",
    "region": "Fontaine",
    "thaiName": "คำพยากรณ์ของแม่มด - ว่าด้วยเรื่องร่างกายพิเศษ"
  },
  {
    "name": "Witch's Revelation: Special Blend's Instruction",
    "region": "Fontaine",
    "thaiName": "คำพยากรณ์ของแม่มด - ว่าด้วยเรื่องเครื่องดื่มสูตรพิเศษ"
  },
  {
    "name": "Witch's Revelation: Voyaging Instruction",
    "region": "Fontaine",
    "thaiName": "คำพยากรณ์ของแม่มด - ว่าด้วยเรื่องโพ้นทะเล"
  },
  {
    "name": "Witch's Revelation: Warden's Instruction",
    "region": "Fontaine",
    "thaiName": "คำพยากรณ์ของแม่มด - ว่าด้วยเรื่องเฝ้ารักษาการณ์"
  },
  {
    "name": "With Flying (Graffiti) Colors",
    "region": "Natlan",
    "thaiName": "แต่งแต้มสีสันโบยบิน"
  },
  {
    "name": "With Lupical...",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Within the Depths of Erinnyes",
    "region": "Fontaine",
    "thaiName": ""
  },
  {
    "name": "Within the Sequence",
    "region": "Other",
    "thaiName": ""
  },
  {
    "name": "Woodland Encounter (Quest)",
    "region": "Sumeru",
    "thaiName": ""
  },
  {
    "name": "Words Worth Their Weight in Mora",
    "region": "Liyue",
    "thaiName": "หนังสือมีค่ากว่าทอง"
  },
  {
    "name": "World Level Ascension",
    "region": "Mondstadt",
    "thaiName": ""
  },
  {
    "name": "Yachimatahiko's Trial",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "Yachimatahime's Trial",
    "region": "Enkanomiya",
    "thaiName": ""
  },
  {
    "name": "Yae Publishing House's Invitation",
    "region": "Inazuma",
    "thaiName": "คำเชิญของสำนักพิมพ์ Yae"
  },
  {
    "name": "Yanxiao's Crazy Kitchen",
    "region": "Liyue",
    "thaiName": "ห้องครัวอันแสนวุ่นวายของ Yanxiao"
  },
  {
    "name": "Yata Kouki's Order of Ore",
    "region": "Inazuma",
    "thaiName": "การเสาะหา White Iron Chunk ของ Yata Kouki"
  },
  {
    "name": "Yavanani's Apples",
    "region": "Sumeru",
    "thaiName": "การสรรหา Apple ของ Yavanani"
  },
  {
    "name": "Yesteryear's Lanterns and the Guhua of Today",
    "region": "Liyue",
    "thaiName": "โคม Xiao เมื่อปีที่แล้ว กับ Guhua ในวันนี้"
  },
  {
    "name": "Yi Zhu's Snack",
    "region": "Liyue",
    "thaiName": "การสรรหาของหวานของ Yi Zhu"
  },
  {
    "name": "Yougou Cleansing",
    "region": "Inazuma",
    "thaiName": ""
  },
  {
    "name": "Zero Hour Invokation",
    "region": "Mondstadt",
    "thaiName": "ช่วงเวลาแห่งการเริ่มต้น"
  }
];
