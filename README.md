# Genshin Impact Quest Tracker

เว็บแอปสำหรับติดตามเควสต์ใน Genshin Impact พร้อมดูความคืบหน้าและ Primogem ที่ยังเก็บได้

**[เปิดเว็บแอป](https://triphum1234-droid.github.io/genshin-quest-tracker/index.html)**

## ฟังก์ชัน

- **ติดตามสถานะเควสต์** — ตั้งแต่ละรายการเป็นเสร็จแล้ว, กำลังทำ หรือยังไม่เริ่ม กดสถานะเดิมซ้ำเพื่อกลับเป็นยังไม่เริ่ม
- **เลือกประเภทและภูมิภาค** — ดูทั้งหมด หรือกรองตาม Archon, Story, World, Commission และ Event Quest รวมถึงภูมิภาคต่าง ๆ ในเกม
- **ค้นหาและกรองรายการ** — ค้นหาด้วยชื่อภาษาอังกฤษหรือชื่อไทย กรองตามสถานะหรือรายการที่มี/ไม่มีรางวัล Primogem และล้างตัวกรองได้
- **เรียงลำดับ** — ตามชื่อ, ภูมิภาค, สถานะ หรือจำนวน Primogem
- **ดูสถิติและรางวัล** — แสดงจำนวนเควสต์แต่ละสถานะ แถบความคืบหน้า และประมาณการ Primogem ที่ยังไม่ได้รับในประเภทเควสต์ที่เลือก
- **แสดงชื่อไทย** — สลับแสดงชื่อเควสต์ภาษาไทยทางการเมื่อมีข้อมูล
- **เปิดข้อมูลเควสต์** — ลิงก์จากแต่ละรายการไปยังหน้าเควสต์บน Genshin Impact Wiki
- **สำรองและกู้คืน** — ดาวน์โหลดไฟล์ JSON เพื่อเก็บความคืบหน้าและเควสต์ที่เพิ่มจาก Wiki แล้วนำไฟล์นั้นกลับเข้ามาใช้ภายหลัง
- **ตรวจหา World Quest ใหม่** — ตรวจสอบรายการกับ Genshin Impact Wiki แล้วเลือกเพิ่มไว้ในเบราว์เซอร์ หรือดาวน์โหลด `quest-data.js` ที่รวมรายการใหม่

## วิธีใช้งาน

1. เปิด [เว็บแอป](https://triphum1234-droid.github.io/genshin-quest-tracker/index.html) หรือเปิด `index.html` ในเบราว์เซอร์สมัยใหม่
2. เลือกประเภทเควสต์และภูมิภาคจากแถบด้านซ้าย
3. ใช้ช่องค้นหา ตัวกรองสถานะ/Primogem และตัวเลือกเรียงลำดับเพื่อหารายการที่ต้องการ
4. กดปุ่ม ✅, ⏳ หรือ 📋 บนการ์ดเควสต์เพื่อเปลี่ยนสถานะ
5. กดปุ่ม 📤 เพื่อดาวน์โหลดข้อมูลสำรอง และปุ่ม 📥 เพื่อนำเข้าไฟล์สำรอง

หากเปิดจากไฟล์ในเครื่อง ให้วาง `index.html` กับ `quest-data.js` ไว้ในโฟลเดอร์เดียวกัน การตรวจหาเควสต์จาก Wiki ต้องเชื่อมต่ออินเทอร์เน็ต

## การบันทึกข้อมูล

ความคืบหน้า ชื่อภาษาไทยที่เลือก และเควสต์ใหม่ที่เพิ่มไว้จะเก็บใน `localStorage` ของเบราว์เซอร์ ข้อมูลนี้ **ไม่ซิงก์ข้ามเครื่องหรือเบราว์เซอร์** และการเปิดผ่านเว็บกับเปิดไฟล์ในเครื่องอาจเป็นพื้นที่จัดเก็บคนละชุด ควรดาวน์โหลดไฟล์สำรองไว้หากต้องการย้ายเครื่องหรือป้องกันข้อมูลหาย

การเพิ่มเควสต์ด้วยปุ่มอัปเดตจะเพิ่มรายการไว้ในเบราว์เซอร์ที่ใช้อยู่เท่านั้น หากต้องการรวมรายการใหม่ไว้ในชุดข้อมูลของโปรเจกต์ ให้ดาวน์โหลด `quest-data.js` จากหน้าต่างอัปเดต แล้วแทนที่ไฟล์เดิมก่อนเผยแพร่เวอร์ชันใหม่

## ไฟล์ในโปรเจกต์

| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | หน้าเว็บ รูปแบบหน้าจอ และการทำงานของตัวติดตาม |
| `quest-data.js` | รายการเควสต์เริ่มต้นที่แสดงในแอป |
| `README.md` | คู่มือการใช้งานและรายละเอียดฟังก์ชัน |

โปรเจกต์นี้เป็นเว็บแอปแบบ static ไม่ต้องติดตั้งแพ็กเกจหรือสั่ง build

## English

Genshin Impact Quest Tracker is a static browser app for tracking quest progress and estimated unclaimed Primogems.

- Track quests as **Done**, **In progress**, or **Not started**.
- Browse by quest type and region; search English or Thai names; filter by status or Primogem reward.
- Sort by name, region, status, or Primogem amount.
- View status counts, a progress bar, and estimated unclaimed Primogems for the selected quest type.
- Toggle official Thai quest names when available and open each quest's Wiki page.
- Export a JSON backup and import it later to restore progress and extra quests.
- Check the Genshin Impact Wiki for new World Quests. New entries added from the update dialog are saved only in the current browser; use its `quest-data.js` export to incorporate them into the project catalog.

Open the [web app](https://triphum1234-droid.github.io/genshin-quest-tracker/index.html), or place `index.html` and `quest-data.js` in the same folder and open the HTML file in a modern browser. Wiki updates require an internet connection.

Progress and browser-added quests are stored in the browser's `localStorage`; they are not synced across browsers or devices. Use the JSON backup to move or restore your data. No package installation or build step is required.
