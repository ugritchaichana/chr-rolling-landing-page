# CHR Rolling Landing Page

หน้าแรก (Landing Page) สำหรับแนะนำการให้บริการและนวัตกรรมเครื่องจักรของ **CHR Rolling** เว็บแอปพลิเคชันนี้พัฒนาด้วย Next.js และ Tailwind CSS มีโครงสร้างที่ทันสมัยและตอบสนองได้ทุกขนาดหน้าจอ (Responsive Design)

---

## 🎨 Design System (Base Styles)

โปรเจกต์นี้ใช้การตั้งค่า Design System พื้นฐานผ่าน Tailwind CSS v4 (`app/globals.css`) ดังนี้:

### 🖋️ Typography (แบบอักษร)
- **Primary / Sans**: `IBM Plex Sans Thai` (สำหรับหัวข้อและเนื้อหา)
- **Monospace**: `JetBrains Mono` (สำหรับตัวเลข ป้ายกำกับ)

### 🎨 Color Palette (สีหลัก)
- **Background**: `#F9FAFB` (Primary), `#FFFFFF` (Surface)
- **Text**: `#1F2937` (Primary), `#6B7280` (Secondary)
- **Brand Colors**:
  - 🔵 **Accent Blue**: `#1F456E` (Light: `#2A5A8F`)
  - 🔴 **Accent Red**: `#B82025` (Dark: `#9A1A1E`)
- **Industrial**: `#1E293B` (Slate), `#F97316` (Safety Orange), `#64748B` (Concrete)

### ✨ UI Styles & Components
- **Buttons**: ใช้คลาส `.btn-primary` (สีแดง) และ `.btn-outline` (ขอบน้ำเงิน)
- **Base UI**: รองรับโครงสร้างจาก `shadcn/ui`

---

## 📖 แหล่งข้อมูลสำหรับนักพัฒนา (Developer Resources)

หากต้องการมีส่วนร่วมในการพัฒนาโปรเจกต์นี้กรุณาอ่านและปฏิบัติตามคู่มือการพัฒนาด้านล่าง:

👉 **[คู่มือการพัฒนาระบบ (DEVELOPMENT.md)](./DEVELOPMENT.md)**

---

## 🛠️ วิธีการรันโปรเจกต์แบบด่วน (Quick Start)

1. **ติดตั้ง dependencies**:
   ```bash
   pnpm install
   ```
2. **รันโหมดพัฒนา (Development Server)**:
   ```bash
   pnpm dev
   ```
3. **เปิดบราวเซอร์ที่**: [http://localhost:3000](http://localhost:3000)

---

## 🔍 การทดสอบโค้ดและทดสอบระบบ

* **ตรวจไวยากรณ์ (Linting)**: `pnpm lint`
* **รันเทสทั้งหมด (Testing)**: `pnpm test:run`
* **จำลองการ Build เพื่อ Deploy**: `pnpm build`

---

## 🌐 ระบบแปลภาษา (i18n)

โปรเจกต์นี้รองรับ 2 ภาษา: **ไทย (th)** และ **อังกฤษ (en)** โดยใช้ URL path-based routing เพื่อรองรับ SEO

### 📁 โครงสร้างไฟล์

```
lib/i18n/
├── locales/
│   ├── th.json              # ข้อความภาษาไทย (ภาษาหลัก)
│   └── en.json              # ข้อความภาษาอังกฤษ
├── language-context.tsx      # React Context + Provider + Hook
└── index.ts                  # Re-export ทั้งหมด
```

### ✏️ วิธีเพิ่ม/แก้ไขข้อความแปล

**1. เปิดไฟล์ JSON ทั้ง 2 ภาษา:**

- `lib/i18n/locales/th.json` (ภาษาไทย)
- `lib/i18n/locales/en.json` (ภาษาอังกฤษ)

**2. เพิ่ม key ใหม่ในทั้ง 2 ไฟล์ให้ตรงกัน:**

```jsonc
// th.json
{
  "newSection": {
    "heading": "หัวข้อใหม่",
    "description": "คำอธิบายภาษาไทย"
  }
}

// en.json
{
  "newSection": {
    "heading": "New Section",
    "description": "English description"
  }
}
```

> ⚠️ **สำคัญ:** key ใน `th.json` และ `en.json` ต้องตรงกันทุกตัว ไม่อย่างนั้น TypeScript จะฟ้อง Error

**3. เรียกใช้ในคอมโพเนนต์:**

```tsx
"use client";

import { useLanguage } from "@/lib/i18n";

export function NewSection() {
  const { t } = useLanguage();

  return (
    <section>
      <h2>{t.newSection.heading}</h2>
      <p>{t.newSection.description}</p>
    </section>
  );
}
```

### 🔑 สิ่งที่ควรรู้

| หัวข้อ | รายละเอียด |
|:---|:---|
| **ภาษาเริ่มต้น** | ไทย (`th`) — ผู้ใช้ที่เข้าเว็บครั้งแรกจะเห็นภาษาไทย |
| **URL Routing** | `/th/about` = ภาษาไทย, `/en/about` = ภาษาอังกฤษ |
| **Type Safety** | Type ถูก infer จาก `en.json` อัตโนมัติ — เพิ่ม key ใน JSON แล้ว autocomplete ใช้ได้ทันที ไม่ต้องเขียน Type เอง |
| **ไม่ต้องแก้ไฟล์ TypeScript** | เวลาเพิ่มข้อความใหม่ แก้แค่ไฟล์ `.json` ทั้ง 2 ไฟล์เท่านั้น |
| **Cookie** | ระบบจำภาษาที่ผู้ใช้เลือกไว้ในคุกกี้ `chp-locale` (อายุ 1 ปี) |

### 🔄 วิธีเปลี่ยนภาษาใน Component

```tsx
const { locale, setLocale } = useLanguage();

// สลับภาษา
setLocale(locale === "th" ? "en" : "th");
```

เมื่อเรียก `setLocale` ระบบจะ:
1. อัปเดตคุกกี้ `chp-locale`
2. เปลี่ยน `<html lang="...">` อัตโนมัติ
3. Redirect ไปยัง URL path ของภาษาใหม่ (เช่น `/th/about` → `/en/about`)

