# คู่มือนักพัฒนา (Developer Guide) - CHR Rolling Landing Page

ยินดีต้อนรับสู่คู่มือการพัฒนาสำหรับโปรเจกต์ **CHR Rolling Landing Page** เอกสารนี้สรุปขั้นตอน วิธีการทำระบบ เงื่อนไขข้อบังคับ และการทดสอบต่าง ๆ สำหรับทีมพัฒนา 5 คน

---

## 💻 1. ระบบและเทคโนโลยีที่ใช้ (Tech Stack & Systems)

*   **Framework**: [Next.js (v16)](https://nextjs.org/)
*   **Styling**: [Tailwind CSS (v4)](https://tailwindcss.com/)
*   **Package Manager**: [pnpm](https://pnpm.io/)
*   **Unit Testing**: [Vitest](https://vitest.dev/)
*   **CI/CD Pipeline**: GitHub Actions (ตรวจสอบ Code ทุกครั้งที่เปิด PR)
*   **Deployment**: Vercel (โปรดักชัน / Preview Environments)
*   **Error Tracking**: [Sentry](https://sentry.io/) (ตรวจจับข้อผิดพลาดการใช้งานแบบเรียลไทม์)

---

## 🚀 2. การเริ่มพัฒนาโปรเจกต์ (Local Development Setup)

1.  **ติดตั้ง dependencies**:
    ```bash
    pnpm install
    ```
2.  **รันโหมดพัฒนา (Development Server)**:
    ```bash
    pnpm dev
    ```
    เข้าใช้งานผ่านเบราว์เซอร์ที่: [http://localhost:3000](http://localhost:3000)

3.  **ตั้งค่า Environment Variables (ถ้าต้องการเปิดรัน Sentry ท้องถิ่น)**:
    สร้างไฟล์ `.env.local` ใน Root Directory และกำหนดค่า DSN:
    ```env
    NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
    ```

4.  **ตรวจสอบสไตล์โค้ด (Linting)**:
    ```bash
    pnpm lint
    ```

---

## 🛡️ 3. กฎเกณฑ์และเงื่อนไขการทำงาน (Git Workflow & Branching Rules)

เพื่อความคล่องตัวในการทำงานแบบ Agile รวดเร็วและปลอดภัย โปรเจกต์นี้มีกฎการจัดการ Branch และ Vercel ดังนี้:

### โครงสร้าง Branch (Branching Strategy)
*   🟢 **`main`**: กิ่งสำหรับ Production (ผู้ใช้งานจริง) โค้ดบนนี้ต้องเสถียรที่สุด 
    *   *เงื่อนไข:* ห้าม Push โค้ดเข้าตรงๆ (Protected) โค้ดจะเข้ามาได้ผ่านการสร้าง Pull Request (PR) และต้องรันเทสต์ผ่าน (CI) เท่านั้น
*   🟡 **`dev`**: กิ่งส่วนกลางสำหรับ Integration เป็นจุดรวมโค้ดให้ทุกคนมาทดสอบร่วมกัน 
    *   *เงื่อนไข:* สามารถ Push ได้อย่างอิสระ ไม่มีบล็อก เพื่อความรวดเร็วในการพัฒนา
*   🔵 **`dev-[name]`** (เช่น `dev-booth`, `dev-ryu`, `dev-naja`, `dev-got`): กิ่งส่วนตัวของสมาชิกทีมแต่ละคน 
    *   *เงื่อนไข:* ใช้สำหรับสร้างงานฟีเจอร์ย่อยของตัวเองและเพื่อให้ Vercel สร้าง Preview Link ให้เฉพาะบุคคล

### การตั้งค่า Vercel Deployment (Ignored Build Step)
เพื่อเป็นการประหยัด Build Minutes ของ Vercel โปรเจกต์นี้จะ **Build แค่เฉพาะกิ่งที่ระบุไว้เท่านั้น** (ข้ามกิ่งจำพวก `feature/...` ไปเลย) 
โดยใช้สคริปต์ `vercel-ignore-build.sh` ซึ่งไปตั้งค่าที่เว็บ Vercel -> Settings -> Git -> Ignored Build Step แล้วใส่คำสั่ง:
```bash
bash vercel-ignore-build.sh
```

---

## 🧪 4. การทดสอบระบบ (Testing Guide)

เราใช้ **Vitest** เป็นหน่วยทดสอบหลัก โดยระบบเทสจะทำงานทั้งในฝั่งนักพัฒนาและรันอัตโนมัติบน GitHub Actions CI

### การเขียนเทส
*   สร้างไฟล์ทดสอบไว้ใกล้กับโค้ดจริง โดยตั้งชื่อฟอร์แมต `[ชื่อไฟล์].test.ts` หรือ `[ชื่อไฟล์].test.tsx`
*   ตัวอย่างเช่น: `lib/utils.ts` ➡️ `lib/utils.test.ts`

### คำสั่งรันการทดสอบ
*   **รันเทสในโหมดพัฒนา (Watch Mode)**:
    ```bash
    pnpm test
    ```
*   **รันเทสรอบเดียวจบ (สำหรับ CI / ตรวจสอบก่อนส่งงาน)**:
    ```bash
    pnpm test:run
    ```
