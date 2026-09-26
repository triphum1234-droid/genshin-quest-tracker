# Genshin Impact Quest Tracker

เว็บแอปสำหรับติดตามความคืบหน้าเควสต์ใน Genshin Impact ค้นหาและกรองรายการตามประเภท ภูมิภาค สถานะ และ Primogem พร้อมดูเควสต์ที่ต้องทำก่อนและลำดับของเควสต์ในชุด

**[เปิดเว็บแอป](https://triphum1234-droid.github.io/genshin-quest-tracker/index.html)** · เวอร์ชันปัจจุบันในแอป: **v1.5.0**

## ฟังก์ชัน

- **ติดตามความคืบหน้า** — ตั้งสถานะของแต่ละเควสต์เป็นยังไม่เริ่ม, กำลังทำ หรือเสร็จแล้ว พร้อมดูจำนวนและเปอร์เซ็นต์ความคืบหน้า
- **เลือกประเภทเควสต์** — Archon, Story, Hangout, World, Commission, Anecdote, Event, Random Event, Hidden Exploration Objective และ Lore โดยเมนูประเภทแสดงไอคอนของแต่ละประเภท
- **กรองภูมิภาคและรางวัล** — เลือกภูมิภาค กรองตามสถานะ หรือดูเฉพาะเควสต์ที่มี/ไม่มี Primogem
- **ค้นหาเควสต์** — ค้นหาด้วยชื่อภาษาอังกฤษหรือชื่อไทย และเปิดหน้าเควสต์บน Genshin Impact Wiki จากการ์ด
- **ดูเควสต์ที่ต้องทำก่อน** — การ์ดแสดงเควสต์ก่อนหน้า เควสต์ต้นทางของชุด และชื่อชุดที่เกี่ยวข้อง กดชื่อเควสต์ก่อนหน้าหรือเควสต์ต้นทางเพื่อไปยังรายการนั้นได้
- **กรองเควสต์ต้นทาง** — แสดงเฉพาะเควสต์เริ่มต้นของชุดที่ไม่มีเควสต์ก่อนหน้า หรือกรองดูเควสต์ในชุดต่อเนื่องและเควสต์เดี่ยว
- **เรียงและจัดกลุ่ม** — เรียงตามชื่อ ภูมิภาค สถานะ หรือ Primogem และจัดกลุ่มตามชุดเควสต์โดยคงลำดับของชุด
- **ดู Primogem โดยประมาณ** — แสดงรางวัลที่ยังไม่ได้รับตามรายการที่เลือก ทั้งนี้เป็นค่าประมาณจากข้อมูลรางวัลของเควสต์
- **สลับชื่อภาษาไทย** — แสดงชื่อเควสต์ภาษาไทยเมื่อมีข้อมูล
- **สำรองและกู้คืนข้อมูล** — ส่งออกความคืบหน้าเป็นไฟล์ JSON แล้วนำเข้าในภายหลัง
- **อัปเดต World Quest** — ตรวจสอบเควสต์ใหม่จาก Genshin Impact Wiki เพิ่มรายการในเบราว์เซอร์ที่ใช้อยู่ หรือดาวน์โหลด `quest-data.js` เพื่อนำไปปรับปรุงชุดข้อมูลของโปรเจกต์
- **ดูประวัติเวอร์ชัน** — เปิดบันทึกการเปลี่ยนแปลงจากปุ่มประวัติเวอร์ชันในหน้าเว็บ
- **สนับสนุนผู้พัฒนา** — ดูตัวเลือกสนับสนุนผ่าน QR ในหน้าต่างโดเนท (ไม่บังคับ)

## วิธีใช้งาน

1. เปิด [เว็บแอป](https://triphum1234-droid.github.io/genshin-quest-tracker/index.html) หรือเปิด `index.html` ในเบราว์เซอร์สมัยใหม่
2. เลือกประเภทเควสต์และภูมิภาคจากตัวกรอง
3. ใช้ช่องค้นหา ตัวกรองสถานะ รางวัล Primogem เควสต์ต้นทาง หรือเควสต์ต่อเนื่อง เพื่อหารายการที่ต้องการ
4. เปลี่ยนสถานะจากปุ่มบนการ์ดเควสต์ และกดชื่อเควสต์ก่อนหน้า/ต้นทางเพื่อเปิดรายการที่เกี่ยวข้อง
5. ใช้ปุ่มส่งออกเพื่อดาวน์โหลดไฟล์สำรอง หรือปุ่มนำเข้าเพื่อกู้คืนข้อมูล

หากเปิดจากไฟล์ในเครื่อง ให้วาง `index.html` และ `quest-data.js` ไว้ในโฟลเดอร์เดียวกัน การตรวจหาเควสต์จาก Wiki ต้องเชื่อมต่ออินเทอร์เน็ต

## การบันทึกข้อมูล

สถานะเควสต์ ตัวเลือกชื่อภาษาไทย และเควสต์ที่เพิ่มจากหน้าต่างอัปเดตจะบันทึกไว้ใน `localStorage` ของเบราว์เซอร์ ข้อมูลจะไม่ซิงก์ข้ามเครื่องหรือเบราว์เซอร์ และการเปิดเว็บกับเปิดไฟล์ในเครื่องอาจใช้พื้นที่จัดเก็บคนละชุด ดาวน์โหลดไฟล์สำรองหากต้องการย้ายหรือเก็บข้อมูลไว้

เควสต์ที่เพิ่มจาก Wiki จะอยู่ในเบราว์เซอร์ที่ใช้อยู่ หากต้องการรวมรายการใหม่ไว้ในชุดข้อมูลของโปรเจกต์ ให้ดาวน์โหลด `quest-data.js` จากหน้าต่างอัปเดต แล้วแทนที่ไฟล์เดิมก่อนเผยแพร่

## แหล่งข้อมูลและเครดิต

รายการเควสต์อ้างอิงจาก [Genshin Impact Wiki](https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki) และ [GenshinDB](https://genshindb.org/). Genshin Impact และทรัพย์สินที่เกี่ยวข้องเป็นของ HoYoverse โปรเจกต์นี้เป็นแฟนโปรเจกต์ที่ไม่เป็นทางการและไม่มีส่วนเกี่ยวข้องกับ HoYoverse

## ไฟล์ในโปรเจกต์

| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | หน้าเว็บ รูปแบบหน้าจอ และการทำงานของตัวติดตาม |
| `quest-data.js` | รายการเควสต์เริ่มต้นที่แสดงในแอป |
| `README.md` | คู่มือการใช้งานและรายละเอียดฟังก์ชัน |

โปรเจกต์นี้เป็นเว็บแอปแบบ static ไม่ต้องติดตั้งแพ็กเกจหรือสั่ง build

## English

Genshin Impact Quest Tracker is a static browser app for tracking quest progress, browsing quest chains, and estimating unclaimed Primogems.

- Track each quest as **Not started**, **In progress**, or **Completed**, with progress counts and a percentage.
- Browse Archon, Story, Hangout, World, Commission, Anecdote, Event, Random Event, Hidden Exploration Objective, and Lore quests.
- Filter by region, status, Primogem rewards, quest chains, single quests, or root quests with no prerequisite quest.
- Search English or Thai names. Quest cards show prerequisites, the first quest in a chain, and the series name when available; click a linked prerequisite or root quest to jump to it.
- Sort by name, region, status, or Primogem rewards, and group quest series in chain order.
- Toggle official Thai quest names when available and open quest pages on the Genshin Impact Wiki.
- Export progress to a JSON backup and import it later.
- Check the Wiki for new World Quests. Added quests are saved in the current browser; export `quest-data.js` from the update dialog to incorporate them into the project catalog.
- Open the in-app version history to review release notes.
- Optionally open the donation dialog to support the developer.

Open the [web app](https://triphum1234-droid.github.io/genshin-quest-tracker/index.html), or place `index.html` and `quest-data.js` in the same folder and open the HTML file in a modern browser. Wiki updates require an internet connection.

Progress, preferences, and browser-added quests are stored in the browser's `localStorage` and are not synced across browsers or devices. Use the JSON backup to move or restore your data. Quest data references the [Genshin Impact Wiki](https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki) and [GenshinDB](https://genshindb.org/). Genshin Impact and related assets belong to HoYoverse; this is an unofficial fan project and is not affiliated with HoYoverse. No package installation or build step is required.
