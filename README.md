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
      Hello, my name is
    </h1>
    <h1 style={{ fontSize: '5rem', '@media (min-width: 768px)': { fontSize: '7rem' }, fontWeight: '500' }}>
      Henrique
    </h1>
    <h1 style={{ fontSize: '1.5rem', '@media (min-width: 768px)': { fontSize: '2rem' }, fontWeight: '500', marginTop: '0.5rem', '@media (min-width: 768px)': { marginTop: '1rem' } }}>
      I'm Software Developer
    </h1>
    
  </div>
</div>
