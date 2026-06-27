'use client';

export default function SentryExamplePage() {
  const triggerError = () => {
    throw new Error('Sentry Test Error from Landing Page Verification');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#38bdf8' }}>
        Sentry Next.js SDK Test Page
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#94a3b8', maxWidth: '500px', marginBottom: '2rem' }}>
        คลิกปุ่มด้านล่างเพื่อทำการจำลองสร้างข้อผิดพลาด (Throw Error) และตรวจสอบว่าระบบจับข้อผิดพลาดส่งไปยังแดชบอร์ด Sentry สำเร็จหรือไม่
      </p>
      
      <button
        onClick={triggerError}
        style={{
          padding: '0.875rem 2rem',
          backgroundColor: '#ef4444',
          color: '#ffffff',
          border: 'none',
          borderRadius: '0.375rem',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
      >
        Trigger Test Error 💥
      </button>

      <div style={{ marginTop: '3rem', fontSize: '0.875rem', color: '#64748b' }}>
        <p>เมื่อกดแล้ว ให้กลับไปตรวจสอบที่หน้าเว็บแดชบอร์ด Sentry ในส่วน Issues</p>
      </div>
    </div>
  );
}
