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

เพื่อรักษาคุณภาพและความปลอดภัยสูงสุด โปรเจกต์นี้มีกฎเหล็กที่บังคับใช้ใน GitHub ดังนี้:

### กฎการสร้างสาขา (Branching Strategy)
*   ห้ามสร้างหรือ Push โค้ดตรงเข้าสาขา `main` โดยเด็ดขาด ❌
*   ให้สร้างสาขาแยก (Feature Branch) ทุกครั้ง โดยตั้งชื่อตามรูปแบบ:
    *   `feature/ชื่อฟีเจอร์` (เช่น `feature/about-section`)
    *   `bugfix/ชื่อบั๊ก` (เช่น `bugfix/rfq-form-validation`)

### ขั้นตอนการรวมโค้ดเข้า Main (PR Process & Merge Conditions)
1.  **เปิด Pull Request (PR)** จากสาขาของคุณมายัง `main`
2.  **CI Pipeline ทำงาน**: GitHub Actions จะทำรันคำสั่งตรวจสอบโค้ดอัตโนมัติ (`Lint` ➡️ `Test` ➡️ `Build`)
3.  **ต้องการผู้ตรวจทานอย่างน้อย 2 คน (Required 2 Approvals)**: ต้องมีสมาชิกในทีมอย่างน้อย 2 คนเข้ามากดอนุมัติ (Approve) หลังตรวจสอบความถูกต้อง
4.  **Resolve Conversations**: คอมเมนต์/การสนทนาทั้งหมดใน PR จะต้องได้รับการแก้ไขและกดทำเครื่องหมายว่าเสร็จสิ้น (Resolved) แล้วเท่านั้น จึงจะอนุมัติให้กด Merge ได้

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
