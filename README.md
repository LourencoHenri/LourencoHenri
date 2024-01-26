<div
  style={{
    color: '#fff',
    height: 'calc(100vh - var(--header-height))', // You may need to adjust the header height
    minHeight: '96px', // min-h-96
    width: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <div
    style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <h1 style={{ fontSize: '1.5rem', '@media (min-width: 768px)': { fontSize: '2rem' } }}>
      {t('home.hello')}
    </h1>
    <h1 style={{ fontSize: '5rem', '@media (min-width: 768px)': { fontSize: '7rem' }, fontWeight: '500' }}>
      {t('home.name')}
    </h1>
    <h1 style={{ fontSize: '1.5rem', '@media (min-width: 768px)': { fontSize: '2rem' }, fontWeight: '500', marginTop: '0.5rem', '@media (min-width: 768px)': { marginTop: '1rem' } }}>
      {t('home.role')}
    </h1>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
      <a
        href="https://github.com/LourencoHenri"
        target="_blank"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          padding: '0.25rem',
          borderRadius: '0.25rem',
          cursor: 'pointer',
          transition: 'color 0.3s',
          ':hover': { color: '#00f' }
        }}
      >
        <SiGithub size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/henrique-lourenco/"
        target="_blank"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          padding: '0.25rem',
          borderRadius: '0.25rem',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'color 0.3s',
          ':hover': { color: '#00f' }
        }}
      >
        <SiLinkedin size={28} />
      </a>
    </div>
  </div>
</div>;
