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
